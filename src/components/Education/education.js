import React from 'react';
import LoremIpsum from 'react-lorem-ipsum';
import "./education.scss";


export default function Education() {
    return (
        <div className="education-body">
                <div className="education-section">
                       <div className="education-header">
                               <h1 className="education-header-h1">Education Section:</h1>
                        </div>

                        <div className="education-section-cards">
                               <div className="education-section-card1-image">
                                   <p>card 1 image</p>
                               </div>

                               <div className="education-section-card2-image">
                                  <p>card 2 image</p>
                               </div>

                               <div className="education-section-card3-image">
                                    <p>card 3 image</p>
                               </div>

                               <div className="education-section-card4-description">
                                     <div className="education-section-card4-header">
                                         <h2 className="education-card4-header-h2">header for internship</h2>
                                     </div>
                                     <div className="education-section-card4-description-body">
                                         <ul>
                                             <li className="card4-lorem1"><LoremIpsum p={1} /></li>
                                             <li className="card4-lorem2"><LoremIpsum p={1} /></li>
                                             <li className="card4-lorem3"><LoremIpsum p={1} /></li>
                                             <li className="card4-lorem4"><LoremIpsum p={1} /></li>
                                         </ul>
                                     </div>
                               </div>

                               
                               <div className="education-section-card5-description">
                                      <div className="education-section-card5-header">
                                             <h2 className="education-card5-header-h2">Header Trios College</h2>
                                      </div>
                                      <div className="education-section-card5-description-body">
                                          <ul>
                                              <li className="card5-lorem1"><LoremIpsum p={1} /></li>
                                              <li className="card5-lorem2"><LoremIpsum p={1} /></li>
                                              <li className="card5-lorem3"><LoremIpsum p={1} /></li>
                                              <li className="card5-lorem4"><LoremIpsum p={1} /></li>
                                          </ul>
                                      </div>
                                <button className="education-card5-Grades-button">Grades</button>
                                <button className="education-card5-Resume-button">Resume</button>
                                <button className="education-card5-CoverLetter-button">CoverLetter</button>
                               </div>

                        </div>
                
                </div>
        </div>
    )
}
