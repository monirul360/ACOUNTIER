import React from 'react';
import Choose from '../Home/Choose/Choose';
import Client from '../Home/Client/Client';
import PageTitle from '../PageTitle/PageTitle';
import img from './../../Image/Page/16.png';
const PatentRegistration = () => {
    return (
        <div>
            {/*Patent-Registration  */}
            <PageTitle title='Patent Registration'></PageTitle>
            <section class="page-section  bg-light">
                <div class="container">
                    <div class="page-content">
                        <div class="page-content-image">
                            <img class="img-fluid" src={img} alt="" />
                        </div>
                        <div class="page-content-text mt-5">
                            <h2 class="page-content-title">Patent Registrations</h2>

                            <p>
                                India allows for the registration of patents for inventions. A patent is a privilege awarded by the government to an individual or
                                business that prevents others from producing, utilising, selling, or importing the patented good or method without the patent
                                holder's permission or cooperation.s
                            </p>
                            <h3>Indian Patent Application Types</h3>
                            <p>
                                A provisional application, often referred to as a temporary application, is submitted when an invention is still under development
                                and has not yet been completed. If a patent application is filed early, any additional pertinent inventions will not be considered
                                prior art to the inventor's application. These patent applications are submitted when an invention needs additional time to develop.
                            </p>
                            <p>
                                Ordinary or Non-Provisional Application, If the application is not submitted in accordance with any prior convention application,
                                it does not have any priority to claim.
                            </p>
                            <p>
                                A complete specification is submitted after the matching provisional specification and claims priority over the earlier provisional
                                specification. This is known as a subsequent filing.
                            </p>
                            <p>
                                When a comparable or identical application is submitted in any of the convention nations, the convention application is filed to
                                claim a priority date based on that application.
                            </p>
                            <p>
                                An applicant must apply to the Indian Patent Office within a year after the date on which a comparable application was first filed
                                in the convention country in order to be granted status under the agreement.
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

export default PatentRegistration;