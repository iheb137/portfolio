import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'projects.json');

async function ensureDataFile() {
  try {
    await fs.stat(DATA_FILE);
  } catch {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2));
  }
}

async function getProjects() {
  await ensureDataFile();
  const data = await fs.readFile(DATA_FILE, 'utf-8');
  return JSON.parse(data);
}

async function saveProjects(projects: any[]) {
  await fs.writeFile(DATA_FILE, JSON.stringify(projects, null, 2));
}

// GET tous les projets
export async function GET() {
  try {
    const projects = await getProjects();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la lecture des projets' },
      { status: 500 }
    );
  }
}

// POST créer un nouveau projet
export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    if (!token) {
      return NextResponse.json(
        { error: 'Non authentifié' },
        { status: 401 }
      );
    }

    const newProject = await request.json();
    const projects = await getProjects();
    
    const project = {
      id: Date.now().toString(),
      ...newProject,
      createdAt: new Date().toISOString(),
    };

    projects.push(project);
    await saveProjects(projects);

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la création du projet' },
      { status: 500 }
    );
  }
}

// PUT mettre à jour un projet
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
    let projects = await getProjects();
    
    projects = projects.map(p => 
      p.id === id ? { ...p, ...updates, updatedAt: new Date().toISOString() } : p
    );

    await saveProjects(projects);
    const updated = projects.find(p => p.id === id);

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour du projet' },
      { status: 500 }
    );
  }
}

// DELETE supprimer un projet
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

    let projects = await getProjects();
    projects = projects.filter(p => p.id !== id);

    await saveProjects(projects);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la suppression du projet' },
      { status: 500 }
    );
  }
}
