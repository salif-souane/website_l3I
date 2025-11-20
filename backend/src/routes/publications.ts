import { Router } from 'express';
import { PublicationController } from '../controllers/publicationController';
import { authenticateToken, requireRole } from '../middleware/auth';

const router = Router();

// Routes publiques
router.get('/', PublicationController.getAllPublications);
router.get('/search', PublicationController.searchPublications);
router.get('/:id', PublicationController.getPublicationById);

// Routes protégées (nécessitent authentification)
router.post('/', authenticateToken, requireRole(['admin', 'teacher']), PublicationController.createPublication);
router.put('/:id', authenticateToken, requireRole(['admin', 'teacher']), PublicationController.updatePublication);
router.delete('/:id', authenticateToken, requireRole(['admin']), PublicationController.deletePublication);

export default router;
