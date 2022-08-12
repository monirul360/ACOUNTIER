import React from 'react';
import { Link } from 'react-router-dom';
import Choose from '../Home/Choose/Choose';
import Client from '../Home/Client/Client';
import PageTitle from '../PageTitle/PageTitle';
import about1 from './../../Image/Home/about-1.png';
import about2 from './../../Image/Home/about-2.png';
const Aboutus = () => {
    return (
        <div>
            {/* About */}
            <PageTitle title=' About Us '></PageTitle>
            <section class="about-section section-padding">
                <div class="container">
                    {/* 1st Part  */}
                    <div class="row">
                        <div class="col-12 col-lg-4 mb-3 m-lg-0 d-flex justify-content-center align-items-center">
                            <div class="section-image">
                                <img src={about1} alt="" />
                            </div>
                        </div>
                        <div class="col-12 col-lg-8 mb-3 m-lg-0">
                            <div class="section-heading mb-2 mb-md-3">
                                <h2 class="section-title">Company Registration</h2>
                                <h3 class="section-into mt-2">
                                    Experts to Register your Company
                                </h3>
                            </div>
                            <div class="section-content">
                                <p>
                                    ACOUNTIER is a technology backed up Accounting and Legal Service
                                    Firm providing the Services for the Small Businesses, Start-up
                                    Firms, Large Businesses and Corporate Companies across India and
                                    USA. Our Indian Services includes Registration of the Firm, Tax
                                    & Compliance, Trademark and Intellectual Rights, Copyrights,
                                    Virtual CFO & more. The USA Services includes the Bookkeeping
                                    and Taxation, Virtual CFO Services. We also assist on the
                                    Property Agreements creation and Property Tax Filing Etc.
                                </p>
                                <p class="mt-2">
                                    Are you willing to start your own firm? We are here to help you
                                    to incorporate your own firm in India. Know about the different
                                    kinds of the Business Registration from the Proprietorship to
                                    the Private Limited Company, Partnership Firm and more by
                                    speaking with our experts who have the in-depth knowledge on the
                                    Business Registration and the compliance part.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* 2nd Part  */}
                    <div class="row  article-margin-top">
                        <div class="col-12 col-lg-8 mb-3 m-lg-0">
                            <div class="section-heading mb-2 mb-md-3">
                                <h2 class="section-title">Accounting & Taxation</h2>
                                <h3 class="section-into mt-2">Inhouse Accounts & Tax Experts</h3>
                            </div>
                            <div class="section-content">
                                <p>
                                    Our Relationship Service Management team of ACOUNTIER will be
                                    providing the right guidance on your required services. We at
                                    ACOUNTIER have got more than 95% of the Customer Satisfaction in
                                    delivering the required services of the Customers at the right
                                    time. With technology backed up tax filings, The Customers are
                                    very much satisfied with the quick response they receive from
                                    our end and quick completion of the task with ACOUNTIER team.
                                    ACOUNTIER Team is in Bangalore and the consultants across India
                                    providing the Superior Customer Centric approach towards the
                                    execution of the required support for the customers in terms of
                                    Business Setup, Accounting and Filing of the Taxes.
                                </p>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4 m-lg-0 d-flex justify-content-center align-items-center">
                            <div class="section-image">
                                <img src={about2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Services */}
            <section class="services-about section-padding-bottom">
                <div class="container">
                    <div class="section-heading mb-4 mb-md-5 text-center">
                        <h2 class="section-title">Services</h2>
                        <h3 class="section-into mt-2">Our Indian Services</h3>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6 mb-4">
                            <div class="services-content d-flex justify-content-between align-items-center p-3">
                                <Link to='/PrivateLimitedCompanyRegistration'><h4>Company Registration</h4></Link>
                                <i class="fa fa-long-arrow-right"></i>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 mb-4">
                            <div class="services-content d-flex justify-content-between align-items-center p-3">
                                <Link to='/TrademarkRegistration'>
                                    <h4>Trademark & Copyrights</h4>
                                </Link>
                                <i class="fa fa-long-arrow-right"></i>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 mb-4">
                            <div class="services-content d-flex justify-content-between align-items-center p-3">
                                <Link to='/'>
                                    <h4>Tax Registrations</h4>
                                </Link>
                                <i class="fa fa-long-arrow-right"></i>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 mb-4">
                            <div class="services-content d-flex justify-content-between align-items-center p-3">
                                <Link to='/LimitedLiabilityCompany'>
                                    <h4>Limited Liability Company
                                    </h4>
                                </Link>
                                <i class="fa fa-long-arrow-right"></i>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 mb-4">
                            <div class="services-content d-flex justify-content-between align-items-center p-3">
                                <Link to='/USATaxAdvice'>
                                    <h4>Tax Advice</h4>

                                </Link>
                                <i class="fa fa-long-arrow-right"></i>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 mb-4">
                            <div class="services-content d-flex justify-content-between align-items-center p-3">
                                <Link to='/PartnershipAnnualComplianceTaxFiling'>
                                    <h4>Partnership Tax Filing</h4>
                                </Link>
                                <i class="fa fa-long-arrow-right"></i>
                            </div>
                        </div>
                    </div>

                    <div class="section-heading my-4 my-md-5 text-center">
                        <h3 class="section-into mt-2">Our USA Services</h3>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6 mb-4">
                            <div class="services-content d-flex justify-content-between align-items-center p-3">
                                <Link to='/CfoServices'>
                                    <h4>Outsourced CFO Services for USA</h4>
                                </Link>
                                <i class="fa fa-long-arrow-right"></i>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 mb-4">
                            <div class="services-content d-flex justify-content-between align-items-center p-3">
                                <Link to='/BookkeepingServices'>
                                    <h4>Bookkeeping & Taxation Services for USA</h4>

                                </Link>
                                <i class="fa fa-long-arrow-right"></i>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Choose></Choose>
            <Client></Client>
        </div>
    );
};

export default Aboutus;