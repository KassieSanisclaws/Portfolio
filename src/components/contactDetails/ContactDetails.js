import './contactdetails.scss';
import PhoneForwardedSharpIcon from '@material-ui/icons/PhoneForwardedSharp';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

const ContactDetails = () => {
    return (
        <div className="contactdetails-content">
            <a href="mailto:Kassie.Sanisclaws35@gmail.com" >
                <div className="contactdetails-icon">
                 <EmailIcon className="contactdetails-email-icon"/>

                </div>
                <div className="txt">
                    <span>Kassie.Sanisclaws35@gmail.com</span>
                </div>
            </a>
            <a href="tel:+16476125016">
                <div className="icon">
                    <PhoneForwardedSharpIcon className="contactIcon"/> 
                </div>

                <div className="txt">
                    <span className="contactTxt">+1 (647) 612 - 5016</span>
                </div>
            </a>

            <a href="https://github.com/KassieSanisclaws">
           <div className="contactdetails-icon-github">
               <GitHubIcon className="contactdetails-github-icon"/>   
           </div>

         <div className="txt">
             <span>GitHub.com/KassieSanisclaws</span>
         </div>
       </a>

        </div>
    )
}

export default ContactDetails