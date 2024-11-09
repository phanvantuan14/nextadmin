import Image from 'next/image'
import React from 'react'

function SingleUserPage() {
   return (
      <div className='m-4 flex gap-4 rounded-md '>
         <div className='bg-[--bgSoft] flex-1 p-4 h-max'>
            <div className='w-full h-[280px] relative overflow-hidden mb-3'>
               <Image src='/noavatar.png' fill className='rounded-md object-cover' />
            </div>
            <span className='font-bold'>P-Tuan</span>
         </div>
         <div className='bg-[--bgSoft] content-wapper rounded-md p-4'>
            <form action='' className='flex flex-col'>
               <input type="hidden" name="id" />
               <label>Username</label>
               <input
                  className='input-custom' type="text"
                  name="username" placeholder='Username' />
               <label>Email</label>
               <input
                  className='input-custom'
                  type="email" name="email" placeholder='Email' />
               <label>Password</label>
               <input className='input-custom' type="password" name="password" placeholder='Password' />
               <label>Phone</label>
               <input
                  className='input-custom'
                  type="text" name="phone" placeholder='Phone' />
               <label>Address</label>
               <textarea
                  className='input-custom'
                  type="text" name="address" placeholder='Address' />
               <label>Is Admin?</label>
               <select className='input-custom' name="isAdmin" id="isAdmin">
                  <option value={true} >Yes</option>
                  <option value={false}>No</option>
               </select>
               <label>Is Active?</label>
               <select className='input-custom' name="isActive" id="isActive">
                  <option value={true}>Yes</option>
                  <option value={false} >No</option>
               </select>
               <button className='bg-teal-500 p-5 w-full rounded-md font-bold'>Update</button>
            </form>
         </div>
      </div>
   )
}

export default SingleUserPage