import React ,{useEffect} from "react";
import ReactDOM from "react-dom/client";
import SideBarOption from "./SideBarOption";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faCutlery } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WorkingTime from "../AdminWindowWorkingTime/WorkingTime"
import SeatMap from "../AdminWindowSeatMap/SeatMap"
import AddSchedule from "../AdminWindowSchedule/Schedule";
import ReservationList from "../AdminWindowReservationList/ReservationList";
import NewReservation from "../AdminWindowNewReservation/NewReservation";
import "../Styling/AdminWindowSideBar.css";


let OpenOptionOfRestaurantValue = false;
let OpenOptionOfReservationsValue = false;

function OnClickAnyWhereWhenSideBarIsOpen(e){
  if (!document.getElementById('AdminWindowSideBar').contains(e.target)){
    console.log("hello from side bar else");
      document.getElementById("AdminWindowSideBar").innerHTML="";
      OpenOptionOfRestaurantValue = false;
 OpenOptionOfReservationsValue = false;

      window.removeEventListener('click',OnClickAnyWhereWhenSideBarIsOpen);
  } 
}



//Main Function Render
function SideBar() {
  useEffect(()=>{
    setTimeout(() => {
      window.addEventListener('click',OnClickAnyWhereWhenSideBarIsOpen)

    }, 1)}
  );
  return (
    <div id="AminWindowSideBar">
      <div id="AdminWindowSideBarCompanyDetails">
        <img
          src="/img/logo.png"
          alt="Logo"
          className="EntryAnimationReturningDivLogo"
        />
        <h1 id="AdminWindowSideBarRestaurantName">
          Restaurant Booking System
        </h1>
      </div>

      <div id="AdminWindowSideBarOption">
        <SideBarOption Name={"Dashboard"} Icon={faThLarge} />
        <SideBarOption
          Name={"Reservations"}
          Icon={faList}
          InsideOptionIcon={faAngleLeft}
          OnClickFunction={OpenMoreOptionInsideOption}
          ArrayOfInsideItem= {[{Name :" New Reservation" , OnClickFunctionPass :AdminSideBarOnClickOnNewReservation}, {Name :"Reservations List" , OnClickFunctionPass:AdminSideBarOnClickOnReservationList}]}
        
        />
        <div id="AdminWindowSideBarOptionReservationsOption"></div>

        <SideBarOption
          Name={"Restaurant"}
          Icon={faCutlery}
          InsideOptionIcon={faAngleLeft}
          OnClickFunction={OpenMoreOptionInsideOption}
          ArrayOfInsideItem={[{Name :"Working Time" , OnClickFunctionPass :AdminSideBarOnClickOnWorkingTime}, {Name :"Restaurant Map" , OnClickFunctionPass:AdminSideBarOnClickOnSeatMap},{Name :"Schedule" , OnClickFunctionPass:AdminSideBarOnClickOnSchedule}]}
          
        />
        <div id="AdminWindowSideBarOptionRestaurantOption"></div>
      </div>
      {console.log("heelo from inside")}
    </div>
  );
}




function OpenMoreOptionInsideOption(OnClickElement, ArrayOfInsideItem ) {

  console.log("hellooooo");
  switch (OnClickElement) {
    case "Restaurant":
      if (!OpenOptionOfRestaurantValue) {
        CloseAllOtherOption();
        OpenOptionOfRestaurantOn(OnClickElement, ArrayOfInsideItem );
        OpenOptionOfRestaurantValue = true;
        
      } else {
        console.log("hi from OpenMoreOptionInsideOption shubham");
        OpenOptionOfRestaurantOf(OnClickElement);
        OpenOptionOfRestaurantValue = false;
      }
      break;
    case "Reservations":
      if (!OpenOptionOfReservationsValue) {
        CloseAllOtherOption();
        OpenOptionOfRestaurantOn(OnClickElement, ArrayOfInsideItem);
        OpenOptionOfReservationsValue = true;
      } else {
        OpenOptionOfRestaurantOf(OnClickElement);
        OpenOptionOfReservationsValue = false;
      }
      break;
  }
}


