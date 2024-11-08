"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function MenuLink({ item }) {

   const pathname = usePathname();

   return (
      <Link
         href={item.path}
         className={`flex items-center gap-4 p-3 hover:bg-[#2e374a] rounded-lg text-[16px] my-3 ${pathname === item.path ? 'bg-[#2e374a]' : ''}`}
      >
         {item.icon}
         {item.title}
      </Link>
   )
}

export default MenuLink