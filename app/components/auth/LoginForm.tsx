'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      console.log('🚀 ~ onSubmit ~ data:', data);
      // Handle successful login (e.g., save token to localStorage and redirect)
      // localStorage.setItem('token', result.token);
      // Redirect to dashboard or home page
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email')} placeholder="Email" type="email" />
      {errors.email && <p>{errors.email.message}</p>}

      <Input {...register('password')} placeholder="Password" type="password" />
      {errors.password && <p>{errors.password.message}</p>}

      {error && <p>{error}</p>}

      {/* <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Log in'}
      </Button> */}
    </form>
  );
}
