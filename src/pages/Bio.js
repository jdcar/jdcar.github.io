import React from 'react'

import ProfilePicture from '../components/ProfilePicture'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Wrapper from '../components/Wrapper'
import Card from 'react-bootstrap/Card'

const Bio = () => {

    return (
        <Container>
            <Wrapper>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col>
                                <ProfilePicture />
                            </Col>
                            <Col>
                                <p>Since October 2019 I have been the Authority Control Librarian at Northwestern
                                University. Prior to my current role, I worked at the University of Chicago and the University of
                                Illinois at Urbana-Champaign. I am currently in the Northwestern Coding Bootcamp.
                    </p>
                                <p>Research interests include serials, assessment, and copyright renewal. I am particularly interested
                                in finding ways to use batch processes to improve catalog metadata. When I'm not working, I enjoying
                                doing DIY projects, playing guitar, and spending time with my dog Studs.
                    </p>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Wrapper>
        </Container>
    )
}

export default Bio