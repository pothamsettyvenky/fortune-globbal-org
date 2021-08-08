import React from "react"
import './menu.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

function Menu({menuopen,setMenuopen}) {
    const close=()=>{
        setMenuopen(false);
    }
    return (
        <div className={"MenuHeader "+(menuopen &&"active") }>
            <ul>
            <li onClick={()=>close()}>
                <a href="#about-us">About us</a>
            </li>
            <li onClick={()=>close()}>
            <a href="#Clinet">Our clients</a>
            </li>
            <li onClick={()=>close()}>
            <a href="#Awards">Awards</a>
            </li>
            <li onClick={()=>close()}>
            <a href="#">Gallery</a>
            </li>
            </ul>
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
        </div>
    )
}

export default Menu
