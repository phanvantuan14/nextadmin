import React from 'react'
import { MdSearch } from 'react-icons/md'

function Search({ placeholder }) {
   return (
      <div className='flex items-center p-2 bg-[#2e374a] rounded-md w-max'>
         <MdSearch size={20} />
         <input type="text" className='bg-transparent pl-2' placeholder={placeholder} />
      </div>
   )
}

export default Search