import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { getError } from '../../utils/error';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function registerScreen({ setIsLoadingProps}) {
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
    getValues,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ sNum, name, email, password }) => {
    setIsLoadingProps(true); // Set loading state to true
    try {
      await axios.post('/api/auth/signup', { sNum, name, email, password });

      const res = await signIn('credentials', {
        redirect: false,
        sNum,
        name,
        email,
        password,
      });
      if (res.error) {
        toast.error(res.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
    setTimeout(() => {
      setIsLoadingProps(false); // Set loading state to false after 3 seconds
    }, 3000);
  };
  return (
    <Layout title="Create Account">
      <form
        className="mx-auto max-w-screen-sm shadow-md p-4 rounded-md text-center"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 pb-5 w-full text-2xl font-bold uppercase">
          Create An Account
        </h1>
        <div className="mb-4">
          <label htmlFor="sName" className="sr-only">
            Symbol Number
          </label>
          <input
            type="number"
            {...register('sNum', {
              required: 'Please enter Your Symbol Number',
              minLength: {
                value: 8,
                message: 'Symbol Number must be at least 8 Numbers long',
              },
            })}
            id="sNumber"
            placeholder="Symbol Number"
            className="w-[300px] p-2 border border-gray-300 rounded-md"
            autoFocus
          />
          {errors.sNum && (
            <div className="text-red-500">{errors.sNum.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            {...register('name', {
              required: 'Please enter Your Name',
            })}
            id="name"
            placeholder="Username"
            className="w-[300px] p-2 border border-gray-300 rounded-md"
          />
          {errors.name && (
            <div className="text-red-500">{errors.name.message}</div>
          )}
        </div>
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
          <label htmlFor="confirmPassword" className="sr-only">
            Confirm Password
          </label>
          <input
            type="password"
            {...register('confirmPassword', {
              required: 'Please enter confirm password',
              validate: (value) => value === getValues('password'),
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
            })}
            id="confirmPassword"
            placeholder="Confirm Password"
            className="w-[300px] p-2 border border-gray-300 rounded-md"
          />
          {errors.confirmPassword && (
            <div className="text-red-500">{errors.confirmPassword.message}</div>
          )}
          {errors.confirmPassword &&
            errors.confirmPassword.type === 'validate' && (
              <div className="text-red-500">Password do not match</div>
            )}
        </div>
        <div className="mb-4">
          <button className="p-2 mb-4 w-[150px] text-white bg-teal-600 rounded-md hover:bg-teal-800">
            Register
          </button>
        </div>
        <div className="mb-4">
          Already have an account? &nbsp;
          <Link
            href={`/login?redirect=${redirect || '/'}`}
            className="font-semibold uppercase hover:text-teal-600"
          >
            Login
          </Link>
        </div>
      </form>
    </Layout>
  );
}
