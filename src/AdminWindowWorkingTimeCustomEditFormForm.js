import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { render } from "@testing-library/react";

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



function WorkingTimeEditCustomForm(data) {

    useEffect(()=>{
        document.getElementById(`EditMainDivTitlleInput${data.Id}`).value = data.Title;
        document.getElementById(`EditMainDivDateInput${data.Id}`).value = data.Date;
        document.getElementById(`WorkingTimeStartHourCustomEdit${data.Id}`).value=data.StartHours;
        document.getElementById(`WorkingTimeStartMinCustomEdit${data.Id}`).value=data.StartMin;
        document.getElementById(`WorkingTimeEndHourCustomEdit${data.Id}`).value=data.EndHours;
        document.getElementById(`WorkingTimeEndMinCustomEdit${data.Id}`).value=data.EndMin;
        if(data.IsDayOf)
        {
            OnClickOffOrOnButton(`CustomEdit${data.Id}`);
        }
    })


    
      

        var CustomDivWidth = "100%";
      
        return (
            

            <div id={`EditMainDiv${data.Id}`} style={{ marginLeft: "5%", marginRight: "5%" }}>
                <div id = {`EditMainDivTitlle${data.Id}`} class="input-group mb-3" style={{ width: `${CustomDivWidth}`, postion: "absolute" }}>
                    <div class="input-group-prepend" style={{ width: "27%" }}>
                        <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%", fontSize: "14px" }}>Title</span>
                    </div>
                    <input id= {`EditMainDivTitlleInput${data.Id}`} type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" ></input>
                </div>

                <div id = {`EditMainDivDate${data.Id}`} class="input-group mb-3" style={{ width: `${CustomDivWidth}` }}>
                    <div class="input-group-prepend" style={{ width: "27%" }}>
                        <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%", fontSize: "14px" }}>Date</span>
                    </div>
                    <input  id = {`EditMainDivDateInput${data.Id}`} type="date" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" ></input>
                </div>
                <div id = {`EditMainDivIsDayOf${data.Id}`} class="input-group mb-3" style={{ width: `${CustomDivWidth}` }}>
                    <div class="input-group-prepend" style={{ width: "27%" }}>
                        <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%", fontSize: "14px" }}>Is Day off</span>
                    </div>

                    <div  class="form-control" style={{ border: "none", paddingLeft: "5%" }} >
                        <div id={`RestaurentOnOfButtonCustomEdit${data.Id}`} style={{ display: "flex", width: "40%", border: "2px solid rgb(35,41,54,0.7)", borderRadius: "3px", padding: "0" }} onClick={() => {
                            OnClickOffOrOnButton(`CustomEdit${data.Id}`);
                        }}>
                            <div id={`RestaurentOpenCustomEdit${data.Id}`} style={{ width: "0", display: "none", backgroundColor: "rgb(35,41,54)", color: "white", fontSize: "14px", textAlign: "center" }}>Yes</div>
                            <div style={{ width: "30%" }}></div>
                            <div id={`RestaurentCloseCustomEdit${data.Id}`} style={{ width: "71%", backgroundColor: "rgb(35,41,54,0.7)", color: "white", fontSize: "14px", textAlign: "center" }}>No</div>
                        </div>
                    </div>

                    



                </div>

                <div class="input-group mb-3" id={`WorkingTimeStartCustomEdit${data.Id}`} style={{ width: `${CustomDivWidth}` }}>
                    <div class="input-group-prepend" style={{ width: "27%" }}>
                        <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%", fontSize: "14px" }}>Start Time</span>
                    </div>
                    <div class="form-control" style={{ border: "none", paddingLeft: "5%" }} >
                        <select id={`WorkingTimeStartHourCustomEdit${data.Id}`} name="WorkingTimeStartHourCustom" style={{ width: "20%", fontSize: "16px", marginRight: "2px" }} >
                            {InputTime(24, 1)}
                        </select>
                        <select id={`WorkingTimeStartMinCustomEdit${data.Id}`} name="WorkingTimeStartMinCustom" style={{ width: "20%", fontSize: "16px" }} >
                            {InputTime(60, 5)}
                        </select>
                    </div>
                </div>

                <div class="input-group mb-3" id={`WorkingTimeEndCustomEdit${data.Id}`} style={{ width: `${CustomDivWidth}` }}>
                    <div class="input-group-prepend" style={{ width: "27%" }}>
                        <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%", fontSize: "14px" }} >End Time</span>
                    </div>
                    <div class="form-control" style={{ border: "none", paddingLeft: "5%" }} >
                        <select id={`WorkingTimeEndHourCustomEdit${data.Id}`} name="WorkingTimeEndHourCustom" style={{ width: "20%", fontSize: "16px", marginRight: "2px" }} >
                            {InputTime(24, 1)}

                        </select>
                        <select id={`WorkingTimeEndMinCustomEdit${data.Id}`} name="WorkingTimeEndMinCustom" style={{ width: "20%", fontSize: "16px" }} >
                            {InputTime(60, 5)}
                        </select>
                    </div>
                </div>

                <div style={StyleForSveButtonWorkingTimeCustom} onClick={()=>{OnClickOnSvaeButtomOfEditCustomWorkingTime(data.Id,data.EditInMainArray)}}>Save</div>
        



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

function OnClickOnSvaeButtomOfEditCustomWorkingTime(Id,EditFunction) {
    console.log("yesssssssssssssssss");
    var Title = document.getElementById(`EditMainDivTitlleInput${Id}`).value;
    var Date = document.getElementById(`EditMainDivDateInput${Id}`).value;
    var StartHours = document.getElementById(`WorkingTimeStartHourCustomEdit${Id}`).value;
    var StartMin = document.getElementById(`WorkingTimeStartMinCustomEdit${Id}`).value;
    var EndHours = document.getElementById(`WorkingTimeEndHourCustomEdit${Id}`).value;
    var EndMin = document.getElementById(`WorkingTimeEndMinCustomEdit${Id}`).value; 
    var IsDayOf=false;
    if(document.getElementById(`RestaurentCloseCustomEdit${Id}`).style.display === "none")
    {
        IsDayOf=true;
        StartHours = "00";
        StartMin = "00";
        EndHours = "00";
        EndMin = "00";
       
    }
    EditFunction(Id,Title,Date,StartHours,StartMin,EndHours,EndMin,IsDayOf);
    const UpperDiv = ReactDOM.createRoot(document.getElementById("UpperDiv"));
    UpperDiv.render();
    



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
export default WorkingTimeEditCustomForm;
