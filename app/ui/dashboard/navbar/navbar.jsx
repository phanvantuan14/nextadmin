"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import {
   MdNotifications,
   MdOutlineChat,
   MdPublic,
   MdSearch,
} from "react-icons/md";

function NavBar() {
   const pathname = usePathname()
   const pageName = pathname.split("/").pop();
   const capitalizedPageName = pageName.charAt(0).toUpperCase() +
      pageName.slice(1).toLowerCase();


   return (
      <div className='m-4 
         bg-[--bgSoft] p-4 rounded-md 
         flex items-center justify-between'
      >
         <h3 className='text-[16px] font-bold text-gray-300'>
            {capitalizedPageName}
         </h3>
         <div className='flex items-center gap-5'>
            <div className='flex items-center p-2 bg-[#2e374a] rounded-md'>
               <MdSearch size={20} />
               <input type="text" className='bg-transparent pl-2' />
            </div>
            <div className='flex items-center gap-3'>
               <MdOutlineChat size={20} />
               <MdNotifications size={20} />
               <MdPublic size={20} />
            </div>
         </div>

      </div>
   )
}

export default NavBar