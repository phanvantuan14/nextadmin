import Search from '@/app/ui/dashboard/search/search'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function UsersPage() {
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
               <tr >
                  <td className='pt-3'>
                     <div className='flex items-center gap-2'>
                        <Image
                           src="/noavatar.png"
                           alt=""
                           width={40}
                           height={40}
                           className='rounded-full object-cover'
                        />
                        P-Tuan
                     </div>
                  </td>
                  <td className='pt-3'>pvtuan05@gmail.com</td>
                  <td className='pt-3'>14/05/2002</td>
                  <td className='pt-3'>Admin</td>
                  <td className='pt-3'>Active</td>
                  <td className='pt-3'>
                     <div className='flex items-center gap-2'>
                        <Link href={`/dashboard/users/userId`}>
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
               {/* 2 */}
               <tr >
                  <td className='pt-3'>
                     <div className='flex items-center gap-2'>
                        <Image
                           src="/noavatar.png"
                           alt=""
                           width={40}
                           height={40}
                           className='rounded-full object-cover'
                        />
                        P-Tuan
                     </div>
                  </td>
                  <td className='pt-3'>pvtuan05@gmail.com</td>
                  <td className='pt-3'>14/05/2002</td>
                  <td className='pt-3'>Admin</td>
                  <td className='pt-3'>Active</td>
                  <td className='pt-3'>
                     <div className='flex items-center gap-2'>
                        <Link href={`/dashboard/users/userId`}>
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
            </tbody>
         </table>
      </div>
   )
}

export default UsersPage