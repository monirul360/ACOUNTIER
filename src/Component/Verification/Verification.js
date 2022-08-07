import React from 'react';

const Verification = () => {
    return (
        <div>
            {/* Verification  */}
            <div class="verification">
                <div class="row">
                    <div class="col-12 col-md-7 col-lg-8">
                        <div class="verification-content">
                            <div class="verification-heading">
                                <h2>Enter your Verification Code</h2>
                                <p>
                                    Create an Account with ACOUNTIER so our Team can know about
                                    yourself before Connecting with you
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
                                <p>Do you want to resend code? <a href="#">Resend Code</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-5 col-lg-4 d-none d-md-block">
                        <div class="verification-image">
                            <img src="./img/verification.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Verification;