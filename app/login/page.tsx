import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';

export const metadata = { title: 'Login' };

export default function LoginPage() {
  return <><Header /><main className="login"><h1>Login</h1><p>The original portfolio included a protected dashboard route. This static GitHub Pages version keeps a local demo session; it is not a security boundary.</p><LoginForm /><p>Or return to the <Link href="/">Homepage</Link>.</p></main><Footer /></>;
}
