import React from "react";
import "../Styling/AdminWindowDefaultWorkingTime.css";
// import "../Styling/AdminWindowSeatMap.css"
import "bootstrap/dist/css/bootstrap.min.css";
import OneDay from "./OneDay";


let ArrayOfDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
let ShortArrayOfDays = [" Mon.","Tues.","Wed.","Thurs.","Fri.","Sat.","Sun."];




function InsertAllDaysDefaultWorkingTmeForm()
{
    let content = [];
    for (var i = 0; i < ArrayOfDays.length; i++) {
        let background = false;
        if(i%2!=0)
        {
            background = true;
        }
        
        content.push(<OneDay Name = {ArrayOfDays[i]} ShortName = {ShortArrayOfDays[i]} BackgroundColor = {background}/>);
    }
    return content;
}

class WorkingTimeDefault extends React.Component
{
    


    render()
    {
        return(
            <div id="AdminWindowDefaultWorkingTimeReturnDiv">
                <div className="AdminWindowDefaultWorkingTimeOneDay">
                <div className="AdminWindowDefaultWorkingTimeOneDayDays">Days</div>
                <div className="AdminWindowDefaultWorkingTimeOneDayStartTime" >Start Time</div>
                <div  className="AdminWindowDefaultWorkingTimeOneDayStartTime">End Time	</div>
                <div className="AdminWindowDefaultWorkingTimeOneIsDayOff">Is Day off</div>
                </div>
                {InsertAllDaysDefaultWorkingTmeForm()}
                <div className="SveButtonDefaultWorkingTime" onClick={OnClickOnSvaeButtomOfDefaultWorkingTime}>Save</div>
            </div>
        )
    }
}




function OnClickOnSvaeButtomOfDefaultWorkingTime() {
    document.getElementById("MessageforSuccesMessage").innerHTML = "Working Time Updated successfully All changes made to the working time have been saved.";
    // document.getElementById("MessageforSucces").style.color="red";
    document.getElementById("MessageforSuccesSuccesIcon").style.display="inline";
    document.getElementById("MessageforSuccesRejectIcon").style.display="none";



}
export default WorkingTimeDefault;
