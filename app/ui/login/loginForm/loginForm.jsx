"use client"
import { signIn } from '@/app/lib/actions';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


function LoginForm() {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const router = useRouter();

   const handleSubmit = async (event) => {
      event.preventDefault();

      try {
         await signIn(username, password);
         router.push("/dashboard");
      } catch (error) {
         setError(error.message);
      }
   };
   return (
      <form
         onSubmit={handleSubmit}
         className='flex flex-col items-center'>
         <h1 className='text-[24px] font-bold pb-4'>Login</h1>
         <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='input-custom' type="text" placeholder='Username' />
         <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='input-custom' type="password" placeholder='Password' />
         <button
            type='submit'
            className='p-4 w-full bg-teal-500 rounded-md mt-2'>Login</button>

         {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
   )
}

export default LoginForm