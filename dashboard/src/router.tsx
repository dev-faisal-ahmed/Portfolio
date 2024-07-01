import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loader } from './components/shared/loader';
import { RootLayout } from './layout/root-layout';
import { MainLayout } from './layout/main-layout';

// import { RootLayout } from '@/pages/layout';

const LoginPage = lazy(() => import('@/pages/login'));
const HomePage = lazy(() => import('@/pages/home'));
const AddProjectPage = lazy(() => import('@/pages/add-project'));
const ProjectsPage = lazy(() => import('@/pages/projects'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <MainLayout />,
        children: [
          {
            path: '/',
            element: <HomePage />,
          },
          {
            path: '/projects',
            element: <ProjectsPage />,
          },
          {
            path: '/add-project',
            element: <AddProjectPage />,
          },
        ],
      },
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
