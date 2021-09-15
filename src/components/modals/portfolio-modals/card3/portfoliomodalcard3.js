import React from 'react';
import "./portfoliomodalcard3.scss";
import LoremIpSum from 'react-lorem-ipsum';

export default function PortfolioModalCard3({ closeModal }) {
    return (
        <div className="portfoliomodal-card3-body">
                 <div className="portfoliomodal-card3-section">
               <div id="modalCard1" className="portfolio-modal-card3">
                        <span className="closeModalBtn-card3" onClick={() => closeModal(false)}>&times;</span>
                            <div className="portfoliomodal-card3-section-header">
                                 <h1 className="section-header-h1-card3">JavaScript ToDo App:</h1>
                           </div>
  
                        <div className="portfolio-modal-body-card3">
                             
                             <div className="portfolio-modal-video-section-card3">
                                 <div className="portfolio-modal-video-section-body-card3">
                                         <p>this is the video play section</p>
                                 </div>
                             </div>

                             
                             <div className="portfolio-modal-title-section-card3">
                                 <div className="portfolio-modal-title-section-body-card3">
                                         <div className="title-body-cards">
                                             <div className="title3-card1">card1</div>
                                             <div className="title3-card2">card2</div>
                                             <div className="title3-card3">card3</div>
                                         </div>
                                         <div className="description-header">
                                             <h2>Description:</h2>
                                         </div>
                                 </div>
                             </div>



                             <div className="portfolio-modal-description-section-card3">
                                   <div className="portfolio-modal-description-section-body-card3">
                                   <div className="portfolio-modal-card3-card">
                                        <ul> 
                                           <p className="description-p3"></p>
                                        </ul> 
                                          
                                         </div>
                                         <button className="modal-card3-button">source code</button>
                                   </div>
                             </div>



                        </div>



                    </div>  

                </div>       
        </div>
    )
}
