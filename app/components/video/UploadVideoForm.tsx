// components/UploadVideoForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Video, videoSchema } from '@/lib/common';
import api from '@/lib/api';

export function UploadVideoForm() {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Video>({
    resolver: zodResolver(videoSchema),
  });

  const uploadVideo = useMutation({
    mutationFn: (data: Video) => {
      const formData = new FormData();
      formData.append('title', data.title);
      if (data.description) formData.append('description', data.description);
      formData.append('file', data.file);
      return api.post('/videos', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['videos']);
    },
  });

  const onSubmit = (data: Video) => {
    uploadVideo.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title')} placeholder="Video Title" />
      {errors.title && <span>{errors.title.message}</span>}
      <textarea {...register('description')} placeholder="Description" />
      {errors.description && <span>{errors.description.message}</span>}
      <input type="file" {...register('file')} accept="video/*" />
      {errors.file && <span>{errors.file.message}</span>}
      <button type="submit" disabled={uploadVideo.isLoading}>
        {uploadVideo.isLoading ? 'Uploading...' : 'Upload Video'}
      </button>
    </form>
  );
}
