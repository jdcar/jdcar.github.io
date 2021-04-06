import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from "react-bootstrap";


const Footer = () => {

    return (
        <Container>
            <Navbar fixed="bottom" expand="lg" variant="light" bg="light">
                <Navbar.Brand href="https://github.com/jdcar" style={{fontSize: "16px"}}>Copyright {new Date().getFullYear()} - https://github.com/jdcar </Navbar.Brand>
            </Navbar>
        </Container>
    )
}

export default Footer