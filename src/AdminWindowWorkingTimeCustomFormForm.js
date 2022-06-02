import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import WorkingTimeCustomMonthDetailsOneDiv from "./AdminWindowWorkingTimeCustomMonthDetailOneDiv"

function InputTime(upto, difference) {
    let content = [];
    for (var i = 0; i < upto; i = i + difference) {
        let WritenValue = `${i}`;
        if (i < 10) {
            WritenValue = `0${i}`;
        }
        content.push(<option value={WritenValue}>{WritenValue}</option>);
    }
    return content;
};

function WorkingTimeCustomForm(data) {
    var CustomDivWidth;
    let WindowWidth = window.screen.width;

    if (WindowWidth >= 1024) {
        CustomDivWidth = "30%";
    } else if (WindowWidth >= 512) {
        CustomDivWidth = "50%";
    } else {
        CustomDivWidth = "75%";
    }

    return (

        <div  style={{ marginLeft: "5%", marginRight: "5%" }}>
            <div class="input-group mb-3" style={{ width: `${CustomDivWidth}` , postion:"absolute" }}>
                <div class="input-group-prepend" style={{ width: "27%" }}>
                    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%", fontSize: "14px" }}>Title</span>
                </div>
                <input id="WorkingTimeCustomTitleInput" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
            </div>

            <div class="input-group mb-3" style={{ width: `${CustomDivWidth}` }}>
                <div class="input-group-prepend" style={{ width: "27%" }}>
                    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%", fontSize: "14px" }}>Date</span>
                </div>
                <input id="WorkingTimeCustomDateInput" type="date" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
            </div>
            <div class="input-group mb-3" style={{ width: `${CustomDivWidth}` }}>
                <div class="input-group-prepend" style={{ width: "27%" }}>
                    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%", fontSize: "14px" }}>Is Day off</span>
                </div>

                <div class="form-control" style={{ border: "none", paddingLeft: "5%" }}>
                    <div id="RestaurentOnOfButtonCustom" style={{ display: "flex", width: "40%", border: "2px solid rgb(35,41,54,0.7)", borderRadius: "3px", padding: "0" }} onClick={() => {
                        OnClickOffOrOnButton("Custom");
                    }}>
                        <div id="RestaurentOpenCustom" style={{ width: "0", display: "none", backgroundColor: "rgb(35,41,54)", color: "white", fontSize: "14px", textAlign: "center" }}>Yes</div>
                        <div style={{ width: "30%" }}></div>
                        <div id="RestaurentCloseCustom" style={{ width: "71%", backgroundColor: "rgb(35,41,54,0.7)", color: "white", fontSize: "14px", textAlign: "center" }}>No</div>
                    </div>
                </div>


            </div>

            <div class="input-group mb-3" id="WorkingTimeStartCustom" style={{ width: `${CustomDivWidth}` }}>
                <div class="input-group-prepend" style={{ width: "27%" }}>
                    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%", fontSize: "14px" }}>Start Time</span>
                </div>
                <div class="form-control" style={{ border: "none", paddingLeft: "5%" }} >
                    <select id="WorkingTimeStartHourCustom" name="WorkingTimeStartHourCustom" style={{ width: "20%", fontSize: "16px", marginRight: "2px" }}>
                        {InputTime(24, 1)}
                    </select>
                    <select id="WorkingTimeStartMinCustom" name="WorkingTimeStartMinCustom" style={{ width: "20%", fontSize: "16px" }}>
                        {InputTime(60, 5)}
                    </select>
                </div>
            </div>

            <div class="input-group mb-3" id="WorkingTimeEndCustom" style={{ width: `${CustomDivWidth}` }}>
                <div class="input-group-prepend" style={{ width: "27%" }}>
                    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%", fontSize: "14px" }}>End Time</span>
                </div>
                <div class="form-control" style={{ border: "none", paddingLeft: "5%" }} >
                    <select id="WorkingTimeEndHourCustom" name="WorkingTimeEndHourCustom" style={{ width: "20%", fontSize: "16px", marginRight: "2px" }}>
                        {InputTime(24, 1)}

                    </select>
                    <select id="WorkingTimeEndMinCustom" name="WorkingTimeEndMinCustom" style={{ width: "20%", fontSize: "16px" }}>
                        {InputTime(60, 5)}
                    </select>
                </div>
            </div>

            <div style={StyleForSveButtonWorkingTimeCustom} onClick={()=>{OnClickOnSvaeButtomOfCustomWorkingTime(data)}}>Save</div>



        </div>

    )
}

const StyleForSveButtonWorkingTimeCustom = {
    padding: "5px",
    width: "80px",
    fontSize: "18px",
    backgroundColor: "rgb(35,41,54)",
    borderRadius: "3px",
    color: "white",
    textAlign: "center",
    marginTop: "40px",
    cursor: "pointer"

}

