import React from 'react';
import { Link } from 'react-router-dom';
import client1 from './../../Image/Home/client/client-1.png';
import client2 from './../../Image/Home/client/client-2.png';
import client3 from './../../Image/Home/client/client-3.png';
import client4 from './../../Image/Home/client/client-4.png';
import client5 from './../../Image/Home/client/client-5.png';
import whoweare from './../../Image/Home/whoweare.png';
import Choose from './Choose/Choose';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import Service from './Service/Service';
import Testimonials from './Testimonials/Testimonials';
const Home = () => {
    return (
        <>
            <Hero></Hero>
            {/* Client Logo Section  */}
            <section class="client bg-white py-5 d-none d-sm-block d-none d-sm-block">
                <div class="container">
                    <div class="clint-logo">
                        <ul>
                            <li><img src={client1} alt="" /></li>
                            <li><img src={client2} alt="" /></li>
                            <li><img src={client3} alt="" /></li>
                            <li><img src={client4} alt="" /></li>
                            <li><img src={client5} alt="" /></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Who We are  */}
            <section class="whoWeAre py-5 bg-light">
                <div class="container">
                    <div class="row d-flex justify-content-center align-items-centers">
                        <div class="img-box col-12 col-md-4 d-none d-md-flex">
                            <img src={whoweare} alt="" />
                        </div>
                        <div class="text-box col-12 col-md-8 col-xl-6">
                            <h2 class="section-title">Who We Are</h2>
                            <h4 class="section-into mt-2">
                                We are the Popular Accounting &
                                Taxation Company
                            </h4>
                            <p class="section-description my-3">
                                Are you willing to start your own firm? We are here to help you to incorporate
                                your own firm in India. Know about the different kinds of the Business Registration
                                from the Proprietorship to the Private Limited Company, Partnership Firm and more
                                by speaking with our experts who have the in-depth knowledge on the Business
                                Registration and the compliance part
                            </p>
                            <Link to='/' class="section-button btn" href="#">Know more</Link>
                        </div>
                        <div class="img-box col-12 col-md-4 d-block d-md-none mt-3 mt-md-0">
                            <img src="img/whoweare.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <Service></Service>
            <Choose></Choose>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </>
    );
};

export default Home;