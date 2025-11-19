import { PrismaClient } from '@prisma/client';
import { Publication } from '../types';

const prisma = new PrismaClient();

// Récupérer toutes les publications
export const getAllPublications = async (): Promise<Publication[]> => {
  return await prisma.publication.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
};

// Récupérer une publication par ID
export const getPublicationById = async (id: number): Promise<Publication | null> => {
  return await prisma.publication.findUnique({
    where: { id },
  });
};

// Créer une nouvelle publication
export const createPublication = async (
  data: Omit<Publication, 'id' | 'createdAt'>
): Promise<Publication> => {
  return await prisma.publication.create({
    data: {
      title: data.title!,
      authors: data.authors || [],
      publicationType: data.publicationType || null,
      publicationDate: data.publicationDate || null,
      doi: data.doi || null,
      fileUrl: data.fileUrl || null,
    },
  });
};

// Supprime les champs undefined pour Prisma
const cleanObject = (obj: any) =>
  Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== undefined));

// Mettre à jour une publication
export const updatePublication = async (
  id: number,
  body: Partial<Omit<Publication, 'id' | 'createdAt'>>
): Promise<Publication> => {
  const data = cleanObject({
    title: body.title,
    authors: body.authors,
    publicationType: body.publicationType,
    publicationDate: body.publicationDate,
    doi: body.doi,
    fileUrl: body.fileUrl,
  });

  return await prisma.publication.update({
    where: { id },
    data,
  });
};

// Supprimer une publication (ou simplement récupérer avant suppression)
export const deletePublication = async (id: number): Promise<Publication | null> => {
  // Pour réellement supprimer : prisma.publication.delete({ where: { id } })
  return await prisma.publication.findUnique({
    where: { id },
  });
};

// Rechercher des publications par titre ou auteurs
export const searchPublications = async (query: string): Promise<Publication[]> => {
  return await prisma.publication.findMany({
    where: {
      OR: [
        { title: { contains: query, mode: 'insensitive' } },
        { authors: { hasSome: [query] } },
      ],
    },
    orderBy: { createdAt: 'desc' },
  });
};
