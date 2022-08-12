import React from 'react';
import Choose from '../Home/Choose/Choose';
import Client from '../Home/Client/Client';
import PageTitle from '../PageTitle/PageTitle';
import img from './../../Image/Page/29.png';
const BusinessTaxFiling = () => {
    return (
        <div>
            {/* Business-Tax-Filing */}
            <PageTitle title='Business Tax Filing'></PageTitle>
            <section class="page-section  bg-light">
                <div class="container">
                    <div class="page-content">
                        <div class="page-content-image">
                            <img class="img-fluid" src={img} alt="" />
                        </div>
                        <div class="page-content-text mt-5">
                            <h2 class="page-content-title">Business Tax Filing</h2>

                            <p>
                                All businesses across India are required to file income tax returnsyear on year. A business may also be required to file a TDS
                                return and pay advance tax to stay compliant with the Income Tax Act. ACOUNTIER is India's largest tax services platform
                                offering a range of services such as registration, GST filing, income tax filing and more.ACOUNTIER tax experts can help you
                                file your business income tax return and ensure it complies with Income Tax Law and regulations. The average time it takes to
                                file an income tax return for your business is 3 to 5 business days. Get a free consultation on your business taxes by scheduling
                                an appointment with an advisor from ACOUNTIER.</p>
                            <h3>Proprietorship</h3>
                            <p>
                                Anyone with a business or professional income of more than Rs.2.5 racks per year is required to file an income tax return each
                                year. ACOUNTIER offers tax filing services for professionals and business owners. Connect with ACOUNTIER experts now to get
                                the most up-to-date information.
                            </p>
                            <h3>Partnership</h3>
                            <p>
                                Partnership firms must file an income tax return (Form ITR 5) each year. Partnership firms are taxed at a rate of 30%. ACOUNTIER
                                provides tax filing for partnership firms. Connect with ACOUNTIER experts today to get the help you need.
                            </p>
                            <h3>LLP</h3>
                            <p>
                                Limited liability partnership firms registered in India are required to file an Income Tax Return (Form ITR-5) each year, and a MCA
                                Annual Return. ACOUNTIER offers comprehensive compliance management services to help you stay in compliance with
                                government regulations. Contact us to speak with our experts about how we can help you stay compliant.
                            </p>
                            <h3>Companies</h3>
                            <p>
                                All companies registered in India are required to file an Income Tax Return (Form ITR-6) each year and an MCA Annual Return.
                                ACOUNTIER offers a comprehensive compliance management program for businesses, so you can connect with our experts now.
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

export default BusinessTaxFiling;