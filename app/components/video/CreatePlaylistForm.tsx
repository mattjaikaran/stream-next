// components/CreatePlaylistForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Playlist, playlistSchema } from '@/lib/common';
import api from '@/lib/api';

export function CreatePlaylistForm() {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Playlist>({
    resolver: zodResolver(playlistSchema),
  });

  const createPlaylist = useMutation({
    mutationFn: (data: Playlist) => api.post('/playlists', data),
    onSuccess: () => {
      queryClient.invalidateQueries(['playlists']);
    },
  });

  const onSubmit = (data: Playlist) => {
    createPlaylist.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Playlist Name" />
      {errors.name && <span>{errors.name.message}</span>}
      <textarea {...register('description')} placeholder="Description" />
      {errors.description && <span>{errors.description.message}</span>}
      <button type="submit" disabled={createPlaylist.isLoading}>
        {createPlaylist.isLoading ? 'Creating...' : 'Create Playlist'}
      </button>
    </form>
  );
}
