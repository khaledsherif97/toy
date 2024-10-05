import React from 'react'
import Slider from "react-slick";


const Sliderr = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        rtl: true
      };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="../../public/img/b1.jpg" alt="" className='w-100 p-1' />
        </div>
        <div>
        <img src="../img/s2.jpg" alt="" className='w-100 p-1' />
        </div>
        <div>
        <img src="../img/ba4.jpg" alt="" className='w-100 p-1' />
        </div>
        <div>
        <img src="../img/g7.jpg" alt="" className='w-100 p-1' />
        </div>
        <div>
        <img src="../img/g6.jpg" alt="" className='w-100 p-1' />
        </div>
        <div>
        <img src="../img/s2.jpg" alt="" className='w-100 p-1' />
        </div>
      </Slider>
    </div>
  )
}

export default Sliderr