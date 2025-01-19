import React,{useState,useEffect ,useRef} from 'react';
import {div} from 'react-router-dom';
import './HeaderBar.css'
const HeaderBar =()=>{
      const refHeadList1 = useRef();
      const refHeadList2 = useRef();
      const refHeadList3 = useRef();
      const refHeadList4 = useRef();
      const refHeadContainer =useRef();
      const headBoxList =useRef();

      


    return(
        <header className="head-container" ref={refHeadContainer}>
        <div className="head-box">
          <h2 className="head-title">
            <div
             >
              {" "}
              Coder<b style={{color:'#00ffbb',
                fontSize:'30px'
              }}>Z     </b> Community{" "}
            </div>
          </h2>
          <ul ref={headBoxList} className="head-list">
            <div
              ref={refHeadList1}
              className="head-list-link-item"
              style={{ textDecoration: "none" }}
              to="/achievements"
              onClick={() => {
                // handleHeadLinksLoader();
              }}
            >
              {" "}
              <li>Projects</li>{" "}
            </div>
            <div
              ref={refHeadList2}
              className="head-list-link-item"
              style={{ textDecoration: "none" }}
              to="/products"
              onClick={() => {
                // handleHeadLinksLoader();
              }}
            >
              <li>Resumes</li>
            </div>
            <div
              ref={refHeadList3}
              className="head-list-link-item"
              style={{ textDecoration: "none" }}
              to="/clients"
              onClick={() => {
                // handleHeadLinksLoader();
              }}
            >
              <li>Contact us</li>
            </div>
            <div
              ref={refHeadList4}
              className="head-list-link-item"
              style={{ textDecoration: "none" }}
              to="/contact-us"
              onClick={() => {
                // handleHeadLinksLoader();
              }}
            >
              {" "}
              <li>About us</li>
            </div>
          </ul>
        
        </div>
      </header>
    )
}

export default HeaderBar;