import React from 'react'
import Tata from './tata.png';
import Future from './future.png';
import Google from './360.png'

import './clients.scss';
function Clients() {
    return (
        <div className="Clinett" id="Clinet">
    <div className="Clients">
        <div className="sub-clinets">
        <h1>Our Clients</h1>
        </div>
            <div className="Client-Images">
            <img  src={Tata}/>
                        <img src={Future}/>
                        <img src={Google}/>
            </div>
        
           
        </div>
        </div>
        
    )
}

export default Clients
