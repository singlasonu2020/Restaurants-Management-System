import React, { useEffect } from 'react';
import "../Styling/TimeInputClock.css";
var start = false;
function HoursClock(data) {
    useEffect(() => {
        start = false;
        document.getElementById(`li${data.InitialHrs}`).click();
    })
    return (
        [
            <div id="CenterOfClock"></div>,
            <hr id="TowordTime" />,
            InsertLiTag(1, data.OnClickOnHours,data.InitialMin),
            InsertLiTag(13, data.OnClickOnHours,data.InitialMin)

        ]
    )
}


function ClickOnTimeHrs(event, OnClickOnHours, InitialMin) {
    var Id = event.target.id
    var IdNumber = Id.slice(-2);
    var MainId = "li" + IdNumber;
    var Number = parseInt(IdNumber);
    var PreId = "li" + document.getElementById("Hours").innerHTML;
    document.getElementById(PreId).classList.remove("OnHoverOnHours");
    document.getElementById(MainId).classList.add("OnHoverOnHours");
    document.getElementById("Hours").innerHTML = IdNumber
    var element = document.getElementById("TowordTime");
    if (Number <= 12 && Number > 0) {
        element.style.width = "80px";
    }
    else {
        element.style.width = "110px";
    }

    var Angle = 30 * Number - 90;
    element.style.transform = `rotate(${Angle}deg)`;
    if (start) {
        var i = 0;
        var StTimeIntervalId = setInterval(() => {

            var array1 = document.getElementsByClassName("AllLiTagInClock13");
            var array2 = document.getElementsByClassName("AllLiTagInClock1");

            for (var i = 0; i < 12; i++) {
                array1[i].style.transformOrigin = `${i + 130}`;
                array2[i].style.transformOrigin = `${i + 100}`;

            }


            i = i + 1;
        }, 5);

        setTimeout(() => {
            OnClickOnHours(InitialMin);
            clearInterval(StTimeIntervalId);
        }, 300);

    }
    else {
        start = true;
    }


}

function InsertLiTag(start, OnClickOnHours, InitialMin) {
    var LiArray = [];
    for (let i = 0; i < 12; i++) {
        if (start + i == 24) {
            LiArray.push(<li id="li00" className={`AllLiTagInClock${start} AllHrs`} style={Rotation(i + 1)} onClick={(event) => { ClickOnTimeHrs(event, OnClickOnHours,InitialMin) }} ><div id="div00" className='AllLiTagDivInClock' style={RotationNumber(i + 1)}>00</div></li>);

        }
        else {
            var StringId = ("0" + (i + start).toString()).slice(-2);
            LiArray.push(<li id={`li${StringId}`} className={`AllLiTagInClock${start} AllHrs`} style={Rotation(i + 1)} onClick={(event) => { ClickOnTimeHrs(event, OnClickOnHours,InitialMin) }} ><div id={`div${StringId}`} className='AllLiTagDivInClock' style={RotationNumber(i + 1)}>{start + i}</div></li>);

        }

    }

    return LiArray
}

function Rotation(i) {
    return {
        transform: `rotate(${90 + 30 * i}deg)`,

    }

}

function RotationNumber(i) {
    let a = 270
    if (i != 12) {
        a = a - i * 30;
    }

    return {
        transform: `rotate(${a}deg)`
    }
}

export default HoursClock;