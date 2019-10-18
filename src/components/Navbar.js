import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import "../styles/Navbar.css";



export default () => (
    <Navbar collapseOnSelect expand="lg" fixed="top">
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <div>
                <Nav>
                    <Nav.Link href="#home"><AnchorLink href="#home">Home</AnchorLink></Nav.Link>
                    <Nav.Link href="#sobre"><AnchorLink href="#sobre">Sobre</AnchorLink></Nav.Link>
                    <Nav.Link href="#portfolio"><AnchorLink href="#portfolio">Portfolio</AnchorLink></Nav.Link>
                    <Nav.Link href="#contato"><AnchorLink href="#contato">Contato</AnchorLink></Nav.Link>
                </Nav>
            </div>
        </Navbar.Collapse>
    </Navbar>
);


