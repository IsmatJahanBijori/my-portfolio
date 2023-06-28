import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import { Link } from 'react-router-dom';
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper";

// <a href="https://ibb.co/P47h7mm"><img src="https://i.ibb.co/82W5WKK/assignment2.png" alt="assignment2" border="0"></a>
// <a href="https://ibb.co/5RTTfWp"><img src="https://i.ibb.co/ZMddk64/assignment3.png" alt="assignment3" border="0"></a>
// <a href="https://ibb.co/hR8C8hG"><img src="https://i.ibb.co/vxzDzgN/assignment8.png" alt="assignment8" border="0"></a>
// <a href="https://ibb.co/QcyD86s"><img src="https://i.ibb.co/ZJq2Hhy/assignment9.png" alt="assignment9" border="0"></a>
// <a href="https://ibb.co/d4141JD"><img src="https://i.ibb.co/nMZMZ8j/assignment10.png" alt="assignment10" border="0"></a>
// <a href="https://ibb.co/992b9vd"><img src="https://i.ibb.co/qM9NMn2/assignment11.png" alt="assignment11" border="0"></a>
// <a href="https://ibb.co/4dFLVGZ"><img src="https://i.ibb.co/xH2b70S/practise.png" alt="practise" border="0"></a>
const Projects = () => {
    return (

        <Swiper
            effect={"flip"}
            grabCursor={true}
            pagination={true}
            navigation={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img className='md:w-[800px] md:mx-auto' src="https://i.ibb.co/82W5WKK/assignment2.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='md:w-[800px] md:mx-auto' src="https://i.ibb.co/ZMddk64/assignment3.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='md:w-[800px] md:mx-auto' src="https://i.ibb.co/ZJq2Hhy/assignment9.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='md:w-[800px] md:mx-auto' src="https://i.ibb.co/nMZMZ8j/assignment10.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='md:w-[800px] md:mx-auto' src="https://i.ibb.co/qM9NMn2/assignment11.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='md:w-[800px] md:mx-auto' src="https://i.ibb.co/4VJSYNW/assignment12.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='md:w-[800px] md:mx-auto' src="https://i.ibb.co/xH2b70S/practise.png" />
            </SwiperSlide>

        </Swiper>
    );
};
// <a href="https://ibb.co/W2szPKn"><img src="https://i.ibb.co/4VJSYNW/assignment12.png" alt="assignment12" border="0"></a>

export default Projects;