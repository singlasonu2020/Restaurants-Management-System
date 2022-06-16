import React, { useEffect } from 'react';
import "../Styling/TimeInputClock.css";

function MinClock(data) {
    useEffect(() => {
        document.getElementById(`li${data.InitialMin}`).click();
    })
    return (
        [
            <div id="CenterOfClock"></div>,
            <hr id="TowordTime" />,
            InsertLiTag()

        ]
    )
}



function OnClickOnMin(event) {
    var Id = event.target.id
    var IdNumber = Id.slice(-2);
    var MainId = "li" + IdNumber;
    var Number = parseInt(IdNumber);
    var PreId = "li" + document.getElementById("Min").innerHTML;
    document.getElementById(PreId).classList.remove("OnHoverOnHours");
    document.getElementById(MainId).classList.add("OnHoverOnHours");
    document.getElementById("Min").innerHTML = IdNumber
    var element = document.getElementById("TowordTime");
    if (Number % 5 != 0) {

        element.style.width = "128px";
    }
    else {
        element.style.width = "110px";
    }

    var Angle = 6 * Number - 90;
    element.style.transform = `rotate(${Angle}deg)`;
}

function InsertLiTag() {
    var LiArray = [];
    for (let i = 1; i <= 60; i++) {
        if (i == 60) {
            LiArray.push(<li id="li00" className={`AllLiTagInClock60 AllHrs`} style={Rotation(i)} onClick={(event) => { OnClickOnMin(event) }}  ><div id="div00" className='AllLiTagDivInClock' style={RotationNumber(i)}>00</div></li>);

        }
        else {
            if (i % 5 == 0) {
                var StringId = ("0" + i.toString()).slice(-2);
                LiArray.push(<li id={`li${StringId}`} className={`AllLiTagInClock60 AllHrs`} style={Rotation(i)} onClick={(event) => { OnClickOnMin(event) }} ><div id={`div${StringId}`} className='AllLiTagDivInClock' style={RotationNumber(i)}>{StringId}</div></li>);

            }

            else {
                var StringId = ("0" + i.toString()).slice(-2);
                LiArray.push(<li id={`li${StringId}`} className={`AllLiTagInClock60 AllMin`} style={Rotation(i)} onClick={(event) => { OnClickOnMin(event) }} ><div id={`div${StringId}`} className='AllLiTagDivInClock'></div></li>);
            }


        }

    }

    return LiArray
}

function Rotation(i) {
    return {
        transform: `rotate(${90 + 6 * i}deg)`,

    }

}

function RotationNumber(i) {
    let a = 270
    if (i != 60) {
        a = a - i * 6;
    }

    return {
        transform: `rotate(${a}deg)`
    }
}

export default MinClock;