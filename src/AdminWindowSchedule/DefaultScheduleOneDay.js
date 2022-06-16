import React, { useEffect, useState, useRef } from "react";
import "../Styling/AdminWindowSchedule.css";
import SchedleForm from "./ScheduleForm";
import ReactDOM from "react-dom/client";
import {  faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const tempArray = [{
    StartTime: "09:30",
    EndTime: "10:30",
    Title: "Schedule",
    Descrition: "This Is Schedule For Morning Time Thanks For Check This Is Schedule For Morning Time Thanks For Check srihjrthf",

},
{
    StartTime: "10:30",
    EndTime: "11:30",
    Title: "Schedule",
    Descrition: "This Is Schedule For Morning Time Thanks For Check"
},
{
    StartTime: "11:30",
    EndTime: "12:30",
    Title: "Schedule",
    Descrition: "This Is Schedule For Morning Time Thanks For Check"
},
{
    StartTime: "12:30",
    EndTime: "13:30",
    Title: "Schedule",
    Descrition: "This Is Schedule For Morning Time Thanks For Check"
},
{
    StartTime: "13:30",
    EndTime: "14:30",
    Title: "Schedule",
    Descrition: "This Is Schedule For Morning Time Thanks For Check"
}];




function OneDay(data) {
    const [day, SetDay] = useState(data.Day);
    const [schedule ,setSchedule] =useState(tempArray.sort(SortingData)); 
    const [parentEvent ,setparentEvent] =useState(true); 
    const inputDay = useRef();
    const inputDayInput = useRef();

    console.log(parentEvent);


  
    useEffect(() => {
        // SetDay("Monday");
        // setSchedule(tempArray.sort(SortingData));


        if (data.From == "Custom") {

            
            inputDay.current.innerHTML = new Date(`${day}`).toDateString();
            inputDay.current.style.cursor = "auto";
            inputDay.current.ondblclick = () => { 


                if(parentEvent)
                {
                    ClickOnDay(day,SetDay, inputDayInput,inputDay,setparentEvent,data.SetSchedule,data.ScheduleId);
                }
                
            }
            
            if (day == "") {
                inputDay.current.ondblclick();
            }
            else
            {
                data.OnDateChange(day,data.ScheduleId);
            }
           

        }
        else {
            inputDay.current.innerHTML = day;
            inputDay.current.style.cursor="Default";

        }
    })

    return (
        <div className="ScheduleDefaultDays">
            <div id={`${data.ScheduleId}}InputDiv`}  ref={inputDay} className="ScheduleDefaultDay">
            </div>
            <div className="ScheduleDefaultDaySchedule">
                {schedule.map((object) => { return OneSchedule(object, data.Day, setSchedule) })}
            </div>
            <div className="ButtonForAddSchedule" onClick={() => { ClickOnSchedule(undefined, data.Day, setSchedule) }}>Add Schedule</div>
        </div>
    )

}

function OneSchedule(data, day, setData) {

    const StyleTitle = {
        color: generateDarkColorHex(),
        fontWeight: "500"
    }

    const StyleTiming = {
        backgroundColor: generateLightColorHex(),
        fontSize: "16px",
        fontWeight: "600",

    }
    return (
        <div className="OneSchedule" onClick={() => { ClickOnSchedule(data, day, setData) }}>
            <div className="OneScheduleTiming" style={StyleTiming}>{data.StartTime}-{data.EndTime}</div>
            <div class="OneScheduleData">
                <div class="OneScheduleTitle" style={StyleTitle}>{data.Title}</div>
                <div className="OneScheduleDescription">{ShortDescrition(data.Descrition)}</div>
            </div>
        </div>
    )
}

function generateDarkColorHex() {
    let color = "#";
    for (let i = 0; i < 3; i++)
        color += ("0" + Math.floor(Math.random() * Math.pow(16, 2) / 2).toString(16)).slice(-2);
    return color;
}

function generateLightColorHex() {
    let color = "#";
    for (let i = 0; i < 3; i++)
        color += ("0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
    return color;
}

function ShortDescrition(Data) {
    if (Data.length <= 60) {
        return Data;
    }
    else {
        return Data.substring(0, 100) + " .....";
    }
}

function ClickOnSchedule(data, day, setData) {
    const UpperDiv = ReactDOM.createRoot(document.getElementById("UpperDiv"));
    UpperDiv.render(<SchedleForm ScheduleData={data} EditFunction={EditScheduleData} day={day} setData={setData} />);
}

function ClickOnDay(day,SetDay, inputDayInput,inputDay,setparentEvent,SetSchedule,ScheduleId) {
    
    setparentEvent(event=> !event);
    const InputDate = ReactDOM.createRoot(inputDay.current);
    InputDate.render(<InputDateComponent inputDayInput={inputDayInput} SetDay={SetDay} day={day} setparentEvent={setparentEvent} SetSchedule={SetSchedule} ScheduleId={ScheduleId}/>);

}

function InputDateComponent(data) {
    useEffect(() => {
        data.inputDayInput.current.value = data.day;
        data.inputDayInput.current.onchange = () => { OnChangeDate(data.inputDayInput.current.value, data.SetDay,data.setparentEvent) };
    })
    return (
    <div className="InputWindowDiv">
        <input ref={data.inputDayInput} type="date" class="form-control" aria-label="Amount (to the nearest dollar)" />
        <FontAwesomeIcon className="InputWindowDivClose" icon={faTrash} onClick={()=>{clickOnDelete(data.SetSchedule,data.ScheduleId)}} />
    </div>)
}


function clickOnDelete(SetSchedule,ScheduleId)
{
    console.log(ScheduleId);
    SetSchedule(Element => Element.filter(item => item.ScheduleId != ScheduleId));
  

}

function OnChangeDate(dayValue, SetDay,setparentEvent) {
    
    SetDay(dayValue);
    setparentEvent(event=> !event);

}

function EditScheduleData(Day, OldStartTime, data, setData) {
    if (OldStartTime == "-1") {
        setData(Element => [...Element, data].sort(SortingData));

    }

    else if (Object.keys(data).length == 0) {
        setData(Element => Element.filter(item => item.StartTime != OldStartTime));

    }

    else
    {
        setData(Element => Element.map
            (item => {
                if(item.StartTime == OldStartTime) 
                return data;

                else
                return item
            }).sort(SortingData));
    }

}

function SortingData(a, b) {
    return (a.StartTime.substring(0, 2) * 60 + a.StartTime.substring(3)) - (b.StartTime.substring(0, 2) * 60 + b.StartTime.substring(3));
}


export default OneDay;