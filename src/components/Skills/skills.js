import React from 'react'
import "./skills.scss";
import LoremIpsum from "react-lorem-ipsum";

export default function skills() {
    return (
        <div className="skills-container">
        <div className="skills">

            <div className="skills-header">
                <h1 className="skills-h1">Skills</h1>
            </div>     


            <div className="skills-section-content">
                       <div className="skills-content1">
                          
                          
                          <div className="skills-card1">
                              <p>Card1</p>
                          </div>

                          <div className="skills-card2">
                              <p>Card2</p>
                          </div>

                          <div className="skills-card3">
                              <p>Card3</p>
                          </div>

                          <div className="skills-card4">
                              <p>Card4</p>
                          </div>

                          <div className="skills-card5">
                              <p>Card1</p>
                          </div>

                          <div className="skills-card6">
                              <p>Card2</p>
                          </div>

                          <div className="skills-card7">
                              <p>Card3</p>
                          </div>

                          <div className="skills-card8">
                              <p>Card4</p>
                          </div>

                          <div className="skills-card9">
                              <p>Card1</p>
                          </div>

                          <div className="skills-card10">
                              <p>Card2</p>
                          </div>

                          <div className="skills-card11">
                              <p>Card3</p>
                          </div>

                          <div className="skills-card12">
                              <p>Card4</p>
                          </div>
                       </div>

                       <div className="skills-content2">
                           <div className="header-content2">
                               <h3>this is working</h3>
                           </div>
                        <div className="skills-content2-container">
                            <ul>
                                <li className="lorem5"><LoremIpsum p={1}/></li>
                                <li className="lorem6"><LoremIpsum p={1}/></li>
                                <li className="lorem7"><LoremIpsum p={1}/></li>
                                <li className="lorem8"><LoremIpsum p={1}/></li>
                                <li className="lorem9"><LoremIpsum p={1}/></li>
                            </ul>
                        </div>
                         
                       </div>

                       <div className="skills-content3">
                           <div className="header-content3">
                               <h3>this is working</h3>
                           </div>
                        <div className="skills-content3-container">
                            <ul>
                                <li className="lorem10"><LoremIpsum p={1}/></li>
                                <li className="lorem11"><LoremIpsum p={1}/></li>
                                <li className="lorem12"><LoremIpsum p={1}/></li>
                                <li className="lorem13"><LoremIpsum p={1}/></li>
                            </ul>
                        </div>
                       </div>

              </div>

        </div>
    </div>
    )
}
