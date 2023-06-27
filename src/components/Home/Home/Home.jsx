import React from 'react';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
        <Banner/>
        <div className='my-20'>
        <Projects/>
        </div>
        </div>
    );
};

export default Home;