'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSignupMutation } from '@/lib/store/authApi';

const signupSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type SignupFormData = z.infer<typeof signupSchema>;

export function SignupForm() {
  const [signup, { isLoading }] = useSignupMutation();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    try {
      await signup(data).unwrap();
      // Handle successful signup (e.g., redirect to login page)
    } catch (err) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('username')} placeholder="Username" />
      {errors.username && <p>{errors.username.message}</p>}

      <Input {...register('email')} placeholder="Email" type="email" />
      {errors.email && <p>{errors.email.message}</p>}

      <Input {...register('password')} placeholder="Password" type="password" />
      {errors.password && <p>{errors.password.message}</p>}

      {error && <p>{error}</p>}

      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Signing up...' : 'Sign up'}
      </Button>
    </form>
  );
}
