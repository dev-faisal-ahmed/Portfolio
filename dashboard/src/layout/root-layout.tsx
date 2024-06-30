import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';

export function RootLayout() {
  return (
    <main className="min-h-screen bg-primary-50">
      <Toaster richColors />
      <Outlet />
    </main>
  );
}
