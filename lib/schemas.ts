import { z } from 'zod';

export const signupSchema = z.object({
  firstName: z.string().min(3, 'First Name must be at least 3 characters'),
  lastName: z.string().min(3, 'Last Name must be at least 3 characters'),
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export const organizationSchema = z.object({
  name: z.string().min(3, 'Organization name must be at least 3 characters'),
  description: z.string().optional(),
});

export const channelSchema = z.object({
  name: z.string().min(3, 'Channel name must be at least 3 characters'),
  description: z.string().optional(),
});

export const playlistSchema = z.object({
  name: z.string().min(3, 'Playlist name must be at least 3 characters'),
  description: z.string().optional(),
});

export const videoSchema = z.object({
  title: z.string().min(3, 'Video title must be at least 3 characters'),
  description: z.string().optional(),
  file: z.instanceof(File),
});

export type SignupFormData = z.infer<typeof signupSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;

export type Organization = z.infer<typeof organizationSchema>;
export type Channel = z.infer<typeof channelSchema>;
export type Playlist = z.infer<typeof playlistSchema>;
export type Video = z.infer<typeof videoSchema>;
