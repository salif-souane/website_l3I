import { Request, Response, NextFunction } from 'express';

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  if (typeof email !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ error: 'Email and password must be strings' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  next();
};

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
  const { email, password, firstName, lastName } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  if (typeof email !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ error: 'Email and password must be strings' });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters long' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  if (firstName && typeof firstName !== 'string') {
    return res.status(400).json({ error: 'First name must be a string' });
  }

  if (lastName && typeof lastName !== 'string') {
    return res.status(400).json({ error: 'Last name must be a string' });
  }

  next();
};

export const validateNews = (req: Request, res: Response, next: NextFunction) => {
  const { title, content } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  if (typeof title !== 'string') {
    return res.status(400).json({ error: 'Title must be a string' });
  }

  if (content && typeof content !== 'string') {
    return res.status(400).json({ error: 'Content must be a string' });
  }

  next();
};

export const validateEvent = (req: Request, res: Response, next: NextFunction) => {
  const { title, startDate } = req.body;

  if (!title || !startDate) {
    return res.status(400).json({ error: 'Title and start date are required' });
  }

  if (typeof title !== 'string') {
    return res.status(400).json({ error: 'Title must be a string' });
  }

  const date = new Date(startDate);
  if (isNaN(date.getTime())) {
    return res.status(400).json({ error: 'Invalid start date format' });
  }

  next();
};
