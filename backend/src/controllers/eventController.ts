import { Request, Response } from 'express';
import * as EventService from '../services/eventService';

export class EventController {
  static async getAllEvents(req: Request, res: Response) {
    try {
      const events = await EventService.getAllEvents();
      res.json({
        success: true,
        data: { events }
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  static async getEventById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid event ID'
        });
      }

      const event = await EventService.getEventById(id);
      if (!event) {
        return res.status(404).json({
          success: false,
          error: 'Event not found'
        });
      }

      res.json({
        success: true,
        data: { event }
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  static async createEvent(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          error: 'Authentication required'
        });
      }

      const { title, description, startDate, endDate, location } = req.body;

      if (!title || !startDate) {
        return res.status(400).json({
          success: false,
          error: 'Title and start date are required'
        });
      }

      const event = await EventService.createEvent({
        title,
        description,
        startDate: new Date(startDate),
        ...(endDate && { endDate: new Date(endDate) }),
        ...(location && { location }),
        organizerId: req.user.userId
      });

      res.status(201).json({
        success: true,
        data: { event }
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  static async updateEvent(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          error: 'Authentication required'
        });
      }

      const id = parseInt(req.params.id as string);
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid event ID'
        });
      }

      const updateData: any = { ...req.body };
      if (updateData.startDate) updateData.startDate = new Date(updateData.startDate);
      if (updateData.endDate) updateData.endDate = new Date(updateData.endDate);

      const event = await EventService.updateEvent(id, updateData);
      if (!event) {
        return res.status(404).json({
          success: false,
          error: 'Event not found'
        });
      }

      res.json({
        success: true,
        data: { event }
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  static async deleteEvent(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          error: 'Authentication required'
        });
      }

      const id = parseInt(req.params.id as string);
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid event ID'
        });
      }

      const deleted = await EventService.deleteEvent(id);
      if (!deleted) {
        return res.status(404).json({
          success: false,
          error: 'Event not found'
        });
      }

      res.json({
        success: true,
        message: 'Event deleted successfully'
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  static async getUpcomingEvents(req: Request, res: Response) {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
      const events = await EventService.getUpcomingEvents(limit);
      res.json({
        success: true,
        data: { events }
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }
}
