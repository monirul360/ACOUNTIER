import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
            {/* Hero Section  */}
            <section class="hero py-5 py-lg-0">
                <div class="container">
                    <div class="row">
                        <div class="hero-text col-lg-6 col-12">
                            <div class="text-box">
                                <h2 class="hero-title">
                                    Proficient Team for
                                    Accounting, Taxation
                                    and Legal Services across the Globe.
                                </h2>
                                <p class="hero-description">
                                    ACOUNTIER is a Technology backed up Accounting, Compliance, Taxation and Legal Services firm for the MSME, Small Businesseses, Start-up Firms, Corporate Companies across India and USA.
                                </p>
                                <Link class="hero-button btn bg-white" to="/aboutus">Discover Us</Link>
                            </div>
                        </div>
                        <div class="hero-form col-lg-6 col-12 pb-4 pt-5 pb-lg-0 pt-lg-0">
                            <div class="form-box">
                                <h3 class="hero-form-title">Book a consultation!</h3>
                                <form class="form" action="#" method="post">
                                    <input class="form-control" type="text" name="" id="" placeholder="Full Name" />
                                    <input class="form-control" type="email" name="" id="" placeholder="E-mail" />
                                    <input class="form-control" type="number" name="" id="" placeholder="Full Name" />
                                    <input class="form-control" type="text" name="" id="" placeholder="Location" />
                                    <input class="form-control" type="text" name="" id="" placeholder="Booking for*" />
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