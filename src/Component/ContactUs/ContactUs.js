import React from 'react';
import Client from '../Home/Client/Client';
import PageTitle from '../PageTitle/PageTitle';

const ContactUs = () => {
    return (
        <div>
            {/* Contact-us */}
            <PageTitle title='Contact Us'></PageTitle>
            <section class="contact py-5 bg-light">
                <div class="container">
                    <div class="contact-form mt-5">
                        <form action="#" method="post">
                            <div class="row">
                                <div class="form-group col-12 col-md-6">
                                    <input type="text" class="form-control" id="" name="" placeholder="Name" />
                                </div>
                                <div class="col-12 col-md-6">
                                    <input type="text" class="form-control" id="" name="" placeholder="E-mail" />
                                </div>
                                <div class="col-12 col-md-6">
                                    <input type="text" class="form-control" id="" name="" placeholder="Name" />
                                </div>
                                <div class="col-12 col-md-6">
                                    <input type="text" class="form-control" id="" name="" placeholder="Name" />
                                </div>
                                <div class="col-12">
                                    <textarea class="form-control" name="" id="" rows="5" placeholder="Message"></textarea>
                                </div>
                                <div class="col-12">
                                    <input class="form-control" type="submit" value="Send Message" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center m-5">
                        <div className="col-md-6">
                            <div className='m-5 mt-4'>
                                <div class="footer-contact-icon">
                                    <i class="fa fa-phone"></i>
                                </div>
                                <div class="contact-text">
                                    <span>Have a Question?</span>
                                    <p>+91 9980655355</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="m-5 mt-4">
                                <div class="footer-contact mt-3">
                                    <div class="footer-contact-icon">
                                        <i class="fa fa-envelope-o"></i>
                                    </div>
                                    <div class="contact-text">
                                        <span>Contact us at</span>
                                        <p>info@acountier.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Client></Client>
        </div>
    );
};

export default ContactUs;