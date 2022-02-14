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
                            <Card style={{ width: '75%', marginLeft: "auto", marginRight: "auto" }}>
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