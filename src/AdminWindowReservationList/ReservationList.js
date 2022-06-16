import React, { useState,useEffect  } from "react";
import ReactDOM from "react-dom/client";
import TimeLineView from "./TimeLineView";
import CellView from "./CellView";
import Header from "./ReservationListHeader";
import MapView from "./MapView";
import "../Styling/AdminWindowReservationList.css";

function ReservationList() {

    function CheckWidth()
    {
         if(window.innerWidth<=450)
        {
            return["CellView"];
        }
        else if(window.innerWidth<="1200")
        {
            return["TimeLine"];
        }
        else
        {
            return ["TimeLine","CellView"]
        }
    }
    const TodayDate = new Date();
    const [POS, SetPOS] = useState(CheckWidth());
    const [date,SetDate]=useState(TodayDate);
    

       
    return (
        <div className="ReservationListReturnDiv">
            <div className="ReservationListNavBar">
                <Header Refresh={RefreshView} SetPOS={SetPOS} POS={POS} Date={date} SetDate={SetDate} />
            </div>

            <div id="ReservationListMainContainer" className="ReservationListMainContainer">
            {RenderComponent(POS,date)}
            </div>
        </div>
    )
}

function RefreshView(POS) {

   const root = ReactDOM.createRoot(document.getElementById("ReservationListMainContainer"));
   root.render(RenderComponent(POS));
    
}

function RenderComponent(POS,date) {

    return POS.map((item)=>{
        if(item=="TimeLine")
        return<TimeLine Date={date}/>
        else if(item=="CellView")
        return<CellViewINSIDE Date={date}/>
        else
        return<TempMapView Date={date}/>

    });
}

function TimeLine(data) {
    return (
        <div id="TimeLineView" className="ReservationListTimeView" ><TimeLineView Date={data.Date}/></div>
    )
}

function TempMapView(data)
{
    return (
        <div id="MapLineView" className="ReservationListMapView" >
            <MapView  Date={data.Date}/>
        </div>
    )
}

function CellViewINSIDE(data) {

    return (
        <div id="ReservationListCellView" className="ReservationListCellView">
            <div className="LatestReservationHeading">Reservations List</div>

            <div className="ReservationListCells">
                <CellView  Date={data.Date}/>
            </div>

        </div>
    )
}


export default ReservationList;