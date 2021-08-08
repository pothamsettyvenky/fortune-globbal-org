import './header.scss'
import  React from 'react';
import fortune from './fortunelogo.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
function Header( {menuopen,setMenuopen} ) {
    return (
        
        <div className={"header " +(menuopen && "active")}>
        
        <div className="logo">
                <img className="mainlogo" src={fortune} height="70px"/>
            </div>
            <div className="menu">
            <ul>
                <li>
                    <a href="https://www.facebook.com/fortuneglobal.2010/" target="_blank"><FacebookIcon className="icons"/></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/fortuneglobalorganisation/" target="_blank"><InstagramIcon className="icons1"/></a>
                </li>
                <li>
                    <a href="#" target="_blank"><LinkedInIcon className="icons2"/></a>
                </li>
                <li>
                    <a href="#" target="_blank"><TwitterIcon className="icons3"/></a>
                </li>
            </ul>
            </div>
           
            <div className="hamburger" onClick={()=>setMenuopen(!menuopen)}>
                <span className="one"></span>
                <span className="two"></span>
                <span className="three"></span>
            </div>
        
            
        </div>
    )
}

export default Header
