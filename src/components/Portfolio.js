import React from 'react';
import Thumb01 from "../images/editor-sql.png";
import Thumb02 from "../images/escola.png";
import Thumb03 from "../images/restaurante.png";
import Thumb04 from "../images/design.png";


export default () => (
    <div className="wrapper">
        <div className="header">
            <h3>Portfolio</h3>
            <hr></hr>
        </div>
        <div className="thumb"><img src={Thumb01} alt="editor_sql" className="responsive" /></div>
        <div className="thumb"><img src={Thumb02} alt="escola" className="responsive" /></div>
        <div className="thumb"><img src={Thumb03} alt="restaurante" className="responsive" /></div>
        <div className="thumb"><img src={Thumb04} alt="design" className="responsive" /></div>
        
    </div>
)