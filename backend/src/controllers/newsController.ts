import { Request, Response } from 'express';
import * as NewsService from '../services/newsService';

export class NewsController {
  static async getAllNews(req: Request, res: Response) {
    try {
      const news = await NewsService.getAllNews();
      res.json({
        success: true,
        data: { news }
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.messagecl
      });
    }
  }

  static async getNewsById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid news ID'
        });
      }

      const news = await NewsService.getNewsById(id);
      if (!news) {
        return res.status(404).json({
          success: false,
          error: 'News not found'
        });
      }

      res.json({
        success: true,
        data: { news }
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  static async createNews(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          error: 'Authentication required'
        });
      }

      const { title, content, excerpt, imageUrl } = req.body;

      if (!title) {
        return res.status(400).json({
          success: false,
          error: 'Title is required'
        });
      }

      const news = await NewsService.createNews({
        title,
        content,
        excerpt,
        imageUrl,
        authorId: req.user.userId
      });

      res.status(201).json({
        success: true,
        data: { news }
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  static async updateNews(req: Request, res: Response) {
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
          error: 'Invalid news ID'
        });
      }

      const news = await NewsService.updateNews(id, req.body);
      if (!news) {
        return res.status(404).json({
          success: false,
          error: 'News not found'
        });
      }

      res.json({
        success: true,
        data: { news }
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  static async deleteNews(req: Request, res: Response) {
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
          error: 'Invalid news ID'
        });
      }

      const deleted = await NewsService.deleteNews(id);
      if (!deleted) {
        return res.status(404).json({
          success: false,
          error: 'News not found'
        });
      }

      res.json({
        success: true,
        message: 'News deleted successfully'
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  static async publishNews(req: Request, res: Response) {
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
          error: 'Invalid news ID'
        });
      }

      const news = await NewsService.updateNews(id, { status: 'published', publishedAt: new Date() });
      if (!news) {
        return res.status(404).json({
          success: false,
          error: 'News not found'
        });
      }

      res.json({
        success: true,
        data: { news }
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }
}
