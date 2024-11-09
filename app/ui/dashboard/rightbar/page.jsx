import Image from 'next/image'
import React from 'react'
import { MdPlayCircleFilled } from 'react-icons/md'

function RightBar() {
   return (
      <div className="fixed flex flex-col items-center gap-4 mr-4">
         <div className="bg-gradient-to-t from-[#182237] to-[#253352] p-5 rounded-lg mb-5 relative">
            <div className="absolute right-0 bottom-0 w-1/2 h-1/2">
               <Image src="/astronaut.png" alt="" fill className="object-contain opacity-20" />
            </div>
            <div className="flex flex-col gap-6">
               <span className="font-bold text-[16px]">🔥 Available Now</span>
               <h3 className="font-bold text-[18px]">
                  How to use the new version of the admin dashboard?</h3>
               <span className="text-[12px] font-medium text-[var(--textSoft)]">Takes 4 minutes to learn</span>
               <p className="text-[14px] text-[var(--textSoft)]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero perspiciatis recusandae possimus.
               </p>
               <button
                  className="px-3 py-2 flex items-center gap-2 bg-[#5d57c9] rounded-md font-bold text-white cursor-pointer">
                  <MdPlayCircleFilled size={18} />
                  Watch
               </button>
            </div>
         </div>
      </div>

   )
}

export default RightBar