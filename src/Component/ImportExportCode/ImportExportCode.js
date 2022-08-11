import React from 'react';
import Choose from '../Home/Choose/Choose';
import Client from '../Home/Client/Client';
import PageTitle from '../PageTitle/PageTitle';
import img from './../../Image/Page/18.png';
const ImportExportCode = () => {
    return (
        <div>
            {/* Import-Export-Code */}
            <PageTitle title='Import & Export Code'></PageTitle>
            <section class="page-section  bg-light">
                <div class="container">
                    <div class="page-content">
                        <div class="page-content-image">
                            <img class="img-fluid" src={img} alt="" />
                        </div>
                        <div class="page-content-text mt-5">
                            <h2 class="page-content-title">Import Export Code  </h2>
                            <p>
                                The Directorate General of Foreign Trade (DGFT) issues a business entity with an import and export code, a unique 10-digit
                                number, for import and export in India. The Import and Export Code supports business expansion on the international market.
                                Before beginning the import of goods to clear customs, the merchant must confirm that the importing entity has an IE code and
                                GST registration.
                            </p>
                            <p>
                                Import Export Code's Value in Accessing Global Markets The IE Code is a prerequisite for import and export businesses, allowing
                                the products to enter the global market. The use of IE code facilitates Indian companies' global access and creates opportunities
                                for growth and expansion.
                            </p>
                            <p>
                                Pan Card, Passport Size Photo, Address Proof and Cancelled Cheque are required documents to apply for the Import
                                and export Code.
                            </p>
                            <h3>Validity of the Import and Export Code</h3>
                            <p>
                                If the company is operating, IE Code registration is good for life. As a result, updating, filing, and renewing Import Export Code
                                registration are all without problems. The IE registration is valid if the business is active or if it isn't cancelled or given up..
                            </p>
                            <p>
                                IE code offers significant advantages to both importers and exporters. The registered business enterprises will be eligible to
                                receive advantages from Customs, the Export Promotion Council, or other agencies in the form of subsidies. Exporters can
                                make exports without paying taxes by filing LUT under GST. If exports are made after paying taxes, the exporter may request
                                a return of the tax amount paid.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Choose></Choose>
            <Client></Client>
        </div>
    );
};

export default ImportExportCode;