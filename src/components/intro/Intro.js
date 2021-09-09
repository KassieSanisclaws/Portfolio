import './intro.scss';
import { useEffect, useRef } from 'react';
import { init } from 'ityped';
import Presentation from "../../videos/presentation.mp4";
import BCBLogo from "../../images/generic-images/BCB_FInal.jpg";


export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Web-Developer", "E-Commerce", "Mobile-Design", "Full-Stack"],
            });
    }, []);
    
return(
<div className="intro-body">
<video autoPlay loop muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}><source src={Presentation} type="video/mp4"/></video>
     <div className="intro" id="intro">
            <div className="intro-left-content">
                  <div className="intro-image-Container">
                        <img src={BCBLogo} alt=""/>
                    </div>
              </div>
                     <div className="right">
                           <div className="intro-right-wrapper">
                              <h2 className="intro-h2">Hi There, I'm</h2>
                               <h1 className="intro-h1">Cherman, Kadeem </h1>
                                  <h3 className="intro-h3">FreeLance: <span ref={textRef}></span></h3>
                               </div>
                                 <a href="#portfolio">
                                    <img src="assets/down.png" alt="" />
                                </a>
                        </div>
                 </div>
        </div>
    );
}
