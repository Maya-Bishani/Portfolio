import './Navbar.css'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
export default function (){
    return<>
 <Navbar  expand="lg">
         <Navbar.Brand className='leur-de-leah-regular' href="#home">portofolio</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="ml-auto">
             <Nav.Link href="/about">About</Nav.Link>
             <Nav.Link href="/work">Work</Nav.Link>
             <Nav.Link href="/contact">Contact</Nav.Link>
           </Nav>
         </Navbar.Collapse>
       </Navbar>


    </>
}