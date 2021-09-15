import React from 'react';
import "./portfoliomodalcard2.scss";
import LoremIpSum from 'react-lorem-ipsum';


export default function PortfolioModalCard2({ closeModal }) {
    return (
        <div className="portfoliomodal-card2-">
               <div className="portfoliomodal-card2-section">
               <div id="modalCard1" className="portfolio-modal-card2">
                        <span className="closeModalBtn-card2" onClick={() => closeModal(false)}>&times;</span>
                            <div className="portfoliomodal-card2-section-header">
                                 <h1 className="section-header-h1-card2">Javascript Clock:</h1>
                           </div>

                        <div className="portfolio-modal-body-card2">
                             
                             <div className="portfolio-modal-video-section-card2">
                                 <div className="portfolio-modal-video-section-body-card2">
                                         <p>this is the video play section</p>
                                 </div>
                             </div>

                             
                             <div className="portfolio-modal-title-section-card2">
                                 <div className="portfolio-modal-title-section-body-card2">
                                         <div className="title-body-cards">
                                             <div className="title2-card1">HTML</div>
                                             <div className="title2-card2">JavaScript</div>
                                             <div className="title2-card3">CSS</div>
                                         </div>
                                         <div className="description-header">
                                             <h2>Description:</h2>
                                 </div>
                                 </div>
                             </div>



                             <div className="portfolio-modal-description-section-card2">
                                   <div className="portfolio-modal-description-section-body-card2">
                                   <div className="portfolio-modal-card2-card">
                                        <ul> 
                                            <p className="description-p2">JavaScript Analog Clock: <br/>
                                                Built with Javascrpt, Html and Css. This project was made to show the functions 
                                                created to run the calculator application. The Logic was javascript and its techniques and good practices
                                                nameing conventions and purpose. </p>
                                        </ul>  
                                         </div>
                                         <button className="modal-card2-button">source code</button>
                                   </div>
                             </div>



                        </div>



                    </div>  

                </div>       
            
        </div>
    )
}
