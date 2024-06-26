import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';



const Carousel = ({children}) => {
     const settings = {
          dots:true,
          infinite: false,
          speed: 900,
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          arrows:false,
          responsive: [
               {
                 breakpoint: 1300,
                 settings: {
                   slidesToShow: 3,
                   slidesToScroll: 3,
                 }
               },
               {
                 breakpoint: 1150,
                 settings: {
                   slidesToShow: 2,
                   slidesToScroll: 2,
                   initialSlide: 1
                 }
               },
               {
                 breakpoint: 786,
                 settings: {
                   slidesToShow: 1,
                   slidesToScroll: 1
                 }
               }
             ]
     }
  return (
    <div className=''>
          <Slider {...settings}>
               {children}
          </Slider>
    </div>
  )
}

export default Carousel
