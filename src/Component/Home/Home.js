import React from 'react';
import Choose from './Choose/Choose';
import Client from './Client/Client';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import Service from './Service/Service';
import Testimonials from './Testimonials/Testimonials';
import Who from './Who/Who';
const Home = () => {
    return (
        <>
            <Hero></Hero>
            <Client></Client>
            <Who></Who>
            <Service></Service>
            <Choose></Choose>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </>
    );
};

export default Home;