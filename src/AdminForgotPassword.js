import React from 'react';
import ReactDOM from 'react-dom/client';
import "./AdminForgotPassword.css";
import "./LoginDiv.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginDiv from "./LoginDiv"
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import {  faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdmimOtpWindow from "./AdmimOtpWindow";


function AdminForgotPassword()
{
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
          <h2 id="AdminForgotPasswordHeading">Admin Forgot Password</h2>
          
         
          <div className="input-group flex-nowrap LoginDivInsideDiv">
            <span className="input-group-text" id="addon-wrapping">
              @
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div className="input-group flex-nowrap LoginDivInsideDiv">
            <span className="input-group-text" id="addon-wrapping">
              <FontAwesomeIcon icon={faMobile} />
            </span>
            <input
              type="tel"
              className="form-control"
              placeholder="Mobile Number"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              id="LoginDivInputPassword"
            />
          </div>

          <div className="input-group flex-nowrap LoginDivInsideDiv">
            <span className="input-group-text" id="addon-wrapping">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Email Id"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              id="LoginDivInputPassword"
            />
          </div>

          <div id="LoginDivBUttonsDiv">
            <button
              type="button"
              id="LoginDivLoginButton"
              className="btn btn-secondary LoginDivInsideDiv"
              onClick={RenderAdminOtpPage}
              
            >
              Verify
            </button>
            <h6 id="BackToLogin" onClick = {BackToLoginPage} >Back To Login</h6>
            
          </div>
        </div>
      );
}

function BackToLoginPage() {
    console.log("hello from forgot password");
    const EntryAnimationReturningLoginDiv = ReactDOM.createRoot(document.getElementById("EntryAnimationReturningLoginDiv"));
    EntryAnimationReturningLoginDiv.render(<LoginDiv />);
    
  }
  function RenderAdminOtpPage() {
    console.log("hello from forgot password");
    const EntryAnimationReturningLoginDiv = ReactDOM.createRoot(document.getElementById("EntryAnimationReturningLoginDiv"));
    EntryAnimationReturningLoginDiv.render(<AdmimOtpWindow />);
    
  }

export default AdminForgotPassword;