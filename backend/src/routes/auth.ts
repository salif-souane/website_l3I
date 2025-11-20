import { Router } from 'express';
import { AuthController } from '../controllers/authController';
import { validateLogin, validateRegister } from '../middleware/validation';
import { authenticateToken } from '../middleware/auth';

const router = Router();

// POST /api/auth/register
router.post('/register', validateRegister, AuthController.register);

// POST /api/auth/login
router.post('/login', validateLogin, AuthController.login);

// GET /api/auth/me
router.get('/me', authenticateToken, AuthController.getCurrentUser);

export default router;
