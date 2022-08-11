import React from 'react';
import Choose from '../Home/Choose/Choose';
import Client from '../Home/Client/Client';
import PageTitle from '../PageTitle/PageTitle';
import img from './../../Image/Page/23.png';
const BookkeepingServices = () => {
    return (
        <div>
            {/* Bookkeeping-Services */}
            <PageTitle title='Bookkeeping Services'></PageTitle>
            <section class="page-section  bg-light">
                <div class="container">
                    <div class="page-content">
                        <div class="page-content-image">
                            <img class="img-fluid" src={img} alt="" />
                        </div>
                        <div class="page-content-text mt-5">
                            <h2 class="page-content-title">Bookkeeping Services</h2>
                            <p>
                                A Bookkeeper no longer solely segregates your data; however, it additionally affords you a sorted platter. One look thru the sheet
                                and you can discover the proper information. It is our huge trip of accounting and bookkeeping that offers us the area at retaining
                                your books perfect.
                            </p>
                            <p>
                                Bookkeeping is an Art! Like any different shape of Art, it receives higher with practice. Our journey of extra than 15 years making
                                us one of the first-rate bookkeeping carrier providers.
                            </p>
                            <p>
                                Outsourcing bookkeeping provider has emerged as a new norm of coping with the books of accounts. The purpose being in
                                residence Bookkeeping now not solely takes enough time however additionally is a tiresome activity. Especially for small or
                                medium scale business, it takes space, time and expenses that may also higher put in use for different enterprise purposes.
                            </p>
                            <p>
                                Being the best bookkeeping and tax return firm, We consider in convenient dealing with our purchasers for which we grant a set
                                of a preliminary guidelines of files required from you. Your files are protected with us. We stay in contact with our consumers by
                                way of more than a few online platforms.
                            </p>
                            <h3>Bookkeeping Benefits</h3>
                            <p>Our dedicated team of corporate tax specialists can help you comply with all your regular corporate tax compliance requirements
                                at the Federal and State levels. Our services in this area are detailed below:</p>
                            <ul className='p-4'>
                                <li>Cloud-based accounting on Xero, QuickBooks etc.</li>
                                <li>Experienced, licensed, and expert bookkeeping service</li>
                                <li>Bank reconciliation & Credit Card reconciliation.</li>
                                <li>Timely upkeep of books of accounts.</li>
                                <li>24 x 7 carrier with several conversation media such as skype chat, emails, and calls.</li>
                                <li>Handling of income tax, federal tax and payroll taxes and filling procedure.</li>
                                <li>Daily follow-up updates.</li>
                                <li>Handling and calculation of Texas, California, New York payroll taxes.</li>
                                <li>Various bookkeeping carrier such as bills receivable, payable processing, payroll management, financial institution
                                    reconciliation etc. beneath a single roof.</li>
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

export default BookkeepingServices;