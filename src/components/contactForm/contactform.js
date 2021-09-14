import React, { useState } from 'react'
import "./contactform.scss";
import Address_Pin from "../../images/icon-images/location_pin.png";
import Email_Icon from "../../images/icon-images/email_icon.png";
import Phone_Icon from "../../images/icon-images/phone_icon.png";
import Linkedin from "../../images/icon-images/linkedin_icon.png";
import GitHub from "../../images/icon-images/github_icon.png";


export default function ContactForm() {
    const [ formState, setFormState ] = useState("");
    return (
        <div className="contactform-body">

<section>
               <div className="contactform-section"> 
                   {/* <img src={background_img_green18} style={{position: "absolute", width: "112.5rem", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}} alt="/" />   */}
                         <div className="contact-me-info">
                                <div className="contact-me-header">
                                      <h1 className="contact-header">Contact Me:</h1>
                                          </div>
                                         
                                          <ul className="contact-ul-info">
                                                 <li className="contact-li-info-address">
                                                        <span><img src={Address_Pin} alt="/" /></span>
                                                        <span>Canada<br/>
                                                            Brampton, Ontario<br/>
                                                              </span>
                                                     </li>


                                                 <li className="contact-li-info-email">
                                                        <span><img src={Email_Icon} alt="/" /></span>
                                                        <span>Kassie.Sanisclaws35@gmail.com</span>
                                                  </li>

                                                 <li className="contact-li-info-phone">
                                                        <span><img src={Phone_Icon} alt="" /></span>
                                                        <span>+1-647-612-XXXX</span>
                                                 </li>

                                          </ul>

                           
                                        <ul className="contact-ul-social-links">
                                               <li><a href="/"><img src={Linkedin} alt="/" /></a></li>
                                               <li><a href="/"><img src={GitHub} alt="/" /></a></li>
                                               <li><a href="/">social 3</a></li>
                                               <li><a href="/">social 4</a></li>
                                        </ul>

                            </div>



                  <div className="contact-form-container">
                            <div className="contact-formbox">
                                  <div className="contact-form-header">
                                       <h1 className="form-header">Email Me Direct:</h1> 
                                              </div>


                                          <div className="inputBox w50">
                                                <input type="text"
                                                       name="name"
                                                       placeholder="Enter Name"
                                                 //       value={this.state.formState}
                                                       required
                                                       onChange={(e)=> setFormState(e.target.value)}/> 
                                                </div>
                                           

                                            <div className="inputBox w50">
                                                 <input type="email"
                                                        id="email"
                                                        placeholder="Enter Email"
                                                        // value={this.state.formState}
                                                        required
                                                        onChange={(e)=> setFormState(e.target.value)}/>
                                                 </div>


                                           <div className="inputBox w100">
                                                <textarea type="message"
                                                          id="message"
                                                          placeholder="Enter Email Contents Here" 
                                                        //   value={this.state.formState}
                                                          required
                                                          onChange={(e)=> setFormState(e.target.value)}/>
                                           </div>
                                          <button className="form-button" onClick={""}>SEND</button>
                                   </div>
                            </div>


                 </div>
            </section>  
            
        </div>
    )
}
