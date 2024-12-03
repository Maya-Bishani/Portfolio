import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import { BrowserRouter } from "react-router";
import HomePage from './Pages/HomePage/HomePage';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Footer from './Component/Footer/Footer';
function App() {
  
  return (
    <>
<BrowserRouter>
<Navbar/>
<Hero/>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
       
        <Footer/>
      </BrowserRouter>
     
    </>
  )
}

export default App
