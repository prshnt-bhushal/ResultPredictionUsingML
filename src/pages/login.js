import Link from 'next/link';
import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import Layout from '../../components/Layout';
import { getError } from '../../utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
// import LoadingSpinner from '@/components/LoadingSpinner';

export default function loginScreen() {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/profile');
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, password }) => {
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (res.error) {
        toast.error(res.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <Layout title="LOGIN">
      <form
        className="mx-auto pt-[80px] max-w-screen-sm shadow-md p-4 rounded-md text-center"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 pb-5 w-full text-2xl font-bold uppercase">
          welcome back
        </h1>
        <div className="mb-4">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            {...register('email', {
              required: 'Please enter email',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Please enter valid email',
              },
            })}
            id="email"
            placeholder="Email"
            className="w-[300px] p-2 border border-gray-300 rounded-md"
            autoFocus
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            {...register('password', {
              required: 'Please enter password',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
            })}
            id="password"
            placeholder="Password"
            className="w-[300px] p-2 border border-gray-300 rounded-md"
          />
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
        </div>
        <div className="mb-4">
          <button className="p-2 mb-4 w-[150px] text-white bg-teal-600 rounded-md hover:bg-teal-800">
            Login
          </button>
        </div>
        <div className="mb-4">
          Don&apos;t have an account? &nbsp;
          <Link
            href={`/register?redirect=${redirect || '/'} `}
            className="font-semibold uppercase hover:text-teal-600"
          >
            Register
          </Link>
        </div>
      </form>
    </Layout>
  );

  //   To check if the user is logged in or not and route next page accordingly
  // router.push('login?redirect=/profile')
}
