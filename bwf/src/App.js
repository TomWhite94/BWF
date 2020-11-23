import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function App() {
  return (
    <div className="App imgbox">
      {/* Navbar with bwf logo */}
       <Navbar className="navbar sticky-top App" expand="lg">
                <Navbar.Brand href="#home"> 
                    <img
                        alt=""
                        src={require("./assets/bwflightning.png")}
                        width="10%"
                        height="auto"
                        className="d-inline-block align-top float"             
                    />
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                   
                    </Nav>
                </Navbar.Collapse>
          </Navbar>
          {/* BWF blog post with band header */}
        <img 
            alt=""
            src={require("./assets/bwf-blog.png")}
            className="d-inline-block align-top center-fit"
            width="40%"
            height="auto"
        />
         
    </div>
  );
}

export default App;
