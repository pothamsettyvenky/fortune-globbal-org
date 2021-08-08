import React from 'react'
import Award from './cta-img.jpg';
import './Awards.scss';
function Awards() {
    return (
       
            <div className="Award" id="Awards">
            <div className="Awardss">
            <div className="sub-awards">
            <h3>AWARDS</h3>
               <ul>
                   <li>@ Best New Office of The Year 2010</li>
                   <li>@ Best Office of The Years-2011, 2012, 2013, 2015 </li>
                   <li>@ Inspirational Leadership of The Year 2014 </li>
                   <li>@ Excellence In Business Administration 2014 @Inspirational Leadership of The Year 2016</li>
                   <li>@ Excellence Office of The Year 2016</li>
               </ul>

            </div>
            <div className="Images-award">
                    <img src={Award} />
                    
                </div>
                </div>
            </div>
       
    )
}

export default Awards
