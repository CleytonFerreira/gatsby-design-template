import React from 'react';
import Thumb01 from "../images/image4626.png";
import Thumb02 from "../images/image4624.png";
import Thumb03 from "../images/image4628.png";
import Thumb04 from "../images/image4630.png";
import '../styles/Portfolio.css'


export default () => (
    <div className="wrapper">
        <div className="header">
            <h3>Portfolio</h3>
            <hr></hr>
        </div>
        <div className="thumb"><img src={Thumb01} alt="editor_sql" className="responsive"></img></div>
        <div className="thumb"><img src={Thumb02} alt="escola" className="responsive"></img></div>
        <div className="thumb"><img src={Thumb03} alt="restaurante" className="responsive"></img></div>
        <div className="thumb"><img src={Thumb04} alt="design" className="responsive"></img></div>
        
    </div>
)