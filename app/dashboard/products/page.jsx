import Pagination from '@/app/ui/dashboard/pagination/pagination'
import Search from '@/app/ui/dashboard/search/search'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProductsPage() {
   return (
      <div className='m-4'>
         <div className='flex items-center justify-between p-5 bg-[--bgSoft] rounded-md mb-4'>
            <Search placeholder={"Search product..."} />
            <Link href="/dashboard/products/add">
               <button className='p-2 bg-violet-600 rounded-lg'>Add New</button>
            </Link>
         </div>
         <table className="w-full m-4">
            <thead>
               <tr>
                  <td>Title</td>
                  <td>Description</td>
                  <td>Price</td>
                  <td>Created At</td>
                  <td>Stock</td>
                  <td>Action</td>
               </tr>
            </thead>
            <tbody>
               <tr >
                  <td className='pt-4'>
                     <div className='flex items-center gap-2'>
                        <Image
                           src="/noproduct.jpg"
                           alt=""
                           width={40}
                           height={40}
                           className='object-cover'
                        />
                        Iphone
                     </div>
                  </td>
                  <td className='pt-4'>Decs</td>
                  <td className='pt-4'>$100</td>
                  <td className='pt-4'>12/04/2020</td>
                  <td className='pt-4'>30</td>
                  <td className='pt-4'>
                     <div className='flex items-center gap-2'>
                        <Link href={`/dashboard/products/proid`}>
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
         <Pagination />
      </div>
   )
}

export default ProductsPage