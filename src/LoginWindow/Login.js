import React from 'react';
import ReactDOM from 'react-dom/client';
import "../Styling/LoginWindow.css";
import AdminForgotPassword from "./ForgotPassword"
import "bootstrap/dist/css/bootstrap.min.css";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminWindow from "../AdminWindowHome/Home";




function LoginDiv() {
  

  return (
    <div id="LoginDiv" className="LoginDiv">
      <h2 id="LoginDivHeading" className="HeadingOfLoginDiv">Admin Login</h2>
      
     
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
          <FontAwesomeIcon icon={faLock} />
        </span>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          id="LoginDivInputPassword"
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
          onClick={AdminLoginButton}
        >
          Login
        </button>
        <h6 id="LoginDivForgotButton" onClick = {RenderForgotAdminPasswordPage}>Forgot Password</h6>
      </div>
    </div>
  );
}

function RenderForgotAdminPasswordPage() {
  console.log("hello from forgot password");
  const EntryAnimationReturningLoginDiv = ReactDOM.createRoot(document.getElementById("EntryAnimationReturningLoginDiv"));
  EntryAnimationReturningLoginDiv.render(<AdminForgotPassword />);
  
}

function LoginDivShowPassword() {
  let Icon = document.getElementById("LoginDivShowPasswordIcon").style.display;
  console.log(Icon);
  if (Icon === "none") {
    document.getElementById("LoginDivShowPasswordIcon").style.display = "block";
    document.getElementById("LoginDivClosePasswordIcon").style.display = "none";
    document.getElementById("LoginDivInputPassword").type = "password";
  } else {
    document.getElementById("LoginDivShowPasswordIcon").style.display = "none";
    document.getElementById("LoginDivClosePasswordIcon").style.display =
      "block";
    document.getElementById("LoginDivInputPassword").type = "text";
  }
}

function AdminLoginButton(){
  const EntryAnimationReturningLoginDiv = ReactDOM.createRoot(document.getElementById("root"));
  EntryAnimationReturningLoginDiv.render(<AdminWindow />);
  
}
export default LoginDiv;
