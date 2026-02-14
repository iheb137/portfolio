## 🎯 ACCÉDER À L'ADMIN - GUIDE COMPLET

Vous avez deux façons d'accéder à l'admin:

---

## 1️⃣ EN LOCAL (Développement)

### Serveur local:
```
http://localhost:3000/admin/login
```

**Identifiants:**
- Login: `lahlouba`
- Mot de passe: `chafroud#1999`

### Comment relancer le serveur local?

Ouvrez PowerShell et exécutez:

```powershell
# Corriger le PATH
$env:PATH = "C:\Program Files\nodejs;C:\Windows\System32;C:\Windows;C:\Program Files\Git\cmd"

# Aller au dossier
cd C:\portfolio_app

# Lancer le serveur
npm run dev
```

Puis allez à: `http://localhost:3000/admin/login`

---

## 2️⃣ SUR VERCEL (Production - 24/7)

### ⚠️ ÉTAPE IMPORTANTE - Configurer les variables d'environnement

**Avant de pouvoir accéder à l'admin sur Vercel, vous DEVEZ ajouter les variables d'environnement:**

#### Instructions Vercel:

1. **Allez sur**: https://vercel.com/dashboard

2. **Sélectionnez le projet** "portfolio" (iheb137/portfolio)

3. **Cliquez sur Settings** (en haut du projet)

4. **Allez à Environment Variables** (dans la barre de gauche)

5. **Ajoutez ADMIN_USER:**
   - Name: `ADMIN_USER`
   - Value: `lahlouba`
   - Check Production ✓
   - Check Preview ✓
   - Check Development ✓
   - Cliquez **Add**

6. **Ajoutez ADMIN_PASSWORD:**
   - Name: `ADMIN_PASSWORD`
   - Value: `chafroud#1999`
   - Check Production ✓
   - Check Preview ✓
   - Check Development ✓
   - Cliquez **Add**

7. **Redéployez:**
   - Allez dans **Deployments**
   - Trouvez le dernier déploiement
   - Cliquez sur le **...** (trois points)
   - Cliquez **Redeploy**
   - Attendez ~2-3 minutes

### Après configuration, accédez à:

```
https://votre-lien-vercel.vercel.app/admin/login
```

**Exemple:**
```
https://portfolio-iheb137.vercel.app/admin/login
```

**Identifiants:**
- Login: `lahlouba`
- Mot de passe: `chafroud#1999`

---

## 📋 CHECKLIST

✅ Code poussé sur GitHub: `bdeb558`
✅ Identifiants locaux configurés: **lahlouba / chafroud#1999**
❓ **À FAIRE:** Ajouter les variables sur Vercel Dashboard
❓ **À FAIRE:** Redéployer sur Vercel

---

## 🆘 Ça ne fonctionne pas?

1. **Vérifiez que Vercel a redeployé** (regardez dans Deployments)
2. **Attendez 5 minutes** (le redéploiement peut prendre du temps)
3. **Videz le cache du navigateur** (Ctrl+Shift+Delete)
4. **Utilisez incognito/privé** pour tester avec un cache vide

---

## 📝 Une fois connecté à l'admin, vous pouvez:

✓ Ajouter/Supprimer des projets
✓ Ajouter/Supprimer des événements
✓ Uploader votre CV
✓ Uploader votre photo de profil
✓ Uploader des photos du portfolio

Les données sont sauvegardées dans `/data/` et persistent!

---

**Vous êtes prêt! 🚀**
