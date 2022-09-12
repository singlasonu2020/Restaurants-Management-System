import React from "react";
import ReactDOM from "react-dom/client";
// import "../Styling/LoginWindow.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import LoginDiv from "./Login";
import { useNavigate } from "react-router-dom";



function AdminNewPasswordUpdateSuccessfully() {

  const navigate = useNavigate();

  return (
    <div id="LoginDivPasswordSuccessfull" className="LoginDiv" >
      <h2 id="AdminNewPasswordUpdateSuccessfullyHeading">
        Your Password is Update <span>Successfully</span>
      </h2>
      <h2 id = "AdminNewPasswordUpdateSuccessfullyGoToLoginPage" onClick={()=>navigate("/admin_login")}>Go TO Login Page</h2>
    </div>
  );
}




export default AdminNewPasswordUpdateSuccessfully;