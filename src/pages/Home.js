import React from "react";

import HomeButton from '../components/HomeButton'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'

const Wrapper = styled.div`
text-align: center;
padding: 25px;
`
const Home = () => {

    return (
        <Row style={
            {
                padding: "10px",
                marginTop: "50px",
                height: "300px", backgroundColor: "#97C8D6"
            }
        }>
            <Col>
                
            </Col>
            <Col>
                <Wrapper>
                    <h1 style={{fontFamily: "'Dawning of a New Day', cursive"}}> Jamie Carlstone</h1>
                </Wrapper>
                <HomeButton />
                <Wrapper>
                <h2 style={{fontFamily: "'Dawning of a New Day', cursive"}}>Librarian - Developer</h2>
                </Wrapper>
                
            </Col>
            <Col>
             
            </Col>
        </Row>
    )

}
export default Home