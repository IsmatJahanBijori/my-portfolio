import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import { BsGithub, BsFillHousesFill, BsFillTelephoneFill, BsTelegram } from "react-icons/bs";
const Footer = () => {
    return (

        <footer
            className="px-4 mx-auto text-center text-neutral-600 bg-slate-300 lg:text-left shadow-lg">
            <div
                className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
                <div className="ml-40 hidden lg:block">
                    <span>Get connected with me on social networks:</span>
                </div>
                <div className="flex justify-center h-5 md:mr-40">

                    <a href='https://www.facebook.com/profile.php?id=100013334982970' className="mr-6 text-blue-500 ">
                        <FaFacebookF/>
                    </a>
                    
                    <a href='https://ismatjahanbijori@gmail.com' className="mr-6 text-black">
                        <MdOutlineMailOutline/>
                    </a>

                    <a href='https://www.linkedin.com/in/ismat-jahan-bijori-a64790222' className="mr-6 text-blue-500">
                        <FiLinkedin/>
                    </a>
                    <a href="https://github.com/IsmatJahanBijori" className="text-black">
                        <BsGithub/>
                    </a>
                </div>
            </div>

            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid-1 grid gap-8 md:grid-cols-3 justify-around">
                    <div className="uppercase md:pl-48">
                    <button className='p-5 rounded-lg shadow-xl bg-gradient-to-r from-[#64CCC5] to-[#bcf2ee] border border-black'><a href="/public/Github.pdf" className='font-bold text-black hover:text-white' download>Download Resume</a></button>
                    </div>

                    <div className="uppercase">
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Technology
                        </h6>
                        <p className="mb-4">HTML</p>
                        <p className="mb-4">CSS</p>
                        <p className="mb-4">React</p>
                        <p className="mb-4">MongoDB</p>
                        <p className="mb-4">Firebase</p>
                    </div>

                    <div>
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Contact
                        </h6>
                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            <BsFillHousesFill className='mr-4'/>
                            Mirpur 13, Dhaka, Bangladesh
                        </p>
                        <p className="mb-4 flex items-center justify-center md:justify-start">
                        <MdOutlineMailOutline className='mr-4'/>
                            ismatjahanbijori@gmail.com
                        </p>
                        <p className="mb-4 flex items-center justify-center md:justify-start">
                        <BsFillTelephoneFill className='mr-4'/>
                        +880 1924081225
                        </p>
                        <p className="flex items-center justify-center md:justify-start">
                            <BsTelegram className='mr-4'/>
                            +880 1924081225
                        </p>
                    </div>
                </div>
            </div>

            
            <div className="bg-slate-300 text-black p-6 text-center ">
                <span>© 2023 Copyright </span>
                <p className="font-bold text-black">Ismat Jahan Bijori</p>
            </div>
        </footer>
    );
};

export default Footer;