import React, { useRef ,useState ,useEffect} from "react";
import "./CarouselContainer.css";
import Marquee from "react-fast-marquee";

import htmlLogo from "./../images/htmlLogo.png";
import cssLogo from "./../images/cssLogo.png";
import javascriptLogo from "./../images/javascriptLogo.png";
import nodejsLogo from "./../images/nodejsLogo.png";
import reactLogo from "./../images/reactLogo.png";
import reduxLogo from "./../images/reduxLogo.png";
import nextjsLogo from "./../images/nextjsLogo.png";
import cppLogo from "./../images/cppLogo.png";
import cLogo from "./../images/cLogo.png";
import javaLogo from "./../images/javaLogo.png";
import pythonLogo from "./../images/pythonLogo.png";
import phpLogo from "./../images/phpLogo.png";
import mysqlLogo from "./../images/mysqlLogo.png";
import mongodbLogo from "./../images/mongodbLogo.png";
import trainImg from "./../images/train.png";
import trainEngineImg from "./../images/trainEngineImg.png";

import SectionTitle from "./SectionTitle";

const CarouselContainer = () => {
  const clientRef = useRef();
  const [isVisible, setIsVisible] = useState(true); // State to track visibility

   



  const handleMouseEnter = () => {
    if (clientRef.current) {
      clientRef.current.stop();
    }
  };
  const handleMouseLeave = () => {
    if (clientRef.current) {
      clientRef.current.start();
    }
  };
  const programmingTechnologies = [
    { image: htmlLogo, programmingName: "HTML" },
    { image: cssLogo, programmingName: "CSS" },
    { image: javascriptLogo, programmingName: "JavaScript" },
    { image: nodejsLogo, programmingName: "Node.js" },
    { image: reactLogo, programmingName: "React" },
    { image: reduxLogo, programmingName: "Redux" },
    { image: nextjsLogo, programmingName: "Next.js" },
    { image: cppLogo, programmingName: "C++" },
    { image: cLogo, programmingName: "C" },
    { image: javaLogo, programmingName: "Java" },
    { image: pythonLogo, programmingName: "Python" },
    { image: phpLogo, programmingName: "PHP" },
    { image: mysqlLogo, programmingName: "MySQL" },
    { image: mongodbLogo, programmingName: "MongoDB" },
  ];

  return (
    <div className="carousel-container">
      <SectionTitle content="Multi-Language Expertise"></SectionTitle>
      {/* <Marquee
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={clientRef}
        speed={100}
        behavior="scroll"
        className="marquee-container"
        style={{ display: "flex" }}
      >
       

        </Marquee> */}
     
     
     
      <Marquee
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={clientRef}
        speed={150}
        behavior="scroll"
        className={`marquee-container ${isVisible ? "left-motion-box" : ""}`}
        style={{ display: "flex" }}
      >
        {programmingTechnologies.map((language, idx) => {
          return (
            <div className="carousel-box">
               <div className="move-box-train">
                <img
                  className="train-engine-img"
                  src={trainImg}
                  alt="train-img"
                ></img>
                <div className="lang-text-box">
                    <h3 className="lang-text">
                      {language.programmingName}</h3> 
                </div>
               
        </div>
              <div className="carousel-img-box">
                <img
                  className="carousel-img"
                  src={language.image}
                  alt="content-img"
                ></img>
              </div>
              <div className="move-box-train"></div>

              <div className="carousel-img-text-blender"></div>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default CarouselContainer;
