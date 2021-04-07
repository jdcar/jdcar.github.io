import React from "react";
import { Container } from "react-bootstrap";
import Wrapper from "../components/Wrapper"
import Footer from '../components/Footer'
import github from '../images/GitHub_Logo.png'
import linkedin from '../images/LI-Logo.png'
import orcid from '../images/ORCIDiD_iconbw128x128.png'

function Contact() {
    return (
    
    <div>
        <Container>
            <Wrapper>
            <h6>jamie [dot] carlstone [at] northwestern [dot] edu</h6>
            <p><a href="https://github.com/jdcar" rel="noreferrer" target="_blank"><img src={github} style={{width:"100px"}} alt="github"></img></a></p>
            <p><a href="https://www.linkedin.com/in/jamie-carlstone-4164aba6/" rel="noreferrer" target="_blank"><img src={linkedin} style={{width:"100px"}} alt="linked in"></img></a></p>
            <p><a href="https://orcid.org/0000-0002-9288-328X" rel="noreferrer" target="_blank"><img src={orcid} style={{width:"50px"}} alt="orcid"></img></a></p>

            </Wrapper>
        </Container>

        <Footer />
    </div>
    
    )

}
export default Contact