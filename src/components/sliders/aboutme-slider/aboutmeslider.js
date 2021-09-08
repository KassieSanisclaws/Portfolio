import React, { useState } from 'react';
import "./aboutmeslider.scss";
import { Images } from "../../../data-files/aboutme-slider/aboutmeSlider";



export default function AboutMeSlider() {
    const [ currentImg, setCurrentimg ] = useState(0);


    return (
          <div className="aboutme-slider-section">
                  <div className="aboutme-slider-container">
                           <div className="aboutme-slider">
                                <img className="aboutme-slider-img" src={Images[currentImg].img} alt="/"/>
                           </div>

                    <div className="aboutme-slider-buttons">
                       <button className="aboutme-slider-prev" onClick={() => {currentImg > 0 && setCurrentimg(currentImg - 1)}}>Prev</button>
                       <button className="aboutme-slider-next" onClick={() => {currentImg < Images.length - 1 && setCurrentimg(currentImg + 1)}}>Next</button>
                    </div>    
              </div>
        </div>
    )
}
