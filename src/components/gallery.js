import React from "react"
import './gallery.scss';
import Fortune11 from './future.png';
import Fortune from './gallery-1.jpg'
import Fortune1 from './gallery-2.jpg'
import Fortune2 from './gallery-3.jpg'
import AwesomeSlider from 'react-awesome-slider';
import withAutoPlay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css'

function Gallery() {
    const AutoPlaySlider=withAutoPlay(AwesomeSlider);
    
    
    return (
        <div className="gallery">
        <h1>GALLERY</h1>
        <div className="gallery-sub">
        <AutoPlaySlider className="slider"
               play={true}
            animation="foldOutAnimation"
            bullets={false}
           buttons={false}>
                <div
                data-src={Fortune} 
                alt="" className="header1"

                />
                 <div 
                data-src={Fortune1}
                alt="" className="header2"

                />
                 <div
                data-src={Fortune2} 
                alt="" className="header2"

                />
                </AutoPlaySlider>
           
        </div>
            
           
           
        </div>
    )
}

export default Gallery
