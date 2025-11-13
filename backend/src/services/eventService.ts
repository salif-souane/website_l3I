import { PrismaClient } from '@prisma/client';
import { Event } from '../types';

const prisma = new PrismaClient();

export class EventService {
  static async getAllEvents(): Promise<Event[]> {
    return await prisma.event.findMany({
      include: { organizer: true },
      orderBy: { startDate: 'asc' }
    });
  }

  static async getEventById(id: number): Promise<Event | null> {
    return await prisma.event.findUnique({
      where: { id },
      include: { organizer: true }
    });
  }

  static async createEvent(data: {
    title: string;
    description?: string;
    startDate: Date;
    endDate?: Date;
    location?: string;
    organizerId: number;
  }): Promise<Event> {
    return await prisma.event.create({
      data,
      include: { organizer: true }
    });
  }

  static async updateEvent(id: number, data: Partial<{
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    location: string;
  }>): Promise<Event | null> {
    return await prisma.event.update({
      where: { id },
      data,
      include: { organizer: true }
    });
  }

  static async deleteEvent(id: number): Promise<boolean> {
    try {
      await prisma.event.delete({
        where: { id }
      });
      return true;
    } catch {
      return false;
    }
  }

  static async getUpcomingEvents(limit: number = 10): Promise<Event[]> {
    return await prisma.event.findMany({
      where: {
        startDate: {
          gte: new Date()
        }
      },
      include: { organizer: true },
      orderBy: { startDate: 'asc' },
      take: limit
    });
  }
}
