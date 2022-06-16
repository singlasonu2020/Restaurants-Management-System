import React, { useEffect } from "react";
import ReactDOM from 'react-dom/client';
import "../Styling/AdminWindowSchedule.css";
import DefaultSchedule from "./DefaultScheduleForm";
import CustomSchedule from "./CustomScheduleForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";



function AddSchedule() {

  useEffect(()=>{
    document.getElementById("AdminWindowScheduleReturningDivMainDicButtonDivDefault").click();
  })
    
    return (
        <div id="AdminWindowWorkingTimeReturningDiv" >

            <div id="AdminWindowScheduleReturningDivHeadingDiv" className="AdminWindowWorkingTimeReturningDivHeadingDiv">
                <h1 id="AdminWindowScheduleReturningDivHeadingDivHeading" className="AdminWindowWorkingTimeReturningDivHeadingDivHeading">Add Schedule</h1>
                <h3 id="AdminWindowScheduleReturningDivHeadingDivSubHeading" className="AdminWindowWorkingTimeReturningDivHeadingDivSubHeading"> <FontAwesomeIcon icon={faInfoCircle} id="AdminWindowWorkingTimeInfoCircle" /> Below is the form to set the working Schedule for the restaurant. You can also set different settings for some specific dates by clicking on the Tab Custom.</h3>
            </div>


            <div id="AdminWindowWorkingTimeReturningDivMainDic" >
                <div id="AdminWindowWorkingTimeReturningDivMainDicButtonDiv">
                    <div id="AdminWindowScheduleReturningDivMainDicButtonDivDefault"  className="AdminWindowWorkingTimeReturningDivMainDicButtonDivDefault" onClick={OnClickOnDefaultWorkingTime}>Default</div>
                    <div id="AdminWindowScheduleReturningDivMainDicButtonDivCustom"  className="AdminWindowWorkingTimeReturningDivMainDicButtonDivCustom" onClick={OnClickOnCustomWorkingTime}>Custom</div>
                </div>
                <div id="AdminWindowScheduleReturningDivMainDivContaint" className="AdminWindowWorkingTimeReturningDivMainDivContaint">
                   
                </div>
            </div>

            
        </div>
    )
}

function OnClickOnDefaultWorkingTime() {

  const WorkingTimeContaint = ReactDOM.createRoot(document.getElementById("AdminWindowScheduleReturningDivMainDivContaint"));
  WorkingTimeContaint.render(<DefaultSchedule/>)
  document.getElementById("AdminWindowScheduleReturningDivMainDicButtonDivDefault").style.backgroundColor="white";
  document.getElementById("AdminWindowScheduleReturningDivMainDicButtonDivCustom").style.backgroundColor="";
  

}
function OnClickOnCustomWorkingTime() {
  document.getElementById("AdminWindowScheduleReturningDivMainDicButtonDivDefault").style.backgroundColor="";
  document.getElementById("AdminWindowScheduleReturningDivMainDicButtonDivCustom").style.backgroundColor="white";
  const WorkingTimeContaint = ReactDOM.createRoot(document.getElementById("AdminWindowScheduleReturningDivMainDivContaint"));
  WorkingTimeContaint.render(<CustomSchedule/>);
}


export default AddSchedule;