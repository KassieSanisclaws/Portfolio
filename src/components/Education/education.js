import React from 'react';
import LoremIpsum from 'react-lorem-ipsum';
import "./education.scss";


export default function Education() {
    return (
        <div className="education-body">
                <div className="education-section">
                       <div className="education-header">
                               <h1 className="education-header-h1">Education Section</h1>
                        </div>

                        <div className="education-section-cards">
                               <div className="education-section-card1-image">
                                   
                               </div>

                               <div className="education-section-card2-image">

                               </div>

                               <div className="education-section-card3-image">

                               </div>

                               <div className="education-section-card4-description">
                                     <div classname="education-section-card4-header">
                                         <h2 className="education-card4-header-h2">header for internship</h2>
                                     </div>
                                     <div className="education-section-card4-descritpion-body">
                                         <ul>
                                             <li><LoremIpsum p={1} /></li>
                                             <li><LoremIpsum p={1} /></li>
                                             <li><LoremIpsum p={1} /></li>
                                             <li><LoremIpsum p={1} /></li>
                                         </ul>
                                     </div>
                               </div>

                               
                               <div className="education-section-card5-description">
                                      <div className="education-section-card5-description-body">
                                          <ul>
                                              <li><LoremIpsum p={1} /></li>
                                              <li><LoremIpsum p={1} /></li>
                                              <li><LoremIpsum p={1} /></li>
                                              <li><LoremIpsum p={1} /></li>
                                          </ul>
                                      </div>
                                <button>Resume</button>
                                <button>Grades</button>
                                <button>CoverLetter</button>
                               </div>

                        </div>
                
                </div>
        </div>
    )
}
