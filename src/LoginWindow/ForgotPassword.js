import React from 'react';
import ReactDOM from 'react-dom/client';

// import "../Styling/LoginWindow.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import LoginDiv from "./Login"
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import {  faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdmimOtpWindow from "./Otp";


function AdminForgotPassword()
{
   



    return (
        <div  id = "dminForgotPasswordReturnDiv" className="LoginDiv">
          <h2 id="AdminForgotPasswordHeading" className='HeadingOfLoginDiv' >Admin Forgot Password</h2>
          
         
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