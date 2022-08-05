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
import Partnershiptax from './Component/Partnershiptax/Partnershiptax';
import BookkeepingServices from './Component/BookkeepingServices/BookkeepingServices';
import CfoServices from './Component/CfoServices/CfoServices';
import PayrollServices from './Component/PayrollServices/PayrollServices';
import ContactUs from './Component/ContactUs/ContactUs';
import Verification from './Component/Verification/Verification';
import AccountingServices from './Component/AccountingServices/AccountingServices';
import IncomeTaxFiling from './Component/IncomeTaxFiling/IncomeTaxFiling';
import PrivateLimitedCompany from './Component/PrivateLimitedCompany/PrivateLimitedCompany';

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
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
        <Route path='/Partnershiptax' element={<Partnershiptax></Partnershiptax>}></Route>
        <Route path='/BookkeepingServices' element={<BookkeepingServices></BookkeepingServices>}></Route>
        <Route path='/CfoServices' element={<CfoServices></CfoServices>}></Route>
        <Route path='/PayrollServices' element={<PayrollServices></PayrollServices>}></Route>
        <Route path='/ContactUs' element={<ContactUs></ContactUs>}></Route>
        <Route path='Verification' element={<Verification></Verification>}></Route>
        <Route path='/AccountingServices' element={<AccountingServices></AccountingServices>}></Route>
        <Route path='/IncomeTaxFiling' element={<IncomeTaxFiling></IncomeTaxFiling>}></Route>
        <Route path='/PrivateLimitedCompany' element={<PrivateLimitedCompany></PrivateLimitedCompany>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
