import React from "react";
import ReactDOM from "react-dom/client";
import "./AdminForgotPassword.css";
import "./LoginDiv.css";
import "./AdminNewPasswordUpdateSuccessfully.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginDiv from "./LoginDiv";
import "./index.css";


function AdminNewPasswordUpdateSuccessfully() {
 

  return (
    <div id="LoginDivPasswordSuccessfull" className="LoginDiv" >
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