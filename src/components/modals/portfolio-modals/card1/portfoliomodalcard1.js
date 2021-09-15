import "./portfoliomodalcard1.scss";
import React from 'react';
import LoremIpSum from "react-lorem-ipsum";

const PortfolioModalCard1 = ({ closeModal }) => {
    
    return (   
        <div className="portfoliomodal-card1-body">  
             <div className="portfoliomodal-card1-section">
               <div id="modalCard1" className="portfolio-modal-card1">
                        <span className="closeModalBtn-card1" onClick={() => closeModal(false)}>&times;</span>
                            <div className="portfoliomodal-card1-section-header">
                                 <h1 className="section-header-h1-card1">JavaScript Calculator:</h1>
                           </div>

                        <div className="portfolio-modal-body-card1">
                             
                             <div className="portfolio-modal-video-section-card1">
                                 <div className="portfolio-modal-video-section-body-card1">
                                         <p>this is the video play section</p>
                                 </div>
                             </div>

                             
                             <div className="portfolio-modal-title-section-card1">
                                 <div className="portfolio-modal-title-section-body-card1">
                                         <div className="title-body-cards">
                                             <div className="title-card1">JavaScript</div>
                                             <div className="title-card2">CSS</div>
                                             <div className="title-card3">HTML</div>
                                         </div>
                                         <div className="description-header">
                                             <h2>Description:</h2>
                                 </div>
                                 </div>
                             </div>


                             <div className="portfolio-modal-description-section-card1">
                                   <div className="portfolio-modal-description-section-body-card1">
                                   <div className="portfolio-modal-card1-card">
                                        <ul> 
                                            <p className="description-p">JavaScript Calculator: <br/> Built using Javascript, Html and css to complete the application. Javascript logic and 
                                               functionality was a main focus of the calculator application showcasing the many functions built and called upon to 
                                               run the application as it is built to be.</p>
                                        </ul> 
                                         </div>
                                         <button className="modal-card1-button">source code</button>
                                   </div>
                             </div>



                        </div>



                    </div>  

                </div>       
        </div>
       
    );
}

export default PortfolioModalCard1;
