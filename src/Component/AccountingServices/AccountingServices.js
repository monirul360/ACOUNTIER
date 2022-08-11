import React from 'react';
import Choose from '../Home/Choose/Choose';
import Client from '../Home/Client/Client';
import PageTitle from '../PageTitle/PageTitle';
import img from './../../Image/Page/8.png';
const AccountingServices = () => {
    return (
        <div>
            {/* Accounting-Services */}
            <PageTitle title='Accounting Services'></PageTitle>
            <section class="page-section  bg-light">
                <div class="container">
                    <div class="page-content">
                        <div class="page-content-image">
                            <img class="img-fluid" src={img} alt="" />
                        </div>
                        <div class="page-content-text mt-5">
                            <h2 class="page-content-title">USA Accounting Services</h2>
                            <p>
                                ACOUNTIER provides Real-Time Bookkeeping, Accounting services, Federal Tax Services, Payroll Services, Inventory Management
                                Services, CFO Services, Data Migration to assess their performance. Our team works as a virtual accounting specialist for various
                                companies across the USA. ACOUNTIERWorks with CPA Firms, Accounting Firms, Small & Medium Companies
                            </p>
                            <p>
                                We provide end-to-end accounting and bookkeeping outsourcing solutions, from records to reports, quotations, orders, cash
                                orders and payments, to meet the needs of different customers.
                            </p>
                            <p>
                                ACOUNTIERis a team of skilled professionals whose purpose is to develop and improve their skills and knowledge on a regular basis.
                            </p>
                            <p>
                                We offer specialized services in accounting and financial outsourcing, accounting standards, IFRS, regulations related to the direct
                                taxation, accounting, and auditing.
                            </p>
                            <p>
                                We specialize in a variety of applications such as Sage, Odoo, Wave App, NetSuite, MYOB, QuickBooks Desktop, Intuit
                                QuickBooks Online and Xero.
                            </p>
                            <h3>
                                BEST REDUCTION IN COSTING
                            </h3>
                            <p>
                                You will see a Cost discount of at least 40-50% as in contrast to neighborhood Bookkeeper or Accountant retaining Higher
                                stage of Quality at equal time.
                            </p>
                            <h3>FAST TURNAROUND</h3>
                            <p>
                                We typically reply to each email's equal day or inside most 24 hours.
                            </p>
                            <h3>TECHNO SAVVY SERVICES</h3>
                            <p>
                                We have broad varied of understanding the use of quite a number addons in cloud Environment alongside with accounting software’s.
                            </p>
                            <h3>PROCESS-DRIVEN WORK</h3>
                            <p>
                                Our standardized approaches and respectable Project Management machine helps to speak with you certainly and efficiently.
                            </p>
                            <h3>REAL AND ERROR FREE WORK</h3>
                            <p>
                                Our Standardized Procedures and Checklists will make sure error free work.
                            </p>
                            <h3>QUALIFIED ACCOUNTANTS</h3>
                            <p>
                                All the Accountants are distinctly skilled and will be working underneath supervision and education of a CPA.
                            </p>
                            <h3>ACOUNTIER USA Services</h3>
                            <ul className='m-4'>
                                <li>Accounting Services</li>
                                <li>State & Federal Taxes Process Services</li>
                                <li>Bookkeeping Services</li>
                                <li>Payroll Services</li>
                                <li>Inventory Management Services</li>
                                <li>CFO Services</li>
                                <li>Data Migration</li>
                            </ul>
                            <p>Why is accounting so necessary for any business? Accounting, being a quintessential section of any business, the accounting
                                branch helps to monitor and record the quantity of Account/Cash receiving and Accounts/Cash Expenses whilst deciding how
                                nicely the commercial business enterprise is sincerely doing. In the New Generation Uncertain world, a growing type of company
                                from the Unites States are outsourcing their accounting offerings to third-party vendors like us who can take care of the complete
                                accounting Services. These professionals furnish best appropriate details and reduce fees to a great extent. At the same time,
                                companies reap the capability to focal point on their core operational approaches and extend productivity.</p>
                            <p>A Business Enterprise & Startups & CPA Firms wants to analyze what are the quite several accounting offerings it wants and which
                                of these can be outsourced. Driving effectivity is excessive on the precedence listing for CFOs who desire to outsource Finance
                                and Accounting methods besides dropping manage over the complete process. At the same time, accounting offerings to USA
                                is progressively increasing to new areas, area of interest industries, and groups of all sizes in contrast to how it
                                used to appear in the past</p>
                        </div>
                    </div>
                </div>
            </section>
            <Choose></Choose>
            <Client></Client>
        </div>
    );
};

export default AccountingServices;