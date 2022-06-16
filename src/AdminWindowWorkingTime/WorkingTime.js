import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faExclamationTriangle  } from "@fortawesome/free-solid-svg-icons";
import WorkingTimeDefault from "../AdminWindowDefaultWorkingTime/DefaultWorkingTime";
import WorkingTimeCustom from "../AdminWindowCustomWorkingTime/CustomWorkingTime"
import "../Styling/AdminWindowWorkingTime.css"



function WorkingTime() {
    useEffect(()=>{
        document.getElementById("AdminWindowWorkingTimeReturningDivMainDicButtonDivDefault").click();
    })

    return (
        <div id="AdminWindowWorkingTimeReturningDiv" >

            <div id="AdminWindowWorkingTimeReturningDivHeadingDiv" className="AdminWindowWorkingTimeReturningDivHeadingDiv">
                <h1 id="AdminWindowWorkingTimeReturningDivHeadingDivHeading" className="AdminWindowWorkingTimeReturningDivHeadingDivHeading">Working Time Setting</h1>
                <h3 id="AdminWindowWorkingTimeReturningDivHeadingDivSubHeading" className="AdminWindowWorkingTimeReturningDivHeadingDivSubHeading"> <FontAwesomeIcon icon={faInfoCircle} id="AdminWindowWorkingTimeInfoCircle" /> Below is the form to set the working time for the restaurant. You can also set different settings for some specific dates by clicking on the Tab Custom.</h3>
            </div>

            <h6 id="MessageforSucces" ><spam id="MessageforSuccesSuccesIcon" ><FontAwesomeIcon icon={faCheck}/></spam><spam id="MessageforSuccesRejectIcon"><FontAwesomeIcon icon={faExclamationTriangle}/></spam> <spam id="MessageforSuccesMessage"></spam></h6>

            <div id="AdminWindowWorkingTimeReturningDivMainDic" >
                <div id="AdminWindowWorkingTimeReturningDivMainDicButtonDiv">
                    <div id="AdminWindowWorkingTimeReturningDivMainDicButtonDivDefault" className="AdminWindowWorkingTimeReturningDivMainDicButtonDivDefault" onClick={OnClickOnDefaultWorkingTime}>Default</div>
                    <div id="AdminWindowWorkingTimeReturningDivMainDicButtonDivCustom"  className="AdminWindowWorkingTimeReturningDivMainDicButtonDivCustom" onClick={OnClickOnCustomWorkingTime}>Custom</div>
                </div>
                <div id="AdminWindowWorkingTimeReturningDivMainDivContaint"   className="AdminWindowWorkingTimeReturningDivMainDivContaint" >
                   
                </div>
            </div>
        </div>
    )

}





function OnClickOnDefaultWorkingTime() {

    const WorkingTimeContaint = ReactDOM.createRoot(document.getElementById("AdminWindowWorkingTimeReturningDivMainDivContaint"));
    WorkingTimeContaint.render(<WorkingTimeDefault/>)
    document.getElementById("AdminWindowWorkingTimeReturningDivMainDicButtonDivDefault").style.backgroundColor="white";
    document.getElementById("AdminWindowWorkingTimeReturningDivMainDicButtonDivCustom").style.backgroundColor="";
    

}
function OnClickOnCustomWorkingTime() {
    document.getElementById("AdminWindowWorkingTimeReturningDivMainDicButtonDivDefault").style.backgroundColor="";
    document.getElementById("AdminWindowWorkingTimeReturningDivMainDicButtonDivCustom").style.backgroundColor="white";
    const WorkingTimeContaint = ReactDOM.createRoot(document.getElementById("AdminWindowWorkingTimeReturningDivMainDivContaint"));
    WorkingTimeContaint.render(<WorkingTimeCustom/>);
}

export default WorkingTime;