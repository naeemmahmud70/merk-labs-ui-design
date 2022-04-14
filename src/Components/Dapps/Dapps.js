import React from "react";
import "./Dapps.css";
import Maintenance from "../../images/Maintenance Illustration.png";
import line from "../../images/Line 5.png";
import ellipse from "../../images/Ellipse 5.png";

const Dapps = () => {
  return (
    <div className="row m-5 ">
      <div className="col-md-7">
        <img src={ellipse} alt="" />
        <img className="line" src={line} alt="" />
        <p className="dapps">DAPPS</p>
        <p className="header-text">Technology made easier</p>
        <p className="description justifyText">
          Decentralized applications have found a huge user base right in the
          initial stage , and therefore we as a team have gained extensive
          expertise into the creation of dapps.
        </p>
      </div>
      <div className="col-md-5">
        <img className="img-fluid" src={Maintenance} alt="" />
      </div>
    </div>
  );
};

export default Dapps;
