import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <section className='py-5'>
                <div className="container">
                    <div className='text-center'>
                        <h4>Contact Us</h4>
                        <p>There are many variations of passages of Lorem Ipsum available</p>
                        <p>but the majority have suffered alteration</p>
                    </div>
                    <div className='contact-from'>
                        <form>
                            <input type="text" name="" id="" placeholder='Name' />
                            <input type="email" name="" id="" placeholder='E-mail' />
                            <select name="" id="">
                                <option value="">Select Subject</option>
                                <option value="">Select Subject</option>
                                <option value="">Select Subject</option>
                            </select>
                            <input type="text" name="" placeholder='Company Name (Optional)' id="" />
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;