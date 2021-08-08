import React from 'react';
import fortune1 from './cropped-foutune_logo-2.png'
import CheckIcon from '@material-ui/icons/Check';
import Founder from './gopi-1.jpg';
import About from './about.jpg';


import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import './aboutus.scss';
function aboutus() {
    return (
        <div className="About-Us " id="about-us">
            <div className="About-Sub">
              <div className="Main-content">
              <div className="sub-content">
              <p className="content-title">ABOUT US</p>
              <img className="Imagesrc" src={fortune1} height="200px"/>
              
              
              
              </div>
             
              <div className="sub-content2">
              <p className="content">Aspiring to become something is a natural instinct all of you have but it takes the right environment and the association to make that dream become a reality. Fortune Global Organisation is the right destination that brings out the best in you and helps you achieve your dreams.</p>
                  <ul>
                      <li>
                        <ArrowDownwardRoundedIcon />
                        <p>know how</p>
                      </li>
                      
                      <li>
                      <CheckIcon className="check-icon"/> 
                      <p>1. Invoke The Entrepreneur In You</p>
                      </li>
                      <li><CheckIcon className="check-icon"/>
                      <p>2. Shape Your Life With Your Own Terms</p></li>
                      <li><CheckIcon className="check-icon"/>
                      <p>3. Grab The Chance To Enrich Your Life</p></li>
                  </ul>
              </div>
              </div>
              
            </div>
            <div className="Founder">
            <div className="Sub-Founder">
            <h1>Founder</h1>
            <h2>Akula gopi</h2>
            </div>
            <div className="sub-founder-2">
            <p className="Founder-About">I grew up with a humble upbringing from the countryside and I was a visualizer who refused to go by the vicious circle of ‘Don’t Dream Big’.  With that as my goal, I have not only created an opportunity for myself but also for many more. My journey started right from the grassroot level. My growing years as a professional and the credits of my performance gave me the opportunity to visit various countries and get exposed to international business environments, their strategies and solutions. Today, I am glad I am sharing the same with my team. I touched my first milestone by setting up an office in Hyderabad and today I have been able to make its presence felt across the states of Telangana and Andhra Pradesh. For me, it is just the beginning. There is a long way to go and many more things to achieve. </p>
                <img className="Founder-Image" src={Founder}/>

            </div>
                
            </div>
            <div className="opportunities">
            <div className="opportunities-sub">
                <h2>OPPORTUNITIES</h2>
                <p>
                Having a successful career requires adhering to certain steps such as proper planning, an effective strategy, the requisite training, develop dynamism and positivity, the ability to make use of skills and talent at the right time and set proper goals with appropriate timeframe. Fortune Global Organisation offers you that opportunity to acquire all these steps and create a life that you have dreamt of in a holistic manner. This is a platform which moulds you from grassroot level and enriches your personality to become what you want to.  Join us and know more…

                </p>
            </div>
            <div className="opportunities-sub">
                <h3>
                    Who We Are
                </h3>
                <p>
                Business has only two functions – marketing and innovation”- these words from Milan Kundera have helped Fortune Global Organisation to set its foundation and grow as one of the most innovative, dynamic and progressive sales and marketing companies in India. Established in the year 2010, our focus is to deliver the exposure and impact of marketing and business development thus enabling those who join us to grow and expand with success.
Fortune Global Organisation is considered as a pioneer of outsourced sales and marketing management catering to the top most companies in India across various market segments. At the same time, its core interest lies in development of people associated with it. We provide a fertile platform to young and enthusiastic upcoming professionals to make their own mark in the professional world. We strongly believe in the theory of putting people first and nurturing their talent through various award winning mentoring programs, thus shaping them to be independent entrepreneurs. 
                </p>
            </div>
            <div className="opportunities-sub opportunities-sub-2 ">
                <img src={About}/>
            </div>
            <div className="opportunities-sub">
                <h3>
                    Who We Do
                </h3>
                <p>
                “Business has only two functions – marketing and innovation”- these words from Milan Kundera have helped Fortune Global Organisation to set its foundation and grow as one of the most innovative, dynamic and progressive sales and marketing companies in India. Established in the year 2010, our focus is to deliver the exposure and impact of marketing and business development thus enabling those who join us to grow and expand with success.
Fortune Global Organisation is considered as a pioneer of outsourced sales and marketing management catering to the top most companies in India across various market segments. At the same time, its core interest lies in development of people associated with it. We provide a fertile platform to young and enthusiastic upcoming professionals to make their own mark in the professional world. We strongly believe in the theory of putting people first and nurturing their talent through various award winning mentoring programs, thus shaping them to be independent
                </p>
            </div>
                
            </div>
            
            
            
            
            </div>
        
    )
}

export default aboutus
