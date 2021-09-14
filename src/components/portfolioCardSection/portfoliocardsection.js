import React, { useState } from 'react';
import PortfolioModalCard1 from '../modals/portfolio-modals/card1/portfoliomodalcard1';
import PortfolioModalCard2 from '../modals/portfolio-modals/card2/portfoliomodalcard2';
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
                                         <h2 className="portfolio-section-card-header">H2 card1 header</h2>
                                         <div className="portfolio-section-card-image">
                                         
                                         </div>
                                         <div className="portfolio-section-card-banner">
                                             <p>JavaScript-Clock</p>
                                         </div>
                                         <div className="portfolio-section-card-image-container">
                                             <p>Card Image section</p>
                                         </div>
                                         <div className="portfolio-section-card-button-container">

                                          <button id="modalBtn" className="modal-button" onClick={() => { setShowModal(true); }}>button card 1</button>
 
                                         </div>
                                     </div>   

                                     <div className="portfolio-section-card">
                                         <h2 className="portfolio-section-card-header">H2 card1 header</h2>
                                         <div className="portfolio-section-card-image">
                                          
                                         </div>
                                         <div className="portfolio-section-card-banner">
                                             <p>JavaScript-Calculator</p>
                                         </div>
                                         <div className="portfolio-section-card-image-container">
                                             <p>Card Image section</p>
                                         </div>
                                         <div className="portfolio-section-card-button-container">
                                         <button id="modalBtn" className="modal-button2" onClick={() => { setShowModal2(true); }}>button card 2</button>
                                         </div>
                                     </div>   

                                     <div className="portfolio-section-card">
                                         <h2 className="portfolio-section-card-header">H2 card1 header</h2>
                                         <div className="portfolio-section-card-image">
                                          
                                         </div>
                                         <div className="portfolio-section-card-banner">
                                             <p>ToDo-App</p>
                                         </div>
                                         <div className="portfolio-section-card-image-container">
                                             
                                         </div>
                                         <div className="portfolio-section-card-button-container">
                                         <button id="modalBtn" className="modal-button3" onClick={() => { setShowModal3(true); }}>button card 2</button>
                                         </div>
                                     </div>   

                                     <div className="portfolio-section-card">
                                         <h2 className="portfolio-section-card-header">H2 card1 header</h2>
                                         <div className="portfolio-section-card-image">
                                           
                                         </div>
                                         <div className="portfolio-section-card-banner">
                                             <p>Project Name</p>
                                         </div>
                                         <div className="portfolio-section-card-image-container">
                                             <p>Card Image section</p>
                                         </div>
                                         <div className="portfolio-section-card-button-container">
                                         <button id="modalBtn" className="modal-button4" onClick={() => { setShowModal4(true); }}>button card 2</button>
                                         </div>
                                     </div>  

                                     <div className="portfolio-section-card">
                                         <h2 className="portfolio-section-card-header">H2 card1 header</h2>
                                         <div className="portfolio-section-card-image">
                                         
                                         </div>
                                         <div className="portfolio-section-card-banner">
                                             <p>Project Name</p>
                                         </div>
                                         <div className="portfolio-section-card-image-container">
                                             <p>Card Image section</p>
                                         </div>
                                         <div className="portfolio-section-card-button-container">
                                         <button id="modalBtn" className="modal-button5" onClick={() => { setShowModal5(true); }}>button card 2</button>
                                         </div>
                                     </div>  

                                     <div className="portfolio-section-card">
                                         <h2 className="portfolio-section-card-header">H2 card1 header</h2>
                                         <div className="portfolio-section-card-image">
                                       
                                         </div>
                                         <div className="portfolio-section-card-banner">
                                             <p>Project Name</p>
                                         </div>
                                         <div className="portfolio-section-card-image-container">
                                             <p>Card Image section</p>
                                         </div>
                                         <div className="portfolio-section-card-button-container">
                                         <button id="modalBtn" className="modal-button5" onClick={() => { setShowModal6(true); }}>button card 2</button>
                                         </div>
                                     </div>  

                                     <div className="portfolio-section-card">
                                         <h2 className="portfolio-section-card-header">H2 card1 header</h2>
                                         <div className="portfolio-section-card-image">
                                          
                                         </div>
                                         <div className="portfolio-section-card-banner">
                                             <p>Project Name</p>
                                         </div>
                                         <div className="portfolio-section-card-image-container">
                                             <p>Card Image section</p>
                                         </div>
                                         <div className="portfolio-section-card-button-container">
                                         <button id="modalBtn" className="modal-button5" onClick={() => { setShowModal7(true); }}>button card 2</button>
                                         </div>
                                     </div>  

                                          {showModal && <PortfolioModalCard1 closeModal={setShowModal} /> } 
                                          {showModal2 && <PortfolioModalCard2 closeModal={setShowModal2} />}
                                          {/* {showModal3 && <PortfolioModalCard3 closeModal={setShowModal3} />}
                                          {showModal3 && <PortfolioModalCard4 closeModal={setShowModal4} />}
                                          {showModal3 && <PortfolioModalCard5 closeModal={setShowModal5} />}
                                          {showModal3 && <PortfolioModalCard6 closeModal={setShowModal6} />}
                                          {showModal3 && <PortfolioModalCard7 closeModal={setShowModal7} />} */}

                           </div>
    )
}
