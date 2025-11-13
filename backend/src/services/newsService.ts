import { PrismaClient } from '@prisma/client';
import { News } from '../types';

const prisma = new PrismaClient();

export class NewsService {
  static async getAllNews(): Promise<News[]> {
    return await prisma.news.findMany({
      where: { status: 'published' },
      include: { author: true },
      orderBy: { publishedAt: 'desc' }
    });
  }

  static async getNewsById(id: number): Promise<News | null> {
    return await prisma.news.findUnique({
      where: { id },
      include: { author: true }
    });
  }

  static async createNews(data: {
    title: string;
    content?: string;
    excerpt?: string;
    imageUrl?: string;
    authorId: number;
  }): Promise<News> {
    return await prisma.news.create({
      data: {
        title: data.title,
        content: data.content,
        excerpt: data.excerpt,
        imageUrl: data.imageUrl,
        authorId: data.authorId,
        status: 'draft'
      },
      include: { author: true }
    });
  }

  static async updateNews(id: number, data: Partial<{
    title: string;
    content: string;
    excerpt: string;
    imageUrl: string;
    status: string;
    publishedAt: Date;
  }>): Promise<News | null> {
    return await prisma.news.update({
      where: { id },
      data,
      include: { author: true }
    });
  }

  static async deleteNews(id: number): Promise<boolean> {
    try {
      await prisma.news.delete({
        where: { id }
      });
      return true;
    } catch {
      return false;
    }
  }

  static async publishNews(id: number): Promise<News | null> {
    return await prisma.news.update({
      where: { id },
      data: {
        status: 'published',
        publishedAt: new Date()
      },
      include: { author: true }
    });
  }
}
