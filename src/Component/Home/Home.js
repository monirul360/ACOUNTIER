import React from 'react';
import { Link } from 'react-router-dom';
import client1 from './../../Image/Home/client/client-1.png';
import client2 from './../../Image/Home/client/client-2.png';
import client3 from './../../Image/Home/client/client-3.png';
import client4 from './../../Image/Home/client/client-4.png';
import client5 from './../../Image/Home/client/client-5.png';
import whoweare from './../../Image/Home/whoweare.png';
const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section class="hero py-5 py-lg-0">
                <div class="container">
                    <div class="row">
                        <div class="hero-text col-lg-6 col-12">
                            <div class="text-box">
                                <h2 class="hero-title">
                                    One Stop Solution for the Accounting & Taxation Services for
                                    India and USA
                                </h2>
                                <p class="hero-description py-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                                    molestias nostrum consequatur corrupti cumque eligendi
                                    voluptatibus sint laboriosam qui eaque!
                                </p>
                                <Link to='/' class="hero-button btn bg-white" href="#">Discover Us</Link>
                            </div>
                        </div>
                        <div class="hero-form col-lg-6 col-12 py-4 py-lg-0">
                            <div class="form-box">
                                <h3 class="hero-form-title">Book a consolution!</h3>
                                <form class="form" action="#" method="post">
                                    <input
                                        class="form-control"
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Full Name"
                                    />
                                    <input
                                        class="form-control"
                                        type="email"
                                        name=""
                                        id=""
                                        placeholder="E-mail"
                                    />
                                    <input
                                        class="form-control"
                                        type="number"
                                        name=""
                                        id=""
                                        placeholder="Full Name"
                                    />
                                    <input
                                        class="form-control"
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Location"
                                    />
                                    <input
                                        class="form-control"
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Booking for*"
                                    />
                                    <input class="form-control" type="submit" value="Get Started" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                    <div class="row">
                        <div class="img-box col-12 col-md-4 d-none d-md-flex">
                            <img src={whoweare} alt="" />
                        </div>
                        <div class="text-box col-12 col-md-8 col-xl-6">
                            <h2 class="section-title">Who We Are</h2>
                            <h3 class="section-into mt-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing.
                            </h3>
                            <p class="section-description my-3">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Praesentium corrupti natus facilis quo earum similique alias eius
                                perferendis possimus modi. Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Explicabo aperiam minus dignissimos quisquam?
                                Pariatur, dolor?
                            </p>
                            <Link to='/' class="section-button btn" href="#">Know more</Link>
                        </div>
                        <div class="img-box col-12 col-md-4 d-block d-md-none mt-3 mt-md-0">
                            <img src="img/whoweare.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;