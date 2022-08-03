import React from 'react';
import { Link } from 'react-router-dom';
import whoweare from '../../../Image/Home/whoweare.png';
const Who = () => {
    return (
        <div>
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
        </div>
    );
};

export default Who;