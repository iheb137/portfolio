# Guide de Déploiement - Portfolio Admin

## Mise à jour de sécurité

Ce projet inclut les correctifs pour les vulnérabilités React Server Components:
- CVE-2025-55184 (DoS)
- CVE-2025-55183 (Source code disclosure)
- CVE-2025-55182 (React2Shell - Next.js)
- CVE-2025-66478

Next.js 15.2.4 est utilisé (version sécurisée).

## Installation

```bash
pnpm install
```

## Système d'Administration

### Accès à l'admin

1. Naviguez vers `/admin/login`
2. Identifiants par défaut:
   - Utilisateur: `admin`
   - Mot de passe: `admin123`

### Fonctionnalités Admin

- ✅ Gérer les projets (ajouter, modifier, supprimer)
- ✅ Gérer les événements (ajouter, modifier, supprimer)
- ✅ Gérer le CV (upload/supprimer)
- ✅ Gérer les photos de profil
- ✅ Gérer les photos du portfolio

### Configuration de Sécurité

**IMPORTANT**: En production, modifiez les identifiants dans `.env.local`:

```env
ADMIN_USER=votreNomUtilisateur
ADMIN_PASSWORD=votreMotDePasseSecurise
```

Pour une meilleure sécurité, utilisez JWT ou une solution d'authentification professionnelle.

## Structure des données

Les données sont stockées dans le dossier `/data`:
- `projects.json` - Projets du portfolio
- `events.json` - Événements
- `cv-photos.json` - CV et photos

## Développement local

```bash
# Démarrer le serveur de développement
pnpm dev

# Construire pour la production
pnpm build

# Lancer la production
pnpm start
```

## Déploiement sur Vercel

1. Push le code sur GitHub
2. Connectez votre repo à Vercel
3. Ajoutez les variables d'environnement:
   - `ADMIN_USER`
   - `ADMIN_PASSWORD`
4. Déployez

## Points de sécurité

1. ⚠️ Changez les identifiants par défaut
2. 🔒 Utilisez HTTPS en production
3. 🔐 Envisagez JWT pour l'authentification
4. 📦 Validez les uploads de fichiers
5. 🛡️ Mettez à jour Next.js régulièrement

## Commandes utiles

```bash
# Mettre à jour les dépendances
pnpm up

# Linter
pnpm lint

# Build
pnpm build
```

## Aide

Pour plus d'informations, consultez:
- [Documentation Next.js](https://nextjs.org)
- [Vercel Security Guidelines](https://vercel.com/security)
