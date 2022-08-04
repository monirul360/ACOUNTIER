import React from 'react';
import Client from '../Home/Client/Client';
import PageTitle from '../PageTitle/PageTitle';

const Service = () => {
    return (
        <div>
            {/* Services  */}
            <PageTitle title="Services"></PageTitle>
            <section class="services py-5">
                <div class="container">
                    <div class="services-content row">
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="services-box">
                                <div class="services-icon">
                                    <i class="fa fa-vcard-o"></i>
                                </div>
                                <h4 class="services-title">
                                    Company Registration anywhere in india
                                </h4>
                                <p class="services-description">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Nesciunt ab amet aliquid obcaecati tempora maiores asperiores
                                    quidem dicta totam mollitia!
                                </p>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4 mt-md-5">
                            <div class="services-box">
                                <div class="services-icon">
                                    <i class="fa fa-behance"></i>
                                </div>
                                <h4 class="services-title">
                                    Company Registration anywhere in india
                                </h4>
                                <p class="services-description">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Nesciunt ab amet aliquid obcaecati tempora maiores asperiores
                                    quidem dicta totam mollitia!
                                </p>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="services-box">
                                <div class="services-icon">
                                    <i class="fa fa-bookmark-o"></i>
                                </div>
                                <h4 class="services-title">
                                    Company Registration anywhere in india
                                </h4>
                                <p class="services-description">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Nesciunt ab amet aliquid obcaecati tempora maiores asperiores
                                    quidem dicta totam mollitia!
                                </p>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4 mt-md-5 mt-lg-0">
                            <div class="services-box">
                                <div class="services-icon">
                                    <i class="fa fa-book"></i>
                                </div>
                                <h4 class="services-title">
                                    Company Registration anywhere in india
                                </h4>
                                <p class="services-description">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Nesciunt ab amet aliquid obcaecati tempora maiores asperiores
                                    quidem dicta totam mollitia!
                                </p>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4 mt-lg-5">
                            <div class="services-box">
                                <div class="services-icon">
                                    <i class="fa fa-magic"></i>
                                </div>
                                <h4 class="services-title">
                                    Company Registration anywhere in india
                                </h4>
                                <p class="services-description">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Nesciunt ab amet aliquid obcaecati tempora maiores asperiores
                                    quidem dicta totam mollitia!
                                </p>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4 mt-md-5">
                            <div class="services-box">
                                <div class="services-icon">
                                    <i class="fa fa-calculator"></i>
                                </div>
                                <h4 class="services-title">
                                    Company Registration anywhere in india
                                </h4>
                                <p class="services-description">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Nesciunt ab amet aliquid obcaecati tempora maiores asperiores
                                    quidem dicta totam mollitia!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Client></Client>
        </div>
    );
};

export default Service;