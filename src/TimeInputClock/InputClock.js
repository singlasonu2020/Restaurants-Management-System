import React, { useEffect } from 'react';
import "../Styling/TimeInputClock.css";
import HoursClock from "./HoursClock";
import MinClock from "./MinClock";
import ReactDOM from "react-dom/client";
function InputClock(data) {

    return (
        <div id="ReturnInputClock" className='ReturnInputClock' style={{backgroundColor:data.color}} >
            <div id="ReturnInputClockMain" className='ReturnInputClockMain'  >
                <div id="ReturnInputClockHeading" className='ReturnInputClockHeading'><span id="Hours">{data.InitialHrs}</span>:<span id="Min">{data.InitialMin}</span></div>
                <div id="ReturnInputClockClock" className='ReturnInputClockClock' >
                    <HoursClock OnClickOnHours={OnClickOnHours} InitialHrs={data.InitialHrs} InitialMin={data.InitialMin}/>
                </div>
                <div id="ReturnInputClockButton" className='ReturnInputClockButton'>
                    <div className="ReturnInputClockButtonButton" onClick={() => { OnDone(data.OnDone,data.Id) }}>Done</div>
                    <div className="ReturnInputClockButtonButton" onClick={() => { OnClickOnReset() }}>Reset</div>
                    <div className="ReturnInputClockButtonButton" onClick={() => { data.OnCancel() }}>Cancel</div>

                </div>
            </div>
        </div>
    )

    function OnDone(fun,Id) {
        var H = document.getElementById("Hours").innerHTML;
        var M = document.getElementById("Min").innerHTML;
        fun(Id,H, M);
    }

}

function OnClickOnReset() {
    document.getElementById("Hours").innerHTML = "00";
    document.getElementById("Min").innerHTML = "00";
    const Clock = ReactDOM.createRoot(document.getElementById("ReturnInputClockClock"));
    Clock.render(<HoursClock OnClickOnHours={OnClickOnHours} InitialHrs="00" InitialMin="00"/>);
}

function OnClickOnHours(InitialMin) {

    const Clock = ReactDOM.createRoot(document.getElementById("ReturnInputClockClock"));
    Clock.render(<MinClock InitialMin={InitialMin}/>);

}






export default InputClock;