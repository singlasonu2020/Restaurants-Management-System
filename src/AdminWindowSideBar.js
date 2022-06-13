import React ,{useEffect} from "react";
import ReactDOM from "react-dom/client";
import SideBarOption from "./AdminWindowSideBarOption";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faCutlery } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WorkingTime from "./AdminWindowWorkingTime"
import SeatMap from "./AdminWindowSeatMap"

function OnClickAnyWhereWhenSideBarIsOpen(e){
  console.log("hello");
  if (!document.getElementById('AdminWindowSideBar').contains(e.target)){
    console.log("hello from side bar else");
      document.getElementById("AdminWindowSideBar").innerHTML="";
      window.removeEventListener('click',OnClickAnyWhereWhenSideBarIsOpen);
  } 
}

function SideBar() {
  useEffect(()=>{
    setTimeout(() => {
      window.addEventListener('click',OnClickAnyWhereWhenSideBarIsOpen)

    }, 1)}
  );
  return (
    <div id="AminWindowSideBar" style={styleForAdminWindowSideBarReturningDiv}>
      <div style={{ margin: "3%" }} id="AdminWindowSideBarCompanyDetails">
        <img
          src="/img/logo.png"
          alt="Logo"
          id="EntryAnimationReturningDivLogo"
        />
        <h1 style={{ fontSize: "18px", paddingTop: "10px" }}>
          Restaurant Booking System
        </h1>
      </div>

      <div
        id="AdminWindowSideBarOption"
        style={SyleForAdminWindowSideBarOption}
      >
        <SideBarOption Name={"Dashboard"} Icon={faThLarge} />
        <SideBarOption
          Name={"Reservations"}
          Icon={faList}
          InsideOptionIcon={faAngleLeft}
          OnClickFunction={OpenMoreOptionInsideOption}
          ArrayOfInsideItem= {[{Name :" New Reservation" , OnClickFunctionPass :""}, {Name :"Reservations List" , OnClickFunctionPass:""}]}
        
        />
        <div id="AdminWindowSideBarOptionReservationsOption"></div>

        <SideBarOption
          Name={"Restaurant"}
          Icon={faCutlery}
          InsideOptionIcon={faAngleLeft}
          OnClickFunction={OpenMoreOptionInsideOption}
          ArrayOfInsideItem={[{Name :"Working Time" , OnClickFunctionPass :AdminSideBarOnClickOnWorkingTime}, {Name :"Restaurant Map" , OnClickFunctionPass:AdminSideBarOnClickOnSeatMap}]}
          
        />
        <div id="AdminWindowSideBarOptionRestaurantOption"></div>
      </div>
      {console.log("heelo from inside")}
    </div>
  );
}


let styleForAdminWindowSideBarReturningDiv = {
  position: "absolute",
  left: 0,
  top: 0,
  backgroundColor: "rgb(35,41,54,0.9)",
  height: "100%",
  textAlign: "center",
  color: "white",
  zIndex: "+1"

};

let SyleForAdminWindowSideBarOption = {
  textAlign: "left",
  marginTop: "50px",
};

let OpenOptionOfRestaurantValue = false;
let OpenOptionOfReservationsValue = false;

function OpenMoreOptionInsideOption(OnClickElement, ArrayOfInsideItem ) {

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
      className="AdminWindowNavBarRightSideOptionDivLogoutIcon"
      style={{ paddingRight: "10px", float: "right" }}
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
      className="AdminWindowNavBarRightSideOptionDivLogoutIcon"
      style={{ paddingRight: "10px", float: "right" }}
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
export default SideBar;
