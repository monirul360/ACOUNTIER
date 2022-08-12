import React from 'react';
import choose from './../../../Image/Home/choose-with-border.png';
import icon1 from './../../../Image/icons/7.png';
import icon2 from './../../../Image/icons/8.png';
import icon3 from './../../../Image/icons/9.png';
const Choose = () => {
    return (
        <div>
            {/* Choose Section  */}
            <section class="choose-us section-padding">
                <div class="container">
                    <div class="section-heading text-center">
                        <h2 class="section-title">Choose Us</h2>
                        <h3 class="section-into">Why You trust Acointier  Service</h3>
                    </div>
                    <div class="row choose-content">
                        <div class="col-12 col-lg-6 mb-5 mb-lg-0">
                            <div class="box-header">
                                <h4>Why should you Trust Acountier?</h4>
                                <p>
                                    We, At ACOINTIER offer you the compliance-based reporting model.
                                    We offer Enterprise level financial visibility and control at a
                                    fraction of the costing and time required to completely setup
                                    your Internal Finance Team.
                                </p>
                            </div>
                            <div class="box-item">
                                <div class="box-icon">
                                    <img src={icon1} alt="" />
                                </div>
                                <div class="box-text">
                                    <h5>Expert Professionals</h5>
                                    <p>
                                        Acountier Team has inhouse experts who can provide you the
                                        clear guidance on the Company Registration and Accounting
                                        Process.
                                    </p>
                                </div>
                            </div>
                            <div class="box-item">
                                <div class="box-icon">
                                    <img src={icon2} alt="" />
                                </div>
                                <div class="box-text">
                                    <h5>Customer Support</h5>
                                    <p>
                                        Acountier Team has a Customer Centric Approach on providing
                                        the right information on the Tax Filings
                                    </p>
                                </div>
                            </div>
                            <div class="box-item">
                                <div class="box-icon">
                                    <img src={icon3} alt="" />
                                </div>
                                <div class="box-text">
                                    <h5>Unbiased Approach</h5>
                                    <p>
                                        We provide the right service to our customer at Acountier with
                                        Unbiased Approach with dedicated accounts manager.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="left-site col-12 col-lg-6">
                            <img src={choose} alt="" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Choose;