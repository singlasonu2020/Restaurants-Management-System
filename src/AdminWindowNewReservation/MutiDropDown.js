
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "../Styling/AdminWindowNewReservation.css";
import DatePicker from "../DatePicker/DatePick";
import { faAngleDown, faTimes, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function MutiDropDown(data) {
    const [OptionListOn, SetOptionListOn] = useState(false);
    const [OptionList, SetOptionList] = useState([]);
    const [SelectedList, SetSelectedList] = useState([]);





    useEffect(() => {
        openOption(OptionListOn, SelectedList);
        SetSelectedList(() => data.SelectedTableData);
        SetOptionList(() => data.array);
    })


    const LiComponent = (item) => {
        return (
            <li onClick={() => { ClickOnOption(item) }}>
                <div className="OptionLabelLeft">{item.FloorNumber}</div>
                <div className="OptionLabel">TableNo-{item.TableNumber}</div>
                <div className="OptionLabelRight">{item.NumberOfSeat}</div>
            </li>
        )
    }

    const ClickOnOption = (item) => {
        data.SetSelectedTableData(oldArray => [...oldArray, item]);
 
    }


    const OptionListComponent = (OptionList) => {

        if (OptionList.length == 0) {
            return <div className="NoOptionContainer">No Option</div>

        }
        else {
            return OptionList.map((item) => { return LiComponent(item) })
        }

    }

    const OnClickCrossOne = (item) => {
        data.SetSelectedTableData( data.SelectedTableData.filter((e) => { return e.TableNumber != item.TableNumber }));
    }

    const SelectedListComponent = (selectList) => {
        if (selectList.length == 0) {
            return "Select Table"
        }

        else {
            return selectList.map((item) => {
                return (<div className="SelectedTableClass"><div>Table No. - {item.TableNumber}</div> <div className="CroseIconSelectInput"><FontAwesomeIcon icon={faTimes} onClick={() => { OnClickCrossOne(item) }} /></div></div>);
            })
        }
    }

    const OnClickOnCrossAll = () => {
        data.SetSelectedTableData([]);
    }

    const openOfClick = (e) => {
        if (e.target.id == "InputMutipleSelectInput") {
            SetOptionListOn(!OptionListOn)

        }
    }
    return (
        <div>
            <div className="InputMutipleSelect">
                <div id="InputMutipleSelectInput" style={{ display: "flex", flex: "1", flexWrap: "wrap", maxWidth: "400px" }} onClick={(e) => { openOfClick(e) }}>{SelectedListComponent(SelectedList)}</div>
                <div className="InputMutipleSelectIcon">
                    <FontAwesomeIcon id="IconCrossInputMutipleSelect" icon={faTimes} onClick={() => { OnClickOnCrossAll() }} />
                    <span className="VerticalLine"></span>
                    <FontAwesomeIcon id="IconDownInputMutipleSelect" icon={faAngleDown} onClick={() => { SetOptionListOn(!OptionListOn) }} />
                    <FontAwesomeIcon id="IconUpInputMutipleSelect" icon={faAngleUp} onClick={() => { SetOptionListOn(!OptionListOn) }} />
                </div>
            </div>
            <div id="OptionList" className="OptionList">
                {OptionListComponent(OptionList)}

            </div>
        </div>
    )
}


function openOption(openOption, SelectedList) {
    if (openOption) {
        document.getElementById("IconCrossInputMutipleSelect").style.display = "block";
        document.getElementById("IconDownInputMutipleSelect").style.display = "none";
        document.getElementById("IconUpInputMutipleSelect").style.display = "block";
        document.getElementById("OptionList").style.display = "block";
        document.getElementsByClassName("InputMutipleSelect")[0].style.borderColor = "rgb(35, 41, 54,0.9)";

    }
    else {
        if (SelectedList.length == 0) {
            document.getElementById("IconCrossInputMutipleSelect").style.display = "none";

        }
        document.getElementById("IconDownInputMutipleSelect").style.display = "block";
        document.getElementById("IconUpInputMutipleSelect").style.display = "none";
        document.getElementById("OptionList").style.display = "none";
        document.getElementsByClassName("InputMutipleSelect")[0].style.borderColor = "rgba(35, 41, 54,0.5)";


    }
}


export default MutiDropDown;