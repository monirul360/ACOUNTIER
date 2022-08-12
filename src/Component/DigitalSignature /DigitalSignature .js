import React from 'react';
import Choose from '../Home/Choose/Choose';
import Client from '../Home/Client/Client';
import PageTitle from '../PageTitle/PageTitle';
import img from './../../Image/Page/4.png';
const DigitalSignature = () => {
    return (
        <div>
            {/* Digital-Signature */}
            <PageTitle title='Digital Signature '></PageTitle>
            <section class="page-section  bg-light">
                <div class="container">
                    <div class="page-content">
                        <div class="page-content-image">
                            <img class="img-fluid" src={img} alt="" />
                        </div>
                        <div class="page-content-text mt-5">
                            <h2 class="page-content-title">Digital Signature</h2>
                            <p>
                                When submitting or sending documents electronically over the internet, a digital signature certificate in India proves the
                                sender's identity. It establishes the identity and agreement of the signee for electronic records and is comparable to a
                                handwritten signature.
                            </p>
                            <p>
                                DSC is a secure digital key that the certifying authorities in India issue to validate and authenticate the legitimacy of
                                the individual holding the certificate. Public-key encryption is used in digital signatures to produce a signature. The
                                user's name, pin code, country, email address, certificate issuance date, and the name of the certifying body are all
                                included in a digital signature certificate. The Controller of Certifying Authority in India is responsible for issuing
                                digital signature certificates.
                            </p>
                            <p>
                                Documents Required for the Digital Signatures Includes PAN Card Copy, Passport Copy, Electricity bill, Gas Bill,
                                Aadhar Card, Passport Size Photo.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Site Promotion  */}
                <div class="promotion-section bg-light ">
                    <div class="container">
                        <div class="promotion-content">
                            <p>
                                Connect with Acountier to get your Digital Signature.
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

export default DigitalSignature;