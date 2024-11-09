import { fetchUsers } from '@/app/lib/data'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import Search from '@/app/ui/dashboard/search/search'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function UsersPage({ searchParams }) {

   console.log(searchParams)
   const q = searchParams?.q || ""
   const page = searchParams?.page || 1
   const { count, users } = await fetchUsers(q, page);

   return (
      <div className='m-4'>
         <div className='flex items-center justify-between p-5 bg-[--bgSoft] rounded-md mb-4'>
            <Search placeholder={"Search user..."} />
            <Link href="/dashboard/users/add">
               <button className='p-2 bg-violet-600 rounded-lg'>Add New</button>
            </Link>
         </div>
         <table className="w-full m-4">
            <thead>
               <tr>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Created At</td>
                  <td>Role</td>
                  <td>Status</td>
                  <td>Action</td>
               </tr>
            </thead>
            <tbody>
               {users.map((user) => (
                  <tr key={user.id}>
                     <td className='pt-4'>
                        <div className='flex items-center gap-2'>
                           <Image
                              src={user.img || "/noavatar.png"}
                              alt=""
                              width={40}
                              height={40}
                              className='object-cover'
                           />
                           {user.username}
                        </div>
                     </td>
                     <td className='pt-4'>{user.email}</td>
                     <td className='pt-4'>{user.createdAt?.toString().slice(4, 16)}</td>
                     <td className='pt-4'>{user.isAdmin ? "Admin" : "Client"}</td>
                     <td className='pt-4'>{user.isActive ? "active" : "passive"}</td>
                     <td className='pt-4'>
                        <div className='flex items-center gap-2'>
                           <Link href={`/dashboard/users/${user.id}`}>
                              <button className='py-1 px-2 bg-teal-500 rounded-md'>
                                 View
                              </button>
                           </Link>
                           <form>
                              <input type="hidden" name="id" />
                              <button className='py-1 px-2 bg-red-500 rounded-md'>
                                 Delete
                              </button>
                           </form>
                        </div>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
         <Pagination count={count} />
      </div>
   )
}

export default UsersPage