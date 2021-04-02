import React from 'react'
import Button from 'react-bootstrap/Button'

import styled from 'styled-components'


const Wrapper = styled.div`
text-align: center;
`


function HomeButton() {
    return (
        <Wrapper>
            <Button size="lg" variant="outline-secondary" style={{borderRadius: 0}}>Portfolio</Button>
        </Wrapper>
    )
}

export default HomeButton