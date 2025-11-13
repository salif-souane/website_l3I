import { Router } from 'express';
import { EventController } from '../controllers/eventController';
import { authenticateToken, requireRole } from '../middleware/auth';
import { validateEvent } from '../middleware/validation';

const router = Router();

// Routes publiques
router.get('/', EventController.getAllEvents);
router.get('/upcoming', EventController.getUpcomingEvents);
router.get('/:id', EventController.getEventById);

// Routes protégées (nécessitent authentification)
router.post('/', authenticateToken, requireRole(['admin', 'teacher']), validateEvent, EventController.createEvent);
router.put('/:id', authenticateToken, requireRole(['admin', 'teacher']), validateEvent, EventController.updateEvent);
router.delete('/:id', authenticateToken, requireRole(['admin']), EventController.deleteEvent);

export default router;
