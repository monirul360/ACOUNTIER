import React from 'react';
import './Home.css'
import img from './../../Image/Brand/name.png';
const Home = () => {
    return (
        <>
            <section className='my-3'>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className='m-1'>
                            <img className='img-fluid' src={img} alt="" />
                        </div>
                        <div className='m-1'>
                            <img className='img-fluid' src={img} alt="" />
                        </div>
                        <div className='m-1'>
                            <img className='img-fluid' src={img} alt="" />
                        </div>
                        <div className='m-1'>
                            <img className='img-fluid' src={img} alt="" />
                        </div>
                        <div className='m-1'>
                            <img className='img-fluid' src={img} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Popular Accounting */}
            <section className='my-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img className='img-fluid' src={img} alt="" />
                        </div>
                        <div className="col-md-6">
                            <p>Who We Are</p>
                            <h4 className='mb-3'>We are the Popular Accounting &
                                Taxation Company</h4>
                            <p>
                                Are you willing to start your own firm? We are here to help you to incorporate
                                your own firm in India. Know about the different kinds of the Business Registration
                                from the Proprietorship to the Private Limited Company, Partnership Firm and more
                                by speaking with our experts who have the in-depth knowledge on the Business
                                Registration and the compliance part
                                Know More</p>
                            <button className='btn btn-primary'>Know More</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Services */}
            <section className='my-5'>
                <p className='text-center mb-1'>Services</p>
                <h5 className='text-center'>Best Accounting Services </h5>
            </section>
        </>
    );
};

export default Home;