import React from 'react'
import NavBar from '../ui/dashboard/navbar/navbar'
import SideBar from '../ui/dashboard/sidebar/sidebar'
import Footer from '../ui/dashboard/footer/footer'

function Layout({ children }) {
   return (
      <div className='flex'>
         <div className='side-bar'><SideBar /></div>
         <div className='content'>
            <NavBar />
            {children}
            <Footer />
         </div>
      </div>
   )
}

export default Layout