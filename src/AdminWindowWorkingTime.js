import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faExclamationTriangle  } from "@fortawesome/free-solid-svg-icons";


import WorkingTimeDefault from "./AdminWindowWorkingTimeDefaultForm";


function WorkingTime() {
    useEffect(()=>{
        document.getElementById("AdminWindowWorkingTimeReturningDivMainDicButtonDivDefault").click();
    })

    return (
        <div id="AdminWindowWorkingTimeReturningDiv" >

            <div id="AdminWindowWorkingTimeReturningDivHeadingDiv" style={styleForWorkingTimeReturningDivHeadingDiv} >
                <h1 style={{ fontSize: "24px" }}>Working Time Setting</h1>
                <h3 style={{ fontSize: "14px" ,color: "rgb(35,41,54,0.7)"}}> <FontAwesomeIcon icon={faInfoCircle}/> Below is the form to set the working time for the restaurant. You can also set different settings for some specific dates by clicking on the Tab Custom.</h3>
            </div>

            <h6 id="MessageforSucces" style={{fontSize:"12px" , color:"green",paddingTop:"15px",textAlign:"center"}}><spam id="MessageforSuccesSuccesIcon" style={{display:"none"}}><FontAwesomeIcon icon={faCheck}/></spam><spam id="MessageforSuccesRejectIcon" style={{display:"none"}}><FontAwesomeIcon icon={faExclamationTriangle}/></spam> <spam id="MessageforSuccesMessage"></spam></h6>

            <div id="AdminWindowWorkingTimeReturningDivMainDic" style = {styleForWorkingTimeReturningDivMainDiv} >
                <div id="AdminWindowWorkingTimeReturningDivMainDicButtonDiv" style={{display:"flex"}}>
                    <div id="AdminWindowWorkingTimeReturningDivMainDicButtonDivDefault" style={styleForWorkingTimeReturningDivMainDivButton} onClick={OnClickOnDefaultWorkingTime}>Default</div>
                    <div style={styleForWorkingTimeReturningDivMainDivButton}>Custom</div>
                </div>
                <div id="AdminWindowWorkingTimeReturningDivMainDicContaint" style={{backgroundColor:"white",padding:"10px",paddingBottom:"30px"}}>
                   
                </div>
            </div>
        </div>
    )

}

const styleForWorkingTimeReturningDivHeadingDiv = {
    backgroundColor: "white",
    width: "100%",
    padding: "2%",
    color: "rgb(35,41,54,0.8)"
};

const styleForWorkingTimeReturningDivMainDiv = {
margin :"2%",
paddingBottom:"100px"

};

function OnClickOnDefaultWorkingTime() {

    const WorkingTimeContaint = ReactDOM.createRoot(document.getElementById("AdminWindowWorkingTimeReturningDivMainDicContaint"));
    WorkingTimeContaint.render(<WorkingTimeDefault/>)
    document.getElementById("AdminWindowWorkingTimeReturningDivMainDicButtonDivDefault").style.backgroundColor="white";
}
const styleForWorkingTimeReturningDivMainDivButton={
    padding:"15px",
    fontSize:"14px"
}
export default WorkingTime;