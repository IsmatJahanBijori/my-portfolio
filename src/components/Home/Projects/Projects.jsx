import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Projects = () => {
    return (

        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='relative'>
                    <img className='md:w-[800px] md:mx-auto' src="https://swiperjs.com/demos/images/nature-1.jpg" />

                    <div className="">
                        <button className='absolute bottom-5 left-1/2 -translate-x-1/2 p-5 rounded-lg shadow-xl bg-gradient-to-r from-[#64CCC5] to-[#bcf2ee] border border-black font-semibold'>View More</button>
                    </div>

                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Projects;