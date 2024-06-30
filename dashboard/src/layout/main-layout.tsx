import { Navbar } from '@/components/shared/navbar';
import { getUser } from '@/utils/helper';
import { Navigate } from 'react-router-dom';

export function MainLayout() {
  const user = getUser();

  if (!user) return <Navigate to={'/login'} />;

  return (
    <>
      <Navbar />
    </>
  );
}
