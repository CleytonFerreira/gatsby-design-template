import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import scrollTo from 'gatsby-plugin-smoothscroll';


export default class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            opened: false
        };

        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState({
            opened: !this.state.opened
        });
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-brand">Logo</div>
                <ul className={`nav-links ${this.state.opened ? "opened" : "closed"}`}>
                    <li className="nav-link">
                        <button onClick={() => { scrollTo('#home'); this.toggle()}}>Home</button>
                    </li>
                    <li className="nav-link">
                        <button onClick={() => { scrollTo('#sobre'); this.toggle()}}>Sobre</button>
                    </li>
                    <li className="nav-link">
                        <button onClick={() => { scrollTo('#portfolio'); this.toggle()}}>Portfolio</button>
                    </li>
                    <li className="nav-link">
                        <button onClick={() => { scrollTo('#contato'); this.toggle()}}>Contato</button>
                    </li>
                </ul>
                <div className="nav-toggler"><FontAwesomeIcon icon={faBars} onClick={this.toggle} /></div>
            </nav>
        )
    }
}