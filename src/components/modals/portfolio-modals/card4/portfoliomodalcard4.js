import React from 'react';
import "./portfoliomodalcard4.scss";
import LoremIpSum from 'react-lorem-ipsum';

export default function PortfolioModalCard4({ closeModal }) {
    return (
        <div className="portfoliomodal-card4-body">
                <div className="portfoliomodal-card4-section">
               <div id="modalCard1" className="portfolio-modal-card4">
                        <span className="closeModalBtn-card4" onClick={() => closeModal(false)}>&times;</span>
                            <div className="portfoliomodal-card4-section-header">
                                 <h1 className="section-header-h1-card4">JavaScript Linear Search:</h1>
                           </div>

                        <div className="portfolio-modal-body-card4">
                             
                             <div className="portfolio-modal-video-section-card4">
                                 <div className="portfolio-modal-video-section-body-card4">
                                         <p>this is the video play section</p>
                                 </div>
                             </div>

                             
                             <div className="portfolio-modal-title-section-card4">
                                 <div className="portfolio-modal-title-section-body-card4">
                                         <div className="title-body-cards">
                                             <div className="title4-card1">card1</div>
                                             <div className="title4-card2">card2</div>
                                             <div className="title4-card3">card3</div>
                                             <div className="title4-card4">card4</div>
                                         </div>
                                         <div className="description-header">
                                             <h2>Description:</h2>
                                         </div>
                                 </div>
                             </div>



                             <div className="portfolio-modal-description-section-card4">
                                   <div className="portfolio-modal-description-section-body-card4">
                                   <div className="portfolio-modal-card4-card">
                                        <ul> 
                                            <p className="description-p4"></p>
                                        </ul>    
                                         </div>
                                         <button className="modal-card4-button">source code</button>
                                   </div>
                             </div>



                        </div>



                    </div>  

                </div>       
            
        </div>
    )
}
