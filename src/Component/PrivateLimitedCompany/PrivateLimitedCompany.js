import React from 'react';
import Choose from '../Home/Choose/Choose';
import Client from '../Home/Client/Client';
import img from './../../Image/Page/11.png';
const PrivateLimitedCompany = () => {
    return (
        <div>
            <section class="page-section py-5 bg-light">
                <div class="container">
                    <div class="page-content">
                        <div class="page-content-image">
                            <img class="img-fluid" src={img} alt="" />
                        </div>
                        <div class="page-content-text mt-5">
                            <h2 class="page-content-title">Private Limited Company Tax Filing and Compliance</h2>

                            <p>
                                ACOUNTIER will be supporting our clients in Private Limited Company Tax Filings. Preparing the Financial Statements, MCA
                                Annual Returns Filing Etc. The Private Limited Company registered in India must ensure the compliance concerned to Company’s
                                Act 2013 are met.  The RoC compliance for the registered private Limited Company is Important. The Company’s Act 2013
                                regulated the Appointment, Qualification, Salary, and the retirement of the directors of the company.
                            </p>
                            <p>
                                The Other aspects such as conducting the board meeting or share holders’ meetings are also regulated by the Company’s ACT
                                2013. The Private Limited Company should maintain the annual compliances like annual returns, income tax returns each year.
                            </p>
                            <p>
                                If you are a New Entrepreneur understanding the legalities and the compliances will be very difficult. The ACOUNTIER Expert Team
                                will be able to assist you in understanding all the corporate laws and the legalities of the Private Limited Company.
                            </p>
                            <h3>Minimum Income Tax to be paid by Partnership Company</h3>
                            <h4>Legalities to be Maintained by the Private Limited Company</h4>
                            <p>
                                Commencement of the Business Certificate is to be obtained if the business starts its operations. This Certificate must be
                                obtained within 180 days of the Company Incorporation.
                            </p>
                            <p>
                                Statutory Auditor must be appointment within 30 days of the Company Incorporation. Failing to appoint the Auditor will
                                get you a fine of 300 Rs/- Per Month.
                            </p>
                            <p>
                                Income Tax for the Private Limited Company must be Filed on or before 30th September. The Registered Private Limited
                                Company should file the MCA Form AOC-4.
                            </p>
                            <p>
                                The Directors must file for DIN eKYC or DIR-3 eKYC.
                            </p>
                            <p>
                                The Private Limited Company should hold the Annual General Meeting once a year.
                            </p>
                            <p>
                                The Private Limited Companies should keep their AGM within 6 months from the date of the Close of the Financial Year.
                            </p>
                            <h4>Statutory Audit</h4>
                            <p>
                                The Statutory Audit is carried out to understand whether the Organization provides accurate details on the Bookkeeping and
                                the Financial Transactions.
                            </p>
                            <h4>Annual Roc Filings</h4>
                            <p>
                                The Private Limited company must file the annual returns disclosing the Stakeholders and Directors details.
                            </p>
                            <p>
                                Form MGT-7 must be filed within 60 days of conducting the annual general meeting.Form AOC-4 (Financial statements) should
                                be filed within 30 days with the balance sheet, profit and loss account and Director Report.
                            </p>
                            <h4>Board Meeting of the Private Limited Company</h4>
                            <p>
                                Form MGT-7 must be filed within 60 days of conducting the annual general meeting.Form AOC-4 (Financial statements) should
                                be filed within 30 days with the balance sheet, profit and loss account and Director Report.
                            </p>
                            <h4>Board Meeting of the Private Limited Company</h4>
                            <p>
                                It is Vital to Consult the Board Meeting with all the directors within 30 days of the Incorporation of the Company. Four Board Meetings
                                should be conducted every 3 months where at least 2 directors of the company should be present in the meeting.
                            </p>
                            <h4>Allowed Deductibles</h4>
                            <ul className='m-4'>
                                <li>Renumerations paid to the partners of the Firm which is not registered.</li>
                                <li>Renumeration Or Salaries paid to the non-working partners of the Company.</li>
                                <li>If the Renumerations were made on the Partnerships, The date of the Partnership signed will be taken in the Consideration
                                    before calculating the deductibles. </li>
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

export default PrivateLimitedCompany;