import React from 'react';
import "./portfoliomodalcard6.scss"; 
import LoremIpSum from 'react-lorem-ipsum';


export default function PortfolioModalCard6({ closeModal }) {
    return (
        <div className="portfoliomodal-card6-body">
                  <div className="portfoliomodal-card6-section">
               <div id="modalCard1" className="portfolio-modal-card6">
                        <span className="closeModalBtn-card6" onClick={() => closeModal(false)}>&times;</span>
                            <div className="portfoliomodal-card6-section-header">
                                 <h1 className="section-header-h1-card6">React Ecommerce App:</h1>
                           </div>

                        <div className="portfolio-modal-body-card6">
                             
                             <div className="portfolio-modal-video-section-card6">
                                 <div className="portfolio-modal-video-section-body-card6">
                                         <p>this is the video play section</p>
                                 </div>
                             </div>

                             
                             <div className="portfolio-modal-title-section-card6">
                                 <div className="portfolio-modal-title-section-body-card6">
                                 <div className="portfolio-modal-title-section-body-card6">
                                         <div className="title-body-cards">
                                             <div className="title-card1">card1</div>
                                             <div className="title-card2">card2</div>
                                             <div className="title-card3">card3</div>
                                             <div className="title-card4">card4</div>
                                         </div>
                                         <div className="description-header">
                                             <h2>Description:</h2>
                                         </div>
                                 </div>
                                 </div>
                             </div>



                             <div className="portfolio-modal-description-section-card6">
                                   <div className="portfolio-modal-description-section-body-card6">
                                   <div className="portfolio-modal-card6-card">
                                        <ul> 
                                            <li><LoremIpSum p={1} /></li>
                                            <li><LoremIpSum p={1} /></li>
                                            <li><LoremIpSum p={1} /></li>
                                            <li><LoremIpSum p={1} /></li>
                                            <li><LoremIpSum p={1} /></li>
                                        </ul> 
                                         </div>
                                         <button className="modal-card6-button">source code</button>
                                   </div>
                             </div>



                        </div>



                    </div>  

                </div>       
            
        </div>
    )
}
