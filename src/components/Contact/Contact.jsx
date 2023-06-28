import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebookF } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FiLinkedin } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';
import Lottie from "lottie-react";
import developer from '../../assets/123606-desktop-and-smartphone-app-development.json'
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zffkpbo', 'template_as0nmbk', form.current, '8GUFsBBPnJxztfBAn')
            .then((result) => {
                console.log(result.text);
                console.log("msg sent")
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <div className="text-center lg:text-left">
                <h1 className="text-2xl font-bold text-center mt-20">Contact With Me</h1>
                <div className="border-b-2 flex border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
                    <div className="flex h-8 mx-auto">
                        <a href='https://www.facebook.com/profile.php?id=100013334982970' className="mr-6 text-blue-500 ">
                            <FaFacebookF />
                        </a>

                        <a href='https://ismatjahanbijori@gmail.com' className="mr-6 text-black">
                            <MdOutlineMailOutline />
                        </a>

                        <a href='https://www.linkedin.com/in/ismat-jahan-bijori-a64790222' className="mr-6 text-blue-500">
                            <FiLinkedin />
                        </a>
                        <a href="https://github.com/IsmatJahanBijori" className="text-black">
                            <BsGithub />
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <form ref={form} onSubmit={sendEmail} className='card-body text-center w-full md:w-1/2'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input className="input input-bordered input-primary w-full max-w-xs" type="text" name="user_name" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input className="input input-bordered input-primary w-full max-w-xs" type="email" name="user_email" />
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="label-text">Message</span></label>
                            <textarea className="input input-bordered input-primary w-full max-w-xs" name="message" />
                        </div>
                        <input className="input input-primary w-full max-w-xs" type="submit" value="Send" />
                    </form>
                    <div className='w-1/2'>
                        <Lottie animationData={developer} loop={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

{/**<div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold text-center mt-5">Contact With Me</h1>
                    <div className="border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
                        <div className="flex ml-20 h-5">
                            <a href='https://www.facebook.com/profile.php?id=100013334982970' className="mr-6 text-blue-500 ">
                                <FaFacebookF />
                            </a>

                            <a href='https://ismatjahanbijori@gmail.com' className="mr-6 text-black">
                                <MdOutlineMailOutline />
                            </a>

                            <a href='https://www.linkedin.com/in/ismat-jahan-bijori-a64790222' className="mr-6 text-blue-500">
                                <FiLinkedin />
                            </a>
                            <a href="https://github.com/IsmatJahanBijori" className="text-black">
                                <BsGithub />
                            </a>
                        </div>
                    </div>
                </div> */}
{/**
<form ref={form} onSubmit={sendEmail} className='card-body text-center'>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input className="input input-bordered input-primary w-full max-w-xs" type="text" name="user_name" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input className="input input-bordered input-primary w-full max-w-xs" type="email" name="user_email" />
            </div>
            <div className="form-control">
                <label className="label"><span className="label-text">Message</span></label>
                <textarea className="input input-bordered input-primary w-full max-w-xs" name="message" />
            </div>
            <input className="input input-primary w-full max-w-xs" type="submit" value="Send" />
        </form> */}

{/**<div>
                <Lottie animationData={developer} loop={true} />
            </div> */}