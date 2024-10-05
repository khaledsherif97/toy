import React from 'react'
import Navbar from './navbar'

import { Outlet } from 'react-router-dom';

const LayOut = () => {
  return (
    <div><Navbar/>
    <Outlet/>
    {/* <Footer/>*/}
   </div>
  )
}

export default LayOut