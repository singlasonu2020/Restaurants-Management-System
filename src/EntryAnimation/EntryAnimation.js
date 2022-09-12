import React,{useEffect} from "react";
import "../Styling/EntryAnimation.css";
import { useNavigate,Outlet } from "react-router-dom";


var WelcomeBack = "Welcome Back";
var ToAdministrationPage = "To Administration Page";
var lengthOfWelcomeBack = WelcomeBack.length;
var lengthOfToAdministrationPage = ToAdministrationPage.length;
var index = 0;
//TypeAnimation



//Main Function For Export
function EntryAnimation() {
  const navigate = useNavigate();

  const ReverseTypeWritingAnimation=()=>{

    document.getElementById("EntryAnimationReturningWelcomeDiv").style.animationName = "LetterOpacity";
    document.getElementById("EntryAnimationReturningWelcomeDiv").style.animationDuration = "3s";
  
  
    document.getElementById("EntryAnimationReturningDiv").style.animationName = "ContainerOpacity";
    document.getElementById("EntryAnimationReturningDiv").style.animationDuration = "3s";
  
    setTimeout(() => {
      navigate("admin_login")
    }, 2500);

  }
  

  const TypeWritingAnimation=()=>{
    if (index >= lengthOfWelcomeBack + lengthOfToAdministrationPage) {
      setTimeout(() => {
        ReverseTypeWritingAnimation();
      }, 400);
  
      return;
    } else if (index < lengthOfWelcomeBack) {
      document.getElementById(
        "EntryAnimationReturningDivWelcomeHeading"
      ).innerHTML += WelcomeBack.charAt(index);
      setTimeout(() => {
        index++;
        TypeWritingAnimation();
      }, 200);
    } else {
      document.getElementById(
        "EntryAnimationReturningDivWelcomeSubHeading"
      ).innerHTML += ToAdministrationPage.charAt(index - lengthOfWelcomeBack);
      setTimeout(() => {
        index++;
        TypeWritingAnimation();
      }, 100);
    }
  }

  
  useEffect(()=>{TypeWritingAnimation()});
  return(
    <div className="ForBackGroundImage">
    <div id="EntryAnimationReturningDiv" className="EntryAnimationReturningDiv" >
      <img src="/img/logo.png" alt="Logo" className="EntryAnimationReturningDivLogo" />
      <h1 className="EntryAnimationReturningDivRestaurantName">Restaurant Booking System</h1>
      <div id="EntryAnimationReturningWelcomeDiv">
        <h1 id="EntryAnimationReturningDivWelcomeHeading" ></h1>
        <h6 id="EntryAnimationReturningDivWelcomeSubHeading"></h6>
      </div> 
    </div>
    </div>
  );
}


function Login()
{
  return(
    <div className="ForBackGroundImage">
    <div className="EntryAnimationReturningDiv" style={{backgroundColor:"rgba(35, 41, 54,0.7)"}}>
      <img src="/img/logo.png" alt="Logo" className="EntryAnimationReturningDivLogo" />
      <h1 className="EntryAnimationReturningDivRestaurantName">Restaurant Booking System</h1>
      <div id="EntryAnimationReturningLoginDiv"><Outlet /></div>
    </div>
    </div>
  )
   

  
}
export  {EntryAnimation,Login};
