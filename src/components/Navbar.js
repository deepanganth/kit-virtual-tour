import "./Navbar.css";
import { useState, useRef } from "react";
import left from "./assets/left-arrow.png";
import right from "./assets/right-arrow.png";
import open from "./assets/open.png";
import { Link, useLocation } from 'react-router-dom';
function Navbar() {
  const containerRef = useRef(null);

  function scrollLeft() {
    containerRef.current.scrollLeft -= 300;
  }

  function scrollRight() {
    containerRef.current.scrollLeft += 300;
  }


  const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  const location = useLocation();

  const linkStyle = {
    textDecoration: "none",
    fontWeight: "bold", 
    color: "white", 
    textShadow: " 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0af, 0 0 70px #0af, 0 0 80px #0af, 0 0 100px #0af, 0 0 150px #0af"
  };
  const noLink = {
    textDecoration: "none",
    color: "white", 
  };

  return (
    <div className="nav-section">
      {showDiv && (
        <div>
          <img onClick={scrollLeft} className="left-btn" src={left} alt="" />
          <img onClick={scrollRight} className="right-btn" src={right} alt="" />
        </div>
      )}
      {showDiv && (
        <div className="wrapper" ref={containerRef}>
          <Link style={location.pathname === "/" ? linkStyle : noLink} to="/">
            <div className="box box-1"><p>Home</p></div>
          </Link>
          <Link style={location.pathname === "/center" ? linkStyle : noLink} to="/center">
            <div className="box box-2"><p>Center Block</p></div>
          </Link>
          <Link style={location.pathname === "/west" ? linkStyle : noLink} to="/west">
            <div className="box box-3"><p>West Block</p></div>
          </Link>
          <Link style={location.pathname === "/east" ? linkStyle : noLink} to="/east">
            <div className="box box-4"><p>East Block</p></div>
          </Link>
          <div className="box box-5"><p>Auditorium</p></div>
          <div className="box box-6"><p>Conference Hall</p></div>
          <div className="box box-7"><p>Boys hostel</p></div>
          <div className="box box-8"><p>Canteen</p></div>
          <div className="box box-9"><p>Mess</p></div>
          <div className="box box-10"><p>Class Room</p></div>
          <div className="box box-11"><p>Play ground</p></div>
          <div className="box box-12"><p>Basketball court</p></div>
        </div>
      )}
      <div>
        <img onClick={toggleDiv} className="toggle-menu" src={open} alt="" />
      </div>
    </div>
  );
}
export default Navbar;
