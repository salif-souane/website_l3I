import { PrismaClient } from '@prisma/client';
import { Event } from '../types/index';

const prisma = new PrismaClient();

export const getAllEvents = async (): Promise<Event[]> => {
  return await prisma.event.findMany({
    include: {
      organizer: true,
    },
  });
};

export const getEventById = async (id: number): Promise<Event | null> => {
  return await prisma.event.findUnique({
    where: { id },
    include: {
      organizer: true,
    },
  });
};

export const createEvent = async (data: {
  title: string;
  description?: string;
  startDate: Date;
  endDate?: Date;
  location?: string;
  organizerId: number;
}): Promise<Event> => {
  const { title, description, startDate, endDate, location, organizerId } = data;
  return await prisma.event.create({
    data: {
      title,
      description: description || null,
      startDate,
      endDate: endDate || null,
      location: location || null,
      organizerId,
    },
    include: {
      organizer: true,
    },
  });
};

export const updateEvent = async (
  id: number,
  data: Partial<{
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    location: string;
  }>
): Promise<Event | null> => {
  return await prisma.event.update({
    where: { id },
    data,
    include: {
      organizer: true,
    },
  });
};

export const deleteEvent = async (id: number): Promise<Event | null> => {
  return await prisma.event.delete({
    where: { id },
    include: {
      organizer: true,
    },
  });
};

export const getUpcomingEvents = async (limit: number = 10): Promise<Event[]> => {
  return await prisma.event.findMany({
    where: {
      startDate: {
        gte: new Date(),
      },
    },
    orderBy: {
      startDate: 'asc',
    },
    take: limit,
    include: {
      organizer: true,
    },
  });
};
