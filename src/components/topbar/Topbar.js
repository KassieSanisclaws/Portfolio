import './topbar.scss';

const Topbar = ({menuOpen, setMenuOpen, setMenuItem}) => {
  const setMenuOnClick = (item)  => {
    //setMenuOpen(false);
    setMenuItem(item);
}

    return (
        <div className="topbar">
            <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo" onClick={() => setMenuOnClick("intro")}>
            <span>Kadeem</span>
            <span>Cherman</span>
          </a>
          </div> 
          
          <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                        <span className="line4"></span>
              
              </div>      
          </div>
      </div>
   </div>
    )
}
export default Topbar;
