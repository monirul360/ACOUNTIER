import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
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
                                    ACOINTIER is a technology backed up Accounting and Legal Service Firm providing the Services for the Small Businesses, Start-up Firms, Large Businesses and Corporate Companies across India and USA.
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
        </div>
    );
};

export default Hero;