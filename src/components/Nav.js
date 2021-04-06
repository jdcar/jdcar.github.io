import React from 'react'
import Nav from 'react-bootstrap/Nav'



const Navbar = () => {
    return (
        <Nav style={{ marginLeft: "20px", marginBottom: "75px" }}>
            <Nav.Item>
                <Nav.Link href="/bio"><h5>Bio</h5></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/portfolio"><h5>Portfolio</h5></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/cv"><h5>Curriculum Vitae</h5></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contact"><h5>Contact</h5></Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar
