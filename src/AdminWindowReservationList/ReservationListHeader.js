import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import "../Styling/AdminWindowReservationList.css";
import DatePicker from "../DatePicker/DatePick"
import { faCalendarAlt, faExpand, faHistory, faRefresh, faCompress, faTable } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dinnerTable from "../image/dinner-table.png"


function Header(data) {
    
    const[date,SetDate] = useState(data.Date);
    const MonthArrayShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const WeekArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    
    useEffect(()=>{
        TodayClick(date);
    })

    return (
        <div className="RervationListHeaderReturn">
            <div className="DateInputHeader">
                <div className="DateShowCell">{WeekArray[new Date(date).getDay()]}, {MonthArrayShort[new Date(date).getMonth()]} {new Date(date).getDate()} {new Date(date).getFullYear()}</div>
                <div className="calenderIconCell" onClick={()=>{ClearDatePicker(date,SetDate)}} ><FontAwesomeIcon icon={faCalendarAlt} /></div>
                <div id="DatePickerComponent" style={{position:"relative" , height:"30px",width:0}}></div>
                <div className="TodayCells">
                    <div id="YesterdayCell" className="IconRightCell" onClick={()=>{ClickOnYTT(-1,SetDate)}}>Yesterday</div>
                    <div id="TodayCell" className="TodayCell" onClick={()=>{ClickOnYTT(0,SetDate)}}>Today</div>
                    <div  id="TomorrowCell" className="IconRightCell" onClick={()=>{ClickOnYTT(1,SetDate)}}>Tomorrow</div>
                </div>
            </div>

            <div className="AllOtherOption">
                <div title="Refresh" className="calenderIconCell" onClick={() => { data.Refresh(data.POS) }}><FontAwesomeIcon icon={faRefresh} /></div>
                <div id="ExpandView" className="calenderIconCell FullScrreenIcons" title="Map or TimeLine Full Screen" onClick={() => { ClickOnExpand(data.SetPOS, data.POS) }}><FontAwesomeIcon id="ExpandIon" icon={faExpand} /><FontAwesomeIcon id="CompressIon" style={{ display: "none" }} icon={faCompress} /></div>
                <div id="TimeLineLine" title="Time Line View" className="calenderIconCell" onClick={() => { OnClickTimeLineView(data.SetPOS, data.POS) }}><FontAwesomeIcon icon={faHistory} /></div>
                <div title="Table View" className="calenderIconCell" onClick={()=>{ClickOnTableView(data.SetPOS, data.POS) }}><FontAwesomeIcon icon={faTable} /></div>
                <div title="Map View" className="calenderIconCell imageIcon" onClick={()=>{OnClickMapView(data.SetPOS, data.POS) }} ><img src={dinnerTable} style={{ width: "20px", height: "20px", opacity: "2" }} /></div>
            </div>
        </div>
    )
}

function ClickOnYTT(d,SetDate)
{
    const NewDate = new Date();
    NewDate.setDate(NewDate.getDate()+d);
    SetDate(NewDate);
}

function TodayClick(TempDate){

    document.getElementById("YesterdayCell").classList.remove("TodayCellClick");
    document.getElementById("TodayCell").classList.remove("TodayCellClick");
    document.getElementById("TomorrowCell").classList.remove("TodayCellClick");

    const a =new Date();

    if(TempDate.toLocaleDateString()==a.toLocaleDateString())
    {
        document.getElementById("TodayCell").classList.add("TodayCellClick");
    }
    a.setDate(a.getDate()-1);
    if(TempDate.toLocaleDateString()==a.toLocaleDateString())
    {
        document.getElementById("YesterdayCell").classList.add("TodayCellClick");  
    }
    a.setDate(a.getDate()+2);
    if(TempDate.toLocaleDateString()==a.toLocaleDateString())
    {
        document.getElementById("TomorrowCell").classList.add("TodayCellClick");
    }

   
}

function ClearDatePicker(date,SetDate)
{
    const root = ReactDOM.createRoot(document.getElementById("UpperUpperDiv"));
    root.render(<DatePicker Date={date} clear={ClearDatePicker} SetDate={SetDate} cancel={CancelDtePicker}/>);

}

function CancelDtePicker()
{
    const root = ReactDOM.createRoot(document.getElementById("UpperUpperDiv"));
    root.render(<div></div>);
}

function ClickOnExpand(SetPOS, POS) {
    const ExpandIonElement = document.getElementById("ExpandIon");
    if (ExpandIonElement.style.display == "none") {
        ExpandIonElement.style.display = "block";
        document.getElementById("CompressIon").style.display = "none";
        if(POS[0]!="CellView")
        SetPOS(old => [...old, "CellView"]);

        else
        SetPOS(old => ["TimeLine",...old]);


    }
    else {
        ExpandIonElement.style.display = "none";
        document.getElementById("CompressIon").style.display = "block";
        SetPOS(POS.filter(item => item != "CellView"));

    }

}


function OnClickTimeLineView(SetPOS, POS) {
    if (window.innerWidth <= 450) {
        SetPOS(["TimeLine"]);
    }
    else {
        SetPOS(POS.map((item) => {
            if (item == "MapView")
            return "TimeLine"

            return item;

        }));
    }
}


function OnClickMapView(SetPOS, POS) {
    if (window.innerWidth <= 450) {
        SetPOS(["MapView"]);
    }
    else {
        SetPOS(POS.map((item) => {
            if (item == "TimeLine")
            {return "MapView"}

            return item;

        }));
    }


}

function ClickOnTableView(SetPOS, POS) {
    if (window.innerWidth <= 450||  document.getElementById("CompressIon").style.display == "block") {
        SetPOS(["CellView"])
    }
    else if(POS.length<2)
    {
        console.log("Hello");
        document.getElementById("ExpandIon").style.display = "block";
        document.getElementById("CompressIon").style.display = "none";
        SetPOS(old => [...old, "CellView"]);
    }

}
export default Header;