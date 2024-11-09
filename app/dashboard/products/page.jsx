import { deleteProduct } from '@/app/lib/actions'
import { fetchProducts } from '@/app/lib/data'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import Search from '@/app/ui/dashboard/search/search'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


async function ProductsPage({ searchParams }) {

   const q = searchParams?.q || ""
   const page = searchParams?.page || 1
   const { count, products } = await fetchProducts(q, page);


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
               {products.map((product) => (
                  <tr >
                     <td className='pt-4'>
                        <div className='flex items-center gap-2'>
                           <Image
                              src={product.img || "/noproduct.jpg"}
                              alt="Product"
                              width={40}
                              height={40}
                              className='object-cover rounded-sm'
                           />
                           {product.title}
                        </div>
                     </td>
                     <td className='pt-4'>{product.desc}</td>
                     <td className='pt-4'>${product.price}</td>
                     <td className='pt-4'>{product.createdAt?.toString().slice(4, 16)}</td>
                     <td className='pt-4'>{product.stock}</td>
                     <td className='pt-4'>
                        <div className='flex items-center gap-2'>
                           <Link href={`/dashboard/products/${product.id}`}>
                              <button className='py-1 px-2 bg-teal-500 rounded-md'>
                                 View
                              </button>
                           </Link>
                           <form action={deleteProduct}>
                              <input type="hidden" name="id" value={product.id} />
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

export default ProductsPage