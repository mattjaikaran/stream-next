'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SignupFormData, signupSchema } from '@/lib/schemas';

export function SignupForm() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    try {
      setIsLoading(true);
      console.log('🚀 ~ onSubmit ~ data:', data);
      // Handle successful signup (e.g., redirect to login page)
    } catch (err) {
      setError('Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <Input
        {...register('username')}
        placeholder="Username"
        className="mb-4"
      />
      {errors.username && <p className="mb-2">{errors.username.message}</p>}

      <Input
        {...register('email')}
        placeholder="Email"
        type="email"
        className="mb-4"
      />
      {errors.email && <p className="mb-2">{errors.email.message}</p>}

      <Input
        {...register('password')}
        placeholder="Password"
        type="password"
        className="mb-4"
      />
      {errors.password && <p>{errors.password.message}</p>}

      {error && <p>{error}</p>}

      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Signing up...' : 'Sign up'}
      </Button>
    </form>
  );
}
