import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faExclamationTriangle  } from "@fortawesome/free-solid-svg-icons";
import "../Styling/AdminWindowWorkingTime.css"
import { Outlet,NavLink} from "react-router-dom";




function WorkingTime() {


    return (
        <div id="AdminWindowWorkingTimeReturningDiv" >

            <div id="AdminWindowWorkingTimeReturningDivHeadingDiv" className="AdminWindowWorkingTimeReturningDivHeadingDiv">
                <h1 id="AdminWindowWorkingTimeReturningDivHeadingDivHeading" className="AdminWindowWorkingTimeReturningDivHeadingDivHeading">Working Time Setting</h1>
                <h3 id="AdminWindowWorkingTimeReturningDivHeadingDivSubHeading" className="AdminWindowWorkingTimeReturningDivHeadingDivSubHeading"> <FontAwesomeIcon icon={faInfoCircle} id="AdminWindowWorkingTimeInfoCircle" /> Below is the form to set the working time for the restaurant. You can also set different settings for some specific dates by clicking on the Tab Custom.</h3>
            </div>

            <h6 id="MessageforSucces" ><spam id="MessageforSuccesSuccesIcon" ><FontAwesomeIcon icon={faCheck}/></spam><spam id="MessageforSuccesRejectIcon"><FontAwesomeIcon icon={faExclamationTriangle}/></spam> <spam id="MessageforSuccesMessage"></spam></h6>

            <div id="AdminWindowWorkingTimeReturningDivMainDic" >
                <div id="AdminWindowWorkingTimeReturningDivMainDicButtonDiv">
                    <NavLink to="/admin_window/working_time/default"  className={({ isActive }) =>isActive ? 'AdminWindowWorkingTimeReturningDivMainDicButtonDivCustom isActive_workingTime' : 'AdminWindowWorkingTimeReturningDivMainDicButtonDivCustom'}  >Default</NavLink>
                    <NavLink to="/admin_window/working_time/custom" className={({ isActive }) =>isActive ? 'AdminWindowWorkingTimeReturningDivMainDicButtonDivCustom isActive_workingTime' : 'AdminWindowWorkingTimeReturningDivMainDicButtonDivCustom'}  >Custom </NavLink>

                </div>
                <div id="AdminWindowWorkingTimeReturningDivMainDivContaint"   className="AdminWindowWorkingTimeReturningDivMainDivContaint" >
                  <Outlet />
                </div>
            </div>
        </div>
    )

}






export default WorkingTime;