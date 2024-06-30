/* eslint-disable @typescript-eslint/no-explicit-any */

import { CustomInput } from '@/components/shared/custom-input';
import { Button } from '@/components/ui/button';
import { apiUrl } from '@/data';
import { fetchOption, setToken } from '@/utils/helper';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function LoginPage() {
  const navigate = useNavigate();
  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement & {
      userName: { value: string };
      password: { value: string };
    };

    const userName = form.userName.value;
    const password = form.password.value;
    const toastId = toast.loading('Logging in...');

    try {
      const response = await fetch(
        apiUrl.login,
        fetchOption({ method: 'POST', body: { userName, password } }),
      );
      const responseData = await response.json();
      if (!responseData.ok) throw new Error(responseData.message);

      setToken(responseData?.data?.token);
      form.reset();
      toast.success(responseData.message, { id: toastId });
      navigate('/');
    } catch (err: any) {
      toast.error(err.message, { id: toastId });
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="mx-auto w-full max-w-[450px] rounded-md p-10 shadow-none sm:bg-slate-100 sm:shadow-md">
        <h1 className="mb-2 text-center text-lg font-semibold sm:text-2xl">
          Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="mx-auto mt-8 flex w-full flex-col gap-3"
        >
          <CustomInput
            name="userName"
            label="User Name"
            placeholder="Input username"
            required
          />
          <CustomInput
            name="password"
            label="Password"
            type="password"
            placeholder="Input password"
            required
          />

          <Button className="mt-3 w-full text-white">Submit</Button>
        </form>
      </div>
    </section>
  );
}
