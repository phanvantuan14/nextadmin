import { updateUser } from '@/app/lib/actions'
import { fetchUser } from '@/app/lib/data'
import Image from 'next/image'
import React from 'react'

async function SingleUserPage({ params }) {
   const { id } = params
   const user = await fetchUser(id)
   return (
      <div className='m-4 flex gap-4 rounded-md '>
         <div className='bg-[--bgSoft] flex-1 p-4 h-max'>
            <div className='w-full h-[280px] relative overflow-hidden mb-3'>
               <Image
                  src={user.img || '/noavatar.png'} fill
                  className='rounded-md object-cover' alt='User' />
            </div>
            <span className='font-bold'>{user.username}</span>
         </div>
         <div className='bg-[--bgSoft] content-wapper rounded-md p-4'>
            <form action={updateUser} className='flex flex-col'>
               <input type="hidden" name="id" value={user.id} />
               <label>Username</label>
               <input
                  className='input-custom' type="text"
                  name="username" placeholder={user.username} />
               <label>Email</label>
               <input
                  className='input-custom'
                  type="email" name="email"
                  placeholder={user.email} />
               <label>Password</label>
               <input
                  className='input-custom' type="password"
                  name="password" />
               <label>Phone</label>
               <input
                  className='input-custom'
                  type="text" name="phone"
                  placeholder={user.phone} />
               <label>Address</label>
               <textarea
                  className='input-custom'
                  type="text" name="address"
                  placeholder={user.address} />
               <label>Is Admin?</label>
               <select
                  className='input-custom'
                  name="isAdmin" id="isAdmin">
                  <option value={false}>Is Admin?</option>
                  <option value={true} >Yes</option>
                  <option value={false}>No</option>
               </select>
               <label>Is Active?</label>
               <select
                  className='input-custom'
                  name="isActive" id="isActive">
                  <option value={true}>Is Active?</option>
                  <option value={true}>Yes</option>
                  <option value={false} >No</option>
               </select>
               <button
                  className='bg-teal-500 p-5 w-full rounded-md font-bold'>
                  Update
               </button>
            </form>
         </div>
      </div>
   )
}

export default SingleUserPage