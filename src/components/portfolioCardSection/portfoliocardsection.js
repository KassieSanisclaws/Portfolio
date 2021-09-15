import React, { useState } from 'react';
import PortfolioModalCard1 from '../modals/portfolio-modals/card1/portfoliomodalcard1';
import PortfolioModalCard2 from '../modals/portfolio-modals/card2/portfoliomodalcard2';
import PortfolioModalCard3 from "../modals/portfolio-modals/card3/portfoliomodalcard3";
import PortfolioModalCard4 from "../modals/portfolio-modals/card4/portfoliomodalcard4";
import PortfolioModalCard5 from "../modals/portfolio-modals/card5/portfoliomodalcard5";
import PortfolioModalCard6 from "../modals/portfolio-modals/card6/portfoliomodalcard6";
import PortfolioModalCard7 from '../modals/portfolio-modals/card7/portfoliomodalcard7';
import "./portfoliocardsection.scss";


export default function PortfolioCardSection() {
     const [ showModal, setShowModal ] = useState(false);
     const [ showModal2, setShowModal2 ] = useState(false);
     const [ showModal3, setShowModal3 ] = useState(false);
     const [ showModal4, setShowModal4 ] = useState(false);
     const [ showModal5, setShowModal5 ] = useState(false);
     const [ showModal6, setShowModal6 ] = useState(false);
     const [ showModal7, setShowModal7 ] = useState(false);


    return (
        <div className="portfolioCardSection-body">


                                         <div className="portfolio-section-card">
                                         <h2 className="portfolio-section-card-header1">JavaScript Calculator</h2>
                                         <div className="portfolio-section-card-image1"></div>
                                        
                                         <div className="portfolio-section-card-image-container"></div>

                                         <div className="portfolio-section-card-button-container">
                                         <button id="modalBtn" className="modal-button1" onClick={() => { setShowModal(true); }}>View</button>
                                         </div>

                                     </div>   

                                     <div className="portfolio-section-card">
                                         <h2 className="portfolio-section-card-header2">JavaScript Clock</h2>
                                         <div className="portfolio-section-card-image2"></div>
                                      
                                         <div className="portfolio-section-card-image-container"></div>

                                         <div className="portfolio-section-card-button-container">
                                         <button id="modalBtn" className="modal-button2" onClick={() => { setShowModal2(true); }}>View</button>
                                         </div>

                                     </div>   

                                     <div className="portfolio-section-card">
                                         <h2 className="portfolio-section-card-header3">JavaScript ToDo App</h2>
                                         <div className="portfolio-section-card-image3"></div>

                                         <div className="portfolio-section-card-image-container"></div>
                                         
                                         <div className="portfolio-section-card-button-container">
                                         <button id="modalBtn" className="modal-button3" onClick={() => { setShowModal3(true); }}>View</button>
                                         </div>

                                     </div>   

                                     <div className="portfolio-section-card">
                                         <h2 className="portfolio-section-card-header4">Javascript Linear Search:</h2>
                                         <div className="portfolio-section-card-image4"></div>
                                        
                                         <div className="portfolio-section-card-image-container4"></div>

                                         <div className="portfolio-section-card-button-container">
                                         <button id="modalBtn" className="modal-button4" onClick={() => { setShowModal4(true); }}>View</button>
                                         </div>

                                     </div>  

                                     <div className="portfolio-section-card">
                                         <h2 className="portfolio-section-card-header5">Angular Game Search</h2>
                                         <div className="portfolio-section-card-image5"></div>
                                         
                                         <div className="portfolio-section-card-image-container"></div>

                                         <div className="portfolio-section-card-button-container">
                                         <button id="modalBtn" className="modal-button5" onClick={() => { setShowModal5(true); }}>View</button>
                                         </div>

                                     </div>  

                                     <div className="portfolio-section-card">
                                         <h2 className="portfolio-section-card-header6">React Ecommerce</h2>
                                         <div className="portfolio-section-card-image6"></div>

                                         
                                         <div className="portfolio-section-card-image-container"></div>

                                         <div className="portfolio-section-card-button-container">
                                         <button id="modalBtn" className="modal-button6" onClick={() => { setShowModal6(true); }}>View</button>
                                         </div>

                                     </div>  

                                     <div className="portfolio-section-card">
                                         <h2 className="portfolio-section-card-header7">React Portfolio</h2>
                                         <div className="portfolio-section-card-image7"></div>
                                        
                                         <div className="portfolio-section-card-image-container"></div>

                                         <div className="portfolio-section-card-button-container">
                                         <button id="modalBtn" className="modal-button7" onClick={() => { setShowModal7(true); }}>View</button>
                                         </div>

                                     </div>  

                                          {showModal && <PortfolioModalCard1 closeModal={setShowModal} /> } 
                                          {showModal2 && <PortfolioModalCard2 closeModal={setShowModal2} />}
                                          {showModal3 && <PortfolioModalCard3 closeModal={setShowModal3} />}
                                          {showModal4 && <PortfolioModalCard4 closeModal={setShowModal4} />}
                                          {showModal5 && <PortfolioModalCard5 closeModal={setShowModal5} />}
                                          {showModal6 && <PortfolioModalCard6 closeModal={setShowModal6} />}
                                          {showModal7 && <PortfolioModalCard7 closeModal={setShowModal7} />}

                           </div>
    )
}
