import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// <a href="https://ibb.co/P47h7mm"><img src="https://i.ibb.co/82W5WKK/assignment2.png" alt="assignment2" border="0"></a>
// <a href="https://ibb.co/5RTTfWp"><img src="https://i.ibb.co/ZMddk64/assignment3.png" alt="assignment3" border="0"></a>
// <a href="https://ibb.co/hR8C8hG"><img src="https://i.ibb.co/vxzDzgN/assignment8.png" alt="assignment8" border="0"></a>
// <a href="https://ibb.co/QcyD86s"><img src="https://i.ibb.co/ZJq2Hhy/assignment9.png" alt="assignment9" border="0"></a>
// <a href="https://ibb.co/d4141JD"><img src="https://i.ibb.co/nMZMZ8j/assignment10.png" alt="assignment10" border="0"></a>
// <a href="https://ibb.co/992b9vd"><img src="https://i.ibb.co/qM9NMn2/assignment11.png" alt="assignment11" border="0"></a>
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
                    <img className='md:w-[800px] md:mx-auto' src="https://i.ibb.co/82W5WKK/assignment2.png" />
                    <div className="">
                        <button className='absolute bottom-5 left-1/2 -translate-x-1/2 p-5 rounded-lg shadow-xl bg-gradient-to-r from-[#64CCC5] to-[#bcf2ee] border border-black font-semibold'>View More</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative'>
                    <img className='md:w-[800px] md:mx-auto' src="https://i.ibb.co/ZMddk64/assignment3.png" />
                    <div className="">
                        <button className='absolute bottom-5 left-1/2 -translate-x-1/2 p-5 rounded-lg shadow-xl bg-gradient-to-r from-[#64CCC5] to-[#bcf2ee] border border-black font-semibold'>View More</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative'>
                    <img className='md:w-[800px] md:mx-auto' src="https://i.ibb.co/vxzDzgN/assignment8.png" />
                    <div className="">
                        <button className='absolute bottom-5 left-1/2 -translate-x-1/2 p-5 rounded-lg shadow-xl bg-gradient-to-r from-[#64CCC5] to-[#bcf2ee] border border-black font-semibold'>View More</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative'>
                    <img className='md:w-[800px] md:mx-auto' src="https://i.ibb.co/ZJq2Hhy/assignment9.png" />
                    <div className="">
                        <button className='absolute bottom-5 left-1/2 -translate-x-1/2 p-5 rounded-lg shadow-xl bg-gradient-to-r from-[#64CCC5] to-[#bcf2ee] border border-black font-semibold'>View More</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative'>
                    <img className='md:w-[800px] md:mx-auto' src="https://i.ibb.co/nMZMZ8j/assignment10.png" />
                    <div className="">
                        <button className='absolute bottom-5 left-1/2 -translate-x-1/2 p-5 rounded-lg shadow-xl bg-gradient-to-r from-[#64CCC5] to-[#bcf2ee] border border-black font-semibold'>View More</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative'>
                    <img className='md:w-[800px] md:mx-auto' src="https://i.ibb.co/qM9NMn2/assignment11.png" />
                    <div className="">
                        <button className='absolute bottom-5 left-1/2 -translate-x-1/2 p-5 rounded-lg shadow-xl bg-gradient-to-r from-[#64CCC5] to-[#bcf2ee] border border-black font-semibold'>View More</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative'>
                    <img className='md:w-[800px] md:mx-auto' src="https://i.ibb.co/4VJSYNW/assignment12.png" />
                    <div className="">
                        <button className='absolute bottom-5 left-1/2 -translate-x-1/2 p-5 rounded-lg shadow-xl bg-gradient-to-r from-[#64CCC5] to-[#bcf2ee] border border-black font-semibold'>View More</button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};
// <a href="https://ibb.co/W2szPKn"><img src="https://i.ibb.co/4VJSYNW/assignment12.png" alt="assignment12" border="0"></a>

export default Projects;