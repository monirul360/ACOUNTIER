import React from 'react';
import imgone from './../../../Image/Home/Testimonial/1.png';
import imgtwo from './../../../Image/Home/Testimonial/2.png';
import imgthree from './../../../Image/Home/Testimonial/3.png';
const Testimonials = () => {
    return (
        <div>
            {/* testimonial Section  */}
            <section class="testimonial section-padding">
                <div class="container">
                    <div class="section-heading text-center">
                        <h2 class="section-title">testimonial</h2>
                        <h3 class="section-into">What Customers Says</h3>
                    </div>
                </div>
                <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true"
                            aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        {/* 1st Item  */}
                        <div class="carousel-item active">
                            <div class="container">
                                <div class="testimonial-content">
                                    <div class="tm-box-one d-md-none d-lg-block">
                                        <div class="testimonial-item mx-auto">
                                            <p class="testimonial-info">
                                                Acountier has registered our Private Limited Company in
                                                Bangalore and They have a dedicated accounts manager who can
                                                take care of the Taxations and Legalities.
                                            </p>
                                            <div class="testimonial-img">
                                                <img src={imgone} alt="" />
                                            </div>
                                            <h4 class="clint-name">Rudra Prabha</h4>
                                            <span class="clint-address">Bangalore</span>
                                        </div>
                                    </div>
                                    <div class="tm-box-two d-none d-md-block">
                                        <div class="testimonial-item">
                                            <p class="testimonial-info">
                                                We have registered a Partnership Company with Acountier. Good
                                                Services provided by Accountier. Thanks to the Team.
                                            </p>
                                            <div class="testimonial-img">
                                                <img src={imgthree} alt="" />
                                            </div>
                                            <h4 class="clint-name">Jayakumar</h4>
                                            <span class="clint-address">Bangalore</span>
                                        </div>
                                    </div>
                                    <div class="tm-box-three d-none d-md-block">
                                        <div class="testimonial-item">
                                            <p class="testimonial-info">
                                                Acountier has provided us the Virtual CFO Services. Acontier
                                                has played the best role in guiding our Company with right
                                                financial advice. Thanks to Acountier Team.
                                            </p>
                                            <div class="testimonial-img">
                                                <img src={imgone} alt="" />
                                            </div>
                                            <h4 class="clint-name">Jeffery Jhon</h4>
                                            <span class="clint-address">Newyork</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 2nd Item  */}
                        <div class="carousel-item">
                            <div class="container">
                                <div class="testimonial-content">
                                    <div class="tm-box-one d-md-none d-lg-block">
                                        <div class="testimonial-item mx-auto">
                                            <p class="testimonial-info">
                                                Acountier has registered our Private Limited Company in
                                                Bangalore and They have a dedicated accounts manager who can
                                                take care of the Taxations and Legalities.
                                            </p>
                                            <div class="testimonial-img">
                                                <img src={imgtwo} alt="" />
                                            </div>
                                            <h4 class="clint-name">Rudra Prabha</h4>
                                            <span class="clint-address">Bangalore</span>
                                        </div>
                                    </div>
                                    <div class="tm-box-two d-none d-md-block">
                                        <div class="testimonial-item">
                                            <p class="testimonial-info">
                                                We have registered a Partnership Company with Acountier. Good
                                                Services provided by Accountier. Thanks to the Team.
                                            </p>
                                            <div class="testimonial-img">
                                                <img src={imgthree} alt="" />
                                            </div>
                                            <h4 class="clint-name">Jayakumar</h4>
                                            <span class="clint-address">Bangalore</span>
                                        </div>
                                    </div>
                                    <div class="tm-box-three d-none d-md-block">
                                        <div class="testimonial-item">
                                            <p class="testimonial-info">
                                                Acountier has provided us the Virtual CFO Services. Acontier
                                                has played the best role in guiding our Company with right
                                                financial advice. Thanks to Acountier Team.
                                            </p>
                                            <div class="testimonial-img">
                                                <img src={imgone} alt="" />
                                            </div>
                                            <h4 class="clint-name">Jeffery Jhon</h4>
                                            <span class="clint-address">Newyork</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 3rd Item  */}
                        <div class="carousel-item">
                            <div class="container">
                                <div class="testimonial-content">
                                    <div class="tm-box-one d-md-none d-lg-block">
                                        <div class="testimonial-item mx-auto">
                                            <p class="testimonial-info">
                                                Acountier has registered our Private Limited Company in
                                                Bangalore and They have a dedicated accounts manager who can
                                                take care of the Taxations and Legalities.
                                            </p>
                                            <div class="testimonial-img">
                                                <img src={imgtwo} alt="" />
                                            </div>
                                            <h4 class="clint-name">Rudra Prabha</h4>
                                            <span class="clint-address">Bangalore</span>
                                        </div>
                                    </div>
                                    <div class="tm-box-two d-none d-md-block">
                                        <div class="testimonial-item">
                                            <p class="testimonial-info">
                                                We have registered a Partnership Company with Acountier. Good
                                                Services provided by Accountier. Thanks to the Team.
                                            </p>
                                            <div class="testimonial-img">
                                                <img src={imgthree} alt="" />
                                            </div>
                                            <h4 class="clint-name">Jayakumar</h4>
                                            <span class="clint-address">Bangalore</span>
                                        </div>
                                    </div>
                                    <div class="tm-box-three d-none d-md-block">
                                        <div class="testimonial-item">
                                            <p class="testimonial-info">
                                                Acountier has provided us the Virtual CFO Services. Acontier
                                                has played the best role in guiding our Company with right
                                                financial advice. Thanks to Acountier Team.
                                            </p>
                                            <div class="testimonial-img">
                                                <img src={imgone} alt="" />
                                            </div>
                                            <h4 class="clint-name">Jeffery Jhon</h4>
                                            <span class="clint-address">Newyork</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END Item  */}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

        </div>
    );
};

export default Testimonials;