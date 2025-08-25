# RenoStart Conseil - Site Vitrine

Site vitrine professionnel pour RenoStart Conseil, société de conseil spécialisée dans l'accompagnement des entreprises du BTP.

## 🚀 Technologies utilisées

- **Next.js 15** (App Router)
- **TypeScript**
- **TailwindCSS v4**
- **React 18**

## 📁 Structure du projet

```
renostart-site/
├── src/
│   ├── app/                 # Pages Next.js (App Router)
│   │   ├── page.tsx         # Page d'accueil
│   │   ├── a-propos/        # Page À propos
│   │   ├── formations/      # Page Formations
│   │   ├── contact/         # Page Contact
│   │   ├── api/             # API Routes
│   │   └── globals.css      # Styles globaux
│   └── components/          # Composants React
│       ├── Header.tsx       # Header fixe
│       └── Footer.tsx       # Footer
├── public/                  # Assets statiques
├── .github/workflows/       # GitHub Actions
└── README.md
```

## 🛠️ Installation et développement

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone https://github.com/djems/RenoStart.git
cd RenoStart/renostart-site

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## 🌐 Déploiement sur GitHub Pages

### Configuration automatique

Le projet est configuré pour se déployer automatiquement sur GitHub Pages via GitHub Actions.

1. **Pousser le code sur GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Activer GitHub Pages**
   - Aller dans les paramètres du repository GitHub
   - Section "Pages"
   - Source: "GitHub Actions"

3. **Le déploiement se fait automatiquement**
   - À chaque push sur la branche `main`
   - Le site sera accessible sur `https://djems.github.io/RenoStart`

### Configuration manuelle

Si vous préférez déployer manuellement :

```bash
# Build pour la production
npm run build

# Les fichiers statiques seront dans le dossier `out/`
# Vous pouvez les uploader sur GitHub Pages ou tout autre hébergeur
```

## 📱 Fonctionnalités

### Pages
- **Accueil** : Hero section, présentation, services
- **À propos** : Mission, valeurs, certification Qualiopi
- **Formations** : Domaines de formation en cartes
- **Contact** : Formulaire de contact avec API

### Composants
- **Header fixe** : Navigation toujours visible
- **Footer** : Informations de contact et liens
- **Formulaire de contact** : Validation et envoi simulé

### Responsive Design
- Mobile-first approach
- Navigation adaptative
- Grilles responsives
- Optimisé pour tous les écrans

## 🎨 Design

### Palette de couleurs
- **Bleu principal** : `#2563eb` (blue-600)
- **Blanc** : `#ffffff`
- **Gris** : `#6b7280` (gray-500)

### Typographie
- **Police** : Inter (Google Fonts)
- **Hiérarchie** : H1, H2, H3 bien définis
- **Responsive** : Tailles adaptées par breakpoint

## 🔧 Configuration

### Variables d'environnement
Créer un fichier `.env.local` :
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Build et export
```bash
# Build de développement
npm run dev

# Build de production
npm run build

# Export statique (pour GitHub Pages)
npm run export
```

## 📊 SEO

- Métadonnées optimisées par page
- Structure HTML sémantique
- Balises title et description personnalisées
- Open Graph tags (à implémenter)

## 🚀 Améliorations futures

- [ ] Intégration d'un CMS (Strapi, Contentful)
- [ ] Blog avec articles techniques
- [ ] Témoignages clients
- [ ] Galerie de projets
- [ ] Système de newsletter
- [ ] Analytics (Google Analytics, Plausible)
- [ ] Optimisation des images (WebP, lazy loading)
- [ ] PWA (Progressive Web App)

## 📞 Support

Pour toute question ou suggestion :
- Email : contact@renostart-conseil.fr
- GitHub : [Issues](https://github.com/djems/RenoStart/issues)

---

**RenoStart Conseil** - Accompagnement BTP professionnel
