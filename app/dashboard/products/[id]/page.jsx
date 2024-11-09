import Image from 'next/image'
import React from 'react'

function SingleProductPage() {
   return (
      <div className='m-4 flex gap-4 rounded-md '>
         <div className='bg-[--bgSoft] flex-1 p-4 h-max'>
            <div className='w-full h-[280px] relative overflow-hidden mb-3'>
               <Image src="/noproduct.jpg" fill className='rounded-md object-cover' />
            </div>
            <span className='font-bold'>Iphone</span>
         </div>
         <div className='bg-[--bgSoft] content-wapper rounded-md p-4'>
            <form action='' className='flex flex-col'>
               <input type="hidden" name="id" />
               <label>Title</label>
               <input
                  className='input-custom' type="text"
                  name="title" placeholder='Title' />
               <label>Price</label>
               <input
                  className='input-custom'
                  type="number" name="price" placeholder='price' />
               <label>Stock</label>
               <input className='input-custom' type="number" name="stock" placeholder='Stock' />
               <label>Color</label>
               <input
                  className='input-custom'
                  type="text" name="color" placeholder='Color' />
               <label>Size</label>
               <input
                  className='input-custom'
                  type="text" name="size" placeholder='Size' />
               <label>Categories</label>
               <select
                  name="cat" id="cat"
                  className='input-custom outline-none' >
                  <option value="general">Choose a Category</option>
                  <option value="kitchen">Kitchen</option>
                  <option value="phone">Phone</option>
                  <option value="computer">Computer</option>
               </select>
               <label>Description</label>
               <textarea
                  name="desc"
                  id="desc"
                  rows="10"
                  placeholder="Description..."
                  className='input-custom w-full'
               ></textarea>
               <button className='bg-teal-500 p-5 w-full rounded-md font-bold'>Update</button>
            </form>
         </div>
      </div>
   )
}

export default SingleProductPage