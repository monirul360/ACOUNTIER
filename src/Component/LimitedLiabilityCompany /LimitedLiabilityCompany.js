import React from 'react';
import Choose from '../Home/Choose/Choose';
import Client from '../Home/Client/Client';
import PageTitle from '../PageTitle/PageTitle';
import img from './../../Image/Page/12.png';
const LimitedLiabilityCompany = () => {
    return (
        <div>
            {/*  */}
            <PageTitle title='Limited Liability Company'></PageTitle>
            <section class="page-section  bg-light">
                <div class="container">
                    <div class="page-content">
                        <div class="page-content-image">
                            <img class="img-fluid" src={img} alt="" />
                        </div>
                        <div class="page-content-text mt-5">
                            <h2 class="page-content-title">Limited Liability Company </h2>
                            <p>
                                As per the Limited Liability Partnership Act 2008, Limited Liability company for unique small and medium business was introduced.
                                Managing the Limited Liability Company is very easy compared to the private limited company. Two partners are required to start
                                the Limited Liability Company in India. The LLP Agreement in the LLP Company states the Partnership rights and duties in the
                                company. The Partners are responsible for filing the tax returns and compliance.
                            </p>
                            <p>
                                PAN Card, Passport (Foreign Nationals Only), Voters Identity Card, Ration Card, Driving License, Electricity Bill, Telephone Bill,
                                Aadhaar Card, Bank Statement, Passport Size Photo, Business Place are the documents required to register the Limited
                                Liability Company.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Site Promotion  */}
                <div class="promotion-section bg-light ">
                    <div class="container">
                        <div class="promotion-content">
                            <p>
                                Connect with ACOUNTIER to Register your Company as a Limited Liability Company.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Choose></Choose>
            <Client></Client>
        </div >
    );
};

export default LimitedLiabilityCompany;