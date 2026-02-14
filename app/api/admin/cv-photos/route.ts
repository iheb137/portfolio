import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'cv-photos.json');

async function ensureDataFile() {
  try {
    await fs.stat(DATA_FILE);
  } catch {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify({ cv: null, profilePhoto: null, photos: [] }, null, 2));
  }
}

async function getCVPhotos() {
  await ensureDataFile();
  const data = await fs.readFile(DATA_FILE, 'utf-8');
  return JSON.parse(data);
}

async function saveCVPhotos(data: any) {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}

// GET CV et photos
export async function GET() {
  try {
    const data = await getCVPhotos();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la lecture des données' },
      { status: 500 }
    );
  }
}

// POST mettre à jour CV ou photos
export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    if (!token) {
      return NextResponse.json(
        { error: 'Non authentifié' },
        { status: 401 }
      );
    }

    const { type, url, name } = await request.json();
    const data = await getCVPhotos();
    
    if (type === 'cv') {
      data.cv = { url, name, updatedAt: new Date().toISOString() };
    } else if (type === 'profilePhoto') {
      data.profilePhoto = { url, updatedAt: new Date().toISOString() };
    } else if (type === 'portfolioPhoto') {
      data.photos.push({ 
        id: Date.now().toString(),
        url, 
        name,
        createdAt: new Date().toISOString() 
      });
    }

    await saveCVPhotos(data);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour' },
      { status: 500 }
    );
  }
}

// DELETE supprimer une photo
export async function DELETE(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    if (!token) {
      return NextResponse.json(
        { error: 'Non authentifié' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const photoId = searchParams.get('photoId');
    const type = searchParams.get('type');

    let data = await getCVPhotos();

    if (type === 'profilePhoto') {
      data.profilePhoto = null;
    } else if (type === 'cv') {
      data.cv = null;
    } else if (type === 'portfolioPhoto' && photoId) {
      data.photos = data.photos.filter((p: any) => p.id !== photoId);
    }

    await saveCVPhotos(data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la suppression' },
      { status: 500 }
    );
  }
}
