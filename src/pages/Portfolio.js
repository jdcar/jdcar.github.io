import React, {useEffect, useState} from 'react'
import axios from "axios";


import ProfilePicture from '../components/ProfilePicture'
import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Wrapper from '../components/Wrapper'
import API from '../components/API'
const Portfolio = () => {

    const [data, setData] = useState(null)

    useEffect(() => {

        axios.get("https://api.github.com/users/jdcar")
        .then(res => {
            setData(res)
            console.log(res)
        })
        // .then(setData(res))
    }, [])

    if (data) {
        return (
            <>
            <Container>
                <Row>

                    <Col>
                        <img style={{float:"right"}} src="https://avatars.githubusercontent.com/u/34754596?v=4" style={{width:'150px'}}></img>
                    
                    </Col>
                    <Col>
                        <p>Jamie Carlstone</p>
                        <p>github login: {data.data.login} repos: {data.data.public_repos}</p>
                        <p>Bio: {data.data.bio}</p>
                        <p>Location: {data.data.location}</p>
                
                    </Col>

                </Row>
                </Container>
            </>
        )
    } else {
        return (
            <Container>
            <Wrapper>
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
            </Wrapper>
        </Container>
        )
    }


}
export default Portfolio