# Backend API - Laboratoire LI3

Backend API pour le site web du Laboratoire LI3, développé avec Node.js, Express, TypeScript et Prisma.

## Technologies utilisées

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **TypeScript** - Typage statique
- **Prisma** - ORM pour PostgreSQL
- **JWT** - Authentification
- **bcryptjs** - Hashage des mots de passe
- **CORS** - Gestion des requêtes cross-origin
- **Helmet** - Sécurité des headers HTTP

## Installation

1. Installer les dépendances :
```bash
npm install
```

2. Configurer les variables d'environnement :
Copier le fichier `.env` et ajuster les valeurs selon votre environnement.

3. Générer le client Prisma :
```bash
npm run prisma:generate
```

4. Appliquer les migrations de base de données :
```bash
npm run prisma:migrate
```

## Scripts disponibles

- `npm run build` - Compiler TypeScript vers JavaScript
- `npm run start` - Démarrer le serveur en production
- `npm run dev` - Démarrer le serveur en mode développement avec hot-reload
- `npm run prisma:generate` - Générer le client Prisma
- `npm run prisma:migrate` - Appliquer les migrations de base de données
- `npm run prisma:studio` - Ouvrir Prisma Studio pour visualiser la base de données

## Structure du projet

```
src/
├── controllers/     # Logique des contrôleurs
├── middleware/      # Middlewares Express
├── routes/         # Définition des routes API
├── services/       # Services métier
├── types/          # Types TypeScript
├── utils/          # Utilitaires
└── index.ts        # Point d'entrée de l'application

prisma/
└── schema.prisma   # Schéma de base de données
```

## API Endpoints

### Authentification
- `POST /api/auth/register` - Inscription
- `POST /api/auth/login` - Connexion
- `GET /api/auth/me` - Informations utilisateur actuel

### Santé du système
- `GET /api/health` - Vérification de l'état du serveur

## Démarrage

Pour démarrer le serveur en mode développement :
```bash
npm run dev
```

Le serveur sera accessible sur `http://localhost:5000`

## Base de données

Le projet utilise PostgreSQL comme base de données. Assurez-vous que :
1. PostgreSQL est installé et en cours d'exécution
2. La variable `DATABASE_URL` dans `.env` pointe vers votre base de données
3. Les migrations Prisma ont été appliquées

## Sécurité

- Authentification JWT avec tokens d'accès
- Hashage des mots de passe avec bcrypt
- Validation des entrées utilisateur
- Protection contre les attaques XSS et CSRF
- Headers de sécurité avec Helmet
- Gestion CORS configurée

## Développement

Pour contribuer au développement :
1. Créer une branche pour votre fonctionnalité
2. Écrire des tests si nécessaire
3. S'assurer que le code compile sans erreurs TypeScript
4. Tester manuellement les nouvelles fonctionnalités
5. Créer une pull request

## Déploiement

Le backend peut être déployé sur des plateformes comme :
- Heroku
- Railway
- DigitalOcean App Platform
- AWS EC2

Assurez-vous de configurer correctement les variables d'environnement en production.
