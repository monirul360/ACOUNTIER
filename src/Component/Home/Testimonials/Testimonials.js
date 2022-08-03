import React from 'react';
import img from './../../../Image/Home/whoweare.png';
const Testimonials = () => {
    return (
        <div>
            {/* testimonial Section  */}
            <section class="testimonial py-5">
                <div class="container">
                    <div class="section-heading mb-4 mb-md-5 text-center">
                        <h2 class="section-title">testimonial</h2>
                        <h3 class="section-into mt-2">What Customers Says</h3>
                    </div>
                    <div class="testimonial-content row">
                        <div class="tm-box-one col-12 col-md-6 col-lg-4 d-md-none d-lg-block">
                            <div class="testimonial-item mx-auto">
                                <p class="testimonial-info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                                    dolor, explicabo sequi rerum voluptatem eaque.
                                </p>
                                <div class="testimonial-img">
                                    <img src={img} alt="" />
                                </div>
                                <h4 class="mb-2 mt-4">Rudra Prabha</h4>
                                <span>Bangalore</span>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 d-none d-md-block mt-5">
                            <div class="testimonial-item">
                                <p class="testimonial-info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                                    dolor, explicabo sequi rerum voluptatem eaque.
                                </p>
                                <div class="testimonial-img">
                                    <img src={img} alt="" />
                                </div>
                                <h4 class="mb-2 mt-4">Jayakumar</h4>
                                <span>Bangalore</span>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 d-none d-md-block">
                            <div class="testimonial-item">
                                <p class="testimonial-info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                                    dolor, explicabo sequi rerum voluptatem eaque.
                                </p>
                                <div class="testimonial-img">
                                    <img src={img} alt="" />
                                </div>
                                <h4 class="mb-2 mt-4">Jeffery Jhon</h4>
                                <span>Newyork</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;