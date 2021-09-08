import './menu.scss';
import ContactDetails from '../contactDetails/ContactDetails';

const Menu = ({menuOpen, setMenuOpen, menuItem, setMenuItem}) => {

    const setMenuOnClick = (item)  => {
        setMenuOpen(!menuOpen);
        setMenuItem(item);
    }
    return (
        <div className={"menu " + (menuOpen && " active")}>
            <div className="left"></div>
            <div className="right">
                <div className="menuItems">
                    <ul>
                        <li>
                            <a href="#intro" className={(menuItem === "intro") ? "active" : ""} onClick={() => setMenuOnClick("intro")}>Home</a>
                        </li>
                           <br/>
                        <li>
                            {/* <a href="#about" className={(menuItem === "about") ? "active" : ""}  onClick={() => setMenuOnClick("about")}>About</a> */}
                        </li>
                            <br/>
                        <li>
                            <a href="#education" className={(menuItem === "education") ? "active": ""} onClick={() => setMenuOnClick("education")}>Education</a>
                        </li>
                            <br/>
                        <li>
                            <a href="#workexperience" className={(menuItem === "workexperience") ? "active" : ""} onClick={() => setMenuOnClick("workexperience")}>Experience</a>
                        </li>
                            <br/>
                        <li>
                            <a href="#skills" className={(menuItem === "skills") ? "active" : ""} onClick={() => setMenuOnClick("skills")}>Skills</a>
                        </li>
                            <br/>
                        <li>
                            <a href="#portfolio" className={(menuItem=== "portfolio") ? "active" : ""} onClick={() => setMenuOnClick("portfolio")}>Portfolio</a>
                        </li>
                            <br/>
                        <li>
                            <a href="#contact" className={(menuItem === "contact") ? "active" : ""} onClick={() => setMenuOnClick("contact")}>Contact</a>
                        </li>
                    </ul>

                </div>

                <ContactDetails />
                
            </div>

        </div>
    )
}

export default Menu