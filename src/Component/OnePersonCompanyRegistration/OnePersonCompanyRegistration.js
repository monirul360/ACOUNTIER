import React from 'react';
import Choose from '../Home/Choose/Choose';
import Client from '../Home/Client/Client';
import PageTitle from '../PageTitle/PageTitle';
import img from './../../Image/Page/13.png';
const OnePersonCompanyRegistration = () => {
    return (
        <div>
            {/* One-Person-Company-Registration */}
            <PageTitle title='One Person Company Registration'></PageTitle>
            <section class="page-section  bg-light">
                <div class="container">
                    <div class="page-content">
                        <div class="page-content-image">
                            <img class="img-fluid" src={img} alt="" />
                        </div>
                        <div class="page-content-text mt-5">
                            <h2 class="page-content-title">One Person Company Registration</h2>
                            <p>
                                As per the company’s act 2013, The New concept has been introduced which is the One Person Company. The company which
                                is incorporated with single person. The One-person company has all the benefits of the sole proprietorship company.
                            </p>
                            <p>
                                The One-person company can be formed by a single director or one company only. This OPC Company has less compliance
                                compared to the Private Limited Company. The Individual can be either Indian resident or NRI.
                            </p>
                            <p>
                                Obtaining the name approval from the Ministry of the Corporate Affairs (MCA) is important. The Pan Card, Aadhaar Card &Voters
                                ID is required for Registering the One Person Company in India.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Site Promotion  */}
                <div class="promotion-section bg-light ">
                    <div class="container">
                        <div class="promotion-content">
                            <p>
                                Are you Looking to Register the One Person Company (OPC)? Connect with ACOUNTIER.
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

export default OnePersonCompanyRegistration;