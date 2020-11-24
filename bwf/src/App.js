import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link, animateScroll as scroll } from "react-scroll";

class App extends Component {

  
  render() {
    return (
    <div className="App imgbox">
      {/* Navbar with bwf logo */}
       <Navbar id="navbar-scrollspy" className="navbar App" sticky="top" variant="dark" expand="lg">
                    <Navbar.Brand href="#home">
                   
                    <img
                        alt=""
                        src={require("./assets/bwflightning.png")}
                        width="150"
                        height="150"
                        className="d-inline-block align-top float"             
                    />
                    </Navbar.Brand>
                    <Nav className="mr-auto Navbar-text">
                      <Nav.Link onClick={() => scroll.scrollToTop()}>Scroll To Bottom</Nav.Link>
                      <Link activeClass="active" className="test2 nav-link" to="test2" spy={true} smooth={true} duration={500} offset={-176} >Link</Link>
                      <Link activeClass="active" className="test3 nav-link" to="test3" spy={true} smooth={true} duration={500} >Section</Link>
                    </Nav>
                
                
          </Navbar>
          {/* BWF blog post with band header */}
          {/* <div data-spy="scroll" data-target="#navbar-scrollspy" data-offset="0"> */}
          <Row><Col><img
            name="test1"
            id="section1"
            alt=""
            src={require("./assets/bwflogo.png")}
            className="d-inline-block align-top center-fit"
            width="40%"
            height="auto"
        /></Col></Row>
        <Row><Col><img
            name="test2"
            id="section2"
            alt=""
            src={require("./assets/bwf-blog.png")}
            className="d-inline-block align-top center-fit"
            width="40%"
            height="auto"
        /></Col></Row>
          <Row><Col><img
            name="test3"
            id="section3"
            alt=""
            src={require("./assets/bwf-blog.png")}
            className="d-inline-block align-top center-fit"
            width="40%"
            height="auto"
        /></Col></Row>


          {/* </div> */}
          

    </div>
  );
}
}

// Parralax

export default App;
