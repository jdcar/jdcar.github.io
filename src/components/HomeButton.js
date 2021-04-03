import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Wrapper from "./Wrapper"

const HomeButton = () => {
    return (
        <Wrapper>
            <Link to="/portfolio"><Button
                    className="home-button"
                    size="lg" variant="outline-dark"
                    style={
                        {
                            borderRadius: 0
                        }
                    }>Portfolio
                </Button></Link>
        </Wrapper>
    )
}

export default HomeButton