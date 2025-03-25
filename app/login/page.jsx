'use client';

import { useState } from 'react';
import { login, signup } from './actions';

export default function LoginPage() {
  const [email, setEmail] = useState('irabruce20@gmail.com');
  const [password, setPassword] = useState('Mars.b11');
  const [error, setError] = useState(null);

  return (
    <>
      {/* <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form> */}

      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800">Login</h1>
          {error && <p className="mt-2 text-red-500">{error}</p>}
          <form className="mt-4">
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border p-2"
              placeholder="enter your email"
            />
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-2 w-full rounded-lg border p-2"
              placeholder="enter your Password"
            />
            <button
              formAction={login}
              className="mt-4 w-full rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700"
            >
              Sign In
            </button>

            <button
              formAction={signup}
              className="mt-4 w-full rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
