import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Products = () => {
  return (
    <div className='bg-main min-vh-100 container my-5'>
          <h2 className='main-color text-center'>Our Products:</h2>
           <div className=" my-3 d-flex justify-content-center align-items-center ">
          <span>
            <Link to="" className=''> <button className='custom-btn fs-5 fw-semibold mx-2'> Boys</button> </Link>
          </span>
          <span>
            <Link to="girl"> <button className='custom-btn fs-5 fw-semibold mx-2'> Girls</button> </Link>
          </span>
          <span>
            <Link to="baby"> <button className='custom-btn fs-5 fw-semibold mx-2'> Babies</button> </Link>
          </span>
          <span>
            <Link to="soft"> <button className='custom-btn fs-5 fw-semibold mx-2'> Soft's toys</button> </Link>
          </span>

          
        </div>
        <Outlet/>
    </div>
  )
}

export default Products