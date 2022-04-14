import React from "react";
import "./Expert.css";
import discuss from "../../images/Discuss Illustration.png";
import ellipse from "../../images/Ellipse 5.png";
import line from "../../images/Line 3.png";

const Expert = () => {
  return (
    <div className="row m-5">
      <div className="col-md-7">
        <p className="expert">EXPERT</p>
        <p className="header-text">Expert Review</p>
        <p className="description justifyText">
          Experience the guidance of various trained professionals and
          developers who are with you at every phase of your projects. We not
          only develop your project but also give out the best recommendations
          for turning it into a huge success
        </p>
      </div>
      <div className="col-md-5">
        <div className="d-flex justify-content-end">
          <img src={ellipse} alt="" />
        </div>
        <div>
          <img className="img-fluid expertLine" src={line} alt="" />
        </div>
        <div className="marginDiscuss">
          <img className="img-fluid" src={discuss} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Expert;
