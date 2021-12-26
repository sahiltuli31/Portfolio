import React from "react";
import "../css/intro.css";
import gif from "../images-and-icons/giff.gif"


function Intro() {


  return (
    <div className="intro d-flex" id="intro">
      <h1 className=" left intro bounce-in-top">
        <span className="huge ">
          Hi, </span>


      </h1>
      <div className="right bounce-in-top">
        <div className="slide-show">
          <img src={gif} alt="" className="gif" />
        </div>
        <span className="rest">
          My name is <span className="name"> Sahil Tuli. </span> <br />
          And I'm a
          <div id="rest-2">
            <div className="animation">
              <div className="wrapper">
                <div className="item">A Passionate Coder</div>
                <div className="item">MERN Developer</div>
                <div className="item">Competitive Programmer</div>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div >
  );
}

export default Intro;
