import React from "react";
import "./Audit.css";
import development from "../../images/Development Illustration.png";

const Audit = () => {
  return (
    <div className="row marginTop mx-5">
      <div className="col-md-5">
        <img className="img-fluid" src={development} alt="" />
      </div>
      <div className="col-md-7">
        <p className="audit">AUDIT</p>
        <p className="header-text">Stay secure and safe</p>
        <p className="description justifyText">
          Above all that matters is a secure and safe smart contract that is
          free from any vulnerability and does not hamper the investment of the
          various people who have trusted you. We also provide auditing services
          , so that you can stay assured of the security as we are quick in
          auditing and exposing the bugs of your smart contract.
        </p>
      </div>
    </div>
  );
};

export default Audit;
