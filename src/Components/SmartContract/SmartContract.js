import React from "react";
import "./SmartContract.css";
import HowWeWork from "../../images/How We Work Illustration.png";

const SmartContract = () => {
  return (
    <div className="row m-5">
      <div className="col-md-6">
        <img className="img-fluid" src={HowWeWork} alt="" />
      </div>
      <div className="col-md-6">
        <p id="smart">SMART CONTRACT</p>
        <p className="header-text">Experience the Revolution</p>
        <p className="description justifyText">
          Merklabs has efficient developers with exceptional coding skills that
          can create any type of smart contract you desire and with scalable and
          secure code. You desire, we create it for you.
        </p>
      </div>
    </div>
  );
};

export default SmartContract;
