import React from 'react';
import { Link } from 'react-router-dom';
import img from './../../Image/Home/Rectangle 1605.png';
import './Login.css';
const Login = () => {
    return (
        <div>
            {/* Login */}
            <section className='login py-5 bg-light '>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center text-center ">
                        <div className="col-md-8">
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
                                    <p className='my-4'><span>We will send you a verification code to verify your phone number.</span></p>

                                    <input
                                        class="form-control"
                                        type="submit"
                                        value="Login Now"
                                    />
                                </form>
                                <p className='my-4'>Don’t have and account? <Link to='/'> Create Account</Link></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <img src={img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;