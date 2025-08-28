# 🚀 Guide de déploiement GitHub Pages

## Configuration prête !

Votre site RenoStart Conseil est maintenant configuré pour être déployé automatiquement sur GitHub Pages.

## 📋 Étapes de déploiement

### 1. Créer le repository GitHub

1. Allez sur [GitHub.com](https://github.com)
2. Cliquez sur **"New repository"**
3. Nommez-le : `RenoStart`
4. Laissez-le **public**
5. **Ne cochez PAS** "Add a README file"
6. Cliquez sur **"Create repository"**

### 2. Pousser le code

Dans votre terminal, exécutez ces commandes :

```bash
# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit - Site RenoStart Conseil"

# Ajouter le remote GitHub
git remote add origin https://github.com/djems/RenoStart.git

# Pousser sur la branche main
git branch -M main
git push -u origin main
```

### 3. Activer GitHub Pages

1. Dans votre repository GitHub, allez dans **Settings**
2. Dans le menu de gauche, cliquez sur **Pages**
3. Dans **Source**, sélectionnez **"GitHub Actions"**
4. Cliquez sur **"Configure"** si demandé

### 4. Le déploiement automatique

✅ **C'est tout !** Le déploiement se fait automatiquement :

- À chaque `git push` sur la branche `main`
- GitHub Actions construit votre site
- Le site est déployé sur `https://djems.github.io/RenoStart`

## 🔍 Vérification

Après quelques minutes :
1. Allez sur `https://djems.github.io/RenoStart`
2. Vérifiez que le site s'affiche correctement
3. Testez la navigation entre les pages

## 📁 Structure du déploiement

```
RenoStart/
├── .github/workflows/deploy.yml  # Workflow de déploiement
├── next.config.mjs              # Configuration Next.js
├── package.json                 # Scripts et dépendances
└── src/                         # Code source
```

## 🛠️ Modifications futures

Pour mettre à jour le site :
```bash
# Modifier vos fichiers
# Puis pousser les changements
git add .
git commit -m "Mise à jour du site"
git push origin main
```

Le site sera automatiquement mis à jour en quelques minutes !

## ❓ Problèmes courants

### Le site ne s'affiche pas
- Vérifiez que GitHub Pages est activé dans les Settings
- Attendez quelques minutes après le push
- Vérifiez les Actions GitHub pour les erreurs

### Erreurs de build
- Vérifiez les logs dans l'onglet Actions de GitHub
- Assurez-vous que toutes les dépendances sont installées

### Problèmes de navigation
- Vérifiez que `basePath` est correct dans `next.config.mjs`
- Testez les liens internes

## 🎯 URL finale

Votre site sera accessible sur :
**https://djems.github.io/RenoStart**

---

**RenoStart Conseil** - Accompagnement BTP professionnel


