import React from 'react';
import Choose from '../Home/Choose/Choose';
import Client from '../Home/Client/Client';
import PageTitle from '../PageTitle/PageTitle';
import img from './../../Image/Page/19.png';
const FssaiRegistration = () => {
    return (
        <div>
            {/* Fssai-Registration */}
            <PageTitle title='FSSAI Registration'></PageTitle>
            <section class="page-section  bg-light">
                <div class="container">
                    <div class="page-content">
                        <div class="page-content-image">
                            <img class="img-fluid" src={img} alt="" />
                        </div>
                        <div class="page-content-text mt-5">
                            <h2 class="page-content-title">FSSAI Registration</h2>
                            <p>
                                FSSAI Registration is required for the Small Food Business, Juice Shops, Home Food Business Etc. The Ministry of Health and
                                Welfare in India is home to the independent Food Safety and Standard Authority of India (FSSAI). The FSSAI Department was
                                established by the FSSAI Act to licence and oversee food-related businesses in India.
                            </p>
                            <h3>
                                Register FSSAI
                            </h3>
                            <p>
                                All petty food business operators must be registered with the FSSAI. Petty food business owners include anyone whoproduces
                                or sells any food item either personally or through a small shop, hawker, itinerant vendor, or temporary stall holder;distributes
                                food, excluding catering, during any religious or social event; other food enterprises, such as cottage or small-scale operations.
                            </p>
                            <h3>Types OF FSSAI</h3>
                            <p>State FSSAI licences and Central FSSAI licences are the two types of FSSAI licences. The licencing authority would vary depend
                                ing on the size and type of the company. Big food producers, processors, transporters, and importers need a central FSSAI
                                licence. For medium-sized food makers, processors, and transporters, a state FSSAI licence is necessary.</p>
                            <p>Compared to an FSSAI registration, the fee and process are more involved for an FSSAI licence. A Form B application for an FSSAI
                                licence should be submitted to the relevant Licensing Authority along with the required self-attested statement, affidavit, and
                                annexures, where necessary.</p>
                            <h3>Documents Required for FSSAI</h3>
                            <ul className='px-4'>
                                <li>Photograph of a food industry operator.</li>
                                <li>Ration cards, voter identification cards, PAN cards, driving licences, passports, Aadhar cards, senior citizen cards, and
                                    department-issued IDs are examples of documents that serve as identity proof.</li>
                                <li>Additional Files (if Any):NOC from the municipality or panchayat, NOC for health.</li>
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

export default FssaiRegistration;