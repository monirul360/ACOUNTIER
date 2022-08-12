import React from 'react';
import Choose from '../Home/Choose/Choose';
import Client from '../Home/Client/Client';
import PageTitle from '../PageTitle/PageTitle';
import img from './../../Image/Page/20.png';
const CopyrightRegistration = () => {
    return (
        <div>
            {/* Copyright Registration */}
            <PageTitle title='Copyright Registration'></PageTitle>
            <section class="page-section  bg-light">
                <div class="container">
                    <div class="page-content">
                        <div class="page-content-image">
                            <img class="img-fluid" src={img} alt="" />
                        </div>
                        <div class="page-content-text mt-5">
                            <h2 class="page-content-title">Copyright Registration</h2>

                            <p>
                                Copyright registration grants a set of rights to the work, including reproduction, public communication, adaptation, and translation.
                            </p>
                            <h3>Eligibility</h3>
                            <p>
                                Any works relating to literature, theatre, music, art, film, or sound recordings are eligible for copyright registration. The copyright
                                statute grants copyrights to three primary categories of works, each of which has a unique right.
                            </p>
                            <p>
                                The copyright for books, music, paintings, sculptures, and other creative works includes original literary, dramatic, musical, and
                                aesthetic works.
                            </p>
                            <p>
                                Another category of copyright that includes any type of visual recording on any medium is cinematography. Within the copyright
                                laws, recordings of sounds fall under the category of "sound recordings," regardless of the medium on which they are generated,
                                or the process used to create the sound.
                            </p>
                            <h3>
                                Obtaining Copyright Registration Has Benefits It Offers Legal Protection
                            </h3>
                            <p>
                                When their work is copied without permission, the creators are protected by the law. It is much simpler to defend the original work
                                against infringement when a copyright is registered.
                            </p>
                            <h3>Industry Presence</h3>
                            <p>
                                Copyright registration establishes ownership of the creative work and creates a public record of the work.
                            </p>
                            <h3>Ownership Rights</h3>
                            <p>
                                The right to reproduce, distribute, adapt, and translate the work belongs to the owner of the registered copyright.
                            </p>
                            <h3>Validity of Copyright Protection</h3>
                            <p>
                                The typical duration of copyright protection is 60 years. In the case of original literary, dramatic, musical, and artistic works, the
                                60-year period commences with the author's death year. In the case of cinematographic films, sound recordings, images,
                                posthumous publications, anonymous and pseudonymous publications, works of government, and activities of international
                                organisations, the 60 years are measured from the date of publication.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Site Promotion  */}
                <div class="promotion-section bg-light">
                    <div class="container">
                        <div class="promotion-content">
                            <p>
                                Connect with ACOUNTIER to Register your Company as a Limited
                                Liability Company.
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

export default CopyrightRegistration;