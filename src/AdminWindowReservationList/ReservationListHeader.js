import React, { useState,useEffect,useContext } from "react";
import ReactDOM from "react-dom/client";
import "../Styling/AdminWindowReservationList.css";
import DatePicker from "../DatePicker/DatePick"
import { faCalendarAlt, faExpand, faHistory, faRefresh, faCompress, faTable } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dinnerTable from "../image/dinner-table.png"
import ReservationList from "./UseContext";
import { useNavigate ,useLocation } from "react-router-dom";




function Header() {
    const data = useContext(ReservationList);
    const[date,SetDate] = useState(data.Date);
    const MonthArrayShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const WeekArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let navigate = useNavigate();
    let path = useLocation().pathname;
    let pathArray = path.split("/")
    pathArray.shift();


   

    const ClickOnExpand=()=>{
        if(pathArray[pathArray.length-1]=="full")
        {
            console.log(pathArray);
            let stringPath="";
            for (let index = 0; index < pathArray.length-1; index++) {
                stringPath=stringPath+"/"+pathArray[index]
            }
            navigate(stringPath);
        }
        else
        {
            navigate(`${path}/full`);
        }
       

    }

    const ClickOn_ =(option)=>{
        if(pathArray[pathArray.length-1]=="full")
        { 
            if(option=="MapView")
            navigate("./map_view_&_cell_view/full");

            else if(option=="TimeLine")
            navigate("./time_line_view_&_cell_view/full");

            else
            navigate("./cell_view_&_time_line_view/full");




        }
        else
        {
            if(option=="MapView")
            navigate("./map_view_&_cell_view");

            else if(option=="TimeLine")
            navigate("./time_line_view_&_cell_view");

            else
            navigate("./cell_view_&_time_line_view");
        }
       
    }
    
    
    useEffect(()=>{
        if(pathArray[pathArray.length-1]!="full")
        {
            document.getElementById("ExpandIon").style.display="none";
            document.getElementById("CompressIon").style.display="block";

        }
        else
        {
            document.getElementById("ExpandIon").style.display="block";
            document.getElementById("CompressIon").style.display="none";
        }
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
                <div title="Refresh" className="calenderIconCell" onClick={() => {navigate(path)}}><FontAwesomeIcon icon={faRefresh} /></div>
                <div id="ExpandView" className="calenderIconCell FullScrreenIcons" title="Map or TimeLine Full Screen" onClick={() => { ClickOnExpand() }}><FontAwesomeIcon id="ExpandIon" icon={faExpand} /><FontAwesomeIcon id="CompressIon" style={{ display: "none" }} icon={faCompress} /></div>
                <div id="TimeLineLine" title="Time Line View" className="calenderIconCell" onClick={() => {ClickOn_("TimeLine")}}><FontAwesomeIcon icon={faHistory} /></div>
                <div title="Table View" className="calenderIconCell" onClick={() => {ClickOn_("TableView")}}><FontAwesomeIcon icon={faTable} /></div>
                <div title="Map View" className="calenderIconCell imageIcon" onClick={() => {ClickOn_("MapView")}} ><img src={dinnerTable} style={{ width: "20px", height: "20px", opacity: "2" }} /></div>
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

    console.log(TempDate);
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

export default Header;