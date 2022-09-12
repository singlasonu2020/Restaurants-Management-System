import React  from "react";
import ReactDOM from "react-dom/client";
// import "../Styling/AdminWindowHome.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
// import NewReservation from "../AdminWindowNewReservation/NewReservation";


function NavBar(data) {
  let NameOfAdministrator = "Sonu Singla";
  const navigation = useNavigate();
  return (
    <div id="AdminWindowHeaderReturnDiv">
      <FontAwesomeIcon icon={faBars} id="AdminWindowHeaderBarIcon" onClick={(e)=>{OpenSideBar(data.NavBarRef)}}/>
      <div id="AdminWindowNavBarRightSideOptionDiv">
      <h3 className = "AdminWindowNavBarRightSideOption">Welcome {NameOfAdministrator}</h3>
      <h3 className = "AdminWindowNavBarRightSideOption" >
        <FontAwesomeIcon icon={faUser} id="AdminWindowNavBarRightSideOptionDivProfileIcon" />
        <span  className = "AdminWindowNavBarRightSideOptionSpan">Profile</span></h3>
      <h3 id="AdminWindowNavBarRightSideOptionDivLogout"  className = "AdminWindowNavBarRightSideOption" onClick={()=>{}}>
        <FontAwesomeIcon icon={faSignOut} id="AdminWindowNavBarRightSideOptionDivLogoutIcon" />
        <span  className = "AdminWindowNavBarRightSideOptionSpan">Log out</span></h3>
        <h3 className = "AdminWindowNavBarRightSideOptionNewReservation" onClick={()=>{navigation("/admin_window/new_reservation")}}>New Reservation</h3>

      </div>
      
    </div>
  );
}



function OpenSideBar(NavBarRef){
  
  NavBarRef.current.classList.remove("DisplayNone");

  setTimeout(() => {
      window.addEventListener('click',OnClickAnyWhereWhenSideBarIsOpen)
    }, 1)


    const OnClickAnyWhereWhenSideBarIsOpen=(e)=>
    {
      if (!NavBarRef.current.contains(e.target))
      {
        NavBarRef.current.classList.add("DisplayNone");
        window.removeEventListener('click',OnClickAnyWhereWhenSideBarIsOpen);
      } 
    }
    
}

export default NavBar;
