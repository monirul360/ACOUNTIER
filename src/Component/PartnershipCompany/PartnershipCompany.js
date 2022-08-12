import React from 'react';
import Choose from '../Home/Choose/Choose';
import Client from '../Home/Client/Client';
import PageTitle from '../PageTitle/PageTitle';
import img from './../../Image/Page/27.png';
const PartnershipCompany = () => {
    return (
        <div>
            <PageTitle title='Partnership Company'></PageTitle>
            <section class="page-section  bg-light">
                <div class="container">
                    <div class="page-content">
                        <div class="page-content-image">
                            <img class="img-fluid" src={img} alt="" />
                        </div>
                        <div class="page-content-text mt-5">
                            <h2 class="page-content-title">Partnership Company</h2>

                            <p>
                                The Partnership Firm in India is described in the Article 1932 of Indian Partnership Act. This Law provides the information about
                                the duties between the two or three partners in the partnership firm. The Partnership business is a Business carried out between
                                the two or more partners to share their profits as per the statement of Section 4 in the Indian Partnership Act.
                            </p>
                            <p>
                                The Partnership Company is formed with the agreement signed between the two or three partners of the Company. The
                                Agreement states to share the profits obtained from the business. All the partners or either of the partners should be
                                running the Partnership company.
                            </p>
                            <h3>Types of the Partnership Firm</h3>
                            <h3>Partnership at a Will</h3>
                            <p>
                                There is no time limit or time frame mentioned in the contract between the two or three partners. There is no provision for the
                                duration in the Partnership at Will.
                            </p>
                            <h3>Task based Partnership</h3>
                            <p>
                                The Particular task-based partnership or project-based partnership is valid only for the timeframe when the project is on process.
                                Once the Project or Task is completed, The Partnership will be closed.
                            </p>
                            <h3>Types of the Partner for the Partnership Company</h3>
                            <h3>Active Partner </h3>
                            <p>
                                Active Partner is the type of the partner when the Partnership company has an actual partner with an agreement made between
                                the two partners who can run the business entity in the absence of the other partner.
                            </p>
                            <h3>Sleeping Partner</h3>
                            <p>
                                the person who does not involve in any business activities of the firm and only the partner by share and who will not be giving
                                any kind of the public notice.
                            </p>
                            <h3>Sleeping Partner</h3>
                            <p>
                                only is the Person who is entitled to get the profits in the business. This person can be gaining from the profits only and not entitled
                                to any loss of the company. Minimum of 2 members are required to start the partnership firm. Indian Citizens or NRI’s can become
                                the partner of the partnership firm. PAN Card and the Identity Address proof is required to start the partnership firm. The Partnership
                                Firm must file the returns of the profits or losses made by the partners of the firm.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Site Promotion  */}
                <div class="promotion-section bg-light">
                    <div class="container">
                        <div class="promotion-content">
                            <p>
                                Register the Partnership firm with ACOINTIER.
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

export default PartnershipCompany;