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
                       
                        <h5>{proj.name}</h5>
                           
                        <p>{proj.description}</p>
                       
                        <p><a href={proj.repositoryUrl} rel="noreferrer" target="_blank">Repository</a></p>
                    
                
                    </Card.Body>
                </Card>
            ))}
        </>
    )
}

export default PortfolioCard