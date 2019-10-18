import React, { Fragment } from "react";
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Home from '../components/Home';
import Sobre from '../components/Sobre';
import Portfolio from '../components/Portfolio';
import Contato from '../components/Contato';
import Footer from '../components/Footer';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import 'typeface-raleway';

export default () =>
    <Fragment>
        <Navbar></Navbar>
        <Section id="home">
            <Home></Home>
        </Section>
        <Section id="sobre">
            <Sobre></Sobre>
        </Section>
        <Section id="portfolio">
            <Portfolio></Portfolio>
        </Section>
        <Section id="contato">
            <Contato></Contato>
        </Section>
        <Footer></Footer>
    </Fragment>
