import React,{useEffect} from "react";
import ReactDOM from "react-dom/client";
import "./AdminLoginPage.css";
import LoginDiv from "./LoginDiv";

var WelcomeBack = "Welcome Back";
var ToAdministrationPage = "To Administration Page";
var lengthOfWelcomeBack = WelcomeBack.length;
var lengthOfToAdministrationPage = ToAdministrationPage.length;
var index = 0;
function TypeWritingAnimation() {
  if (index >= lengthOfWelcomeBack + lengthOfToAdministrationPage) {
    setTimeout(() => {
      ReverseTypeWritingAnimation(1.0, 1.0);
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
function ReverseTypeWritingAnimation(OpacityOfText, OpacityOfBackground) {
  if (OpacityOfText <= 0) {
    document.getElementById("EntryAnimationReturningWelcomeDiv").style.display =
      "none";

    const EntryAnimationReturningLoginDiv = ReactDOM.createRoot(
      document.getElementById("EntryAnimationReturningLoginDiv")
    );
    EntryAnimationReturningLoginDiv.render(<LoginDiv />);

    return;
  }
  document.getElementById(
    "EntryAnimationReturningWelcomeDiv"
  ).style.color = `rgb(255,255,255,${OpacityOfText})`;
  document.getElementById(
    "EntryAnimationReturningDiv"
  ).style.backgroundColor = `rgb(35,41,54,${OpacityOfBackground})`;
  setTimeout(() => {
    OpacityOfText = OpacityOfText - 0.01;
    OpacityOfBackground = OpacityOfBackground - 0.002;
    ReverseTypeWritingAnimation(OpacityOfText, OpacityOfBackground);
  }, 1);
}
function EntryAnimation() {
  console.log("one");
  useEffect(()=>{TypeWritingAnimation()});
  return(
    <div id="EntryAnimationReturningDiv">
      <img src="/img/logo.png" alt="Logo" id="EntryAnimationReturningDivLogo" />
      <h1 id="EntryAnimationReturningDivRestaurantName">
        Restaurant Booking System
      </h1>
      <div id="EntryAnimationReturningWelcomeDiv">
        <h1 id="EntryAnimationReturningDivWelcomeHeading"></h1>
        <h6 id="EntryAnimationReturningDivWelcomeSubHeading"></h6>
      </div>
      <div id="EntryAnimationReturningLoginDiv"></div>
 
  
    </div>
  );
}

export default EntryAnimation;
