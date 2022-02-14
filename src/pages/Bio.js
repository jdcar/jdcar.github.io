import React, { useEffect, useState } from 'react'
import axios from "axios";

import ProfilePicture from '../components/ProfilePicture'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Wrapper from '../components/Wrapper'
import Card from 'react-bootstrap/Card'
import PortfolioCard from '../components/PortfolioCard';
import Spinner from 'react-bootstrap/Spinner'


const Bio = () => {
    const [gitHubData, setGitHubData] = useState(null)




    return (
        <>
            <Container>
                <Row>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <ProfilePicture />
                                </Col>
                                <Col>
                                <h1>Jamie Carlstone</h1>
                                    <p>I am a metadata librarian and developer with an MLIS and coding bootcamp certificate. I enjoy solving metadata problems with code. Experienced with javascript, python, react.
                                    </p>
                                    
                                    <p>In my freetime I like playing guitar, spin class, and hanging out with my puggle Studs.</p>
                                   
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )





}

export default Bio