import { Request, Response } from 'express';
import * as PublicationService from '../services/publicationService';

export class PublicationController {
  static async getAllPublications(req: Request, res: Response) {
    try {
      const publications = await PublicationService.getAllPublications();
      res.json({ success: true, data: { publications } });
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static async getPublicationById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string, 10);
      if (isNaN(id)) {
        return res.status(400).json({ success: false, error: 'Invalid publication ID' });
      }

      const publication = await PublicationService.getPublicationById(id);
      if (!publication) {
        return res.status(404).json({ success: false, error: 'Publication not found' });
      }

      res.json({ success: true, data: { publication } });
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static async createPublication(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({ success: false, error: 'Authentication required' });
      }

      const { title, authors, publicationType, publicationDate, doi, fileUrl } = req.body;

      if (!title || !authors || !Array.isArray(authors)) {
        return res.status(400).json({ success: false, error: 'Title and authors array are required' });
      }

      const publication = await PublicationService.createPublication({
        title,
        authors,
        publicationType,
        publicationDate: publicationDate ? new Date(publicationDate) : null,
        doi: doi || null,
        fileUrl: fileUrl || null,
      });

      res.status(201).json({ success: true, data: { publication } });
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static async updatePublication(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({ success: false, error: 'Authentication required' });
      }

      const id = parseInt(req.params.id as string, 10);
      if (isNaN(id)) {
        return res.status(400).json({ success: false, error: 'Invalid publication ID' });
      }

      const updateData: any = { ...req.body };
      if (updateData.publicationDate) {
        updateData.publicationDate = new Date(updateData.publicationDate);
      }

      const publication = await PublicationService.updatePublication(id, updateData);
      if (!publication) {
        return res.status(404).json({ success: false, error: 'Publication not found' });
      }

      res.json({ success: true, data: { publication } });
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static async deletePublication(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({ success: false, error: 'Authentication required' });
      }

      const id = parseInt(req.params.id as string, 10);
      if (isNaN(id)) {
        return res.status(400).json({ success: false, error: 'Invalid publication ID' });
      }

      const deleted = await PublicationService.deletePublication(id);
      if (!deleted) {
        return res.status(404).json({ success: false, error: 'Publication not found' });
      }

      res.json({ success: true, message: 'Publication deleted successfully' });
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static async searchPublications(req: Request, res: Response) {
    try {
      const query = req.query.q as string;
      if (!query) {
        return res.status(400).json({ success: false, error: 'Search query is required' });
      }

      const publications = await PublicationService.searchPublications(query);
      res.json({ success: true, data: { publications } });
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
}
