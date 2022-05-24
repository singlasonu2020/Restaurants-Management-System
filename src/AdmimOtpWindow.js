import React from "react";
import ReactDOM from "react-dom/client";
import "./AdminForgotPassword.css";
import "./LoginDiv.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginDiv from "./LoginDiv";
import EnterNewPasswordPage from "./EnterNewPasswordPage";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AdmimOtpWindow() {

  var LoginDivWidth;
  let WindowWidth = window.screen.width;

  if (WindowWidth >= 1024) {
    LoginDivWidth = "35%";
  } else if (WindowWidth >= 512) {
    LoginDivWidth = "55%";
  } else {
    LoginDivWidth = "75%";
  }

  var LoginDivStyle = {
    width: LoginDivWidth,
  };


  return (
    <div id="LoginDiv" style={LoginDivStyle}>
      <h2 id="AdminForgotPasswordHeading">Enter OTP</h2>

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
        <h6 id="BackToLogin" onClick={BackToLoginPage}>
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
