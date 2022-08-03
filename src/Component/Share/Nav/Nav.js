import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../Image/Home/logo.png';
import './../../../App.css';
const Nav = () => {
    return (
        <>
            <header class="header">
                <div class="container">
                    <div class="header-logo">
                        <Link to='/'>
                            <h1><img src={logo} alt="Accountier" /></h1>
                        </Link>
                    </div>
                    <div class="header-menu">
                        <div class="nav-mini-button">
                            <i class="fa fa-bars"></i>
                        </div>
                        <nav class="header-navbar header-navbar-hide">
                            <ul>
                                <li class="active"><Link to='/'>Home</Link></li>
                                <li><Link to='/'>India Service</Link></li>
                                <li><Link to='/'>US Service</Link></li>
                                <li><Link to='/'>Blog</Link></li>
                                <li><Link to='/'>Contact</Link></li>
                                <li class="login"><Link to='/login'>Login</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Nav;