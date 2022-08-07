import React from 'react';
import icon1 from './../../../Image/icons/1.png';
import icon2 from './../../../Image/icons/2.png';
import icon3 from './../../../Image/icons/3.png';
import icon4 from './../../../Image/icons/4.png';
import icon5 from './../../../Image/icons/5.png';
import icon6 from './../../../Image/icons/6.png';
const Service = () => {
    return (
        <div>
            {/* Services */}
            <section class="services py-5">
                <div class="container">
                    <div class="section-heading mb-4 mb-md-5 text-center">
                        <h2 class="section-title">Services</h2>
                        <h3 class="section-into mt-2">Best Accounting Services</h3>
                    </div>
                    <div class="services-content row">
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="services-box">
                                <div class="services-icon">
                                    <img src={icon1} alt="" />
                                </div>
                                <h4 class="services-title">
                                    Company Registration anywhere in india
                                </h4>
                                <p class="services-description">
                                    We register your company as Private Limited Company, Limited Liability Partnership, One Person Company, Partnership Firm, Proprietorship Firm and many more.
                                </p>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4 mt-md-5">
                            <div id='service-select' class="services-box ">
                                <div id='service-three' class="services-icon ">
                                    <img src={icon2} alt="" />
                                </div>
                                <h4 class="services-title">
                                    Trademark & Copyrights
                                </h4>
                                <p class="services-description text-white">
                                    Trademark Registration, Trademark Objection, Trademark Assignment, Trademark Renewal, Copyright Registration, Add a Director, Remove a Director and more.
                                </p>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="services-box">
                                <div class="services-icon">
                                    <img src={icon3} alt="" />
                                </div>
                                <h4 class="services-title">
                                    Tax Registrations
                                </h4>
                                <p class="services-description">
                                    GST Registration, TDS Returns Filing, Registering the Importer Exporter Code, Professional Tax Registration Etc.
                                </p>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4 mt-md-5 mt-lg-0">
                            <div class="services-box">
                                <div class="services-icon">
                                    <img src={icon4} alt="" />
                                </div>
                                <h4 class="services-title">
                                    Legal Documentations
                                </h4>
                                <p class="services-description">
                                    Non-Disclosure Agreement, Founders Agreement, Term Sheet, Shareholders Agreement, Share Purchase Agreement, Non-Disclosure Agreement NDA and more.
                                </p>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4 mt-lg-5">
                            <div class="services-box">
                                <div class="services-icon">
                                    <img src={icon5} alt="" />
                                </div>
                                <h4 class="services-title">
                                    NGO Registration Services in India
                                </h4>
                                <p class="services-description">
                                    NGO, Section 8, Trust Registration, Society Registration, NGO Compliance, Section 8 Compliance, CSR-1 Filing, Sec.80G & Sec.12A, Darpan Registration
                                </p>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4 mt-md-3">
                            <div class="services-box">
                                <div class="services-icon">
                                    <img src={icon6} alt="" />
                                </div>
                                <h4 class="services-title">
                                    Bookkeeping & Taxation Services for USA                                </h4>
                                <p class="services-description">
                                    We, At ACOINTIER increase your wealth with a goal to reduce the tax liability to our customers in USA. We are just an extension of your team; We help you to accomplish your goals
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Service;