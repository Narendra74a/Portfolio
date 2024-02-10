import React, { useState } from "react";
import "./Sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import LogoS from "../../assets/images/N.png";
import LogoSubtitle from "../../assets/images/N-S.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faEnvelope, faHome, faStar, faSuitcase, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faReadme, faSkype, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="logo" />
        <img src={LogoSubtitle} className="sub-logo" alt="slobodan" />
      </Link>

      <nav className={showNav ? "mobile-show" : ""}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
        exact="true"
        activeclassname="active"
        className="education-link"
        to="/education"
        onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faReadme} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="Skill-link"
          to="/Skills"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faStar} color="#4d4d4e" />
        </NavLink>
        <NavLink
         exact="true"
         activeclassname="active"
         className="portfolio-link"
         to="/portfolio"
         onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
           exact="true"
           activeclassname="active"
           className="contact-link"
           to="/contact"
           onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>  
      </nav>
      <ul className={showNav ? "mobile-show" : ""}>
        <li>
          <a
            href="https://www.linkedin.com/in/narendra-kumar/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Narendra357"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="/">
            <FontAwesomeIcon
              icon={faYoutube}
              onClick={() => {alert('Comming Soon My Channel')}}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://join.skype.com/invite/anCUBvrkWy2f"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faSkype}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
         className={showNav ? "hamburger-icon" : "hide"}
        icon={faBars}
        color="#ffd700"
        size="3x"
        
      />
      
      <FontAwesomeIcon
         className={showNav ?"hide"  :"close-icon" }
         onClick={() => setShowNav(false)}
      color="#ffd700"
      icon={faClose}
      size="3x"
     
    />
    </div>
  );
};

export default Sidebar;
