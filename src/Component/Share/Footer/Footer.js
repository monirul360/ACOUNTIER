import React from 'react';
import { Link } from 'react-router-dom';
import facebook from './../../../Image/icons/Footer-icon/facebook.svg';
import youtube from './../../../Image/icons/Footer-icon/youtube.svg';
import dribbble from './../../../Image/icons/Footer-icon/dribbble.svg';
import figma from './../../../Image/icons/Footer-icon/figma.svg';
import whatsapp from './../../../Image/icons/Footer-icon/whatsapp.svg';
import call from './../../../Image/icons/Footer-icon/call-calling.svg';
import sms from './../../../Image/icons/Footer-icon/sms.svg';

const Footer = () => {
    return (
        <>

            {/* <Footer  */}

            <footer class="footer section-padding-top">
                <div class="container">
                    <div class="footer-top row">
                        <div class="footer-1 col-12 col-sm-8 col-md-6 col-lg-5">
                            <div class="footer-item">
                                <div class="footer-header">
                                    <h5>Our Location</h5>
                                </div>
                                <div class="footer-content">
                                    <p class="mb-1">ACOUNTIER - High Professional Finance</p>
                                    <p class="mb-1">PROACSCENT Business Solutions Pvt Ltd</p>
                                    <p class="mb-1">
                                        #1, 2nd Floor, M.C.Plaza, 1st Cross, 1st Main,
                                    </p>
                                    <p class="mb-1">Ganganagar, R.T.Nagar Post, Bangalore-560032</p>
                                </div>
                                <div class="footer-one-icon">
                                    <ul>
                                        <li>
                                            <Link to="#"><img src={facebook} alt="facebook" /></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><img src={youtube} alt="youtube" /></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><img src={dribbble} alt="dribbble" /></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><img src={figma} alt="figma" /></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><img src={whatsapp} alt="whatsapp" /></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="footer-2 col-12 col-sm-4 col-md-6 col-lg-2">
                            <div class="footer-item">
                                <div class="footer-header">
                                    <h5>About</h5>
                                </div>
                                <div class="footer-content">
                                    <ul>
                                        <li><Link to="Aboutus">About us</Link></li>
                                        <li><Link to="3">Blog</Link></li>
                                        <li><Link to="#">Careers</Link></li>
                                        <li><Link to="#">Jobs</Link></li>
                                        <li><Link to="#">In Press</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="footer-3 col-12 col-sm-6 col-md-6 col-lg-2">
                            <div class="footer-item">
                                <div class="footer-header">
                                    <h5>Supprt</h5>
                                </div>
                                <div class="footer-content">
                                    <ul>
                                        <li><Link to="/ContactUs">Contact us</Link></li>
                                        <li><Link to="#">Online Chat</Link></li>
                                        <li><Link to="#">Whatsapp</Link></li>
                                        <li><Link to="#">Telegram</Link></li>
                                        <li><Link to="#">Ticketing</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="footer-4 col-12 col-sm-6 col-md-6 col-lg-3">
                            <div class="footer-item">
                                <div class="footer-header">
                                    <h5>Contact</h5>
                                </div>
                                <div class="footer-content">
                                    <div class="footer-contact">
                                        <div class="footer-contact-icon">
                                            <img src={call} alt="" />
                                        </div>
                                        <div class="contact-text">
                                            <span>Have a Question?</span>
                                            <p>+91 9980655355</p>
                                        </div>
                                    </div>
                                    <div class="footer-contact">
                                        <div class="footer-contact-icon">
                                            <img src={sms} alt="" />
                                        </div>
                                        <div class="contact-text">
                                            <span>Contact us at</span>
                                            <p>info@acountier.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br /><br />
                </div>

                <div class="footer-bottom">
                    <p class="text-center">© ACOUNTIER 2022. All Rights Reserved</p>
                </div>
            </footer>

        </>
    );
};

export default Footer;