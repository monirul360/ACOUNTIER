import React from 'react';
import Choose from '../Home/Choose/Choose';
import Client from '../Home/Client/Client';
import PageTitle from '../PageTitle/PageTitle';
import img from './../../Image/Nidhicompany/nidhi.png';
const NidhiCompany = () => {
    return (
        <div>
            {/* Nidhi-Company */}
            <PageTitle title='Nidhi Company'></PageTitle>
            <section className='py-5'>
                <div className="container">
                    <div className="common-section ">
                        <div>
                            <img className='img-fluid' src={img} alt="" />
                        </div>
                        <div className="my-3 p-3">
                            <h4 className='my-3'>Nidhi Company </h4>
                            <p className="my-3">Nidhi Company is used to incorporate the savings cultivation within the group of the members of the Nidhi Company. Nidhi
                                Company is allowed to borrow the money from its members and lend the money to the members. Nidhi companies are Limited
                                Registered Companies involving in taking the deposits and lending the money to the other members in the Company. Nidhi
                                Companies are like the NBFC. </p>
                            <p className='my-4'>Nidhi companies cannot carry the chit funds activities. Cannot issue any debentures or shares, Nidhi company cannot acquire
                                another company or control any board of other company. Nidhi company cannot accept or lend money to other people than
                                its own members. </p>
                            <p className='my-3'>Nidhi Company requires three directors and seven shareholders to incorporate a Limited Liability company. Nishi company must
                                meet certain criteria within one year of time which is not having members less than 200 shareholders, Have funds of 10 Lakhs
                                Rs/- or more than that.</p>
                            <p className='my-4 text-center'>Connect with ACOUNTIER to Register your Company as a Limited Liability Company.</p>
                        </div>
                    </div>
                </div>
            </section >
            <Choose></Choose>
            <Client></Client>
        </div >
    );
};

export default NidhiCompany;