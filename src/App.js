import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Footer from './Component/Share/Footer/Footer';
import Nav from './Component/Share/Nav/Nav';

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
