// components/CreateOrganizationForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Organization, organizationSchema } from '@/lib/common';
import api from '@/lib/api';

export function CreateOrganizationForm() {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Organization>({
    resolver: zodResolver(organizationSchema),
  });

  const createOrganization = useMutation({
    mutationFn: (data: Organization) => api.post('/organizations', data),
    onSuccess: () => {
      queryClient.invalidateQueries(['organizations']);
    },
  });

  const onSubmit = (data: Organization) => {
    createOrganization.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Organization Name" />
      {errors.name && <span>{errors.name.message}</span>}
      <textarea {...register('description')} placeholder="Description" />
      {errors.description && <span>{errors.description.message}</span>}
      <button type="submit" disabled={createOrganization.isLoading}>
        {createOrganization.isLoading ? 'Creating...' : 'Create Organization'}
      </button>
    </form>
  );
}
