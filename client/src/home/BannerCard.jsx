import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './BannerCard.css'
import {EffectCards,Autoplay} from 'swiper/modules'


function BannerCard() {
  return (
    <div className='banner'>
        <Swiper
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerCard