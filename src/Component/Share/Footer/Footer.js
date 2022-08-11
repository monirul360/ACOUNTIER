import React from 'react';
import { Link } from 'react-router-dom';
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
                                            <a href="#"><img src='/' alt="facebook" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="./img/vector/youtube.svg" alt="youtube" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="./img/vector/dribbble.svg" alt="dribbble" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="./img/vector/figma.svg" alt="figma" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="./img/vector/whatsapp.svg" alt="whatsapp" /></a>
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
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="#">Jobs</a></li>
                                        <li><a href="#">In Press</a></li>
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
                                        <li><a href="#">Contact us</a></li>
                                        <li><a href="#">Online Chat</a></li>
                                        <li><a href="#">Whatsapp</a></li>
                                        <li><a href="#">Telegram</a></li>
                                        <li><a href="#">Ticketing</a></li>
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
                                            <img src="./img/vector/call-calling.svg" alt="" />
                                        </div>
                                        <div class="contact-text">
                                            <span>Have a Question?</span>
                                            <p>+91 9980655355</p>
                                        </div>
                                    </div>
                                    <div class="footer-contact">
                                        <div class="footer-contact-icon">
                                            <img src="./img/vector/sms.svg" alt="" />
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
                </div>

                <div class="footer-bottom">
                    <p class="text-center">© ACOUNTIER 2022. All Rights Reserved</p>
                </div>
            </footer>

        </>
    );
};

export default Footer;