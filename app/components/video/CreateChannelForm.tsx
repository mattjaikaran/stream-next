// components/CreateChannelForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Channel, channelSchema } from '@/lib/common';
import api from '@/lib/api';

export function CreateChannelForm() {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Channel>({
    resolver: zodResolver(channelSchema),
  });

  const createChannel = useMutation({
    mutationFn: (data: Channel) => api.post('/channels', data),
    onSuccess: () => {
      queryClient.invalidateQueries(['channels']);
    },
  });

  const onSubmit = (data: Channel) => {
    createChannel.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Channel Name" />
      {errors.name && <span>{errors.name.message}</span>}
      <textarea {...register('description')} placeholder="Description" />
      {errors.description && <span>{errors.description.message}</span>}
      <button type="submit" disabled={createChannel.isLoading}>
        {createChannel.isLoading ? 'Creating...' : 'Create Channel'}
      </button>
    </form>
  );
}
