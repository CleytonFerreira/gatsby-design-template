import React from 'react';

import '../styles/Sobre.css';
import Image from "../images/office-820390_1920.jpg";

export default () => (
    <div className="wrapper">
        <div className="header">
            <h3>Sobre</h3>
            <hr></hr>
        </div>
        <div id="image"><img src={Image} alt="office" className="responsive"></img> </div>
        <div id="text">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin dictum massa ante, sit amet semper tortor maximus at.
                Morbi euismod sit amet lectus at pretium. Phasellus vel odio
                tempor magna condimentum dignissim. Nullam semper nibh
                nec ultricies ultrices. Nam nec nibh imperdiet urna sodales
                tristique. Donec nec semper dolor. Morbi lacinia sit amet
                magna at tincidunt. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nulla interdum magna non neque
                ultricies efficitur. Aenean in dolor massa. Nullam nec nisl
                vestibulum, imperdiet risus sed, fringilla ipsum.
            </p>
        </div>
    </div>
)