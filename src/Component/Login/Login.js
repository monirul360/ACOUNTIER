import React from 'react';
import img from './../../Image/Home/Rectangle 1605.png';
import './Login.css';
const Login = () => {
    return (
        <div>
            {/* Login modal */}
            <section id="login-modal" class="modal login">
                <div class="container">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body">
                                {/* Login */}
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
                                            <p className='my-4'>Don’t have and account?
                                                <span class="popup-link" data-bs-toggle="modal" data-bs-target="#singup-modal"> Create Account</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div>
                                            <img src={img} alt="" />
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;