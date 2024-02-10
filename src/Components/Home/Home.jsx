import React, { useEffect, useState } from "react";
import "./Home.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/N.png";
import Logo from "./Logo/Logo";
import Loader from "react-loaders";
import SaveAs from "file-saver";
import CV from "../../assets/narendra.pdf";

const Home = () => {


  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["a", "r", "e", "n", "d", "r", "a"];
  const jobArray = [
    "W",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  const Resume = () => {
    SaveAs(CV, "Narendra.pdf");
  };

  return (
    <>
  
      <div className="container home-page">
      
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>{" "}
          <h2>Full Stack Developer / JavaScript Expert / Youtuber</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <Link to="#"   className="flat-button">
            Download CV
          </Link>
        </div>
      
        <Logo />
          <div id="star1"></div>
          <div id="star2"></div>
          <div id="star3"></div>
      
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
