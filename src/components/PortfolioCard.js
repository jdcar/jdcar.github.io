import React from 'react'
import Projects from './Projects'
import Card from 'react-bootstrap/Card'

const PortfolioCard = (props) => {

    return (
        <>
            {Projects.map(proj => (
                <Card>
                    <Card.Body>
                        <h5>{proj.name}</h5>
                        <p>{proj.description}</p>
                        <a href={proj.deployUrl} target="_blank"><img src={proj.image} alt={proj.name} width="100%"></img></a>
                        <p><a href={proj.repositoryUrl} target="_blank">Repository</a></p>
                    </Card.Body>
                </Card>
            ))}
        </>
    )
}

export default PortfolioCard