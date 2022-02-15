import React, { useState } from 'react'

import ProfilePicture from '../components/ProfilePicture'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'



const Bio = () => {
    const [gitHubData, setGitHubData] = useState(null)




    return (
        <>
            <Container>
                <Row>
                    <Card style={{ width: '75%', marginLeft: "auto", marginRight: "auto" }}>
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