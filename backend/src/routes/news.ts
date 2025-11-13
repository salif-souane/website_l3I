import { Router } from 'express';
import { NewsController } from '../controllers/newsController';
import { authenticateToken, requireRole } from '../middleware/auth';
import { validateNews } from '../middleware/validation';

const router = Router();

// Routes publiques
router.get('/', NewsController.getAllNews);
router.get('/:id', NewsController.getNewsById);

// Routes protégées (nécessitent authentification)
router.post('/', authenticateToken, requireRole(['admin', 'teacher']), validateNews, NewsController.createNews);
router.put('/:id', authenticateToken, requireRole(['admin', 'teacher']), validateNews, NewsController.updateNews);
router.delete('/:id', authenticateToken, requireRole(['admin']), NewsController.deleteNews);

// Route spéciale pour publier une actualité (réservée aux admins)
router.patch('/:id/publish', authenticateToken, requireRole(['admin']), NewsController.publishNews);

export default router;
