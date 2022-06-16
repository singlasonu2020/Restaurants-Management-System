import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
// import "../Styling/AdminWindowCustomWorkingTime.css"


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
            console.log("isdayoff");
            OnClickOffOrOnButton(`CustomEdit${data.Id}`);
        }
    })


    
      

        var CustomDivWidth = "100%";
      
        return (
            

            <div id={`EditMainDiv${data.Id}`}>
                <div id = {`EditMainDivTitlle${data.Id}`} class="input-group mb-3 " >
                    <div class="input-group-prepend AdminWindowCustomFormInputDivLabel" >
                        <span class="input-group-text AdminWindowCustomFormInputDivLabelTitle" id="inputGroup-sizing-default" >Title</span>
                    </div>
                    <input id= {`EditMainDivTitlleInput${data.Id}`} type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" ></input>
                </div>

                <div id = {`EditMainDivDate${data.Id}`} class="input-group mb-3" >
                    <div class="input-group-prepend AdminWindowCustomFormInputDivLabel" >
                        <span class="input-group-text AdminWindowCustomFormInputDivLabelTitle" id="inputGroup-sizing-default" >Date</span>
                    </div>
                    <input  id = {`EditMainDivDateInput${data.Id}`}  type="date" class="form-control WorkingTimeCustomDateInput" aria-label="Default" aria-describedby="inputGroup-sizing-default" ></input>
                </div>
                <div id = {`EditMainDivIsDayOf${data.Id}`} class="input-group mb-3" >
                    <div class="input-group-prepend AdminWindowCustomFormInputDivLabel" >
                        <span class="input-group-text AdminWindowCustomFormInputDivLabelTitle" id="inputGroup-sizing-default">Is Day off</span>
                    </div>

                    <div  class="form-control CustomWorkingTimeTimeInput"  >
                        <div id={`RestaurentOnOfButtonCustomEdit${data.Id}`} className="RestaurentOnOfButtonCustom" onClick={() => {
                            OnClickOffOrOnButton(`CustomEdit${data.Id}`);
                        }}>
                            <div id={`RestaurentOpenCustomEdit${data.Id}`} className="RestaurentOpenCustom" >Yes</div>
                            <div style={{ width: "30%" }}></div>
                            <div id={`RestaurentCloseCustomEdit${data.Id}`} className="RestaurentCloseCustom" >No</div>
                        </div>
                    </div>

                    



                </div>

                <div class="input-group mb-3" id={`WorkingTimeStartCustomEdit${data.Id}`} >
                    <div class="input-group-prepend AdminWindowCustomFormInputDivLabel" >
                        <span class="input-group-text AdminWindowCustomFormInputDivLabelTitle" id="inputGroup-sizing-default" >Start Time</span>
                    </div>
                    <div class="form-control CustomWorkingTimeTimeInput" >
                        <select id={`WorkingTimeStartHourCustomEdit${data.Id}`} name="WorkingTimeStartHourCustom" className="CustomWorkingTimeTimeInputHrs" >
                            {InputTime(24, 1)}
                        </select>
                        <select id={`WorkingTimeStartMinCustomEdit${data.Id}`} name="WorkingTimeStartMinCustom" className="CustomWorkingTimeTimeInputMin" >
                            {InputTime(60, 5)}
                        </select>
                    </div>
                </div>

                <div class="input-group mb-3" id={`WorkingTimeEndCustomEdit${data.Id}`} >
                    <div class="input-group-prepend AdminWindowCustomFormInputDivLabel" >
                        <span class="input-group-text AdminWindowCustomFormInputDivLabelTitle" id="inputGroup-sizing-default"  >End Time</span>
                    </div>
                    <div class="form-control CustomWorkingTimeTimeInput"  >
                        <select id={`WorkingTimeEndHourCustomEdit${data.Id}`} name="WorkingTimeEndHourCustom" className="CustomWorkingTimeTimeInputHrs" >
                            {InputTime(24, 1)}

                        </select>
                        <select id={`WorkingTimeEndMinCustomEdit${data.Id}`} name="WorkingTimeEndMinCustom" className="CustomWorkingTimeTimeInputMin" >
                            {InputTime(60, 5)}
                        </select>
                    </div>
                </div>

                <div style={{display:"flex"}}>
                <div className="ButtonWorkingTimeCustom" onClick={()=>{OnClickOnSvaeButtomOfEditCustomWorkingTime(data.Id,data.EditInMainArray)}}>Save</div>
                <div className="ButtonWorkingTimeCustom CancellButtonWorkingTimeCustom" onClick={()=>{OnClickOncancelButtomOfEditCustomWorkingTime(data.Id,data.EditInMainArray)}}>cancel</div>

                </div>
            </div>

        )
 
    
}


function OnClickOncancelButtomOfEditCustomWorkingTime() {
    const UpperDiv = ReactDOM.createRoot(document.getElementById("UpperDiv"));
    UpperDiv.render(<div/>);
    
}

function OnClickOnSvaeButtomOfEditCustomWorkingTime(Id,EditFunction) {
    
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

    console.log(document.getElementById(`RestaurentOpen${Name}`).style.display);

    if (document.getElementById(`RestaurentOpen${Name}`).style.display == "") {
        
        console.log("hello1");
        document.getElementById(`WorkingTimeStart${Name}`).style.display = "none";
        document.getElementById(`WorkingTimeEnd${Name}`).style.display = "none";
        document.getElementById(`RestaurentClose${Name}`).style.display = "none";
        document.getElementById(`RestaurentClose${Name}`).style.width = "0";
        document.getElementById(`RestaurentOpen${Name}`).style.display = "block"
        document.getElementById(`RestaurentOpen${Name}`).style.width = "70%";
        document.getElementById(`RestaurentOnOfButton${Name}`).style.borderColor = "rgb(35,41,54)";
    }
    else {
        console.log("hello2");
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



export default WorkingTimeEditCustomForm;
