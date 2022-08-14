import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../Image/Home/logo.png';
import './../../../App.css';
const Nav = () => {

    const [navMiniButton, setnavMiniButton] = useState(false);
    const [singleNavOne, setsingleNavOne] = useState(false);
    const [singleNavTwo, setsingleNavTwo] = useState(false);
    const [singleSubOne, setsingleSubOne] = useState(false);
    const [singleSubTwo, setsingleSubTwo] = useState(false);
    const [doubleNavOne, setdoubleNavOne] = useState(false);
    const [doubleNavTwo, setdoubleNavTwo] = useState(false);
    const [doubleNavThree, setdoubleNavThree] = useState(false);
    const [service, setservice] = useState(false);

    return (
        <>
            {/* Header Section  */}
            <header class="header">
                <div class="container">
                    <div class="header-logo">
                        <Link to="/">
                            <h1><img src={logo} alt="Accountier" /></h1>
                        </Link>
                    </div>
                    <div class="header-menu">
                        <div class="nav-mini-button"
                            onClick={() => setnavMiniButton(!navMiniButton)}
                        >
                            <i class="fa fa-bars"></i>
                        </div>
                        <nav class={`header-navbar ${navMiniButton ? 'header-navbar-show' : 'header-navbar-hide'}`}>
                            <ul class="main-menu">
                                <li class="active"><Link to="/">Home</Link></li>
                                <li class="sub-nav single-nav-one">
                                    <Link class="nav-js" to="#"
                                        onClick={() => setsingleNavOne(!singleNavOne)}

                                    >India Service<i
                                        class="nav-sub-icon single-icon-one fa fa-caret-down d-lg-none"
                                    ></i
                                        ></Link>
                                    <ul class={`sub-menu single-sub-one sub-nav-hide ${singleNavOne ? 'sub-nav-show' : 'sub-nav-hide'}`}>
                                        <li class="sub-nav double-nav-one">
                                            <Link class="nav-js" to="#"
                                                onClick={() => setsingleNavTwo(!singleNavTwo)}
                                            >Company Registration<i
                                                class="nav-sub-icon double-icon-one fa fa-caret-down d-lg-none"
                                            ></i
                                                ></Link>
                                            <ul class={`sub-sub-menu double-sub-one sub-nav-hide ${singleNavTwo ? 'sub-nav-show' : 'sub-nav-hide'}`}>
                                                <li><Link to="/ProprietorshipFirm">Proprietorship Firm</Link></li>
                                                <li><Link to="/PartnershipCompany">Partnership Company </Link></li>
                                                <li><Link to="/OnePersonCompanyRegistration">One Person Company</Link></li>
                                                <li><Link to="/LimitedLiabilityCompany">Limited Liability Company</Link></li>
                                                <li><Link to="/PrivateLimitedCompanyRegistration">Private Limited Company</Link></li>
                                            </ul>
                                        </li>
                                        <li class="sub-nav double-nav-two">
                                            <Link class="nav-js" to="#"
                                                onClick={() => setsingleSubOne(!singleSubOne)}
                                            >Special Entities<i
                                                class="nav-sub-icon double-icon-two fa fa-caret-down d-lg-none"
                                            ></i
                                                ></Link>
                                            <ul class={`sub-sub-menu double-sub-two sub-nav-hide ${singleSubOne ? 'sub-nav-show' : 'sub-nav-hide'}`}>
                                                <li><Link to="/IndianSubsidiary">Indian Subsidiary</Link></li>
                                                <li><Link to="/nidhicompany">Nidhi Company</Link></li>
                                                <li><Link to="/Producercompany">Producer Company</Link></li>
                                            </ul>
                                        </li>
                                        <li class="sub-nav double-nav-three">
                                            <Link class="nav-js" to="#"
                                                onClick={() => setsingleSubTwo(!singleSubTwo)}
                                            >Intellectual Property<i
                                                class="nav-sub-icon double-icon-three fa fa-caret-down d-lg-none"
                                            ></i
                                                ></Link>
                                            <ul class={`sub-sub-menu double-sub-three sub-nav-hide ${singleSubTwo ? 'sub-nav-show' : 'sub-nav-hide'}`}>
                                                <li><Link to="/copyrightregistration">Copyright Registration</Link></li>
                                                <li><Link to="/PatentRegistration">Patent Registration</Link></li>
                                                <li><Link to="/TrademarkRegistration">Trademark Registration</Link></li>
                                            </ul>
                                        </li>
                                        <li class="sub-nav double-nav-four">
                                            <Link class="nav-js" to="#"
                                                onClick={() => setdoubleNavOne(!doubleNavOne)}
                                            >Registration<i
                                                class="nav-sub-icon double-icon-four fa fa-caret-down d-lg-none"
                                            ></i
                                                ></Link>
                                            <ul class={`sub-sub-menu double-sub-four sub-nav-hide ${doubleNavOne ? 'sub-nav-show' : 'sub-nav-hide'}`}>
                                                <li><Link to="/DigitalSignature">Digital Signature</Link></li>
                                                <li><Link to="/FssaiRegistration">FSSAI Registration</Link></li>
                                                <li><Link to="/ImportExportCode">Import & Export Code</Link></li>
                                            </ul>
                                        </li>
                                        <li class="sub-nav double-nav-five">
                                            <Link class="nav-js" to="#"
                                                onClick={() => setdoubleNavTwo(!doubleNavTwo)}
                                            >Tax Filing<i
                                                class="nav-sub-icon double-icon-five fa fa-caret-down d-lg-none"
                                            ></i
                                                ></Link>
                                            <ul class={`sub-sub-menu double-sub-five sub-nav-hide ${doubleNavTwo ? 'sub-nav-show' : 'sub-nav-hide'}`}>
                                                <li><Link to="/BusinessTaxFiling">Business Tax Filing</Link></li>
                                                <li><Link to="/IncomeTaxFiling">Income Tax Filing</Link></li>
                                            </ul>
                                        </li>
                                        <li class="sub-nav double-nav-six">
                                            <Link class="nav-js" to="#"
                                                onClick={() => setdoubleNavThree(!doubleNavThree)}
                                            >Accounting & Compliance<i
                                                class="nav-sub-icon double-icon-six fa fa-caret-down d-lg-none"
                                            ></i
                                                ></Link>
                                            <ul class={`sub-sub-menu double-sub-six sub-nav-hide ${doubleNavThree ? 'sub-nav-show' : 'sub-nav-hide'}`}>
                                                <li><Link to="/ProprietorshipTaxFiling">Proprietorship Tax Filing</Link></li>
                                                <li><Link to="/ProprietorshipFirm">Partnership Tax Filing</Link></li>
                                                <li><Link to="/PrivateLimitedCompanyTaxFiling">Company Tax Filing</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="sub-nav single-nav-two">
                                    <Link class="nav-js" to="#"
                                        onClick={() => setservice(!service)}
                                    >US Service<i
                                        class="nav-sub-icon single-icon-two fa fa-caret-down d-lg-none"
                                    ></i>
                                    </Link>
                                    <ul class={`sub-menu single-sub-two sub-nav-hide ${service ? 'sub-nav-show' : 'sub-nav-hide'}`}>
                                        <li><Link to="/AccountingServices">Accounting Services</Link></li>
                                        <li><Link to="/BookkeepingServices">Bookkeeping Services</Link></li>
                                        <li><Link to="/CfoServices">CFO Services</Link></li>
                                        <li><Link to="/PayrollServices">Payroll Services</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/BlogsGrid">Blog</Link></li>
                                <li><Link to="/ContactUs">Contact</Link></li>
                                <li class="login"><Link to="/login">Login</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Nav;