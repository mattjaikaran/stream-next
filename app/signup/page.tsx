import { SignupForm } from '../forms/auth/SignupForm';

export default function SignupPage() {
  return (
    <main className="flex flex-col justify-between p-16">
      <h1>Sign up</h1>
      <SignupForm />
    </main>
  );
}
