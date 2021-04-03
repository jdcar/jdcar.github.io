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
                padding: "50px",
                marginTop: "50px",
                height: "300px", backgroundColor: "#708090"
            }
        }>
            <Col>
                <Wrapper>
                    [Cataloger]
                </Wrapper>
            </Col>
            <Col>
                <Wrapper>
                    <h3> Jamie Carlstone</h3>
                </Wrapper>
                <HomeButton />
            </Col>
            <Col>
                <Wrapper>
                    <p>{"{"}Developer{"}"}</p>
                </Wrapper>

            </Col>
        </Row>
    )

}
export default Home