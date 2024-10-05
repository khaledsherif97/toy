import React from 'react'
import img from "../assets/cover.jpg"
import Sliderr from './Slider'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className=' container my-5 pt-5'>
      <div className='w-75 mx-auto '>
        {/* <img src={img}  className='w-100 rounded-3 shadow-lg'/> */}
        <Sliderr/>
      </div>
     <div className='w-25 m-auto mt-5'>
     <Link to="product" > <button className='custom-btn fs-5 fw-semibold mx-1 py-2 fw-bold'> Show the our products <i class="fa-solid fa-arrow-right ms-1"></i> </button> </Link>
     </div>
    </div>
  )
}

export default Home