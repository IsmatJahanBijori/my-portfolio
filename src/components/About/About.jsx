import React from 'react';

const About = () => {
    return (
        <div className='my-container'>
            <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
                <div className='mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
                    <h2 className='mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:mx-auto'>
                        <span className='uppercase text-justify'>Empowering ideas <br /> through design and innovation</span>
                    </h2>
                    <p className='text-base text-gray-700 md:text-lg text-justify'>
                        Having recently learned React Web Development, I wanted to contact you to convey my interest. I am a running student from BUBT (Duration: 2020-Present), Rupnagar, Dhaka, earning my Bachelor of Science in Computer Science and Engineering and I'm looking to apply my skills and abilities to a company. I believe that my qualifications closely align with the type of candidate you are seeking.
                    </p>
                </div>
            </div>
            <div className='max-w-screen-xl sm:mx-auto'>
                <div className='grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2'>
                    <div className='space-y-8'>
                        <div>
                            <p className='mb-4 text-xl font-semibold'>
                                My Interpersonal Skill
                            </p>
                            <p className='text-gray-700'>
                                I am well-versed in communication and time management. I can contribute to positive improvements and team achievements through my leadership and teamwork abilities. I can perform my tasks with proper planning and strive to execute each task according to my plan.
                            </p>
                        </div>
                        <div>
                            <p className='mb-4 text-xl font-semibold'>
                                As a Web Developer
                            </p>
                            <p className='text-gray-700'>
                                I have completed numerous projects from scratch to enhance my knowledge as a React developer. Even though my professional experience does not primarily include working in a corporate setting, I have polished my talents through personal initiatives. These experiences have given me important insights into the software development life cycle, client communication, and delivering high-quality solutions on time.
                            </p>
                        </div>
                    </div>
                    <div className='space-y-8'>
                        <div>
                            <p className='mb-4 text-xl font-semibold'>
                                Hobbies and Interest
                            </p>
                            <p className='text-gray-700'>
                            Loving books is an integral part of who I am. It goes beyond a mere pastime; it is a deep-rooted passion that fills my life with wonder, knowledge, and inspiration. Each time I crack open a book, I am transported to a realm of endless possibilities. The crisp scent of fresh pages, the weight of a book in my hands, and the anticipation of diving into a new story evoke a sense of excitement that never wanes. With every page turned, I embark on extraordinary journeys, encountering diverse characters who become my friends, mentors, and confidants. The love I have for books is a constant companion, bringing joy, enrichment, and a profound appreciation for the power of words into my life.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;