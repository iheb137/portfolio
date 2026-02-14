import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'events.json');

async function ensureDataFile() {
  try {
    await fs.stat(DATA_FILE);
  } catch {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2));
  }
}

async function getEvents() {
  await ensureDataFile();
  const data = await fs.readFile(DATA_FILE, 'utf-8');
  return JSON.parse(data);
}

async function saveEvents(events: any[]) {
  await fs.writeFile(DATA_FILE, JSON.stringify(events, null, 2));
}

// GET tous les événements
export async function GET() {
  try {
    const events = await getEvents();
    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la lecture des événements' },
      { status: 500 }
    );
  }
}

// POST créer un nouvel événement
export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    if (!token) {
      return NextResponse.json(
        { error: 'Non authentifié' },
        { status: 401 }
      );
    }

    const newEvent = await request.json();
    const events = await getEvents();
    
    const event = {
      id: Date.now().toString(),
      ...newEvent,
      createdAt: new Date().toISOString(),
    };

    events.push(event);
    await saveEvents(events);

    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la création de l\'événement' },
      { status: 500 }
    );
  }
}

// PUT mettre à jour un événement
export async function PUT(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    if (!token) {
      return NextResponse.json(
        { error: 'Non authentifié' },
        { status: 401 }
      );
    }

    const { id, ...updates } = await request.json();
    let events = await getEvents();
    
    events = events.map(e => 
      e.id === id ? { ...e, ...updates, updatedAt: new Date().toISOString() } : e
    );

    await saveEvents(events);
    const updated = events.find(e => e.id === id);

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour de l\'événement' },
      { status: 500 }
    );
  }
}

// DELETE supprimer un événement
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
    const id = searchParams.get('id');

    let events = await getEvents();
    events = events.filter(e => e.id !== id);

    await saveEvents(events);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la suppression de l\'événement' },
      { status: 500 }
    );
  }
}
