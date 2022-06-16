import React, { useState } from "react";
import "../Styling/AdminWindowSchedule.css";
import OneDay from "./DefaultScheduleOneDay";






function DefaultSchedule() {

    return (
        <div className="DefaultSchesduleReturnDiv">
            <OneDay Day="Monday" />
            <OneDay Day="Tuesday" />
            <OneDay Day="Wednesday"/>
            <OneDay Day="Thursday"   />
            <OneDay Day="Friday" />
            <OneDay Day="Saturday" />
            <OneDay Day="Sunday" />
        </div>
    )
}






export default DefaultSchedule;