import React from 'react'
import Nav from 'react-bootstrap/Nav'
import {useHistory} from "react-router-dom"; 


const Navbar = () => {

    const history = useHistory()

    const handleClick = (event, url) => {
        event.preventDefault()
        history.push(url)
    }
    
    return (
        <Nav style={{ marginLeft: "20px", marginBottom: "75px" }}>
            <Nav.Item>
                <Nav.Link onClick={(event) => handleClick(event, "/bio")} href="/bio"><h5>Bio</h5></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={(event) => handleClick(event, "/portfolio")} href="/portfolio"><h5>Portfolio</h5></Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
                <Nav.Link  onClick={(event) => handleClick(event, "/cv")} href="/cv"><h5>Curriculum Vitae</h5></Nav.Link>
            </Nav.Item> */}
            {/* <Nav.Item>
                <Nav.Link  onClick={(event) => handleClick(event, "/contact")} href="/contact"><h5>Contact</h5></Nav.Link>
            </Nav.Item> */}
        </Nav>
    )
}

export default Navbar
