import React from 'react';
import Choose from '../Home/Choose/Choose';
import Client from '../Home/Client/Client';
import PageTitle from '../PageTitle/PageTitle';
import img from './../../Image/Page/10.png'
const IncomeTaxFiling = () => {
    return (
        <div>
            {/* Income-Tax-Filing */}
            <PageTitle title='Income Tax Filing'></PageTitle>
            <section class="page-section  bg-light">
                <div class="container">
                    <div class="page-content">
                        <div class="page-content-image">
                            <img class="img-fluid" src={img} alt="" />
                        </div>
                        <div class="page-content-text mt-5">
                            <h3>ITR-1</h3>
                            <p>
                                People with annual incomes of less than Rs. 50 lakhs from salaries or pensions and only one residential property may
                                use the ITR-1 form.
                            </p>
                            <h3>ITR-2</h3>
                            <p>
                                NRIs, directors of corporations, shareholders of private enterprises, and those with overseas income, capital gains, two or more
                                residential properties, or income exceeding Rs. 50 lakhs must all file ITR-2 forms.
                            </p>
                            <h3>ITR-3</h3>
                            <p>
                                Professionals and people running sole proprietorship businesses in India are required to file the ITR-3 form.
                            </p>
                            <h3>ITR-4</h3>
                            <p>
                                Taxpayers registered in the presumptive taxation system may submit an ITR-4 form. The taxpayer must earn less than Rs. 2
                                crores in company revenue or less than Rs. 50 lakhs in professional revenue to be eligible for the programme.
                            </p>
                            <h3>ITR-5</h3>
                            <p>
                                Partnership firms, LLPs, associations, and groups of people must file an ITR-5 form to record their revenue and compute their taxes.
                            </p>
                            <h3>ITR-6</h3>
                            <p>
                                Indian-registered businesses are required to submit the ITR-6 form.
                            </p>
                            <h3>ITR-7</h3>
                            <p>
                                Entities claiming exemption as political parties, scientific research institutions, colleges or universities, charitable/religious trusts,
                                or must complete an ITR-7 form.
                            </p>
                            <h5>Due Date For Income Tax Returns</h5>
                            <p>
                                Individual taxpayers have until July 31 of each year to file their income tax returns. The deadline for filing income tax returns for
                                businesses and taxpayers who need a tax audit is September 30. The Income Tax Act's Section 44AD addresses tax audits
                                under the Act.
                            </p>
                            <h3>Business</h3>
                            <p>
                                If a company's total sales turnover or gross receipts in any prior year exceeded Rs. 1 crore, a tax audit would be necessary.
                            </p>
                            <h3>Professional</h3>
                            <p>
                                If a profession's or professional's gross receipts in any prior year exceeded Rs. 50 lakhs, a tax audit would be necessary.
                            </p>
                            <h3>Top Income Tax Deductions</h3>
                            <h4>Section 80C Deduction</h4>
                            <p>On amounts paid or deposited in PF, PPF, LIC premiums, National Savings Certificates, ULIPs, principal portions of housing loan
                                repayment, tuition fees for children, term deposits in banks, deposits in Senior Citizen savings schemes, and more, income tax
                                deductions of up to Rs. 1.5 lakhs may be claimed.</p>
                            <h4>Section 80D Deduction</h4>
                            <p>
                                Individuals and HUF may deduct payments made via check to medical insurance under the GI plan under Section 80D. Additionally,
                                under Section 80D, fees up to Rs. 5000 paid for preventive medical exams may be deducted from income.
                            </p>
                            <h4>Section 80EE Deduction</h4>
                            <p>
                                The taxpayer may claim an additional deduction under Section 80EE for interest on home loan payments made via EMI. The first
                                mortgage loan qualifies for the deduction if the loan balance is under Rs. 35 lakhs and the property value is under Rs. 50 lakhs.
                            </p>
                            <h4>Section 80E Deduction</h4>
                            <p>
                                Individuals may use the Section 80E deduction to pay back interest on loans taken in accordance with higher deductions. Under
                                Section 80E, the amount of interest paid is deductible. The longest time frame for which this deduction may be used is 8 years,
                                beginning with the loan's repayment or until the whole amount of the loan is repaid, whichever comes first.
                            </p>
                            <h4>Section 80G Deduction</h4>
                            <p>
                                Donations to specific funds and charitable organisations are eligible for Section 80G deductions up to a maximum of 10% of gross
                                taxable income. The fund's exemption would determine the amount of the deduction that is allowed. Cash deductions over Rs.
                                2000 cannot be claimed under Section 80G
                            </p>
                            <h4>Income Tax Deductions</h4>
                            <p>
                                Taxpayers can reduce their tax obligations by taking advantage of a variety of income tax deductions. To learn more about income
                                tax deductions, use the income tax calculator or read the page below.
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

export default IncomeTaxFiling;