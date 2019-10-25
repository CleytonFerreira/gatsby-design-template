import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import scrollTo from 'gatsby-plugin-smoothscroll';


function toggleNavbar() {
    var element = document.getElementById("responsive-navbar-nav");
    element.classList.remove("show");
}

export default () => (
    <Navbar collapseOnSelect expand="lg" fixed="top">
        <Navbar.Brand onClick={() => { scrollTo('#home'); toggleNavbar() }}>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <Nav.Link onClick={() => { scrollTo('#home'); toggleNavbar() }}>Home</Nav.Link>
                <Nav.Link onClick={() => { scrollTo('#sobre'); toggleNavbar() }}>Sobre</Nav.Link>
                <Nav.Link onClick={() => { scrollTo('#portfolio'); toggleNavbar() }}>Portfolio</Nav.Link>
                <Nav.Link onClick={() => { scrollTo('#contato'); toggleNavbar() }}>Contato</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);


