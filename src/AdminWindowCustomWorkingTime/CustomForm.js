import React from "react";
// import "../Styling/AdminWindowCustomWorkingTime.css";




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
  
    return (

        <div className="AdminWindowCustomFormInputDiv" >
            <div className="input-group mb-3 " >
                <div class="input-group-prepend AdminWindowCustomFormInputDivLabel" >
                    <span class="input-group-text AdminWindowCustomFormInputDivLabelTitle" id="inputGroup-sizing-default" >Title</span>
                </div>
                <input id="WorkingTimeCustomTitleInput" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
            </div>

            <div class="input-group mb-3 "  >
                <div class="input-group-prepend AdminWindowCustomFormInputDivLabel" >
                    <span class="input-group-text AdminWindowCustomFormInputDivLabelTitle" id="inputGroup-sizing-default" >Date</span>
                </div>
                <input id="WorkingTimeCustomDateInput" type="date" class="form-control" aria-label="Default WorkingTimeCustomDateInput" aria-describedby="inputGroup-sizing-default"></input>
            </div>
            <div class="input-group mb-3 ">
                <div class="input-group-prepend AdminWindowCustomFormInputDivLabel">
                    <span class="input-group-text AdminWindowCustomFormInputDivLabelTitle" id="inputGroup-sizing-default" >Is Day off</span>
                </div>

                <div class="form-control CustomWorkingTimeTimeInput" >
                    <div id="RestaurentOnOfButtonCustom" className="RestaurentOnOfButtonCustom"  onClick={() => {
                        OnClickOffOrOnButton("Custom");
                    }}>
                        <div id="RestaurentOpenCustom" className="RestaurentOpenCustom" >Yes</div>
                        <div style={{ width: "30%" }}></div>
                        <div id="RestaurentCloseCustom" className="RestaurentCloseCustom" >No</div>
                    </div>
                </div>


            </div>

            <div class="input-group mb-3 " id="WorkingTimeStartCustom" >
                <div class="input-group-prepend AdminWindowCustomFormInputDivLabel" >
                    <span class="input-group-text AdminWindowCustomFormInputDivLabelTitle" id="inputGroup-sizing-default" >Start Time</span>
                </div>
                <div class="form-control CustomWorkingTimeTimeInput"  >
                    <select id="WorkingTimeStartHourCustom" name="WorkingTimeStartHourCustom" className="CustomWorkingTimeTimeInputHrs" >
                        {InputTime(24, 1)}
                    </select>
                    <select id="WorkingTimeStartMinCustom" name="WorkingTimeStartMinCustom" className="CustomWorkingTimeTimeInputMin">
                        {InputTime(60, 5)}
                    </select>
                </div>
            </div>

            <div class="input-group mb-3 " id="WorkingTimeEndCustom" >
                <div class="input-group-prepend AdminWindowCustomFormInputDivLabel" >
                    <span class="input-group-text AdminWindowCustomFormInputDivLabelTitle" id="inputGroup-sizing-default" >End Time</span>
                </div>
                <div class="form-control CustomWorkingTimeTimeInput"  >
                    <select id="WorkingTimeEndHourCustom" name="WorkingTimeEndHourCustom"  className="CustomWorkingTimeTimeInputHrs">
                        {InputTime(24, 1)}

                    </select>
                    <select id="WorkingTimeEndMinCustom" name="WorkingTimeEndMinCustom" className="CustomWorkingTimeTimeInputMin" >
                        {InputTime(60, 5)}
                    </select>
                </div>
            </div>

            <div id = "ButtonWorkingTimeCustom" className="ButtonWorkingTimeCustom" onClick={()=>{OnClickOnSvaeButtomOfCustomWorkingTime(data)}}>Save</div>



        </div>

    )
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

    const ElementDisplay =document.getElementById(`RestaurentOpen${Name}`).style.display;

    if ( ElementDisplay == "" || ElementDisplay=="none") {

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


export default WorkingTimeCustomForm;
