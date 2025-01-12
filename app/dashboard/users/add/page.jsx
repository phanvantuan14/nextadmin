import { addUser } from '@/app/lib/actions'
import React from 'react'

function AddUserPage() {
   return (
      <div className='m-4 bg-[--bgSoft]'>
         <form action={addUser} className='p-4 flex flex-wrap justify-between'>
            <input
               type="text"
               name='username'
               placeholder='Username'
               className='input-custom w-[48%]' />
            <input
               type="email"
               name='email'
               placeholder='Email'
               className='input-custom w-[48%]' />
            <input
               type="password"
               placeholder='Password'
               name='password'
               required
               className='input-custom w-[48%]' />
            <input
               type="text"
               name='phone'
               placeholder='Phone'
               className='input-custom w-[48%]' />
            <select
               name="isAdmmin" id="isAdmin"
               className='input-custom w-[48%] outline-none' >
               <option value={false}>Is Admin?</option>
               <option value={true}>Yes</option>
               <option value={false}>No</option>
            </select>
            <select
               name="isActive" id="isActive"
               className='input-custom w-[48%] outline-none'>
               <option value={true}>Is Active?</option>
               <option value={true}>Yes</option>
               <option value={false}>No</option>
            </select>
            <textarea
               name="address"
               id="address"
               rows="10"
               placeholder="Address..."
               className='input-custom w-full'
            ></textarea>
            <button
               className='bg-teal-500 p-5 w-full rounded-md font-bold'>
               Submit
            </button>
         </form>
      </div>
   )
}

export default AddUserPage