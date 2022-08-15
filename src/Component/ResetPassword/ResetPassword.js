import React from 'react';
import img from './../../Image/Page/30.png';
const ResetPassword = () => {
    return (
        <div>
            {/* Login*/}
            <section className='login-section section-margin'>
                <div className="row d-flex justify-content-center align-items-center text-center login ">
                    <div className="col-md-7">
                        <div className='m-2'>
                            <h5 className='my-3'>Reset Your Passwords</h5>
                            <p className='mb-4'>Provide your Registered Mobile Number or Email address to access
                                your ACOUNTIER services account</p>
                            <form action="">
                                <input
                                    class="form-control"
                                    type="text"
                                    name=""
                                    placeholder='Enter your e-mail/Phone Number'
                                    id="" />
                                <p className='my-4'><span>We will send you a reset password verification link to your registered phone number or email address</span></p>

                                <input
                                    class="form-control"
                                    type="submit"
                                    value="Reset Password"
                                />
                            </form>
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

export default ResetPassword;