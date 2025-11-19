export interface User {
  id: number;
  email: string;
  passwordHash: string;
  role: string;
  firstName: string | null;
  lastName: string | null;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface News {
  id: number;
  title: string;
  content: string | null;
  excerpt: string | null;
  imageUrl: string | null;
  authorId: number | null;
  publishedAt: Date | null;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  author?: User | null;
}

export interface Event {
  id: number;
  title: string;
  description: string | null;
  startDate: Date;
  endDate: Date | null;
  location: string | null;
  organizerId: number | null;
  createdAt: Date;
  organizer?: User | null;
}

export interface Publication {
  id: number;
  title: string;
  authors: string[];
  publicationType: string | null;
  publicationDate: Date | null;
  doi: string | null;
  fileUrl: string | null;
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
