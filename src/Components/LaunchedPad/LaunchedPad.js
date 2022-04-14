import React from "react";
import "./LaunchedPad.css";
import onBoard from "../../images/2.png";
import line from "../../images/Line 5.png";
import ellipse from "../../images/Ellipse 5.png";

const LaunchedPad = () => {
  return (
    <div className="row mx-5 py-5">
      <div className="col-md-7">
        <div className="lineMargin">
          <img src={ellipse} alt="" />
          <img className="launchLine" src={line} alt="" />
        </div>
        <div>
          <p id="launchPad">LAUNCHPAD</p>
          <p className="header-text">Stabilize and Promote</p>
          <p className="description justifyText">
            Amidst the competition in the Defi space, good marketing strategy
            and implementation plays the key role to stabilize and promote your
            growth in the blockchain industry. Retaining this awareness, we can
            develop launchpad and IDO for your presale and ICO.
          </p>
        </div>
      </div>
      <div className="col-md-5">
        <img className="img-fluid" src={onBoard} alt="" />
      </div>
    </div>
  );
};

export default LaunchedPad;
