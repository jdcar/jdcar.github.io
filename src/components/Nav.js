import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'


const Navbar = () => {
    return (
        // <Container>
        // <Row style={{ height: "50px" }}>
            /* <Col> */
                /* <h5 style={{ margin: "20px" }}> <Link to="/bio">Bio</Link> | <Link to="/portfolio">Portfolio</Link> | <Link to="/cv">Curriculum Vitae</Link> | <Link to="/contact">Contact</Link></h5> */

                <Nav style={{ marginLeft: "20px", marginBottom: "50px" }}>
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

            /* </Col> */
        // </Row>
        // </Container>
    )
}

export default Navbar
