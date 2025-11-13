# Backend API - Laboratoire LI3

Backend API REST pour le site web du Laboratoire LI3, développé avec Node.js, Express, TypeScript et Prisma.

## Technologies utilisées

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **TypeScript** - Typage statique
- **Prisma** - ORM pour PostgreSQL
- **JWT** - Authentification stateless
- **bcryptjs** - Hashage des mots de passe
- **multer** - Gestion des uploads de fichiers

## Installation

1. Installer les dépendances :
```bash
npm install
```

2. Configurer les variables d'environnement :
Créer un fichier `.env` à la racine du projet :
```env
DATABASE_URL="postgresql://username:password@localhost:5432/li3_lab_db"
JWT_SECRET="your-super-secret-jwt-key"
JWT_EXPIRES_IN="7d"
PORT=5000
NODE_ENV="development"
FRONTEND_URL="http://localhost:5173"
```

3. Générer le client Prisma :
```bash
npx prisma generate
```

4. Appliquer les migrations de base de données :
```bash
npx prisma migrate dev
```

## Scripts disponibles

- `npm run build` - Compiler TypeScript vers JavaScript
- `npm run start` - Démarrer le serveur en production
- `npm run dev` - Démarrer le serveur en mode développement avec hot reload
- `npm run prisma:generate` - Générer le client Prisma
- `npm run prisma:migrate` - Appliquer les migrations de base de données
- `npm run prisma:studio` - Ouvrir Prisma Studio pour visualiser la base de données

## Structure du projet

```
backend/
├── src/
│   ├── controllers/     # Logique des contrôleurs
│   │   ├── authController.ts
│   │   ├── newsController.ts
│   │   ├── eventController.ts
│   │   └── publicationController.ts
│   ├── middleware/      # Middlewares Express
│   │   ├── auth.ts      # Authentification JWT
│   │   └── validation.ts # Validation des données
│   ├── routes/          # Définition des routes
│   │   ├── auth.ts
│   │   ├── news.ts
│   │   ├── events.ts
│   │   └── publications.ts
│   ├── services/        # Logique métier
│   │   ├── authService.ts
│   │   ├── newsService.ts
│   │   ├── eventService.ts
│   │   └── publicationService.ts
│   ├── types/           # Types TypeScript
│   │   └── index.ts
│   ├── utils/           # Utilitaires
│   │   ├── jwt.ts
│   │   └── hash.ts
│   └── index.ts         # Point d'entrée de l'application
├── prisma/
│   └── schema.prisma    # Schéma de base de données
├── .env                 # Variables d'environnement
├── package.json
├── tsconfig.json
└── README.md
```

## API Endpoints

### Authentification
- `POST /api/auth/register` - Inscription
- `POST /api/auth/login` - Connexion
- `GET /api/auth/me` - Informations utilisateur actuel

### Actualités
- `GET /api/news` - Liste des actualités
- `GET /api/news/:id` - Détails d'une actualité
- `POST /api/news` - Créer une actualité (admin/teacher)
- `PUT /api/news/:id` - Modifier une actualité (admin/teacher)
- `DELETE /api/news/:id` - Supprimer une actualité (admin)
- `PATCH /api/news/:id/publish` - Publier une actualité (admin/teacher)

### Événements
- `GET /api/events` - Liste des événements
- `GET /api/events/upcoming` - Événements à venir
- `GET /api/events/:id` - Détails d'un événement
- `POST /api/events` - Créer un événement (admin/teacher)
- `PUT /api/events/:id` - Modifier un événement (admin/teacher)
- `DELETE /api/events/:id` - Supprimer un événement (admin)

### Publications
- `GET /api/publications` - Liste des publications
- `GET /api/publications/search?q=query` - Recherche de publications
- `GET /api/publications/:id` - Détails d'une publication
- `POST /api/publications` - Créer une publication (admin/teacher)
- `PUT /api/publications/:id` - Modifier une publication (admin/teacher)
- `DELETE /api/publications/:id` - Supprimer une publication (admin)

### Santé
- `GET /api/health` - Vérification de l'état du serveur

## Rôles et permissions

- **user** : Utilisateur standard (lecture seule)
- **teacher** : Enseignant (peut créer/modifier actualités, événements, publications)
- **admin** : Administrateur (tous les droits)

## Démarrage du serveur

En mode développement :
```bash
npm run dev
```

En production :
```bash
npm run build
npm start
```

Le serveur démarrera sur le port défini dans les variables d'environnement (par défaut 5000).

## Base de données

Le projet utilise PostgreSQL avec Prisma comme ORM. Le schéma de base de données définit les tables suivantes :

- `users` - Utilisateurs du système
- `news` - Actualités du laboratoire
- `events` - Événements du laboratoire
- `publications` - Publications scientifiques

## Sécurité

- Authentification JWT avec tokens d'accès et de rafraîchissement
- Hashage des mots de passe avec bcryptjs
- Validation des données d'entrée
- Protection contre les attaques CSRF et XSS
- Rate limiting (à implémenter)
- CORS configuré pour le frontend

## Développement

Pour contribuer au développement :

1. Créer une branche pour votre fonctionnalité
2. Écrire des tests pour les nouvelles fonctionnalités
3. Respecter les conventions de code TypeScript
4. Documenter les nouvelles API endpoints
5. Tester manuellement les changements

## Déploiement

Le backend peut être déployé sur :
- Heroku
- Railway
- DigitalOcean App Platform
- AWS EC2 avec PM2

Assurez-vous de configurer correctement les variables d'environnement en production.
