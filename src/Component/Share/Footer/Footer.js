import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <>

            {/* <Footer  */}
            <footer class="footer pt-5">
                <div class="container">
                    <div class="footer-top row">
                        <div class="footer-1 col-12 col-sm-8 col-md-5 col-lg-5 mb-3 mb-md-0">
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
                                            <a href="#"><i class="fa fa-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa fa-youtube-play"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa fa-dribbble"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa fa-whatsapp"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="footer-2 col-12 col-sm-4 col-md-2 col-lg-2 mb-3 mb-md-0">
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

                        <div class="footer-3 col-12 col-sm-6 col-md-2 col-lg-2 mb-3 mb-md-0">
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

                        <div class="footer-4 col-12 col-sm-6 col-md-3 col-lg-3 mb-3 mb-md-0">
                            <div class="footer-item">
                                <div class="footer-header">
                                    <h5>Contact</h5>
                                </div>
                                <div class="footer-content">
                                    <div class="footer-contact">
                                        <div class="footer-contact-icon">
                                            <i class="fa fa-phone"></i>
                                        </div>
                                        <div class="contact-text">
                                            <span>Have a Question?</span>
                                            <p>+91 9980655355</p>
                                        </div>
                                    </div>
                                    <div class="footer-contact mt-3">
                                        <div class="footer-contact-icon">
                                            <i class="fa fa-envelope-o"></i>
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

                <div class="footer-bottom py-3 mt-3">
                    <p class="text-center">© Acountier 2022. All Rights Reserved</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;