import React from 'react'
import { signUp } from '@/app/lib/actions'

function RegisterForm() {
   return (
      <form
         action={signUp}
         className='flex flex-col items-center  bg-[--bgSoft] rounded-md p-12' >
         <h1 className='text-[24px] font-bold pb-4'>Register</h1>
         <input name="username" className='input-custom' type="text" placeholder='Username' />
         <input name="email" className='input-custom' type="email" placeholder='Email' />
         <input name="password" className='input-custom' type="password" placeholder='Password' />
         <button className='p-4 w-full bg-teal-500 rounded-md mt-2'>Register</button>
      </form>
   )
}

export default RegisterForm