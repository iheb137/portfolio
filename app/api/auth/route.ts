import { NextRequest, NextResponse } from 'next/server';

// Configuration simple - remplacer par une vraie authentification en production
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
const ADMIN_USER = process.env.ADMIN_USER || 'admin';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
      // Créer un token simple (utiliser JWT en production)
      const token = Buffer.from(`${username}:${Date.now()}`).toString('base64');
      
      return NextResponse.json(
        { success: true, token },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Identifiants invalides' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

// Vérifier le token
export async function GET(request: NextRequest) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    );
  }

  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const [username] = decoded.split(':');
    
    if (username === ADMIN_USER) {
      return NextResponse.json({ authenticated: true, username }, { status: 200 });
    }
  } catch (error) {
    // Token invalide
  }

  return NextResponse.json(
    { authenticated: false },
    { status: 401 }
  );
}
