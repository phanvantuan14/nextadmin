import React from 'react'
import { MdSupervisedUserCircle } from "react-icons/md";

function Card({ item }) {
   return (
      <div className='w-full flex p-5 rounded-md gap-2 bg-[--bgSoft] hover:bg-[#2e374a]'>
         <MdSupervisedUserCircle size={24} />
         <div className='flex flex-col gap-3'>
            <span className='text-[16px] font-bold'>Total Users</span>
            <span className='text-[22px] font-bold'>10.3422</span>
            <span className='text-[14px]'>
               <span className='text-green-500' >12%</span> more than previous week
            </span>
         </div>
      </div>
   )
}

export default Card