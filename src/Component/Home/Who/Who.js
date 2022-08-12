import React from 'react';
import { Link } from 'react-router-dom';
import whoweare from '../../../Image/Home/whoweare.png';
const Who = () => {
    return (
        <div>
            {/* Who We are  */}
            <section class="whoWeAre section-padding">
                <div class="container">
                    <div class="row">
                        <div class="img-box col-12 col-lg-4 col-xxl-5 d-lg-flex mb-5 mb-lg-0">
                            <img src={whoweare} alt="" />
                        </div>
                        <div class="text-box col-12 col-lg-8 col-xxl-7">
                            <h2 class="section-title">Who We Are</h2>
                            <h3 class="section-into">
                                We are the Popular Accounting & Taxation Company
                            </h3>
                            <p class="section-description">
                                Are you willing to start your own firm? We are here to help you to
                                incorporate your own firm in India. Know about the different kinds
                                of the Business Registration from the Proprietorship to the
                                Private Limited Company, Partnership Firm and more by speaking
                                with our experts who have the in-depth knowledge on the Business
                                Registration and the compliance part
                            </p>
                            <Link class="section-button btn" to="/aboutus">Know more</Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Who;