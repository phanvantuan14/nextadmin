"use client"
import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'


function Pagination({ count }) {
   const searchParams = useSearchParams()
   const { replace } = useRouter()
   const pathname = usePathname()

   const page = searchParams.get("page") || 1;

   const params = new URLSearchParams(searchParams);
   const ITEM_PER_PAGE = 2;

   const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0
   const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count

   const handleChangePage = (type) => {
      type === "prev"
         ? params.set("page", parseInt(page) - 1)
         : params.set("page", parseInt(page) + 1);
      replace(`${pathname}?${params}`);
   }


   return (
      <div className='flex items-center justify-between px-4'>
         <button
            className='py-1 px-2 bg-white rounded-md text-black cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={!hasPrev}
            onClick={() => handleChangePage("prev")}>
            Previous
         </button>
         <button
            className='py-1 px-2 bg-white rounded-md text-black cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={!hasNext}
            onClick={() => handleChangePage("next")}>
            Next
         </button>

      </div>
   )
}

export default Pagination