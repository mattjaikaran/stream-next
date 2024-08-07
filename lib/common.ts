import { z } from 'zod';

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

export type Organization = z.infer<typeof organizationSchema>;
export type Channel = z.infer<typeof channelSchema>;
export type Playlist = z.infer<typeof playlistSchema>;
export type Video = z.infer<typeof videoSchema>;
