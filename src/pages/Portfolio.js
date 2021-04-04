import React, { useEffect, useState } from 'react'
import axios from "axios";


import ProfilePicture from '../components/ProfilePicture'
import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Wrapper from '../components/Wrapper'
import API from '../components/API'
import Card from 'react-bootstrap/Card'
import PortfolioCard from '../components/PortfolioCard';
import Spinner from 'react-bootstrap/Spinner'

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
                            <Card>
                                <Card.Body>
                                    <img style={{ float: "right" }} src="https://avatars.githubusercontent.com/u/34754596?v=4" style={{ width: '150px', borderRadius: "50%" }}></img>
                                    <p>Jamie Carlstone</p>
                                    <p>GitHub login: {data.data.login}</p>
                                    <p>Repos: {data.data.public_repos}</p>
                                    <p>Bio: {data.data.bio}</p>
                                    <p>Location: {data.data.location}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <PortfolioCard />
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </>
        )
    } else {
        return (
            <Container>
                {/* replace with spinner */}
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>

            </Container>

        )
    }


}
export default Portfolio