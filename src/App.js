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
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
