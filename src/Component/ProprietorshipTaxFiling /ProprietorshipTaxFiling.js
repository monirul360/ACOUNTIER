import React from 'react';
import Choose from '../Home/Choose/Choose';
import Client from '../Home/Client/Client';
import PageTitle from '../PageTitle/PageTitle';
import img from './../../Image/Page/22.png';
const ProprietorshipTaxFiling = () => {
    return (
        <div>
            {/* Proprietorship-Tax-Filing */}
            <PageTitle title='Proprietorship Tax Filing '></PageTitle>
            {/* Page Section  */}
            <section class="page-section  bg-light">
                <div class="container">
                    <div class="page-content">
                        <div class="page-content-image">
                            <img class="img-fluid" src={img} alt="" />
                        </div>
                        <div class="page-content-text mt-5">
                            <h2 class="page-content-title">Proprietorship Tax Filing</h2>

                            <p>
                                Proprietorship firms file the proprietor income tax return just like
                                other types of companies registered in India. In the legal sense, the
                                proprietorship and the proprietor are considered as one entity. As a
                                sole proprietorship is not taxed as a separate legal entity, business
                                owners file their business taxes like their individual returns.As an
                                individual taxpayer, a proprietorship firm is entitled to a
                                proprietorship tax deduction according to the Income tax rules and
                                depending on the slab rates applicable to his income. Whereas the
                                income tax rates for registered companies are assessed on flat rates.
                                The small proprietorship businesses are owned and operated by a single
                                person.
                            </p>

                            <table class="table table-bordered mb-5">
                                <thead>
                                    <tr>
                                        <th>Income Range</th>
                                        <th>Rate of Tax</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0-2,50,000</td>
                                        <td>Nill</td>
                                    </tr>
                                    <tr>
                                        <td>2,50,001-5,00,000</td>
                                        <td>5%</td>
                                    </tr>
                                    <tr>
                                        <td>5,00,001-7,50,000</td>
                                        <td>10%</td>
                                    </tr>
                                    <tr>
                                        <td>7,50,001- 10,00,000</td>
                                        <td>15%</td>
                                    </tr>
                                    <tr>
                                        <td>10,00,00-12,50,000</td>
                                        <td>20%</td>
                                    </tr>
                                    <tr>
                                        <td>12,50,000- 15,00,000</td>
                                        <td>25%</td>
                                    </tr>
                                    <tr>
                                        <td>Above 15,00,000</td>
                                        <td>30%</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3>How to File Income Tax for a Proprietorship Company?</h3>

                            <p>
                                Unless there is an exemption, proprietorship tax returns must be filed
                                each year. As we mentioned before, the proprietor and the
                                proprietorship firms are considered as one single person. If the
                                nature of the proprietorship is business ownership, then a business
                                registration form is to be filed. If the nature of the proprietorship
                                is personal ownership, then a personal registration form is to be
                                filed.
                            </p>

                            <p>
                                The Income Tax for the Partnership Firm is to be filed Online or
                                through Manually. The Digital Signature of the Partners are required
                                to File the Income Tax Online. If the Income Tax to be submitted
                                Manually 2 Copies of the ITR-V is required.
                            </p>

                            <h3>Form ITR-3</h3>
                            <p>
                                If you are the proprietor of a business that is run by a Hindu
                                Undivided Family (HUF), or by any proprietor, you should use this form
                                to file your income tax.
                            </p>

                            <h3>Form ITR-4</h3>
                            <p>
                                The proprietorship firm uses this form to file their proprietorship
                                tax under a presumptive tax scheme. This is done to make it easier for
                                small businesses to comply with regulations. The business income of
                                the person has been added to the payment the proprietor himself. In
                                this way, business taxes become personal taxes for the owner. The
                                owner is still entitled to all tax deductions offered to undivided
                                Hindu individuals or family.
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

export default ProprietorshipTaxFiling;