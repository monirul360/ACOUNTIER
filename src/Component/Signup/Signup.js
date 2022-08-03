import React from 'react';
import { Link } from 'react-router-dom';
import img from './../../Image/Home/whoweare.png';
const Signup = () => {
    return (
        <div>
            <section className='signup py-5 bg-light'>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center text-center ">
                        <div className="col-md-6">
                            <div className='p-3'>
                                <h5 className='my-3'>Create New Account</h5>
                                <p className='mb-4'><small>Create an Account with ACOUNTIER so our Team can know
                                    about yourself before Connecting with you</small></p>
                                <form action="">
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
                                        type="submit"
                                        value="Create New Account" />
                                </form>

                                <p className='my-4'>Already have and account? <Link to='/login'> Login Now</Link></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='p-3'>
                                <img className='img-fluid' src={img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Signup;