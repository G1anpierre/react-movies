import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination
} from 'swiper/core';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "../../swipe-styles.css";

import CarruserItem from '../carrusel-item/carrusel-item';
SwiperCore.use([Pagination]);



const Carrusel = ({imageGroup}) => {
    return (
        <>
            <Swiper 
                slidesPerView={1.2} 
                centeredSlides={true} 
                spaceBetween={30}
                pagination={{"clickable": true}} 
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                className="mySwiper">
                {imageGroup.map((element, index) => (
                    <SwiperSlide key={index}>
                        <CarruserItem image={element}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Carrusel;
