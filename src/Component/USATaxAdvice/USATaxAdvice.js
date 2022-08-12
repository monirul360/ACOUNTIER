import React from 'react';
import Choose from '../Home/Choose/Choose';
import Client from '../Home/Client/Client';
import PageTitle from '../PageTitle/PageTitle';
import img from './../../Image/Page/28.png';
const USATaxAdvice = () => {
    return (
        <div>
            {/* USA-Tax-Advice*/}
            <PageTitle title='USA Tax Advice'></PageTitle>
            <section class="page-section  bg-light">
                <div class="container">
                    <div class="page-content">
                        <div class="page-content-image">
                            <img class="img-fluid" src={img} alt="" />
                        </div>
                        <div class="page-content-text mt-5">
                            <h2 class="page-content-title">US Transaction Tax Services</h2>

                            <p>
                                It is very essential to conduct a detailed tax due diligence to ensure that there are no surprises later. It is also very critical to
                                structure the acquisition in the most tax efficient manner to ensure that you obtain all the relevant tax advantages. In this area,
                                we offer the following services:
                            </p>
                            <ul className='px-4 pb-4'>
                                <li>US Tax Due Diligence</li>
                                <li>US Tax Structuring Advisory</li>
                            </ul>
                            <h3>US Corporate Tax</h3>
                            <p>
                                Our dedicated team of corporate tax specialists can help you comply with all your regular corporate tax compliance requirements
                                at the Federal and State levels. Our services in this area are detailed below:
                            </p>
                            <ul className='px-4 pb-4'>
                                <li>Corporate Tax Returns</li>
                                <li>Federal Corporate Tax Returns</li>
                                <li>State Corporate Tax Returns</li>
                                <li>Corporate Tax & Regulatory Compliance</li>
                                <li>Estimated Taxes</li>
                                <li>Tax Return Extensions</li>
                                <li>State Annual Reports</li>
                                <li>State Franchise Tax Returns</li>
                                <li>Corporate Tax Advisory</li>
                                <li>State Tax Nexus</li>
                                <li>Permanent Establishment issues</li>
                                <li>Withholding Taxes</li>
                            </ul>
                            <h3>State Tax Advice</h3>
                            <p>
                                Our dedicated team of corporate tax specialists can help you comply with all your regular corporate tax compliance requirements
                                at the Federal and State levels. Our services in this area are detailed below:
                            </p>
                            <ul className='px-4'>
                                <li>Individual Income Taxes (for all states)</li>
                                <li>Corporation Income Tax Returns</li>
                                <li>Partnership Income Tax Returns</li>
                                <li>Intangible Tax Returns</li>
                                <li>Tangible Tax Returns</li>
                                <li>Charter/Franchise Tax Returns</li>
                                <li>Capital gains taxes</li>
                                <li>Gift Tax Return Preparation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Choose></Choose>
            <Client></Client>
        </div>
    );
};

export default USATaxAdvice;