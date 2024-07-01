import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';

export function RootLayout() {
  return (
    <main className="min-h-screen bg-primary-50">
      <Provider store={store}>
        <Toaster richColors />
        <Outlet />
      </Provider>
    </main>
  );
}
