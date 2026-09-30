import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Clock from '@/components/Clock';
import AuthGuard from '@/components/AuthGuard';
import LogoutButton from '@/components/LogoutButton';

export const metadata = { title: 'Dashboard' };

export default function DashboardPage() {
  return <><Header /><AuthGuard><main className="dashboard"><h1>Dashboard</h1><p>This is the local portfolio dashboard retained from the original application.</p><Clock /><LogoutButton /></main></AuthGuard><Footer /></>;
}
