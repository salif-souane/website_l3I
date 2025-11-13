import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../src/utils/hash';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Créer un utilisateur admin
  const adminPassword = await hashPassword('admin123');
  const admin = await prisma.user.upsert({
    where: { email: 'admin@li3.fr' },
    update: {},
    create: {
      email: 'admin@li3.fr',
      passwordHash: adminPassword,
      firstName: 'Admin',
      lastName: 'LI3',
      role: 'admin',
      status: 'active'
    }
  });

  // Créer un utilisateur enseignant
  const teacherPassword = await hashPassword('teacher123');
  const teacher = await prisma.user.upsert({
    where: { email: 'teacher@li3.fr' },
    update: {},
    create: {
      email: 'teacher@li3.fr',
      passwordHash: teacherPassword,
      firstName: 'Marie',
      lastName: 'Dubois',
      role: 'teacher',
      status: 'active'
    }
  });

  // Créer quelques actualités
  const news1 = await prisma.news.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'Bienvenue sur le site du Laboratoire LI3',
      content: 'Le Laboratoire LI3 est ravi de vous accueillir sur son nouveau site web. Découvrez nos recherches, nos événements et nos publications.',
      excerpt: 'Découvrez le nouveau site web du Laboratoire LI3',
      authorId: admin.id,
      status: 'published',
      publishedAt: new Date()
    }
  });

  const news2 = await prisma.news.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: 'Conférence sur l\'Intelligence Artificielle',
      content: 'Le laboratoire organise une conférence sur les dernières avancées en intelligence artificielle le mois prochain.',
      excerpt: 'Conférence IA organisée par le LI3',
      authorId: teacher.id,
      status: 'published',
      publishedAt: new Date()
    }
  });

  // Créer quelques événements
  const event1 = await prisma.event.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'Séminaire de recherche',
      description: 'Séminaire mensuel sur les avancées en informatique',
      startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Dans 7 jours
      location: 'Salle de conférence LI3',
      organizerId: teacher.id
    }
  });

  const event2 = await prisma.event.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: 'Journée portes ouvertes',
      description: 'Découvrez nos installations et rencontrez nos chercheurs',
      startDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // Dans 14 jours
      endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000 + 6 * 60 * 60 * 1000), // Même jour, 6h plus tard
      location: 'Campus universitaire',
      organizerId: admin.id
    }
  });

  // Créer quelques publications
  const publication1 = await prisma.publication.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'Algorithmes d\'optimisation pour les réseaux de neurones',
      authors: ['Marie Dubois', 'Jean Martin', 'Alice Chen'],
      publicationType: 'Article',
      publicationDate: new Date('2024-01-15'),
      doi: '10.1000/xyz123',
      fileUrl: '/uploads/publications/optimization-neural-networks.pdf'
    }
  });

  const publication2 = await prisma.publication.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: 'Sécurité des systèmes distribués',
      authors: ['Pierre Durand', 'Marie Dubois'],
      publicationType: 'Chapitre de livre',
      publicationDate: new Date('2023-11-20'),
      doi: '10.1000/abc456',
      fileUrl: '/uploads/publications/distributed-systems-security.pdf'
    }
  });

  console.log('✅ Database seeded successfully!');
  console.log('👤 Admin user created: admin@li3.fr / admin123');
  console.log('👨‍🏫 Teacher user created: teacher@li3.fr / teacher123');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
