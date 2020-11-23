import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


class Taskbar extends Component {
    render() {
        return(
           
            <Navbar expand="lg">
                <Navbar.Brand style={{color: "white"}} href="#home"> 
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
  
        )
    }
}

export default Taskbar