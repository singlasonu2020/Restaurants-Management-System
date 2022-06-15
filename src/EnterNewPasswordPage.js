import React from "react";
import ReactDOM from "react-dom/client";
import "./AdminForgotPassword.css";
import "./LoginDiv.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginDiv from "./LoginDiv";
import AdminNewPasswordUpdateSuccessfully from "./AdminNewPasswordUpdateSuccessfully";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EnterNewPasswordPage() {

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
        <h2 id="AdminForgotPasswordHeading">Enter New Password</h2>
  
        <div className="input-group flex-nowrap LoginDivInsideDiv">
          <span className="input-group-text" id="addon-wrapping">
            <FontAwesomeIcon icon={faLock} />
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="Enter New Password"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            id="EnterNewPasswordPageInputPassword"
          />
        </div>
  
        <div className="input-group flex-nowrap LoginDivInsideDiv">
          <span className="input-group-text" id="addon-wrapping">
            <FontAwesomeIcon icon={faLock} />
           
          </span>
          <input
            type="password"
            
            className="form-control"
            placeholder="Re-Enter New Password"
            aria-label="Username"
          
            aria-describedby="addon-wrapping"
            id="EnterNewPasswordPageReEnterInputPassword"
          />
           <span
          className="input-group-text"
          id="LoginDivShowPassword"
          onClick={LoginDivShowPassword}
        >
          <FontAwesomeIcon icon={faEyeSlash} id="LoginDivShowPasswordIcon" />
          <FontAwesomeIcon icon={faEye} id="LoginDivClosePasswordIcon" />
        </span>
        </div>
  
        <div id="LoginDivBUttonsDiv">
          <button
            type="button"
            id="LoginDivLoginButton"
            className="btn btn-secondary LoginDivInsideDiv"
            onClick={CheckAndRender}
          >
            Submit
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
  



  function LoginDivShowPassword() {
    let Icon = document.getElementById("LoginDivShowPasswordIcon").style.display;
    console.log(Icon);
    // let IconParse = JSON.parse(Icon);
    // console.log(IconParse);
    if (Icon === "none") {
      document.getElementById("LoginDivShowPasswordIcon").style.display = "block";
      document.getElementById("LoginDivClosePasswordIcon").style.display = "none";
      document.getElementById("EnterNewPasswordPageReEnterInputPassword").type = "password";
    } else {
      document.getElementById("LoginDivShowPasswordIcon").style.display = "none";
      document.getElementById("LoginDivClosePasswordIcon").style.display =
        "block";
      document.getElementById("EnterNewPasswordPageReEnterInputPassword").type = "text";
    }
  }

  function CheckAndRender()
  {
    const EntryAnimationReturningLoginDiv = ReactDOM.createRoot(document.getElementById("EntryAnimationReturningLoginDiv"));
    EntryAnimationReturningLoginDiv.render(<AdminNewPasswordUpdateSuccessfully />);
  }

  export default EnterNewPasswordPage;