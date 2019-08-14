import React from 'react'
import Menu from '../components/menu'
import Container from '../components/container'

export default ({children}) => (
    <>
        <Menu />
        <Container>
            {children}
        </Container>
    </>

)


