import React from 'react';
import { Background, Parallax } from 'react-parallax';
// import './Banner.css'
const Banner = () => {
    return (
        <Parallax blur={{ min: -15, max: 15 }} bgImage="https://i.ibb.co/b5qLBHj/bg.jpg" strength={100}>
            <div className="hero h-[1200px]">
                <div className="hero-content text-center text-neutral-content">
                    <div className='hero-overlay rounded-xl bg-opacity-30 w-[500px] md:w-[1600px] h-[1000px] lg:h-[700px]'>
                        <div className='mt-16 md:mt-32 text-left flex flex-col lg:flex-row md:ml-20'>
                            <div className='ml-5'>
                                <h1 className="mb-5 text-5xl font-bold">Hello <br /> Myself <span className='text-[#64CCC5]'>Bijori</span></h1>
                                <p className="mb-5 text-3xl font-semibold">A Junior <span className='text-[#64CCC5]'>React Developer</span></p>
                                <p className="mb-5 text-xl font-medium w-[300px] text-justify">Pave a prosperous journey in web development by honing my expertise in both front-end development. Aspire to craft user-friendly websites and applications that boast seamless functionality with visually appealing design, ultimately providing unparalleled user delight and fueling significant business results for clients.</p>
                            </div>
                            <div className='my-16 md:my-32 md:text-right ml-5 md:mx-20'>
                                <img src="https://i.ibb.co/7WjWp0s/IMG-20210213-140721.jpg" className='w-[400px]' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Banner;
// <a href="https://ibb.co/0MmM9zH"><img src="https://i.ibb.co/7WjWp0s/IMG-20210213-140721.jpg" alt="IMG-20210213-140721" border="0"></a>