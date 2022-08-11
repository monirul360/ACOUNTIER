import React from 'react';
import Choose from '../Home/Choose/Choose';
import Client from '../Home/Client/Client';
import PageTitle from '../PageTitle/PageTitle';
import img from './../../Image/Page/9.png';
const PartnershipAnnualComplianceTaxFiling = () => {
    return (
        <div>
            {/* Partnershiptax */}
            <PageTitle title='Partnership Annual Compliance & Tax Filing '></PageTitle>
            <section class="page-section  bg-light">
                <div class="container">
                    <div class="page-content">
                        <div class="page-content-image">
                            <img class="img-fluid" src={img} alt="" />
                        </div>
                        <div class="page-content-text mt-5">
                            <h2 class="page-content-title">
                                Partnership Annual Compliance & Tax Filing
                            </h2>
                            <p>
                                ACOUNTIER will be preparing the Financial Statement with one Year of Income Tax Filing and Annual Returns Filing. A partnership
                                Firm is a Business where more than one person will be Involved as a Stake Holder of the Company. The Partnership Firm is the
                                oldest type of the Business entities in India. The Partners entered the Partnership Firm having 2 or more partners collectively
                                called as a “Firm” under which the Business is carried out under a “Business Name” or the “Trade Name” which is registered is
                                liable to do the Income Tax Filing.
                            </p>
                            <p>
                                Under the Income Tax Act 1961, The Firms are liable to pay the Income Tax of 30% on the Total Income. The Partnership Firm is
                                also Liable to pay the Income Tax Surcharge of 12% if the total income is exceeding 1 Crores Rs/-
                            </p>
                            <p>
                                The Partnership Firm must pay a Surcharge of education cess and the secondary higher education cess. Education Cess is
                                applicable on the amount of Income Tax and the applicable surcharge at 2% on the amount of income tax and the applicable
                                surcharge at the rate of 1%.
                            </p>
                            <h3>
                                Minimum Income Tax to be paid by Partnership Company
                            </h3>
                            <h4>Allowed Deductibles</h4>
                            <ul className='p-4'>
                                <li>Renumerations paid to the partners of the Firm which is not registered.</li>
                                <li>Renumeration Or Salaries paid to the non-working partners of the Company.</li>
                                <li>If the Renumerations were made on the Partnerships, The date of the Partnership signed will be taken in the Consideration
                                    before calculating the deductibles. </li>
                            </ul>
                            <h3>Filing the Income Tax for the Partnership Firm</h3>
                            <p>
                                ITR-5 is the form used to file the Income Tax for the Partnership Firm and this is not for the Individual Partners. The Partners
                                should be able to submit the business details and the produce to the Tax authorities. No Other Documents or Statements
                                needs to be submitted to File the Income Tax Statement for the Partnership Firm.
                            </p>
                            <p>
                                The Income Tax for the Partnership Firm is to be filed Online or through Manually. The Digital Signature of the Partners are
                                required to File the Income Tax Online. If the Income Tax to be submitted Manually 2 Copies of the ITR-V is required.
                            </p>
                            <h3>The Income Tax Filing Date</h3>
                            <p>
                                The Income Tax Filing Date for the Partnership Firm is July 31st. If the Firm Auditing is not required, then the Income Tax
                                Filing is Required on September 30th.
                            </p>
                            <p>
                                The Compliances for the Partnership Firm is very lesser compared to the Private Limited Company. The Regular Meetings
                                or Registry are not much required for the Partnership Firm.
                            </p>
                            <h3>Income Tax for the Individual Partners</h3>
                            <p>
                                As the Partnership Firm is paying the Income Tax, The Individual Partners are not required to File the Income Tax for the
                                Dividends obtained from the Partnership Company.
                            </p>
                            <p>
                                The Income Received by the Partners will be taxed under 'Business or Professional Income', Excluded other then the Firm
                                allowed amount being more than the limits laid in S. 40(b) and from A.Y. 2004-05 amount disallowed in the event of any
                                failure as mentioned in S. 144 or non-compliance of S. 184.
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

export default PartnershipAnnualComplianceTaxFiling;