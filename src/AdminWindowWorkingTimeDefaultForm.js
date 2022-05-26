import React from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import OneDay from "./AdminWindowWorkingTimeOneDay";
let ArrayOfDays = [
'Monday',
'Tuesday',
'Wednesday',
'Thursday',
'Friday',
'Saturday',
'Sunday']




if( window.screen.width<512)
{
    ArrayOfDays = [" Mon.","Tues.","Wed.","Thurs.","Fri.","Sat.","Sun."]
}

function InsertAllDaysDefaultWorkingTmeForm()
{
    let content = [];
    for (var i = 0; i < ArrayOfDays.length; i++) {
        let background = false;
        if(i%2!=0)
        {
            background = true;
        }
        
        content.push(<OneDay Name = {ArrayOfDays[i]} BackgroundColor = {background}/>);
    }
    return content;}

class WorkingTimeDefault extends React.Component
{
    


    render()
    {
        return(
            <div style={{padding:"20px"}}>
                <div style={{ display: "flex", borderBottom: "1px solid rgb(35,41,54,0.15)"}}>
                <div style={{ width: "23%", padding: "0.5%",fontSize:"14px" }}>Day of Week</div>
                <div style={{ width: "35%", padding: "0.5%" }}>Start Time</div>
                <div style={{ width: "35%", padding: "0.5%" }}>Start Time	</div>
                <div style={{ width: "7%", padding: "0.5%" }}>Is Day off</div>
                </div>
                {InsertAllDaysDefaultWorkingTmeForm()}
                <div style={StyleForSveButtonWorkingTimeDefault} onClick={OnClickOnSvaeButtomOfDefaultWorkingTime}>Save</div>
            </div>
        )
    }
}

const StyleForSveButtonWorkingTimeDefault = {
    padding:"10px",
    width:"100px",
    fontSize:"18px",
    backgroundColor:"rgb(35,41,54)",
    borderRadius:"3px",
    color:"white",
    textAlign:"center",
    marginTop:"20px",
    cursor:"pointer"
    
}


function OnClickOnSvaeButtomOfDefaultWorkingTime() {
    document.getElementById("MessageforSuccesMessage").innerHTML = "Working Time Updated successfully All changes made to the working time have been saved.";
    // document.getElementById("MessageforSucces").style.color="red";
    document.getElementById("MessageforSuccesSuccesIcon").style.display="inline";
    document.getElementById("MessageforSuccesRejectIcon").style.display="none";



}
export default WorkingTimeDefault;
