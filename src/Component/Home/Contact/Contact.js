import React from 'react';

const Contact = () => {
    return (
        <div>
            {/* Contact Section */}
            <section class="contact section-padding bg-light">
                <div class="container">
                    <div class="section-heading text-center">
                        <h2 class="section-title">Contact Us</h2>
                        <p class="section-description">
                            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration
                        </p>
                    </div>
                    <div class="contact-form">
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
                                    <textarea class="form-control" name="" id="" rows="9" placeholder="Message"></textarea>
                                </div>
                                <div class="col-12">
                                    <input class="form-control" type="submit" value="Send Message" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;