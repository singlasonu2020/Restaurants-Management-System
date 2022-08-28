import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "../Styling/AdminWindowNewReservation.css";
import DatePicker from "../DatePicker/DatePick";
import { faAngleDown, faTimes, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MutiDropDown from "./MutiDropDown";



function SelectTable() {

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
            <MutiDropDown array={array} />
        </div>
    )
}



export default SelectTable;