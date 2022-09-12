import React, { useState, useEffect, useRef,useContext  } from "react";
import ReactDOM from "react-dom/client";
import "../Styling/AdminWindowNewReservation.css";
import DatePicker from "../DatePicker/DatePick";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputClock from "../TimeInputClock/InputClock";
import NewReservationData from "./UseContext";

function ReservationDetails() {

    const data = useContext(NewReservationData);

    
    const [date, SetDate] = useState();
    const FromTime = useRef();
    const ToTime = useRef();
    const NOG = useRef();
    const FT=useRef();

    const ReservationData = data.ReservationData;

    const SetData=()=>{
        return(
            {
                Date:date,
                FromTime:FromTime.current.value,
                ToTime:ToTime.current.value,
                NOG:NOG.current.value,
                FT:FT.current.checked
            }
        )
    }

    data.SetReservatioDataFunction(SetData);

    useEffect(() => {
        PutDate(date)
        if (ReservationData != undefined) {
            SetDate(ReservationData.Date);
            FromTime.current.value = ReservationData.FromTime;
            ToTime.current.value = ReservationData.ToTime;
            NOG.current.value = ReservationData.NOG;
            FT.current.checked = ReservationData.FT;

            
        }
    })

    return (
        <div className="ReservationDetails">
            <div style={{ marginTop: "20px" }}>
                <div className="LabelSelectDate">Select Date</div>
                <div id="DateComponenrRD" className="DateComponenrRD">
                    <input id="InputDateComponenrRD" className="InputDateComponenrRD" type="text" name="fname" placeholder="Select Date" />
                    <div className="CalenderIconDateComponenrRD" onClick={() => { onfocusDate(date, SetDate) }} ><FontAwesomeIcon icon={faCalendarAlt} /></div>
                </div>
            </div>

            <div style={{ marginTop: "20px" }}>
                <div className="LabelSelectDate">Select From Time</div>
                <div id="DateComponenrRD" className="DateComponenrRD">
                    <input id="InputFromTime" ref={FromTime} className="InputDateComponenrRD" type="text" name="fname" placeholder="Select From Time" />
                    <div className="CalenderIconDateComponenrRD" onClick={() => { onfocusTime(FromTime) }} ><FontAwesomeIcon icon={faClock} /></div>
                </div>
            </div>

            <div style={{ marginTop: "20px" }}>
                <div className="LabelSelectDate">Select To Time</div>
                <div id="DateComponenrRD" className="DateComponenrRD">
                    <input id="InputToTime" ref={ToTime} className="InputDateComponenrRD" type="text" name="fname" placeholder="Select To Time" />
                    <div className="CalenderIconDateComponenrRD" onClick={() => { onfocusTime(ToTime) }} ><FontAwesomeIcon icon={faClock} /></div>
                </div>
            </div>

            <div style={{ marginTop: "20px" }}>
                <div className="LabelSelectDate">Number of Guest</div>
                <div className="DateComponenrRD">
                    <input ref={NOG} className="InputNumberComponenrRD" type="number" name="fname" placeholder="Number of Guest" min="1" max="100" />
                </div>
            </div>

            <div style={{ marginTop: "20px" }}>
                <input ref={FT} type="checkbox" id="" className="FlexibleWithTime" name="vehicle1"  value="true"  />
                <label for="vehicle1" className="FlexibleWithTimeLabel">Flexible with Time</label><br />
            </div>



        </div>
    )

}

function onfocusTime(RefTimeComponent) {
    let InitialHrs = "00";
    let InitialMin = "00";
    if (RefTimeComponent.current.value != "") {
        InitialHrs = RefTimeComponent.current.value.substring(0, 2);
        InitialMin = RefTimeComponent.current.value.substring(3);

    }

    const UpperUpperDiv = ReactDOM.createRoot(document.getElementById("UpperUpperDiv"));
    UpperUpperDiv.render(<InputClock OnCancel={CancelDtePicker} OnDone={OnDoneClock} Id={RefTimeComponent} InitialTime={RefTimeComponent.current.value} InitialHrs={InitialHrs} InitialMin={InitialMin} />);

}

function onfocusDate(date, SetDate) {
    if (date == undefined) {
        SetDate(new Date());
        const root = ReactDOM.createRoot(document.getElementById("UpperUpperDiv"));
        root.render(<DatePicker Date={new Date()} clear={onfocusDate} SetDate={SetDate} cancel={CancelDtePicker} color="rgb(189,166,59)" />);
    }
    else {
        const root = ReactDOM.createRoot(document.getElementById("UpperUpperDiv"));
        root.render(<DatePicker Date={date} clear={onfocusDate} SetDate={SetDate} cancel={CancelDtePicker} color="rgb(189,166,59)" />);

    }


}

function PutDate(Date) {
    if (Date != undefined)
        document.getElementById("InputDateComponenrRD").value = Date.toDateString();

}

function OnDoneClock(Id, Hrs, Min) {
    Id.current.value = `${Hrs}:${Min}`;
    CancelDtePicker();
}

function CancelDtePicker() {
    const root = ReactDOM.createRoot(document.getElementById("UpperUpperDiv"));
    root.render(<div></div>);
}


export default ReservationDetails;