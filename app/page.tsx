import { LogoutButton } from './LogoutButton';
import { LoginButton } from './LoginButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <LoginButton />
      <LogoutButton />
    </main>
  );
}
