import React, { useEffect, useState } from 'react'
import axios from "axios";

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import PortfolioCard from '../components/PortfolioCard';
import Spinner from 'react-bootstrap/Spinner'

const Portfolio = () => {

    const [gitHubData, setGitHubData] = useState(null)

    useEffect(() => {

        axios.get("https://api.github.com/users/jdcar")
            .then(res => {
                setGitHubData(res)
                console.log(res)
            })
        // .then(setData(res))
    }, [])

    if (gitHubData) {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <img style={{ float: "right" }} alt={gitHubData.data.name} src="https://avatars.githubusercontent.com/u/34754596?v=4" style={{ width: '150px', borderRadius: "50%" }}></img>
                                    <p>Jamie Carlstone</p>
                                    <p>GitHub login: {gitHubData.data.login}</p>
                                    <p>Repos: {gitHubData.data.public_repos}</p>
                                    <p>Bio: {gitHubData.data.bio}</p>
                                    <p>Location: {gitHubData.data.location}</p>
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