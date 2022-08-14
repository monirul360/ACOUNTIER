import React from 'react';
import Client from '../Home/Client/Client';
import PageTitle from '../PageTitle/PageTitle';
import img from './../../Image/Page/30.png';
const BlogsGrid = () => {

    const post = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div>
            <PageTitle title='Blogs Grid'></PageTitle>
            <section className='section-padding'>
                <div className="blog">
                    <div className="container">
                        <div className="row d-flex justify-content-center items-center">
                            {
                                post.map(post =>
                                    <div className="col-md-6 col-lg-4">
                                        <div className='blog-article'>
                                            <div className="blog-img">
                                                <img className='img-fluid' src={img} alt="" />
                                                <button id='blog-button'>Business</button>
                                            </div>
                                            <div className='blog-text'>
                                                <h3>Benefits Of Registering A Private
                                                    Limited Business</h3>
                                                <p>Nidhi companies cannot carry the chit funds
                                                    another company or control any board of</p>
                                            </div>
                                            <div className="blog-user">
                                                <div>
                                                    <img src={img} alt="" />
                                                </div>
                                                <div>
                                                    <p>Lorim Isuacob</p>
                                                </div>
                                                <div>
                                                    <p>15 Nov 2021</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                        <div className="blog-next-page section-margin-top">
                            <button>Prev</button>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>Next</button>
                        </div>
                    </div>
                </div>

            </section>
            <Client></Client>
        </div>
    );
};

export default BlogsGrid;