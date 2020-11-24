import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


class App extends Component {

  
  render() {
    return (
    <div className="App imgbox">
      {/* Navbar with bwf logo */}
       <Navbar id="navbar-scrollspy" className="navbar sticky-top App" variant="dark" expand="lg">
                <Navbar.Brand href="#home"> 
                    <img
                        alt=""
                        src={require("./assets/bwflightning.png")}
                        width="5%"
                        height="auto"
                        className="d-inline-block align-top float"             
                    />{' '}
                    <Nav className="mr-auto App">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Brand>
                
          </Navbar>
          {/* BWF blog post with band header */}
         
        <img 
            alt=""
            src={require("./assets/bwf-blog.png")}
            className="d-inline-block align-top center-fit"
            width="40%"
            height="auto"
        />
         <img 
            alt=""
            src={require("./assets/bwf-blog.png")}
            className="d-inline-block align-top center-fit"
            width="40%"
            height="auto"
        />
         <img 
            href="#option3"
            alt=""
            src={require("./assets/bwf-blog.png")}
            className="d-inline-block align-top center-fit"
            width="40%"
            height="auto"
        />
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
}

// Parralax

export default App;
