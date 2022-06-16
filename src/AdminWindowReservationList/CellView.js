import React, { useState } from "react";
import "../Styling/AdminWindowReservationList.css";
import {  faPhone} from "@fortawesome/free-solid-svg-icons";
import {  faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {  faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CellView() {
    const Data = {
        NumberOfGuest:4,
        Name:"Sonu Singla",
        Description: "I eat Indian Food. So So I Book this Table. I eat Indian Food. So I Book this Table",
        Date:"2022-12-14",
        StartTime:"17:30",
        EndTime:"19:00",
        MobileNumber:"+91868076104",
        Email:"singlasonu.net@gmail.com",
        TableNumber:5,
        status:"Conform"

    }
    const Data1 = {
        NumberOfGuest:4,
        Name:"Sonu Singla",
        Description: "I eat Indian Food. So So I Book this Table. I eat Indian Food. So I Book this Table",
        Date:"2022-12-14",
        StartTime:"17:30",
        EndTime:"19:00",
        MobileNumber:"+91868076104",
        Email:"singlasonu.net@gmail.com",
        TableNumber:5,
        status:"Cancel"
    }
    return (
        <div className="CellViewReturnDiv">
            <Cell Data={Data}/>
            <Cell Data={Data}/>
            <Cell Data={Data}/>
            <Cell Data={Data1}/>
            <Cell Data={Data1}/>
            <Cell Data={Data}/>
            <Cell Data={Data}/>
            <Cell Data={Data}/>
            <Cell Data={Data}/>
            <Cell Data={Data1}/>

        </div>
    )
}


function Cell(Data) {
    const data= Data.Data;
    return (
        <div className="CellReturningDiv" >
            <div className="NumberOfGuest NumberOfGuestCell" style={{backgroundColor:OnBaseOnStatus(data.status)}}>{data.NumberOfGuest}</div>
            <div className="MoreDetailsCell">
            <div className="TableNumberCell" style={{color:BrighterColor(data.NumberOfGuest)}}>Table-{data.TableNumber}</div>
                <div className="NameDateCell">
                    <div className="NameCell">
                        {data.Name}
                    </div>
                    <div className="DateCell">{new Date(`${data.Date}`).toDateString()}</div>
                </div>
                <div className="DescriptionCell">{data.Description}</div>
                <div className="NameDateCell ContactTime">
                    <div className="ContactCell"> 
                        <FontAwesomeIcon className="ConatctIconCell PhoneIconCell" onClick={()=>{CallTo(data.MobileNumber)}} icon={faPhone} />
                        <FontAwesomeIcon className="ConatctIconCell EmailIconCell"onClick={()=>{EmailTo(data.Email)}}  icon={faEnvelope} />
                        <FontAwesomeIcon className="ConatctIconCell EmailIconCell" icon={faEdit} />
                    </div>
                    <div style={{textAlign: "center"}}>{data.status}</div>
                    <div className="TimeCell">{data.StartTime}-{data.EndTime}</div>
                </div>

            </div>

        </div>
    )



}

function EmailTo(EmailId)
{
    window.location.href=`mailto:${EmailId}`;
}

function CallTo(Number)
{
    window.location.href=`tel:${Number}`;   
}

function BrighterColor(index)
{
    const Color =["rgb(255,102,1)","rgb(204,0,1)","rgb(102,17,102)","rgb(1,21,102)","rgb(0,102,102)","rgb(51,153,0)","rgb(102,204,0)","rgb(255,153,1)","rgb(255,51,1)","rgb(153,11,102)","rgb(2,51,153)"];
    if(index==null)
    {
             index = Math.floor(Math.random() * (10 - 0 + 1) + 0);

    }
    return Color[index];
}

function OnBaseOnStatus(status)
{
    if(status=="Conform")
    {
        return"rgb(0,102,102)";
    }

    return "red";

}
export default CellView;