import React from 'react'
import "./aboutme.scss";
import LoremIpsum from 'react-lorem-ipsum';
import AboutMeSlider from '../sliders/aboutme-slider/aboutmeslider';

export default function AboutMe() {
    return (
       <div className="about-container">
                <div className="about-banner"></div>
        <div className="about-section">
               <div className="about-cards">

                    <div className="about-card1">
                          <div className="about-card-section">

                              <div className="about-card1-section-header">
                                  <h2 className="about-card1-section-h2">About Me:</h2>
                              </div>

                              <div className="about-card1-section-body">
                          <ul>
                                <li className="lorem1"><LoremIpsum p={1}/></li>
                                <li className="lorem2"><LoremIpsum p={1}/></li>
                                <li className="lorem3"><LoremIpsum p={1}/></li>
                                <li className="lorem4"><LoremIpsum p={1}/></li>
                                <li className="lorem5"><LoremIpsum p={1}/></li>
                                <li className="lorem6"><LoremIpsum p={1}/></li>
                                <li className="lorem7"><LoremIpsum p={1}/></li>
                                <li className="lorem8"><LoremIpsum p={1}/></li>
                         </ul>
                              </div>
                          <button className="about-card1-section-button1">cover letter</button>
                          <button className="about-card1-section-button2">resume</button>
                        </div>   
                    </div>


                    <div className="about-card2">
                            <div className="about-image-container">
                                  <div className="about-image-card"> 
                            <AboutMeSlider />
                                   </div>
                                      </div>
                                </div>
                           </div>          
                      </div>
                </div>
    )
}
