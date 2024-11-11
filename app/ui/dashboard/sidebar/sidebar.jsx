import React from 'react'
import {
   MdDashboard,
   MdSupervisedUserCircle,
   MdShoppingBag,
   MdAttachMoney,
   MdWork,
   MdAnalytics,
   MdPeople,
   MdOutlineSettings,
   MdHelpCenter,
   MdLogout,
   MdLogin,
   MdSignLanguage,
} from "react-icons/md";
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';
import { logOut } from '@/app/lib/actions';
import { getSession } from '@/app/lib/session';

const menuItems = [
   {
      title: "Pages",
      list: [
         {
            title: "Dashboard",
            path: "/dashboard",
            icon: <MdDashboard />,
         },
         {
            title: "Users",
            path: "/dashboard/users",
            icon: <MdSupervisedUserCircle />,
         },
         {
            title: "Products",
            path: "/dashboard/products",
            icon: <MdShoppingBag />,
         },
         {
            title: "Transactions",
            path: "/dashboard/transactions",
            icon: <MdAttachMoney />,
         },
      ],
   },
   {
      title: "Analytics",
      list: [
         {
            title: "Revenue",
            path: "/dashboard/revenue",
            icon: <MdWork />,
         },
         {
            title: "Reports",
            path: "/dashboard/reports",
            icon: <MdAnalytics />,
         },
         {
            title: "Teams",
            path: "/dashboard/teams",
            icon: <MdPeople />,
         },
      ],
   },
   {
      title: "User",
      list: [
         {
            title: "Settings",
            path: "/dashboard/settings",
            icon: <MdOutlineSettings />,
         },
         {
            title: "Help",
            path: "/dashboard/help",
            icon: <MdHelpCenter />,
         },
      ],
   },
];

async function SideBar() {
   const session = await getSession()
   return (
      <div className='p-5 bg-[--bgSoft] sticky'>
         <div className='pb-5 flex items-center gap-5'>
            <Image src="/noavatar.png" alt='avatar'
               width={50}
               height={50}
               className='rounded-full'
            />
            <div>
               <h4 className='text-[16px] font-bold'>{session?.username || 'user'}</h4>
               <span className='text-[14px] text-gray-400'>Administrator</span>
            </div>
         </div>
         <ul>
            {menuItems.map((cat) => (
               <li key={cat.title}>
                  <span> {cat.title}</span>
                  {cat.list.map((item) => (
                     <MenuLink key={item.title} item={item} />
                  ))}
               </li>
            ))}
         </ul>

         <form action={logOut}>
            <button
               className='flex w-full items-center gap-4 text-[16px] p-3 hover:bg-[#2e374a] rounded-lg my-3'>
               {session ? (
                  <>
                     <MdLogout /> Logout
                  </>
               ) : (
                  <>
                     <MdLogin /> Login
                  </>
               )}
            </button>
         </form>

         <button
            className='flex w-full items-center gap-4 text-[16px] p-3 hover:bg-[#2e374a] rounded-lg my-3'>
            {!session && (<><MdSignLanguage /> Register</>)}
         </button>
      </div>
   )
}

export default SideBar