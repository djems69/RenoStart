# Variables d'environnement

Ce fichier documente les variables d'environnement utilisées dans le projet RenoStart Conseil.

## Configuration

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```bash
# Variables d'environnement pour RenoStart Conseil

# Email (optionnel - pour intégration SendGrid, Mailgun, etc.)
# SENDGRID_API_KEY=your_sendgrid_api_key_here
# MAILGUN_API_KEY=your_mailgun_api_key_here

# Google Maps (optionnel)
# GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# Base URL du site
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Informations de contact
NEXT_PUBLIC_CONTACT_EMAIL=contact@renostart-conseil.fr
NEXT_PUBLIC_CONTACT_PHONE=+33123456789
```

## Variables disponibles

### Email
- `SENDGRID_API_KEY` : Clé API SendGrid pour l'envoi d'emails
- `MAILGUN_API_KEY` : Clé API Mailgun pour l'envoi d'emails

### Google Maps
- `GOOGLE_MAPS_API_KEY` : Clé API Google Maps pour l'intégration de cartes

### Site
- `NEXT_PUBLIC_SITE_URL` : URL de base du site (utilisée pour les métadonnées SEO)
- `NEXT_PUBLIC_CONTACT_EMAIL` : Email de contact principal
- `NEXT_PUBLIC_CONTACT_PHONE` : Numéro de téléphone de contact

## Utilisation

Les variables préfixées par `NEXT_PUBLIC_` sont accessibles côté client.
Les autres variables ne sont accessibles que côté serveur (API routes).

## Sécurité

⚠️ **Important** : Ne commitez jamais le fichier `.env.local` dans Git.
Il est déjà ajouté au `.gitignore` par défaut.

## Déploiement

Pour le déploiement, configurez ces variables dans votre plateforme :
- **Vercel** : Variables d'environnement dans les paramètres du projet
- **Netlify** : Variables d'environnement dans les paramètres du site
- **Autres** : Consultez la documentation de votre plateforme

