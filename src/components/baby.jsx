import React from 'react'
import babies from "../../baby.js"

const Baby = () => {
  return (
    <div className=' container'> 
    <h3 className=' text-center'>Baby's Supplies</h3>
    <div className=' d-flex row mt-3'>
    {
    babies.map((item)=>
     <div className=' col-lg-3 ' key={item.id} >
       <div className='w-100 my-2 custom-border rounded-3 p-4'>
       <img src={item.image} className='w-100'/>
       <p className='main-color text-center fs-5 fw-semibold '>{item.title}</p>
       <p className='text-center lead'>{item.desc}</p>
       <p><span className='main-color fw-bold'>Price: </span>{item.price} EGP</p>
       </div>
     </div>
 
     )
   }
    </div>
   </div>
  )
}

export default Baby