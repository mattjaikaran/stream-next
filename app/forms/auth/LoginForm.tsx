'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LoginFormData, loginSchema } from '@/lib/schemas';

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      console.log('🚀 ~ onSubmit ~ data:', data);
      // Handle successful login (e.g., save token to localStorage and redirect)
      // localStorage.setItem('token', result.token);
      // Redirect to dashboard or home page
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
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
      {errors.password && <p className="mb-2">{errors.password.message}</p>}

      {error && <p className="mb-2">{error}</p>}

      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Log in'}
      </Button>
    </form>
  );
}
