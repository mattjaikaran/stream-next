import { LoginForm } from '../components/auth/LoginForm';

export default function LoginPage() {
  return (
    <main className="flex flex-col justify-between p-16">
      <div>
        <h1>Log in</h1>
        <LoginForm />
      </div>
    </main>
  );
}
