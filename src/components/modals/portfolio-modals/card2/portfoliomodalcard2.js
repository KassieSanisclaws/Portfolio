import React from 'react'
import "./portfoliomodalcard2.scss";



export default function PortfolioModalCard2({ closeModal }) {
    return (
        <div className="portfoliomodal-card2-">
               <div className="portfoliomodal-card2-section">
               <div id="modalCard1" className="portfolio-modal">
                        <span className="closeModalBtn-card2" onClick={() => closeModal(false)}>&times;</span>
                            <div className="portfoliomodal-card2-section-header">
                                 <h1 className="section-header-h1">Modal Project1</h1>
                           </div>

                        <div className="portfolio-modal-body">
                             
                             <div className="portfolio-modal-video-section-card2">
                                 <div className="portfolio-modal-video-section-body2">
                                         <p>this is the video play section</p>
                                 </div>
                             </div>

                             
                             <div className="portfolio-modal-title-section">
                                 <div className="portfolio-modal-title-section-Body">
                                         <p>this is the title section</p>
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
    )
}
