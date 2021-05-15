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

    const data = {
        slidesPerView: 1.2, 
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            clickable: true,
            // el: '.swiper-pagination',
            // type: 'bullets',
        },
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: true,
        className: "mySwiper",
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 1.2,
                spaceBetween: 20
              },
              1024: {
                  slidesPerView: 1.2,
                  spaceBetween: 30,
              },
              1200: {
                  slidesPerView: 1.2,
                  spaceBetween: 30,
              }

        }
    }

    return (
        <>
            <Swiper 
                {...data}>
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
