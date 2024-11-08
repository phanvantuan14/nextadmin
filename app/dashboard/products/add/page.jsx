import React from 'react'

function AddProductPage() {
   return (
      <div className='m-4 bg-[--bgSoft]'>
         <form action="" className='p-4 flex flex-wrap justify-between'>
            <input type="text" placeholder='Title' className='input-custom w-[48%]' />
            <select
               name="cat" id="cat"
               className='input-custom w-[48%] outline-none' >
               <option value="general">Choose a Category</option>
               <option value="kitchen">Kitchen</option>
               <option value="phone">Phone</option>
               <option value="computer">Computer</option>
            </select>
            <input type="number" placeholder='Price' className='input-custom w-[48%]' />
            <input type="number" placeholder='Stock' className='input-custom w-[48%]' />
            <input type="text" placeholder='Color' className='input-custom w-[48%]' />
            <input type="text" placeholder='Size' className='input-custom w-[48%]' />
            <textarea
               name="desc"
               id="desc"
               rows="10"
               placeholder="Description..."
               className='input-custom w-full'
            ></textarea>
            <button className='bg-teal-500 p-5 w-full rounded-md font-bold'>Submit</button>
         </form>
      </div>
   )
}

export default AddProductPage