import React from 'react';
import LoremIpsum from 'react-lorem-ipsum';
import "./education.scss";


export default function Education() {
    return (
        <div className="education-body">
                <div className="education-section">
                       <div className="education-header">
                               <h1 className="education-header-h1">Education Section:</h1>
                        </div>

                        <div className="education-section-cards">
                               <div className="education-section-card1-image"></div>

                               <div className="education-section-card2-image"></div>

                               <div className="education-section-card3-image"></div>

                               <div className="education-section-card4-description">
                                     <div className="education-section-card4-header">
                                         <h2 className="education-card4-header-h2">BreezeMaxWeb [Internship]:</h2>
                                     </div>
                                     <div className="education-section-card4-description-body">
                                         <ul>
                                             <li className="card4-lorem1"><p>I would like to start off by thanking BreezeMaxWeb for the great experience into the role of Software Developer.
                                                                        <br/>
                                                                        I have had the great opportunity to receive mentorship from a professionally well informed software developer.
                                                                        <br/>
                                                                        Everyday was a new experience and great challenge for me learning and getting more familiar with my core concepts, best practices,
                                                                        many functions and clean code practices to cement my understanding of the Javascript language.
                                                                        </p></li>

                                             <li className="card4-lorem2"><p>Re-factoring my code. Taking into consideration the practices of clean code and code review by the senior software engineer.
                                                                          <br/>
                                                                          Becoming more familiar with GitHub and creating repositories and push/pull branch request from the main working branch. Problem solving
                                                                          exercises building my logic on the test cases when building a application. 
                                                                          </p></li>
                                             <li className="card4-lorem3"><p>Working within a fast paced working enviornment and as a team together on the same goal completing tasks.
                                                                          <br/>
                                                                          I was given many tasks like, user authentication to SQL workbench through node backend rest api's.
                                                                          <br/>
                                                                          User validation based on credentials of user verifying through Bcrypt.
                                                                          <br/>
                                                                          Creating new user into database through confirmed registration and validation. 
                                                                          <br/>
                                                                          User frontend validation through post requests sent from the browser.
                                                                          <br/>
                                                                          Improved mastery of React Frontend Framework
                                                                          </p></li>
                                             <li className="card4-lorem4"><p>De-bugging code
                                                                          <br/>
                                                                          UxDesign for wireframe work design of application and production implementation.
                                                                          etc...
                                                                          </p></li>

                                         </ul>
                                     </div>
                               </div>

                               
                               <div className="education-section-card5-description">
                                      <div className="education-section-card5-header">
                                             <h2 className="education-card5-header-h2">Header Trios College</h2>
                                      </div>
                                      <div className="education-section-card5-description-body">
                                          <ul>
                                              <li className="card5-lorem1"><p>(2)Year course Enterprise Web and Mobile Applications.
                                                                           <br/>
                                                                           Started January 2020 - current [Internship].
                                                                           <br/>
                                                                           Trios College was a great experience and choice in my development into being a software engineer. 
                                                                           <br/>
                                                                           Ive learned lots and grew in a magnitude of ways, As a person, The constent approach to success, setting goals,
                                                                           time management maximizing your time, humbled by the impeccable work ethic needed in the software industry, knowledge,
                                                                           teachings and instruction, thirst for improvement and the students and how much tech can bring people together working on a 
                                                                           unified goal.</p></li>
                                              <li className="card5-lorem2"><p>Trios College covered a wide range of courses and topics like, SQL programming, JavaScript,
                                                                              Introduction To Java, Introduction To C++, Andriod Development, IOS Development, Php Programming, Advanced Web Technologies,
                                                                              Programing Logic, Mobile Web Development, Adobe Photoshop and XD for wireframe mark-up and many more.
                                                                              </p></li>
                                              <li className="card5-lorem3"><p>Throughout my schooling I have worked on a number of projects as part of a module completion from small Javascript Calculator App,
                                                                              React ecommerce app, Angular game ser=arch app using a open source api retrieving the data.</p></li>
                                              <li className="card5-lorem4"><p>Overall Trios College was a great experience and further cemented my passion for technology, building applications and my
                                                                              excessive enjoyment for software engineering.</p></li>
                                          </ul>
                                      </div>
                                <button className="education-card5-Resume-button">Resume</button>
                                <button className="education-card5-CoverLetter-button">CoverLetter</button>
                               </div>

                        </div>
                
                </div>
        </div>
    )
}
