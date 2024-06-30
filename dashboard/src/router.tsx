import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loader } from './components/shared/loader';
import { RootLayout } from '@/pages/layout';

const LoginPage = lazy(() => import('@/pages/login'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
]);

export function AppRouter() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center bg-primary-50">
          <Loader />
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}
