import React from 'react';
import client1 from './../../../Image/Home/client/client-1.png';
import client2 from './../../../Image/Home/client/client-2.png';
import client3 from './../../../Image/Home/client/client-3.png';
import client4 from './../../../Image/Home/client/client-4.png';
import client5 from './../../../Image/Home/client/client-5.png';
const Client = () => {
    return (
        <div>
            {/* Client Logo Section  */}
            <section class="client bg-white py-5 py-lg-0">
                <div class="container">
                    <div class="clint-logo">
                        <ul>
                            <li><img src={client1} alt="" /></li>
                            <li><img src={client2} alt="" /></li>
                            <li><img src={client3} alt="" /></li>
                            <li><img src={client4} alt="" /></li>
                            <li class="d-sm-none d-md-block">
                                <img src={client5} alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Client;