import React, { useState,useEffect } from "react";
import "../Styling/AdminWindowSchedule.css";
import OneDay from "./DefaultScheduleOneDay";
import { v4 as uuidv4 } from 'uuid';


const Date = [{ScheduleId:"db3f9ae8-8516-4",Date:"2022-08-1"},{ScheduleId:"db3f9ae8-8516-4028-6",Date:"2022-08-14"}]

function CustomSchedule()
{
    useEffect(()=>{

        const element = document.getElementsByClassName("CustomScheduleSchedule")[0];
        element.scrollLeft  = element.scrollWidth - element.clientWidth;
    })

    const [scheduled,SetSchedule]=useState(Date);
    
   

    return(
        <div className="CustomSchesduleReturnDiv">
            <div className="CustomScheduleSchedule">
              {scheduled.map((data)=>{
                return (<OneDay From="Custom" Day={data.Date} OnDateChange={OnDateChange} ScheduleId ={data.ScheduleId} SetSchedule={SetSchedule}/> )

              })}
            </div>
            <div className="CustomScheduleButton" onClick={()=>{AddNewSchedule(SetSchedule)}}>Add Schedule On Custom Date</div>

        </div>
    )

}


function OnDateChange(Date,ScheduleId)
{
    // console.log(Date);
    // console.log(ScheduleId);
}

function AddNewSchedule(SetSchedule) {
    const ScheduleId=uuidv4();
    const data ={ScheduleId:ScheduleId,Date:""};
    console.log(data.ScheduleId);

    SetSchedule(Element=>[...Element,data]);
}



export default CustomSchedule;