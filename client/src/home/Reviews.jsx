import React from 'react';
import {FaStar} from 'react-icons/fa6'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Avaterone from '../assets/bookimages/avaterone.avif'
import Avatertwo from '../assets/bookimages/avatertwo.avif'
import Avaterthree from '../assets/bookimages/avaterthree.avif'
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import { Avatar } from "flowbite-react";


function Reviews() {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

        <div>
            {/* swiper */}
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                // pagination={{
                // clickable: true,
                // }}
                breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                }}
                modules={[Pagination,Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='flex text-amber-500'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                        {/* text */}
                        <div className='mt-7'>
                            <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, explicabo vel soluta nulla temporibus quibusdam tenetur distinctio, recusandae minima veniam cumque nisi incidunt illo ipsum id tempora excepturi alias adipisci.</p>
                            <div className='flex gap-4'>
                                <Avatar 
                                    img={Avaterone} 
                                    alt="avatar of Jese" 
                                    rounded 
                                    className='w-10 mb-4'
                                />
                                <div>
                                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                                    <p className='text-base'>CEO, ABC Company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='flex text-amber-500'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                        {/* text */}
                        <div className='mt-7'>
                            <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sit ad exercitationem deserunt voluptate beatae mollitia quas repellat vel quae, nulla error porro totam odio ipsam porro totam odio ipsam nihil tenetur provident eligendi.</p>
                            <div className='flex gap-4'>
                                <Avatar 
                                    img={Avatertwo} 
                                    alt="avatar of Jese" 
                                    rounded 
                                    className='w-10 mb-4'
                                />
                                <div>
                                    <h5 className='text-lg font-medium'>Smart Ping</h5>
                                    <p className='text-base'>CEO, Kings Company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='flex text-amber-500'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                        {/* text */}
                        <div className='mt-7'>
                            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio odit dolorem quos culpa nulla deleniti eveniet cupiditate quo. Doloremque ad odit odio dolor, officia quaerat sapiente quasi perferendis quod ipsa?</p>
                            <div className='flex gap-4'>
                                <Avatar 
                                    img={Avaterthree} 
                                    alt="avatar of Jese" 
                                    rounded 
                                    className='w-10 mb-4'
                                />
                                <div>
                                    <h5 className='text-lg font-medium'>Money Ping</h5>
                                    <p className='text-base'>CEO, XYZ Company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='flex text-amber-500'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                        {/* text */}
                        <div className='mt-7'>
                            <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sit ad exercitationem deserunt voluptate beatae mollitia quas repellat vel quae, nulla error porro totam odio ipsam porro totam odio ipsam nihil tenetur provident eligendi.</p>
                            <div className='flex gap-4'>
                                <Avatar 
                                    img={Avatertwo} 
                                    alt="avatar of Jese" 
                                    rounded 
                                    className='w-10 mb-4'
                                />
                                <div>
                                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                                    <p className='text-base'>CEO, ABC Company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='flex text-amber-500'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                        {/* text */}
                        <div className='mt-7'>
                            <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, explicabo vel soluta nulla temporibus quibusdam tenetur distinctio, recusandae minima veniam cumque nisi incidunt illo ipsum id tempora excepturi alias adipisci.</p>
                            <div className='flex gap-4'>
                                <Avatar 
                                    img={Avaterone} 
                                    alt="avatar of Jese" 
                                    rounded 
                                    className='w-10 mb-4'
                                />
                                <div>
                                    <h5 className='text-lg font-medium'>Smart Ping</h5>
                                    <p className='text-base'>CEO, Kings Company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='flex text-amber-500'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                        {/* text */}
                        <div className='mt-7'>
                            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio odit dolorem quos culpa nulla deleniti eveniet cupiditate quo. Doloremque ad odit odio dolor, officia quaerat sapiente quasi perferendis quod ipsa?</p>
                            <div className='flex gap-4'>
                                <Avatar 
                                    img={Avaterthree} 
                                    alt="avatar of Jese" 
                                    rounded 
                                    className='w-10 mb-4'
                                />
                                <div>
                                    <h5 className='text-lg font-medium'>Money Ping</h5>
                                    <p className='text-base'>CEO, XYZ Company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Reviews