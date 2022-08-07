import React from 'react';
import img from './../../Image/Home/whoweare.png';
import modalimg from './../../Image/Page/15.png';
const Signup = () => {
    const handlesubmit = event => {
        event.preventDefault()
    }
    return (
        <div>
            {/* Singup Modal */}
            <section id="singup-modal" class="modal signup">
                <div class="container">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div className="row d-flex justify-content-center align-items-center text-center ">
                                    <div className="col-md-6">
                                        <div className='p-3'>
                                            <h5 className='my-3'>Create New Account</h5>
                                            <p className='mb-4'><small>Create an Account with ACOUNTIER so our Team can know
                                                about yourself before Connecting with you</small></p>
                                            <form onSubmit={handlesubmit} action="">
                                                <input
                                                    class="form-control"
                                                    type="number"
                                                    name=""
                                                    id=""
                                                    placeholder='Phone Number'
                                                />
                                                <input
                                                    class="form-control"
                                                    type="email"
                                                    name=""
                                                    id=""
                                                    placeholder='Email ID'
                                                />
                                                <input
                                                    class="form-control"
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    placeholder='Full Name'
                                                />
                                                <input
                                                    class="form-control"
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    placeholder='Location'
                                                />
                                                <input
                                                    class="form-control"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#verification-modal"
                                                    type="submit"
                                                    value="Create New Account" />
                                            </form>

                                            <p className='my-4'>
                                                Already have and account?
                                                <span class="popup-link" data-bs-toggle="modal" data-bs-target="#login-modal"> Login Now</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className='p-3'>
                                            <img className='img-fluid' src={img} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* verification modal */}
            <section id="verification-modal" class="modal">
                <div class="container">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="verification">
                                    <div class="row">
                                        <div class="col-12 col-md-7 col-lg-8">
                                            <div class="verification-content">
                                                <div class="verification-heading">
                                                    <h2>Enter your Verification Code</h2>
                                                    <p>
                                                        Create an Account with ACOUNTIER so our Team can know
                                                        about yourself before Connecting with you
                                                    </p>
                                                </div>
                                                <div class="verification-form">
                                                    <form action="#" method="post">
                                                        <div class="form-input">
                                                            <input type="text" name="" id="" />
                                                            <input type="text" name="" id="" />
                                                            <input type="text" name="" id="" />
                                                            <input type="text" name="" id="" />
                                                            <input type="text" name="" id="" />
                                                            <input type="text" name="" id="" />
                                                        </div>
                                                        <div class="form-submit">
                                                            <input type="submit" value="Verify Account" />
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="code-resend">
                                                    <p>
                                                        Do you want to resend code?
                                                        <a href="#">Resend Code</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-5 col-lg-4 d-none d-md-block">
                                            <div class="verification-image">
                                                <img src={modalimg} alt="" />
                                            </div>
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

export default Signup;