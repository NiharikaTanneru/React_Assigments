import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './css/Header.css';

export default function Header() {
    return (
        <div>
            <Navbar bg='warning'>
                <Container >
                    <Nav >
                        <Nav.Link href={'/'}>
                            <button>Home</button></Nav.Link>
                        <Nav.Link href={'/about'} >
                            <button>About</button> </Nav.Link>
                        <Nav.Link href={'/contact'} >
                            <button> Contact</button>
                           </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}