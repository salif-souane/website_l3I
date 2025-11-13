export interface User {
  id: number;
  email: string;
  passwordHash: string;
  role: string;
  firstName?: string;
  lastName?: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface News {
  id: number;
  title: string;
  content?: string;
  excerpt?: string;
  imageUrl?: string;
  authorId?: number;
  publishedAt?: Date;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  author?: User;
}

export interface Event {
  id: number;
  title: string;
  description?: string;
  startDate: Date;
  endDate?: Date;
  location?: string;
  organizerId?: number;
  createdAt: Date;
  organizer?: User;
}

export interface Publication {
  id: number;
  title: string;
  authors: string[];
  publicationType?: string;
  publicationDate?: Date;
  doi?: string;
  fileUrl?: string;
  createdAt: Date;
}

export interface AuthRequest {
  email: string;
  password: string;
}

export interface RegisterRequest extends AuthRequest {
  firstName?: string;
  lastName?: string;
}

export interface JWTPayload {
  userId: number;
  email: string;
  role: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
