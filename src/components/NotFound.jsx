import React from 'react'

const NotFound = () => {
  return (
    <div className='w-25 m-auto mt-5'>
      <h2 className=' text-primary'> Not Found </h2>
    <Link to="home" > <button className='custom-btn fs-5 fw-semibold mx-1 py-2 fw-bold'> Home Page <i class="fa-solid fa-arrow-right ms-1"></i> </button> </Link>
    </div>
  )
}

export default NotFound