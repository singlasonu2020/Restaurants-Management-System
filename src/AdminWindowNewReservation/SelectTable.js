import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "../Styling/AdminWindowNewReservation.css";
import DatePicker from "../DatePicker/DatePick";
import { faAngleDown, faTimes, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MutiDropDown from "./MutiDropDown";
import MapView from "../AdminWindowReservationList/MapView";
import { Sa } from "react-flags-select";
import TimeLine from "../AdminWindowReservationList/TimeLineView"



function SelectTable(data) {


    const ReservationData = data.ReservationData;
    const Filixeble = () => {
        if (ReservationData.FT)
            return (<span style={{ fontSize: "11px", margin: "auto 8px" }}>Flexible</span>);
        else
            return;
    }


    let fun;

    const CloseView = (Save, SetSelectedTableData) => {
        if (Save) {
            const aa = fun();
            SetSelectedTableData(() => aa.TaleData);
        }

        const UpperUpperDiv = ReactDOM.createRoot(document.getElementById("UpperUpperDiv"));
        UpperUpperDiv.render(<div></div>)
    }

    const array = [{ TableNumber: "1", AddressNumber: "200", FloorNumber: "1", NumberOfSeat: "3" }, { TableNumber: "2", AddressNumber: "800", FloorNumber: "1", NumberOfSeat: "4" }, { TableNumber: "3", AddressNumber: "300", FloorNumber: "2", NumberOfSeat: "2" }, { TableNumber: "4", AddressNumber: "2200", FloorNumber: "2", NumberOfSeat: "5" }];

    const SetReservationDate = () => {

        const [SelectedTableData, SetSelectedTableData] = useState([]);
        let ArrayTemp = () => {
            return array.filter((e) => {
                return !includes(SelectedTableData, e);
            })
        }

        const includes = (arr, e) => {
            for (let index = 0; index < arr.length; index++) {
                if (arr[index].TableNumber == e.TableNumber) {
                    return true;
                }
            }
            return false;
        }

        const SetFun=(f)=>{
            fun=f;
        }
        const FromMin = ReservationData.FromTime.substring(0,2)*60+ReservationData.FromTime.substring(3)*1;
        const ToMin = ReservationData.ToTime.substring(0,2)*60+ReservationData.ToTime.substring(3)*1;
        console.log(FromMin);
        console.log(ToMin);
        if (ReservationData != undefined) {
            return (
                <div>
                    <div className="SelectTableReservationData">
                        <div className="SelectTableReservationDataDate">{new Date(ReservationData.Date).toDateString()}</div>
                        <div className="SelectTableReservationDataTime">{ReservationData.FromTime}-{ReservationData.ToTime} {Filixeble()}</div>
                    </div>

                    <MutiDropDown array={ArrayTemp()} SelectedTableData={SelectedTableData} SetSelectedTableData={SetSelectedTableData} />
                    <div id="PossibleOption">

                    </div>
                    <div className="ViewOptionClasses">
                        <div className="ViewOptionClassesOption" onClick={() => { ClickOnPossibleOption(SetSelectedTableData) }}> Best Possible Option</div>
                        <div className="ViewOptionClassesOption" onClick={() => { ClickOnTimeLineView(SelectedTableData) }} >Time Line View</div>
                        <div className="ViewOptionClassesOption" onClick={() => { OnClickOnMapView(CloseView, SelectedTableData, SetSelectedTableData,FromMin,ToMin,SetFun) }}>Map View</div>
                    </div>

                </div>
            );
        }
        else {
            return (<div className="PleaseFirstEnter">Please First Enter Reservation Details</div>)
        }


    }


    return (

        <div>
            {SetReservationDate()}
        </div>
    )
}

function OnClickOnMapView(CloseView, SelectedTable, SetSelectedTableData,FromMin,ToMin,SetFun) {
    const UpperUpperDiv = ReactDOM.createRoot(document.getElementById("UpperUpperDiv"));
    UpperUpperDiv.render(<div className="ViewShowNewReservation">
        <MapView ET={ToMin} ST={FromMin} SelectTable={true} SelectedTable={SelectedTable} SetFun={SetFun} />
        <div>
            <FontAwesomeIcon icon={faWindowClose} style={{ color: "rgb(247,73,89)", fontSize: "60px", cursor: "pointer" }} onClick={() => { CloseView(false, SetSelectedTableData) }} />
            <div className="SaveAndNext" onClick={() => { CloseView(true, SetSelectedTableData) }}>Save & Close</div>
        </div>

    </div>);
}

function ClickOnPossibleOption(SetSelectedTableData) {
    
    const PossibleOptionTemp = ReactDOM.createRoot(document.getElementById("UpperUpperDiv"));
    PossibleOptionTemp.render(PosiibleOptionComponent(SetSelectedTableData));
}

function PosiibleOptionComponent(SetSelectedTableData) {


    const ClickOnOption =(item)=>{
        SetSelectedTableData(item);
        ClickOnCanCell();
    }

    const ListOfPossibleOption = [[{ TableNumber: "1", AddressNumber: "200", FloorNumber: "1", NumberOfSeat: "3" }, { TableNumber: "2", AddressNumber: "800", FloorNumber: "1", NumberOfSeat: "4" }], [{ TableNumber: "1", AddressNumber: "200", FloorNumber: "1", NumberOfSeat: "3" }, { TableNumber: "2", AddressNumber: "800", FloorNumber: "1", NumberOfSeat: "4" }], [{ TableNumber: "1", AddressNumber: "200", FloorNumber: "1", NumberOfSeat: "3" }, { TableNumber: "2", AddressNumber: "800", FloorNumber: "1", NumberOfSeat: "4" }], [{ TableNumber: "1", AddressNumber: "200", FloorNumber: "1", NumberOfSeat: "3" }, { TableNumber: "2", AddressNumber: "800", FloorNumber: "1", NumberOfSeat: "4" }]]
    return (
        <div className="ReturnPostionOptionComponentMain">
            <div className="ReturnPostionOptionComponent" >
                <div className="PossibleHeadingClass">
                    <div className="PossibleHeadingClassHeading">Possible Best Option</div>
                    <FontAwesomeIcon icon={faWindowClose} style={{ color: "rgb(247,73,89)", cursor: "pointer" }} onClick={ClickOnCanCell} />
                </div>
                {ListOfPossibleOption.map((item) => {

                    return (
                        <li className="ClassForPosibleOption" onClick={()=>{ClickOnOption(item)}}>{item.map((e) => {
                            return <div>TableNumber-{e.TableNumber}</div>
                        })}</li>)
                })}
            </div>
        </div>
    )
}


function ClickOnCanCell()
{
    const PossibleOptionTemp = ReactDOM.createRoot(document.getElementById("UpperUpperDiv"));
    PossibleOptionTemp.render(<div></div>);
}



function ClickOnTimeLineView(SelectedTableData)
{
    const UpperUpperDiv = ReactDOM.createRoot(document.getElementById("UpperUpperDiv"));
    UpperUpperDiv.render(<div className="ViewShowNewReservation">
        
        <div className="TimeLineContainer"><TimeLine Date={new Date()} SelectedTableData={SelectedTableData}/></div>
        <div>
            <FontAwesomeIcon icon={faWindowClose} style={{ color: "rgb(247,73,89)", fontSize: "60px", cursor: "pointer" }} onClick={() => { ClickOnCanCell()}} />
        </div>

    </div>);
}

export default SelectTable;