function OpenOptionOfRestaurantOn(OnClickElement, ArrayOfInsideItem) {
  console.log(ArrayOfInsideItem);
  const RenderElement = ReactDOM.createRoot(
    document.getElementById(`AdminWindowSideBarOption${OnClickElement}Option`)
  );
  RenderElement.render(
    <div id={`RenderMoreOptionInside${OnClickElement}`}>
      {ArrayOfInsideItem.map((i) => (<SideBarOption Name={i.Name} OnClickFunction={i.OnClickFunctionPass}/>))}
       
     

    </div>
  );

  const RenderIconElement = ReactDOM.createRoot(
    document.getElementById(
      `AdminWindowSideBarOptionReturnDivUpDownIcon${OnClickElement}`
    )
  );
  RenderIconElement.render(
    <FontAwesomeIcon
      icon={faAngleDown}
      className="AdminWindowSideBarAngleDownIcon"
    />
  );
  let OnClickElementInside = document.getElementById(
    `AdminWindowSideBarOptionReturnDiv${OnClickElement}`
  );
  let Element = document.getElementById(
    `AdminWindowSideBarOption${OnClickElement}Option`
  );

  OnClickElementInside.style.paddingLeft = "6%";
  let widthOfLeftBorder = (OnClickElementInside.clientWidth * 2.0) / 100;
  console.log(widthOfLeftBorder);
  OnClickElementInside.style.borderLeftColor = "white";
  OnClickElementInside.style.borderLeftStyle = "solid";
  OnClickElementInside.style.borderLeftWidth = `${widthOfLeftBorder}px`;
  Element.style.borderLeftColor = "white";
  Element.style.borderLeftStyle = "solid";
  Element.style.borderLeftWidth = `${widthOfLeftBorder}px`;
  
}

function OpenOptionOfRestaurantOf(OnClickElement) {
  const RenderIconElement = ReactDOM.createRoot(
    document.getElementById(
      `AdminWindowSideBarOptionReturnDivUpDownIcon${OnClickElement}`
    )
  );
  RenderIconElement.render(
    <FontAwesomeIcon
      icon={faAngleLeft}
      className="AdminWindowSideBarAngleDownIcon"
      
    />
  );

  let OnClickElementInside = document.getElementById(
    `AdminWindowSideBarOptionReturnDiv${OnClickElement}`
  );
  let Element = document.getElementById(
    `AdminWindowSideBarOption${OnClickElement}Option`
  );

  Element.innerHTML = "";
  OnClickElementInside.style.paddingLeft = "8%";
  OnClickElementInside.style.borderLeft = "";
  Element.style.borderLeft = "";
}

function CloseAllOtherOption() {
  OpenOptionOfRestaurantOf("Restaurant");
  OpenOptionOfRestaurantOf("Reservations");
  OpenOptionOfRestaurantValue = false;
  OpenOptionOfReservationsValue = false;
}

function AdminSideBarOnClickOnWorkingTime()
{
 
  const RenderWorkingTimeElement = ReactDOM.createRoot(
    document.getElementById(
      "AdminWindowContaintBar"
    )
  );
  RenderWorkingTimeElement.render(<WorkingTime/>)
  document.getElementById("AdminWindowSideBar").innerHTML="";

}

function AdminSideBarOnClickOnSeatMap() {
  
  const RenderWorkingTimeElement = ReactDOM.createRoot(
    document.getElementById(
      "AdminWindowContaintBar"
    )
  );
  RenderWorkingTimeElement.render(<SeatMap/>)
  document.getElementById("AdminWindowSideBar").innerHTML="";
}

function AdminSideBarOnClickOnSchedule() {
  const RenderWorkingTimeElement = ReactDOM.createRoot(
    document.getElementById(
      "AdminWindowContaintBar"
    )
  );
  RenderWorkingTimeElement.render(<AddSchedule/>)
  document.getElementById("AdminWindowSideBar").innerHTML="";
  
}

function AdminSideBarOnClickOnReservationList() {
  const RenderWorkingTimeElement = ReactDOM.createRoot(
    document.getElementById(
      "AdminWindowContaintBar"
    )
  );
  RenderWorkingTimeElement.render(<ReservationList/>)
  document.getElementById("AdminWindowSideBar").innerHTML="";
  document.getElementById("AdminWindowContaintBar").style.display = "fixed";
  
}


function AdminSideBarOnClickOnNewReservation()
{
  const RenderWorkingTimeElement = ReactDOM.createRoot(
    document.getElementById(
      "AdminWindowContaintBar"
    )
  );
  RenderWorkingTimeElement.render(<NewReservation/>)
  document.getElementById("AdminWindowSideBar").innerHTML="";
  document.getElementById("AdminWindowContaintBar").style.display = "fixed";
}
export  {SideBar ,AdminSideBarOnClickOnNewReservation};
