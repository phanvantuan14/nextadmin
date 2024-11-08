import Image from 'next/image'
import React from 'react'

function Transactions() {
   return (
      <div className='mt-4 p-4 bg-[--bgSoft] rounded-md'>
         <h2 className='text-[22px] text-gray-300 pb-5'>Latest Transactions</h2>
         <table className='w-full m-3'>
            <thead>
               <tr>
                  <td>Name</td>
                  <td>Status</td>
                  <td>Date</td>
                  <td>Amount</td>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td className='pt-4'>
                     <div className='flex items-center gap-2'>
                        <Image
                           src="/noavatar.png"
                           alt=""
                           width={40}
                           height={40}
                           className='rounded-full'
                        />
                        John Doe
                     </div>
                  </td>
                  <td>
                     <span className='pending p-2 rounded-md'>
                        Pending
                     </span>
                  </td>
                  <td>14.02.2024</td>
                  <td>$3.200</td>
               </tr>
               <tr>
                  <td className='pt-4'>
                     <div className='flex items-center gap-2'>
                        <Image
                           src="/noavatar.png"
                           alt=""
                           width={40}
                           height={40}
                           className='rounded-full'
                        />
                        John Doe
                     </div>
                  </td>
                  <td>
                     <span className='done p-2 rounded-md'>Done</span>
                  </td>
                  <td>14.02.2024</td>
                  <td>$3.200</td>
               </tr>
               <tr>
                  <td className='pt-4'>
                     <div className='flex items-center gap-2'>
                        <Image
                           src="/noavatar.png"
                           alt=""
                           width={40}
                           height={40}
                           className='rounded-full'
                        />
                        John Doe
                     </div>
                  </td>
                  <td>
                     <span className='cancelled p-2 rounded-md'>
                        Cancelled
                     </span>
                  </td>
                  <td>14.02.2024</td>
                  <td>$3.200</td>
               </tr>
               <tr>
                  <td className='pt-4'>
                     <div className='flex items-center gap-2'>
                        <Image
                           src="/noavatar.png"
                           alt=""
                           width={40}
                           height={40}
                           className='rounded-full'
                        />
                        John Doe
                     </div>
                  </td>
                  <td>
                     <span className='pending p-2 rounded-md'>
                        Pending
                     </span>
                  </td>
                  <td>14.02.2024</td>
                  <td>$3.200</td>
               </tr>
            </tbody>
         </table>
      </div>
   )
}

export default Transactions