import React from 'react'
import LoginForm from '../ui/login/loginForm/loginForm'
import Link from 'next/link'
import { MdArrowRight } from 'react-icons/md'

function LoginPage() {
   return (
      <div className='w-auto h-screen flex items-center justify-center'>
         <div className='w-[400px] flex items-center justify-center flex-col bg-[--bgSoft] rounded-md p-12 gap-4'>
            <LoginForm />
            <Link className='hover:text-orange-600 flex items-center gap-1' href={"/dashboard"}>
               Dashboard <MdArrowRight />
            </Link>
         </div>
      </div>

   )
}

export default LoginPage