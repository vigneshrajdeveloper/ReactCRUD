import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from "react-router-dom";
import { BrowserRouter as Router,Route ,Routes} from "react-router-dom";
import App from "../App";
import Update from "./Update";
import Read from "./Read";
import Delete from "./Delete";

import './headerstyle.css';

export default function Header(){

    return (
        <>

<Router>
<Navbar bg="dark" data-bs-theme="dark">

        <Container className="brandlogo">
          <Navbar.Brand href="/">CRUD_APP</Navbar.Brand>
          <Nav className="me-auto">
           <NavLink  to="/" > Home</NavLink>&nbsp;&nbsp;
           <NavLink to="/update" > Update</NavLink>&nbsp;&nbsp;
           <NavLink to="/read" > Read</NavLink>&nbsp;&nbsp;
           <NavLink to="/delete" > Delete</NavLink>&nbsp;&nbsp;
          </Nav>
        </Container>
      </Navbar>

    
 

 <Routes>
  <Route path="/" element={<App/>}></Route>
  <Route path="/update" element={<Update/>}></Route>
  <Route path="/read" element={<Read/>}></Route>
  <Route path="/delete" element={<Delete/>}></Route>
 </Routes>

 </Router>
 
        </>
    );
}