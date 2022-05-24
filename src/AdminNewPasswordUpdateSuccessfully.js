import React from "react";
import ReactDOM from "react-dom/client";
import "./AdminForgotPassword.css";
import "./LoginDiv.css";
import "./AdminNewPasswordUpdateSuccessfully.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginDiv from "./LoginDiv";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AdminNewPasswordUpdateSuccessfully() {
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
    textAlign:"center"
  };

  return (
    <div id="LoginDiv" style={LoginDivStyle}>
      <h2 id="AdminNewPasswordUpdateSuccessfullyHeading">
        Your Password is Update <span>Successfully</span>
      </h2>
      <h2 id = "AdminNewPasswordUpdateSuccessfullyGoToLoginPage"onClick={BackToLoginPage}>Go TO Login Page</h2>
    </div>
  );
}

function BackToLoginPage() {
  console.log("hello from forgot password");
  const EntryAnimationReturningLoginDiv = ReactDOM.createRoot(
    document.getElementById("EntryAnimationReturningLoginDiv")
  );
  EntryAnimationReturningLoginDiv.render(<LoginDiv />);
}


export default AdminNewPasswordUpdateSuccessfully;