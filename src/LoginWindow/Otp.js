import React from "react";
import ReactDOM from "react-dom/client";
// import "../Styling/LoginWindow.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import LoginDiv from "./Login";
import EnterNewPasswordPage from "./EnterNewPassword";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AdmimOtpWindow() {

  

  return (
    <div className="LoginDiv">
      <h2 id="AdminOtpPasswordHeading" className="HeadingOfLoginDiv">Enter OTP</h2>

      <div className="input-group flex-nowrap LoginDivInsideDiv">
        <span className="input-group-text" id="addon-wrapping">
          
          <FontAwesomeIcon icon={faMobile} />
        </span>
        <input
          type="text"
          inputmode="numeric"
          className="form-control"
          placeholder="6 Digit OTP"
          aria-label="Username"
          size="6"
          aria-describedby="addon-wrapping"
          id="LoginDivInputPassword"
        />
      </div>

      <div className="input-group flex-nowrap LoginDivInsideDiv">
        <span className="input-group-text" id="addon-wrapping">
        
          <FontAwesomeIcon icon={faEnvelope} />
         
        </span>
        <input
          type="text"
          inputmode="numeric"
          className="form-control"
          placeholder="6 Digit OTP"
          aria-label="Username"
          size="6"
          aria-describedby="addon-wrapping"
          id="LoginDivInputPassword"
        />
      </div>

      <div id="LoginDivBUttonsDiv">
        <button
          type="button"
          id="LoginDivLoginButton"
          className="btn btn-secondary LoginDivInsideDiv"
          onClick={RenderEnterNewPasswordPage}
        >
          Validity
        </button>
        <h6 id="BackToLoginInOtp" onClick={BackToLoginPage}>
          Back To Login
        </h6>
      </div>
    </div>
  );
}

function BackToLoginPage() {
  console.log("hello from forgot password");
  const EntryAnimationReturningLoginDiv = ReactDOM.createRoot(document.getElementById("EntryAnimationReturningLoginDiv"));
  EntryAnimationReturningLoginDiv.render(<LoginDiv />);
  
}

function RenderEnterNewPasswordPage() {
  console.log("hello from forgot password");
  const EntryAnimationReturningLoginDiv = ReactDOM.createRoot(document.getElementById("EntryAnimationReturningLoginDiv"));
  EntryAnimationReturningLoginDiv.render(<EnterNewPasswordPage />);
  
}
export default AdmimOtpWindow;
