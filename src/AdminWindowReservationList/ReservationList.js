import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import TimeLineView from "./TimeLineView";
import CellView from "./CellView";
import Header from "./ReservationListHeader";
import MapView from "./MapView";
import "../Styling/AdminWindowReservationList.css";
import { Outlet } from "react-router-dom";
import  ReservationListData from "./UseContext";



function ReservationList() {

   
    const TodayDate = new Date();
    const [date, SetDate] = useState(TodayDate);

    const user = {Date:date,SetDate:SetDate};
    

    return (
        <ReservationListData.Provider value={user}>
            <div className="ReservationListReturnDiv">
                <div className="ReservationListNavBar">
                    <Header />
                </div>

                <div id="ReservationListMainContainer" className="ReservationListMainContainer">
                    <Outlet />
                </div>
            </div>
        </ReservationListData.Provider>

    )
}

function TimeLine() {
    return (
        <div id="TimeLineView" className="ReservationListTimeView" ><TimeLineView /></div>
    )
}

function TempMapView() {
    console.log("HELLO");
    return (
        <div id="MapLineView" className="ReservationListMapView" >
            <MapView />
        </div>
    )
}

function CellViewINSIDE() {

    return (
        <div id="ReservationListCellView" className="ReservationListCellView">
            <div className="LatestReservationHeading">Reservations List</div>

            <div className="ReservationListCells">
                <CellView />
            </div>

        </div>
    )
}


export  {ReservationList,TimeLine,TempMapView,CellViewINSIDE};