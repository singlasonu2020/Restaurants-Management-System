import React from "react";
import ReactDOM from "react-dom/client";
// import "../Styling/LoginWindow.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import LoginDiv from "./Login";


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