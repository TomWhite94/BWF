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
    <div className="App imgbox  ">
      {/* Navbar with bwf logo */}
       <Navbar className="navbar App" sticky="top" variant="dark" expand="lg">
                    <Navbar.Brand href="#home">
                   
                    <img
                        alt=""
                        src={require("./assets/bwflightning.png")}
                        width="100"
                        height="100"
                        className="d-inline-block align-top float"             
                    />
                    </Navbar.Brand>
                    {/* scrolling code */}
                    <Nav className="mr-auto Navbar-text">
                      <Nav.Link onClick={() => scroll.scrollToTop()}>Scroll To Top</Nav.Link>
                      <Link activeClass="active" className="test2 nav-link" to="test1" spy={true} smooth={true} duration={500} offset={-176} >Link</Link>
                      <Link activeClass="active" className="test3 nav-link" to="test2" spy={true} smooth={true} duration={500} >Section</Link>
                    </Nav>
                
                
          </Navbar>
          {/* BWF blog post with band header */}
          {/* <div data-spy="scroll" data-target="#navbar-scrollspy" data-offset="0"> */}
          <div className="wrapper">
         <Row className="section static"><Col><img
            id="section1"
            alt=""
            src={require("./assets/bwflogo.jpg")}
            className="d-inline-block align-top center-fit"
            width="30%"
            height="auto"
        /></Col></Row>
        <section className="section2 parallax bg1"></section>
        <section className="section3 static"><img
            name="test1"
            id="section2"
            alt=""
            src={require("./assets/bwf-blog.png")}
            className="d-inline-block align-top center-fit"
            width="40%"
            height="auto"
        /></section>
          {/* <Row className="section static"><Col><img
            name="test3"
            id="section3"
            alt=""
            src={require("./assets/bwf-blog.png")}
            className="d-inline-block align-top center-fit section static"
            width="40%"
            height="auto"
        /></Col></Row> */}


          {/* </div> */}
          
        </div>
    </div>   
  );
}
}

// Parralax

export default App;
