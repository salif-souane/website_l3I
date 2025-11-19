import { PrismaClient } from '@prisma/client';
import { News } from '../types/index';

const prisma = new PrismaClient();

export const getAllNews = async (): Promise<News[]> => {
  return await prisma.news.findMany({
    include: {
      author: true,
    },
  });
};

export const getNewsById = async (id: number): Promise<News | null> => {
  return await prisma.news.findUnique({
    where: { id },
    include: {
      author: true,
    },
  });
};

export const createNews = async (data: {
  title: string;
  content?: string;
  excerpt?: string;
  imageUrl?: string;
  authorId: number;
}): Promise<News> => {
  const { title, content, excerpt, imageUrl, authorId } = data;
  return await prisma.news.create({
    data: {
      title,
      content: content || null,
      excerpt: excerpt || null,
      imageUrl: imageUrl || null,
      authorId,
      status: 'draft',
    },
    include: {
      author: true,
    },
  });
};

export const updateNews = async (
  id: number,
  data: Partial<{
    title: string;
    content: string;
    excerpt: string;
    imageUrl: string;
    publishedAt: Date;
    status: string;
  }>
): Promise<News | null> => {
  return await prisma.news.update({
    where: { id },
    data,
    include: {
      author: true,
    },
  });
};

export const deleteNews = async (id: number): Promise<News | null> => {
  return await prisma.news.update({
    where: { id },
    data: { status: 'deleted' },
    include: {
      author: true,
    },
  });
};
