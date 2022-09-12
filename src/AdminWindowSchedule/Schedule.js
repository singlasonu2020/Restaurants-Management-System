import React from "react";
import "../Styling/AdminWindowSchedule.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Outlet, NavLink } from "react-router-dom";




function AddSchedule() {


  return (
    <div id="AdminWindowWorkingTimeReturningDiv" >

      <div id="AdminWindowScheduleReturningDivHeadingDiv" className="AdminWindowWorkingTimeReturningDivHeadingDiv">
        <h1 id="AdminWindowScheduleReturningDivHeadingDivHeading" className="AdminWindowWorkingTimeReturningDivHeadingDivHeading">Add Schedule</h1>
        <h3 id="AdminWindowScheduleReturningDivHeadingDivSubHeading" className="AdminWindowWorkingTimeReturningDivHeadingDivSubHeading"> <FontAwesomeIcon icon={faInfoCircle} id="AdminWindowWorkingTimeInfoCircle" /> Below is the form to set the working Schedule for the restaurant. You can also set different settings for some specific dates by clicking on the Tab Custom.</h3>
      </div>


      <div id="AdminWindowWorkingTimeReturningDivMainDic" >
        <div id="AdminWindowWorkingTimeReturningDivMainDicButtonDiv">
          <NavLink to="/admin_window/add_schedule/default" className={({ isActive }) => isActive ? 'AdminWindowWorkingTimeReturningDivMainDicButtonDivCustom isActive_workingTime' : 'AdminWindowWorkingTimeReturningDivMainDicButtonDivCustom'}  >Default</NavLink>
          <NavLink to="/admin_window/add_schedule/custom" className={({ isActive }) => isActive ? 'AdminWindowWorkingTimeReturningDivMainDicButtonDivCustom isActive_workingTime' : 'AdminWindowWorkingTimeReturningDivMainDicButtonDivCustom'}  >Custom </NavLink>
        </div>
        <div id="AdminWindowScheduleReturningDivMainDivContaint" className="AdminWindowWorkingTimeReturningDivMainDivContaint">
          <Outlet />
        </div>
      </div>


    </div>
  )
}



export default AddSchedule;