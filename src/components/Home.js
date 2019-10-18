import React from 'react';
import '../styles/Home.css';
import BgHome from '../images/bg.png';

export default () => (
    <div id="home-container">
        <img src={BgHome} alt="bg-home" className="responsive" id="bg"></img>
        
        <div id="slogan">
        <div className="vertical-line"></div>
            <h5 className="responsive">Lorem ipsum dolor sit amet</h5>
            <h5 className="responsive">Consectetuer adipiscing elit</h5>
            <h5 className="responsive">Proin dictum massa ante</h5>
        </div>
    </div>
)