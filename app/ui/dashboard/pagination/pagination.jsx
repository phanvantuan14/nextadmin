import React from 'react'

function Pagination() {
   return (
      <div className='flex items-center justify-between px-4'>
         <button className='py-1 px-2 bg-gray-600 rounded-md text-black cursor-pointer' disabled>Previous</button>
         <button className='py-1 px-2 bg-white rounded-md text-black cursor-pointer'>Next</button>
      </div>
   )
}

export default Pagination