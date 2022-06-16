import React  from "react";
import ReactDOM from "react-dom/client";
// import "../Styling/AdminWindowHome.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {SideBar ,AdminSideBarOnClickOnNewReservation} from "../AdminWindowSideBar/SideBar";
// import NewReservation from "../AdminWindowNewReservation/NewReservation";



function NavBar() {
  let NameOfAdministrator = "Sonu Singla";
  return (
    <div id="AdminWindowHeaderReturnDiv">
      <FontAwesomeIcon icon={faBars} id="AdminWindowHeaderBarIcon" onClick={(e)=>{OpenSideBar()}}/>
      <div id="AdminWindowNavBarRightSideOptionDiv">
      <h3 className = "AdminWindowNavBarRightSideOption">Welcome {NameOfAdministrator}</h3>
      <h3 className = "AdminWindowNavBarRightSideOption" >
        <FontAwesomeIcon icon={faUser} id="AdminWindowNavBarRightSideOptionDivProfileIcon" />
        <span  className = "AdminWindowNavBarRightSideOptionSpan">Profile</span></h3>
      <h3 id="AdminWindowNavBarRightSideOptionDivLogout"  className = "AdminWindowNavBarRightSideOption" onClick={()=>{}}>
        <FontAwesomeIcon icon={faSignOut} id="AdminWindowNavBarRightSideOptionDivLogoutIcon" />
        <span  className = "AdminWindowNavBarRightSideOptionSpan">Log out</span></h3>
        <h3 className = "AdminWindowNavBarRightSideOptionNewReservation" onClick={AdminSideBarOnClickOnNewReservation}>New Reservation</h3>

      </div>
      
    </div>
  );
}



function OpenSideBar(){
  
  const AdminWindowSideBar  = ReactDOM.createRoot(document.getElementById("AdminWindowSideBar"));
  AdminWindowSideBar.render(<SideBar/>);
}

export default NavBar;
