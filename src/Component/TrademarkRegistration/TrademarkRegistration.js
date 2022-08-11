import React from 'react';
import Choose from '../Home/Choose/Choose';
import Client from '../Home/Client/Client';
import PageTitle from '../PageTitle/PageTitle';
import img from './../../Image/Page/21.png';
const TrademarkRegistration = () => {
    return (
        <div>
            {/* Trademark-Registration */}
            <PageTitle title='Trademark Registration'></PageTitle>
            <section class="page-section  bg-light">
                <div class="container">
                    <div class="page-content">
                        <div class="page-content-image">
                            <img class="img-fluid" src={img} alt="" />
                        </div>
                        <div class="page-content-text mt-5">
                            <h2 class="page-content-title">Trademark Registration</h2>
                            <p>
                                The Trademark Act of 1999 in India gives you the option to register a trademark. It gives the owner of the registered mark exclusive
                                ownership rights and forbids others from using the mark.The "TM" symbol may be used with the applicant and the brand once a
                                trademark has been registered. Trademark registration in India is crucial for brand protection. Given that trademark registration
                                requires several stages and ongoing government oversight, it is usually advisable to do so under the guidance of a professional.
                            </p>
                            <p>
                                To safeguard distinctive trademarks, catchphrases, or coined concepts, trademark registrations are frequently employed. In India,
                                trademark registration applications can be filed by individuals, businesses, and non-profit organisations. However, there are
                                specific standards for each category of person or company when it comes to submitting a trademark application.
                            </p>
                            <h3>Documents Required for the Trademark Registration</h3>
                            <p>
                                Incorporation Certificate, Partnership Deed, PAN Card, Aadhaar Card, Form 48 Signed, Logo
                            </p>
                            <h3>Product Mark Registration</h3>
                            <p>
                                A product mark is put on a good or a product, as opposed to a service. A product mark helps to identify the source of the goods
                                and to protect the reputation of the business. Trademark applications submitted under the trademark 1-34 may be considered
                                product marks because they represent commodities.
                            </p>
                            <h3>Service Mark Registration </h3>
                            <p>
                                Like a product mark, a service mark is used to distinguish services as opposed to products. The major objective of the service
                                mark is to assist set apart the owners from those of other businesses that provide services that are similar. Since the trademark
                                applications fall under trademark classes 35 through 45, they may be viewed as service marks.
                            </p>
                            <h3>Pattern Mark Registration </h3>
                            <p>
                                The pattern markings apply to goods with a particular designed pattern that acts as its identifying feature. Rejecting patterns
                                that don't stick out as significant. A pattern mark needs to be clearly distinguishable to be registered.
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

export default TrademarkRegistration;