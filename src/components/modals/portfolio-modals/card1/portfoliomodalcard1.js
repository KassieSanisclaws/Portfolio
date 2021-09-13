import "./portfoliomodalcard1.scss";
import React, { useState } from 'react'


const PortfolioModalCard1 = ({ modalShow }) => {
    
    return (
       
        <div className="portfoliomodal-card1-body">  
             <div className="portfoliomodal-card1-section">
            <button id="modalBtn" className="modal-button" onClick={""}>button card 1</button>
               <div id="modalCard1" className="portfolio-modal">
                        <span className="closeModalBtn-card1">&times;</span>
                            <div className="portfoliomodal-card1-section-header">
                                 <h1 className="section-header-h1">Modal Project1</h1>
                           </div>

                        <div className="portfolio-modal-body">
                             
                             <div className="portfolio-modal-video-section">
                                 <div className="portfolio-modal-video-section-Body">
                                         <p>this is the video play section</p>
                                 </div>
                             </div>

                             <div className="portfolio-modal-description-section">
                                   <div className="portfolio-modal-description-section-body">
                                         <p>this is the body of the description section</p>
                                   </div>
                             </div>



                        </div>



                    </div>  

                </div>       
        </div>
       
    );
}

export default PortfolioModalCard1;
