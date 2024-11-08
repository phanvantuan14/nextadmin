import React from 'react'
import Card from '../ui/dashboard/card/page'
import Transactions from '../ui/dashboard/transactions/page'
import Chart from '../ui/dashboard/chart/page'
import RightBar from '../ui/dashboard/rightbar/page'

function DashboardPage() {
   return (
      <div className='m-4 flex gap-4'>
         <div className='content-wapper'>
            <div className='flex sm:flex-col md:flex-row items-center justify-between gap-4'>
               <Card />
               <Card />
               <Card />
            </div>
            <Transactions />
            <Chart />
         </div>
         <div className='right-bar'>
            <RightBar />
         </div>
      </div>
   )
}

export default DashboardPage