"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { MdSearch } from 'react-icons/md'
import { useDebouncedCallback } from 'use-debounce'

function Search({ placeholder }) {
   const searchParams = useSearchParams()
   const { replace } = useRouter()
   const pathname = usePathname()

   const handleSearch = useDebouncedCallback((e) => {
      const params = new URLSearchParams(searchParams)
      params.set("page", 1)
      if (e.target.value) {
         e.target.value.length > 2 && params.set("q", e.target.value)
      } else {
         params.delete("q")
      }
      replace(`${pathname}?${params}`)
   }, 300);

   return (
      <div className='flex items-center p-2 bg-[#2e374a] rounded-md w-max'>
         <MdSearch size={20} />
         <input
            type="text" className='bg-transparent pl-2'
            placeholder={placeholder}
            onChange={handleSearch} />
      </div>
   )
}

export default Search