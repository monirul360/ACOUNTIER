import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <>

            <footer className='footer p-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <div className='p-1'>
                                <h5 className='mb-3'>Our Location</h5>
                                <p className='mb-1'>ACOUNTIER - High Professional Finance</p>
                                <p className='mb-1'>PROACSCENT Business Solutions Pvt Ltd</p>
                                <p className='mb-1'>#1, 2nd Floor, M.C.Plaza, 1st Cross, 1st Main, </p>
                                <p className='mb-1'>Ganganagar, R.T.Nagar Post, Bangalore-560032</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className='p-1'>
                                <h5 className='mb-3'>About</h5>
                                <ul>
                                    <li><Link to="/">About us</Link></li>
                                    <li><Link to="/">Blog</Link></li>
                                    <li><Link to="/">Careers</Link></li>
                                    <li><Link to="/">Jobs</Link></li>
                                    <li><Link to="/">In Press</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="p-1">
                                <h5 className='mb-3'>Support</h5>
                                <ul>
                                    <li><Link to="/">Contact us</Link></li>
                                    <li><Link to="/">Online Chat</Link></li>
                                    <li><Link to="/">Whatsapp</Link></li>
                                    <li><Link to="/">Telegram</Link></li>
                                    <li><Link to="/">Ticketing</Link></li>
                                </ul>
                            </div>
                        </div >
                        <div className="col-md-3">
                            <div className="p-1">
                                <h5 className='mb-3'>Support</h5>
                                <p>+91 9980655355</p>
                                <p>info@acountier.com</p>
                            </div>
                        </div>
                    </div >
                </div>
                <br />
                <hr />
                <br />
                <p className='text-center'>© Tax Service 2022. All Rights Reserved</p>
            </footer >
        </>
    );
};

export default Footer;