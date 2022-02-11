import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from "react-bootstrap";
import github from '../images/GitHub_Logo.png'
import linkedin from '../images/LI-Logo.png'
import orcid from '../images/ORCIDiD_iconbw128x128.png'


const Footer = () => {

    return (
        <Container>
            <Navbar fixed="bottom" expand="lg" variant="light" bg="light">
                <Navbar.Brand href="https://github.com/jdcar" rel="noreferrer" target="_blank"><img src={github} style={{width:"50px"}} alt="github"></img></Navbar.Brand>
                <Navbar.Brand href="https://www.linkedin.com/in/jamie-carlstone-4164aba6/" rel="noreferrer" target="_blank"><img src={linkedin} style={{width:"50px"}} alt="linked in"></img></Navbar.Brand>
                <Navbar.Brand href="https://orcid.org/0000-0002-9288-328X" rel="noreferrer" target="_blank"><img src={orcid} style={{width:"25px"}} alt="orcid"></img></Navbar.Brand>
            </Navbar>
        </Container>
    )
}

export default Footer