import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "../Styling/AdminWindowSchedule.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faSave } from "@fortawesome/free-solid-svg-icons";
import InputClock from "../TimeInputClock/InputClock";
function ScheduleForm(data) {

    const Title = useRef();
    const StartTime = useRef();
    const EndTime = useRef();
    const Descrition = useRef();
    let OldStartTime ="-1";

    useEffect(() => {
        const ScheduleData = data.ScheduleData;
        if (ScheduleData == undefined) {
            document.getElementById("ButtonWorkingTimeCustomEdit").style.display = "none";
            document.getElementById("ButtonWorkingTimeCustomDelete").style.display = "none";
            document.getElementsByClassName("ClockIcon")[0].style.cursor="pointer";
            document.getElementsByClassName("ClockIcon")[1].style.cursor="pointer";
            document.getElementsByClassName("ClockIcon")[0].addEventListener("click",()=>{FocusTime(StartTime)} );
            document.getElementsByClassName("ClockIcon")[1].addEventListener("click",()=>{FocusTime(EndTime)} );
        }
        else {
            OldStartTime = data.ScheduleData.StartTime;
            document.getElementById("ButtonWorkingTimeCustomSave").style.display = "none";
            document.getElementById("ButtonWorkingTimeCustomDelete").style.display = "none";
            Title.current.value = ScheduleData.Title;
            StartTime.current.value = ScheduleData.StartTime;
            EndTime.current.value = ScheduleData.EndTime;
            Descrition.current.value = ScheduleData.Descrition;
            Title.current.disabled = true;
            StartTime.current.disabled = true;
            EndTime.current.disabled = true;
            Descrition.current.disabled = true;
        }

    })

    return (
        <div className="ScheduleFormComponent">

            <div className="ScheduleFormForm">
                <div class="input-group mb-3 " >
                    <div class="input-group-prepend AdminWindowCustomFormInputDivLabel" >
                        <span class="input-group-text AdminWindowCustomFormInputDivLabelTitle" id="inputGroup-sizing-default" >Title</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" ref={Title}></input>
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend AdminWindowCustomFormInputDivLabel">
                        <span class="input-group-text AdminWindowCustomFormInputDivLabelTitle">Start Time</span>
                    </div>
                    <input onFocus={()=>{FocusTime(StartTime)}} type="text" class="form-control" aria-label="Amount (to the nearest dollar)" ref={StartTime} />
                    <div class="input-group-append ClockIcon">
                        <span class="input-group-text"><FontAwesomeIcon icon={faClock} /></span>
                    </div>
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend AdminWindowCustomFormInputDivLabel">
                        <span class="input-group-text AdminWindowCustomFormInputDivLabelTitle">End Time</span>
                    </div>
                    <input onFocus={()=>{FocusTime(EndTime)}}  type="text" class="form-control" aria-label="Amount (to the nearest dollar)" ref={EndTime} />
                    <div  class="input-group-append ClockIcon">
                        <span  class="input-group-text"><FontAwesomeIcon icon={faClock} /></span>
                    </div>
                </div>

                <div class="input-group">
                    <div class="input-group-prepend AdminWindowCustomFormInputDivLabel">
                        <span class="input-group-text AdminWindowCustomFormInputDivLabelTitle">Descrition</span>
                    </div>
                    <textarea class="form-control" aria-label="With textarea" ref={Descrition}></textarea>
                </div>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div id="ButtonWorkingTimeCustomEdit" className="ButtonWorkingTimeCustom " onClick={() => { OnClickEditSchedule(Title, StartTime, EndTime, Descrition) }}>Edit</div>
                    <div id="ButtonWorkingTimeCustomSave" className="ButtonWorkingTimeCustom" onClick={() => {SaveSchedule(data.EditFunction,data.day,OldStartTime,Title,StartTime,EndTime,Descrition,data.setData) }}>Save</div>
                    <div id="ButtonWorkingTimeCustomDelete" className="ButtonWorkingTimeCustom CancellButtonWorkingTimeCustom" onClick={() => {DeleteSchedule(data.EditFunction,data.day,OldStartTime,data.setData)}}>Delete</div>
                    <div className="ButtonWorkingTimeCustom CancellButtonWorkingTimeCustom" onClick={() => { CancelScheduleForm() }}>cancel</div>
                </div>

            </div>

        </div>

    )
}


function SaveSchedule(EditFunction,day,OldStartTime,Title,StartTime,EndTime,Descrition,setData)
{
    console.log("hello");
    const Object = {
        Title:Title.current.value,
        StartTime:StartTime.current.value,
        EndTime:EndTime.current.value,
        Descrition:Descrition.current.value
    }

    EditFunction(day,OldStartTime,Object,setData);
    CancelScheduleForm();


}
function OnClickEditSchedule(Title, StartTime, EndTime, Descrition) {
    document.getElementById("ButtonWorkingTimeCustomEdit").style.display = "none";
    document.getElementById("ButtonWorkingTimeCustomSave").style.display = "block";
    document.getElementById("ButtonWorkingTimeCustomDelete").style.display = "block";
    document.getElementsByClassName("ClockIcon")[0].style.cursor="pointer";
    document.getElementsByClassName("ClockIcon")[1].style.cursor="pointer";
    document.getElementsByClassName("ClockIcon")[0].addEventListener("click",()=>{FocusTime(StartTime)} );
    document.getElementsByClassName("ClockIcon")[1].addEventListener("click",()=>{FocusTime(EndTime)} );
    Title.current.disabled = false;
    StartTime.current.disabled = false;
    EndTime.current.disabled = false;
    Descrition.current.disabled = false;
}


function CancelScheduleForm() {
    const UpperDiv = ReactDOM.createRoot(document.getElementById("UpperDiv"));
    UpperDiv.render();
}

function FocusTime(RefTimeComponent)
{
    let InitialHrs = "00";
    let InitialMin = "00";
    if(RefTimeComponent.current.value!="")
    {
       InitialHrs = RefTimeComponent.current.value.substring(0,2);
       InitialMin = RefTimeComponent.current.value.substring(3);

    }
 

    const UpperUpperDiv = ReactDOM.createRoot(document.getElementById("UpperUpperDiv"));
    UpperUpperDiv.render(<InputClock OnCancel={OnCncelClock} OnDone={OnDoneClock} Id={RefTimeComponent} InitialTime={RefTimeComponent.current.value} InitialHrs={InitialHrs} InitialMin={InitialMin}/>);

}

function OnCncelClock()
{
    const UpperUpperDiv = ReactDOM.createRoot(document.getElementById("UpperUpperDiv"));
    UpperUpperDiv.render();

}

function OnDoneClock(Id,Hrs,Min)
{
    Id.current.value=`${Hrs}:${Min}`;
    OnCncelClock();
}

function DeleteSchedule(EditFunction,day,OldStartTime,setData)
{
    EditFunction(day,OldStartTime,{},setData);
    CancelScheduleForm();

}
export default ScheduleForm;