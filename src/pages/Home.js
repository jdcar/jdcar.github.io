import React from "react";

import HomeButton from '../components/HomeButton'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Home() {
    return (
        <Container>
            <Row>
                <Col>
                    <HomeButton />
                </Col>
            </Row>
        </Container>


    )

}
export default Home