function OnClickOnSvaeButtomOfCustomWorkingTime(data) {
    document.getElementById("MessageforSuccesMessage").innerHTML = "Working Time Updated successfully All changes made to the working time have been saved.";
    // document.getElementById("MessageforSucces").style.color="red";
    document.getElementById("MessageforSuccesSuccesIcon").style.display = "inline";
    document.getElementById("MessageforSuccesRejectIcon").style.display = "none";
    var Title = document.getElementById("WorkingTimeCustomTitleInput").value;
    var Date = document.getElementById("WorkingTimeCustomDateInput").value;
    var StartHours = document.getElementById("WorkingTimeStartHourCustom").value;
    var StartMin = document.getElementById("WorkingTimeStartMinCustom").value;
    var EndHours = document.getElementById("WorkingTimeEndHourCustom").value;
    var EndMin = document.getElementById("WorkingTimeEndMinCustom").value;
    document.getElementById("WorkingTimeCustomTitleInput").value="";
    document.getElementById("WorkingTimeCustomDateInput").value="";

    var IsDayOf=false;
    if(document.getElementById(`RestaurentCloseCustom`).style.display === "none")
    {
        IsDayOf = true;
        StartHours = "00";
        StartMin = "00";
        EndHours = "00";
        EndMin = "00";
        OnClickOffOrOnButton("Custom");
    }
    
    document.getElementById("WorkingTimeStartHourCustom").value="00";
    document.getElementById("WorkingTimeStartMinCustom").value="00";
    document.getElementById("WorkingTimeEndHourCustom").value="00";
    document.getElementById("WorkingTimeEndMinCustom").value="00";

    data.OnSubmit(Title,Date,IsDayOf,StartHours,StartMin,EndHours,EndMin);


}


function OnClickOnCheckBoxInCustomThisMonthDetails(Id,IdOfCheckBox) {
    var value = document.getElementById(`${IdOfCheckBox}Input`).value;
    console.log(value);
    if(value=="on")
    {
     document.getElementById(IdOfCheckBox).style.backgroundColor="rgb(35,41,54)"; 
     document.getElementById(`${IdOfCheckBox}Input`).value="of";
     console.log(document.getElementById(`${IdOfCheckBox}Input`).value);
 
    }
 
    else
    {
     document.getElementById(IdOfCheckBox).style.backgroundColor=""; 
     document.getElementById(`${IdOfCheckBox}Input`).value="on";
    }
    
 }
function OnClickOffOrOnButton(Name) {


    if (document.getElementById(`RestaurentOpen${Name}`).style.display === "none") {

        document.getElementById(`WorkingTimeStart${Name}`).style.display = "none";
        document.getElementById(`WorkingTimeEnd${Name}`).style.display = "none";



        document.getElementById(`RestaurentClose${Name}`).style.display = "none";
        document.getElementById(`RestaurentClose${Name}`).style.width = "0";
        document.getElementById(`RestaurentOpen${Name}`).style.display = "block"
        document.getElementById(`RestaurentOpen${Name}`).style.width = "70%";
        document.getElementById(`RestaurentOnOfButton${Name}`).style.borderColor = "rgb(35,41,54)";
    }
    else {
        document.getElementById(`RestaurentOpen${Name}`).style.display = "none";
        document.getElementById(`RestaurentOpen${Name}`).style.width = "0";
        document.getElementById(`RestaurentClose${Name}`).style.display = "block"
        document.getElementById(`RestaurentClose${Name}`).style.width = "71%";
        document.getElementById(`RestaurentOnOfButton${Name}`).style.borderColor = "rgb(35,41,54,0.7)";
        document.getElementById(`WorkingTimeStart${Name}`).style.display = "flex";
        document.getElementById(`WorkingTimeEnd${Name}`).style.display = "flex";
        document.getElementById(`WorkingTimeStartHour${Name}`).value = "00";
        document.getElementById(`WorkingTimeStartMin${Name}`).value = "00";
        document.getElementById(`WorkingTimeEndHour${Name}`).value = "00";
        document.getElementById(`WorkingTimeEndMin${Name}`).value = "00";

    }
}


const styleOFOptionInWorkingTimeCustomForm = {
    display: "flex",

}

const styleOFOptionTitleInWorkingTimeCustomForm = {
    width: "5%",
    textAlign: "right"
}

const styleOFOptionInputInWorkingTimeCustomForm = {

    textAlign: "left",
    paddingLeft: "2%",
    fontSize: "16px",
    color: "rgb(35,41,54,0.8)",

}
export default WorkingTimeCustomForm;
