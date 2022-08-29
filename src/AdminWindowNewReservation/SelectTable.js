import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "../Styling/AdminWindowNewReservation.css";
import DatePicker from "../DatePicker/DatePick";
import { faAngleDown, faTimes, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MutiDropDown from "./MutiDropDown";
import MapView from "../AdminWindowReservationList/MapView";



function SelectTable(data) {

    const ReservationData = data.ReservationData;
    const Filixeble = () => {
        console.log(ReservationData.FT);
        if (ReservationData.FT)
            return (<span style={{ fontSize: "11px", margin: "auto 8px" }}>Flexible</span>);
        else
            return;
    }

    const SetReservationDate = () => {
        console.log(ReservationData);
        if (ReservationData != undefined) {
            return (
                <div>
                    <div className="SelectTableReservationData">
                        <div className="SelectTableReservationDataDate">{new Date(ReservationData.Date).toDateString()}</div>
                        <div className="SelectTableReservationDataTime">{ReservationData.FromTime}-{ReservationData.ToTime} {Filixeble()}</div>
                    </div>
                    <MutiDropDown array={array} />

                    <div className="ViewOptionClasses">
                      <div className="ViewOptionClassesOption">Posible Option</div>
                        <div className="ViewOptionClassesOption">Time Line View</div>
                        <div className="ViewOptionClassesOption" onClick={OnClickOnMapView}>Map View</div>
                    </div>

                </div>
            );
        }
        else {
            console.log("0123245")
            return (<div className="PleaseFirstEnter">Please First Enter Reservation Details</div>)
        }


    }
    const array = [
        { TN: "6", FN: "2", CA: "10", TI: "123" },
        { TN: "2", FN: "2", CA: "5", TI: "124" },
        { TN: "1", FN: "2", CA: "10", TI: "125" },
        { TN: "7", FN: "1", CA: "8", TI: "126" },
        { TN: "8", FN: "1", CA: "10", TI: "127" },
        { TN: "10", FN: "1", CA: "7", TI: "128" },
        { TN: "11", FN: "1", CA: "10", TI: "129" },
        { TN: "12", FN: "1", CA: "6", TI: "120" },
        { TN: "14", FN: "2", CA: "9", TI: "121" }
    ]
    return (

        <div>
            {SetReservationDate()}
        </div>
    )
}

function OnClickOnMapView()
{
    console.log("GGGGGGG");
    const UpperUpperDiv = ReactDOM.createRoot(document.getElementById("UpperUpperDiv"));
    UpperUpperDiv.render(<div className="ViewShowNewReservation">
    <MapView ET={500} ST={550} BookClick={BookTable}/>
    <FontAwesomeIcon icon={faWindowClose} style={{color:"rgb(247,73,89)",fontSize: "50px",cursor: "pointer"}} onClick={CloseView}/>
    </div>);
}

function BookTable(item)
{
    console.log(item);
}

function CloseView()
{
    const UpperUpperDiv = ReactDOM.createRoot(document.getElementById("UpperUpperDiv"));
    UpperUpperDiv.render(<div></div>)
}

export default SelectTable;