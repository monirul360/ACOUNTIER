import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Footer from './Component/Share/Footer/Footer';
import Nav from './Component/Share/Nav/Nav';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import Aboutus from './Component/AboutUs/Aboutus';
import Service from './Component/Service/Service';
import NidhiCompany from './Component/NidhiCompany/NidhiCompany';
import Producercompany from './Component/ProducerCompany/Producercompany';
import PatentRegistration from './Component/PatentRegistration/PatentRegistration';
import CopyrightRegistration from './Component/CopyrightRegistration /CopyrightRegistration ';
import TrademarkRegistration from './Component/TrademarkRegistration/TrademarkRegistration';
import DigitalSignature from './Component/DigitalSignature /DigitalSignature ';
import FssaiRegistration from './Component/FssaiRegistration/FssaiRegistration';
import ImportExportCode from './Component/ImportExportCode/ImportExportCode';
import BookkeepingServices from './Component/BookkeepingServices/BookkeepingServices';
import CfoServices from './Component/CfoServices/CfoServices';
import PayrollServices from './Component/PayrollServices/PayrollServices';
import ContactUs from './Component/ContactUs/ContactUs';
import AccountingServices from './Component/AccountingServices/AccountingServices';
import IncomeTaxFiling from './Component/IncomeTaxFiling/IncomeTaxFiling';
import LimitedLiabilityCompany from './Component/LimitedLiabilityCompany /LimitedLiabilityCompany';
import OnePersonCompanyRegistration from './Component/OnePersonCompanyRegistration/OnePersonCompanyRegistration';
import IndianSubsidiary from './Component/IndianSubsidiary /IndianSubsidiary';
import ProprietorshipTaxFiling from './Component/ProprietorshipTaxFiling /ProprietorshipTaxFiling';
import ProprietorshipFirm from './Component/ProprietorshipFirm/ProprietorshipFirm';
import PrivateLimitedCompanyRegistration from './Component/PrivateLimitedCompanyRegistration/PrivateLimitedCompanyRegistration';
import PartnershipAnnualComplianceTaxFiling from './Component/PartnershipAnnualComplianceTaxFiling/PartnershipAnnualComplianceTaxFiling';
import Error from './Component/Error/Error';
import PrivateLimitedCompanyTaxFiling from './Component/PrivateLimitedCompanyTaxFiling/PrivateLimitedCompanyTaxFiling';
import PartnershipCompany from './Component/PartnershipCompany/PartnershipCompany';
import BusinessTaxFiling from './Component/BusinessTaxFiling/BusinessTaxFiling';
import ResetPassword from './Component/ResetPassword/ResetPassword';
import BlogsGrid from './Component/BlogsGrid/BlogsGrid';
import BlogDetails from './Component/BlogDetails/BlogDetails';
function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/resetpassword' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='/blogsgrid' element={<BlogsGrid></BlogsGrid>}></Route>
        <Route path='/blogdetails' element={<BlogDetails></BlogDetails>}></Route>
        <Route path='/aboutus' element={<Aboutus></Aboutus>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/nidhicompany' element={<NidhiCompany></NidhiCompany>}></Route>
        <Route path='/Producercompany' element={<Producercompany></Producercompany>}></Route>
        <Route path='/PatentRegistration' element={<PatentRegistration></PatentRegistration>}></Route>
        <Route path='/copyrightregistration' element={<CopyrightRegistration></CopyrightRegistration>}></Route>
        <Route path='/TrademarkRegistration' element={<TrademarkRegistration></TrademarkRegistration>}></Route>
        <Route path='/DigitalSignature' element={<DigitalSignature></DigitalSignature>}></Route>
        <Route path='/FssaiRegistration' element={<FssaiRegistration></FssaiRegistration>}></Route>
        <Route path='/ImportExportCode' element={<ImportExportCode></ImportExportCode>}></Route>
        <Route path='/PartnershipAnnualComplianceTaxFiling'
          element={
            <PartnershipAnnualComplianceTaxFiling></PartnershipAnnualComplianceTaxFiling>
          }>

        </Route>
        <Route path='/BookkeepingServices' element={<BookkeepingServices></BookkeepingServices>}></Route>
        <Route path='/CfoServices' element={<CfoServices></CfoServices>}></Route>
        <Route path='/PayrollServices' element={<PayrollServices></PayrollServices>}></Route>
        <Route path='/ContactUs' element={<ContactUs></ContactUs>}></Route>
        <Route path='/AccountingServices' element={<AccountingServices></AccountingServices>}></Route>
        <Route path='/IncomeTaxFiling' element={<IncomeTaxFiling></IncomeTaxFiling>}></Route>
        <Route path='/PrivateLimitedCompanyTaxFiling'
          element={
            <PrivateLimitedCompanyTaxFiling></PrivateLimitedCompanyTaxFiling>
          }>
        </Route>
        <Route path='/LimitedLiabilityCompany' element={<LimitedLiabilityCompany></LimitedLiabilityCompany>}></Route>
        <Route path='/OnePersonCompanyRegistration' element={<OnePersonCompanyRegistration></OnePersonCompanyRegistration>}></Route>
        <Route path='/IndianSubsidiary' element={<IndianSubsidiary></IndianSubsidiary>}></Route>
        <Route path='/ProprietorshipTaxFiling' element={<ProprietorshipTaxFiling></ProprietorshipTaxFiling>}></Route>
        <Route path='/PrivateLimitedCompanyRegistration' element={<PrivateLimitedCompanyRegistration></PrivateLimitedCompanyRegistration>}></Route>
        <Route path='/ProprietorshipFirm' element={<ProprietorshipFirm></ProprietorshipFirm>}></Route>
        <Route path='/PartnershipCompany' element={<PartnershipCompany></PartnershipCompany>}></Route>
        <Route path='/BusinessTaxFiling' element={<BusinessTaxFiling></BusinessTaxFiling>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
