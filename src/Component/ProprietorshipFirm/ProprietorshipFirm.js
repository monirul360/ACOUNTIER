import React from 'react';
import Choose from '../Home/Choose/Choose';
import Client from '../Home/Client/Client';
import PageTitle from '../PageTitle/PageTitle';
import imgone from './../../Image/Page/25.png';
import imgtwo from './../../Image/Page/26.png';
const ProprietorshipFirm = () => {
    return (
        <div>
            {/*  Proprietorship-Firm*/}
            <PageTitle title='Proprietorship Company'></PageTitle>
            {/* Page Post Section  */}
            <section class="page-post-section section-padding">
                <div class="container">
                    {/* 1st Part  */}
                    <div class="row">
                        <div class="col-12 col-lg-4 mb-3 m-lg-0">
                            <div class="section-image">
                                <img src={imgone} alt="" />
                            </div>
                        </div>
                        <div class="col-12 col-lg-8 mb-3 m-lg-0">
                            <div class="section-content">
                                <div class="section-heading mb-2 mb-md-3">
                                    <h3 class="section-into">Proprietorship Company</h3>
                                </div>
                                <p>
                                    A Business which is owned and operated by one person taking care of
                                    the complete asset and the liability of the firm is known as
                                    Proprietorship Company. Start your Firm anywhere in India with
                                    minimum compliance. The Proprietorship company cannot have any
                                    partners or investors or shareholders in the company. If you are
                                    Looking to start the company with a minimum of 3 to 5 employees
                                    Proprietorship Company is the right option for you.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* 2nd Part  */}
                    <div class="row article-margin-top">
                        <div class="col-12 col-lg-8 mb-3 m-lg-0">
                            <div class="section-content">
                                <div class="section-heading mb-2 mb-md-3">
                                    <h3 class="section-into">Proprietor and the GST Registration</h3>
                                </div>
                                <p>
                                    The Proprietor is the person who is the owner of the Proprietorship
                                    Business. The GST is always registered using the PAN CARD & the
                                    AADHAAR CARD of the Proprietor. The Complete Liability or the Profit
                                    of the Proprietorship firm is owned by theProprietor. The Business
                                    Owner and the Proprietorship Firm are considered same in all the
                                    legal and official documents.
                                </p>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4 m-lg-0">
                            <div class="section-image">
                                <img src={imgtwo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Documents Required  */}
            <section class="document-required ">
                <div class="container">
                    <div class="section-heading mb-2 mb-md-3">
                        <h3 class="section-into">
                            Documents Required to Register the Proprietorship Company
                        </h3>
                    </div>
                    <div class="card-option">
                        <div class="card-box">
                            <div class="first-card active">
                                <h4>PAN Card</h4>
                            </div>
                            <div class="second-card">
                                <h4>PAN Card</h4>
                            </div>
                        </div>
                        <p class="card-center">
                            The Licence to require the Proprietorship/Shops and Establishment
                            Certificate differs according to the different states.
                        </p>
                    </div>
                    <div class="document-content">
                        <h3>Benefits of the Proprietorship Firm</h3>
                        <ul>
                            <li>
                                Certain Registrations are required with less compliance to operate the
                                Proprietorship Firm. The Registration varies according to the
                                different states
                            </li>
                            <li>
                                This Firm can be operated without any Business Partners. All the
                                Profits can be taken by the owner of the Firm.
                            </li>
                            <li>
                                Any Business Decisions and Approvals can be directly taken by the
                                owner of the Company.
                            </li>
                            <li>
                                The Proprietor has the complete control over the assets, profits,
                                revenue Etc.
                            </li>
                        </ul>
                        <h3>Disadvantages of the Proprietorship Company</h3>
                        <ul>
                            <li>
                                Raising Funds would be very difficult or not possible in
                                Proprietorship firm as only one person is the complete owner of the
                                firm.
                            </li>
                            <li>
                                If the Proprietor is unable to pay back the loans the Proprietors
                                properties and the assets can be attached to close the loans.
                            </li>
                            <li>
                                This Kind of the Proprietorship business can be dissolved in case of
                                the death or disability of the Business Owner.
                            </li>
                        </ul>
                        <h3>Compliances for the Proprietorship Company</h3>
                        <ul>
                            <li>
                                The Personal Income Tax must be filed using the ITR-3 or ITR-4 Form.
                            </li>
                            <li>
                                If the Proprietor has GST, GST Filings must be done in month-on-month
                                basis.
                            </li>
                            <li>
                                TDS must be deducted on the quarterly basis based on the threshold
                                purchase.
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Site Promotion  */}
                <div class="promotion-section  section-padding-bottom">
                    <div class="container">
                        <div class="promotion-content">
                            <p>
                                Are you Looking to Register your Proprietorship Firm? Connect with ACOUNTIER.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Choose></Choose>
            <Client></Client>
        </div>
    );
};

export default ProprietorshipFirm;