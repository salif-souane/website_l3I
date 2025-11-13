import { PrismaClient } from '@prisma/client';
import { Publication } from '../types';

const prisma = new PrismaClient();

export class PublicationService {
  static async getAllPublications(): Promise<Publication[]> {
    return await prisma.publication.findMany({
      orderBy: { publicationDate: 'desc' }
    });
  }

  static async getPublicationById(id: number): Promise<Publication | null> {
    return await prisma.publication.findUnique({
      where: { id }
    });
  }

  static async createPublication(data: {
    title: string;
    authors: string[];
    publicationType?: string;
    publicationDate?: Date;
    doi?: string;
    fileUrl?: string;
  }): Promise<Publication> {
    return await prisma.publication.create({
      data
    });
  }

  static async updatePublication(id: number, data: Partial<{
    title: string;
    authors: string[];
    publicationType: string;
    publicationDate: Date;
    doi: string;
    fileUrl: string;
  }>): Promise<Publication | null> {
    return await prisma.publication.update({
      where: { id },
      data
    });
  }

  static async deletePublication(id: number): Promise<boolean> {
    try {
      await prisma.publication.delete({
        where: { id }
      });
      return true;
    } catch {
      return false;
    }
  }

  static async searchPublications(query: string): Promise<Publication[]> {
    return await prisma.publication.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { authors: { hasSome: [query] } },
          { publicationType: { contains: query, mode: 'insensitive' } },
          { doi: { contains: query, mode: 'insensitive' } }
        ]
      },
      orderBy: { publicationDate: 'desc' }
    });
  }
}
