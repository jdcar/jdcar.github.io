import React from 'react'
import Projects from './Projects'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const PortfolioCard = (props) => {

    return (
        <>
            {Projects.map(proj => (
                <Card key={proj.id}>
                    <Card.Body>
                        <Col>
                        <h5>{proj.name}</h5>
                        {/* <a href={proj.deployUrl} rel="noreferrer" target="_blank"><img src={proj.image} alt={proj.name} width="100%"></img></a> */}
                        </Col>
                        <Col>
                        <p>{proj.description}</p>
                       
                        <p><a href={proj.repositoryUrl} rel="noreferrer" target="_blank">Repository</a></p>
                        </Col>
                
                    </Card.Body>
                </Card>
            ))}
        </>
    )
}

export default PortfolioCard