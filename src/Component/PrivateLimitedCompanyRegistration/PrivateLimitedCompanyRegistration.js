import React from 'react';
import Choose from '../Home/Choose/Choose';
import Client from '../Home/Client/Client';
import PageTitle from '../PageTitle/PageTitle';
import img from './../../Image/Page/14.png';
const PrivateLimitedCompanyRegistration = () => {
    return (
        <div>
            {/*Private-Limited-Company-Registration*/}
            <PageTitle title='Private Limited Company Registration'></PageTitle>

            {/* Page Post Section  */}
            <section class="page-post-section section-padding">
                <div class="container">
                    {/* 1st Part  */}
                    <div class="row">
                        <div class="col-12 col-lg-4 mb-3 m-lg-0">
                            <div class="section-image">
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div class="col-12 col-lg-8 mb-3 m-lg-0">
                            <div class="section-content">
                                <div class="section-heading mb-2 mb-md-3">
                                    <h3 class="section-into">Private Limited Company Registration</h3>
                                </div>
                                <p>
                                    Private Limited Company is the preferred legal entity of number of
                                    Indians. A Private Limited Company can be registered within a time
                                    span of 20 days of time. The Private Limited Company is governed by
                                    Company’s Act 2013. Two Directors are required for the Private
                                    Limited Company Registration. At least 1 director of the company
                                    should be Indian Resident and an Indian. The Director can also be
                                    the shareholder of the company. 100% of the Foreign Direct Ownership
                                    is accepted in most private limited company’s different sectors of
                                    India.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Private Ltd Company Section */}
            <section class="private-ltd-company pt-5">
                <div class="container">
                    {/* 1st Section  */}
                    <div class="heading">
                        <h2>How to Register the Company as Private Limited Company?</h2>
                        <p>
                            The Process of Registering your Company as a Private Limited Company
                            involves a greater compliance works.
                        </p>
                    </div>
                    <div class="section-item row">
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="item-box">
                                <p>Obtain the DSC Certificate.</p>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="item-box">
                                <p>Apply For the DIN Number.</p>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="item-box">
                                <p>Check for the Name Availability.</p>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="item-box">
                                <p>
                                    Submit the MOA & AOA to register your company as a private limited
                                    company.
                                </p>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="item-box">
                                <p>
                                    ROC Issues a Certificate of the Incorporation with the PAN & TAN.
                                </p>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="item-box">
                                <p>Apply the PAN & TAN for the Company.</p>
                            </div>
                        </div>
                    </div>

                    {/* 2nd Section  */}
                    <div class="heading">
                        <h2>Documents Required for the Private Limited Company Registration</h2>
                        <h3>Identity and Address Proof</h3>
                    </div>

                    <div class="section-item row">
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="item-box">
                                <p>Scanned/Xerox Copy of the PAN/PASSPORT</p>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="item-box">
                                <p>Scanned/Xerox Copy of the Latest Bank Statement</p>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="item-box">
                                <p>Scanned/Xerox Copy of the Voters ID/ Passport/Driving Licence.</p>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="item-box">
                                <p>Scanned/Xerox Copy of the Telephone Bill or Electricity Bill</p>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="item-box">
                                <p>Scanned/Xerox Copy of the Latest Bank Statement</p>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="item-box">
                                <p>Photograph of the Directors with Specimen Signature</p>
                            </div>
                        </div>
                    </div>

                    {/* 3rd Section  */}
                    <div class="heading">
                        <h3>Registered Office/Location Proof</h3>
                    </div>

                    <div class="section-item row">
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="item-box">
                                <p>
                                    Scanned Bill of the Office Location or Electricity Bill or Telephone
                                    Bill.
                                </p>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="item-box">
                                <p>Scanned Copy of the Notarized Rental Agreement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Site Promotion  */}
            <section class="promotion-section section-padding-bottom">
                <div class="container">
                    <div class="promotion-content">
                        <p>
                            Are you Looking for Registering your company as Private Limited Company? Connect with ACOUNTIER.
                        </p>
                    </div>
                </div>
            </section>
            <Choose></Choose>
            <Client></Client>
        </div>
    );
};

export default PrivateLimitedCompanyRegistration;