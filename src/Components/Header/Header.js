import React from "react";
import "./Header.css";
import dots from "../../images/dots.png";
import line from "../../images/Group 66.png";

const Header = () => {
  return (
    <div className="header-bg">
      <div className="d-flex justify-content-end dots">
        <img src={dots} alt="" />
      </div>
      <div className="row m-5 p-3 header-height">
        <div className="col-md-8 m-bottom">
          <p className="header-text">
            We provide The Best To Protect Your <br /> Users And Their
            Investments
          </p>
          <p className="header-text-style justifyText">
            Merklabs is a reputed name in the field of blockchain technology
            encompassing all the segments of this revolutionary field.
            Pioneering the essence of blockchain security and audits, we secure
            your present and future through the parameters of technology.
          </p>
        </div>
        <div className="col-md-4 glass-bg m-bottom">
          <div className="m-bottom">
            <div className="d-flex count-position">
              <div className="glass">
                <img src={line} alt="" />
              </div>
              <div className="mx-3">
                <div className="mt-3">
                  <p className="count">100+</p>
                  <p className="service">
                    Blockchain companies <br /> protected
                  </p>
                </div>
                <div className="countMarginTop">
                  <p className="count">200+</p>
                  <p className="service">Issues discovered</p>
                </div>
                <div className="countMarginTop">
                  <p className="count">10,000+</p>
                  <p className="service">Analyses available per month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
