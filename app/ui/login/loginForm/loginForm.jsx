import React from 'react'

function LoginForm() {
   return (
      <form className='flex flex-col items-center  bg-[--bgSoft] rounded-md p-9' action="">
         <h1 className='text-[24px] font-bold pb-4'>Login</h1>
         <input className='input-custom' type="text" placeholder='Username' />
         <input className='input-custom' type="password" placeholder='Password' />
         <button className='p-4 w-full bg-teal-500 rounded-md mt-2'>Login</button>
      </form>
   )
}

export default LoginForm