import React from 'react'
import PortfolioCardSection from '../portfolioCardSection/portfoliocardsection';
import "./portfolio.scss";


export default function Portfolio() {
    return (
        <div className="portfolio-body">
               <div className="portfolio-section">
                      <div className="portfolio-section-header">
                          <h1 className="portfolio-section-header-h1">Portfolio:</h1>
                      </div>

                      <div className="portfolio-section-body-cards">
                              <div className="portfolio-section-cards">            

                               <PortfolioCardSection />

                              </div>
                      </div>


               </div>
        </div>
    )
}
