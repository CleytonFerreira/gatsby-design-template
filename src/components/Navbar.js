import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import "../styles/Navbar.css";
import scrollTo from 'gatsby-plugin-smoothscroll';


export default () => (
    <Navbar collapseOnSelect expand="lg" fixed="top">
        <Navbar.Brand onClick={() => scrollTo('#home')}>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <div>
                <Nav>
                    <Nav.Link onClick={() => scrollTo('#home')}>Home</Nav.Link>
                    <Nav.Link onClick={() => scrollTo('#sobre')}>Sobre</Nav.Link>
                    <Nav.Link onClick={() => scrollTo('#portfolio')}>Portfolio</Nav.Link>
                    <Nav.Link onClick={() => scrollTo('#contato')}>Contato</Nav.Link>
                </Nav>
            </div>
        </Navbar.Collapse>
    </Navbar>
);


