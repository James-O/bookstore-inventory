import React from 'react';
import {FaStar} from 'react-icons/fa6'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

function Reviews() {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

        <div>
            {/* swiper */}
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                clickable: true,
                }}
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
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <div className='flex text-amber-500'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                        {/* text */}
                        <div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, explicabo vel soluta nulla temporibus quibusdam tenetur distinctio, recusandae minima veniam cumque nisi incidunt illo ipsum id tempora excepturi alias adipisci.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className='flex text-amber-500'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                        {/* text */}
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro nihil omnis excepturi deserunt tempora beatae, facere, minima aut eaque distinctio quibusdam explicabo tenetur ut delectus laudantium veritatis, saepe impedit obcaecati.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className='flex text-amber-500'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                        {/* text */}
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestiae provident libero harum tempore saepe, numquam possimus veniam natus maxime reiciendis eveniet in quasi cupiditate, facilis ipsum voluptate sit. Animi?</p>
                        </div>
                    </div>
                </SwiperSlide>
                
                {/* <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </div>
    </div>
  )
}

export default Reviews