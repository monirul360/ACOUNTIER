import React from 'react';
import { Link } from 'react-router-dom';
import img from './../../Image/Page/login.png';
import './Login.css';
const Login = () => {
    return (
        <div>
            {/* Login*/}
            <section className='login-section section-margin'>
                <div className="row d-flex justify-content-center align-items-center text-center login ">
                    <div className="col-md-7">
                        <div className='m-2'>
                            <h5 className='my-3'>Login Now</h5>
                            <p className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever.</p>
                            <form action="">
                                <input
                                    class="form-control"
                                    type="text"
                                    name=""
                                    placeholder='Email ID or Phone Number'
                                    id="" />
                                <div className="d-flex justify-content-between mx-3 mt-3 mb-3">
                                    <div>
                                        <input type="checkbox" name="" id="" />
                                        <span className='ms-2'>Remember me</span>
                                    </div>
                                    <div>
                                        <Link to='/resetpassword'>Forgot Password?</Link>
                                    </div>
                                </div>
                                <p className='my-4'><span>We will send you a verification code to verify your phone number.</span></p>

                                <input
                                    class="form-control"
                                    type="submit"
                                    value="Login Now"
                                />
                            </form>
                            <p className='my-4'>Don’t have and account?
                                <Link to='/signup'> Create Account</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;