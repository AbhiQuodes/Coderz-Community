import React from "react";
import "./ContentContainer.css";
import contentImg from './../images/coderzWebImg5.png'
import Aos from 'aos';
const ContentContainer = () => {
  return (
    <div className="content-container">
      <div className="content-box">
        <div 
          // data-aos="fade-in"
          // data-aos-delay="100"
          // data-aos-duration="600"
          // data-aos-easing="ease-in-sine"
          className="text-content">
        At  Coder<b style={{color:'#00ffbb',
        display:"inline-block",
                fontSize:'20px'
              }}>Z     </b> Community, our foundation is built on passion, innovation, and a commitment to delivering exceptional results. We work tirelessly to set benchmarks in coding and development, ensuring that every project stands out for its excellence.
       
       </div>
        <div   
        // data-aos="fade-in"
        //         data-aos-delay="100"
        //         data-aos-duration="600"
        //         data-aos-easing="ease-in-sine"
                className="img-text-blender"></div>
        <div className="content-img-box" >
            <img className="content-img" src={contentImg} alt='content-img'></img>

        </div>
      </div>
    </div>
  );
};

export default ContentContainer;
