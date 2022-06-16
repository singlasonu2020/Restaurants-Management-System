import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "../Styling/AdminWindowNewReservation.css";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReservationDetails from "./ReservationDetails.js";

function NewReservation() {
    const [option, SetOption] = useState("ReservationDetails");

    useEffect(() => {
        ClickButton(option);
    })

    return (

        <div className="NewReservation">
            <div className="MainNewReservation">
                <div className="NewReservationOption">
                    <div id="ReservationDetails" onClick={(e) => { SetOption(e.target.id) }} className="NewReservationBottons"> Reservation Details</div>
                    <div id="SelectTable" onClick={(e) => { SetOption(e.target.id) }} className="NewReservationBottons">Select Table</div>
                    <div id="ClientDetails" onClick={(e) => { SetOption(e.target.id) }} className="NewReservationBottons">Client Details</div>
                    <div id="Payment" onClick={(e) => { SetOption(e.target.id) }} className="NewReservationBottons">Payment</div>
                </div>
                <div id="NewReservationContainer" className="NewReservationContainer">

                </div>

                
                <div className="ButtonForNewReservationDetails">
                   <div className="CancelBottonReservationDetails">Cancel</div>
                   <div className="NextBottonReservationDetails">Next</div>
                </div>


            </div>

        </div>
    )

}










function ClickButton(option) {
    document.getElementById("ReservationDetails").classList.remove("ClickNewReservationBottons");
    document.getElementById("SelectTable").classList.remove("ClickNewReservationBottons");
    document.getElementById("ClientDetails").classList.remove("ClickNewReservationBottons");
    document.getElementById("Payment").classList.remove("ClickNewReservationBottons");
    document.getElementById(option).classList.add("ClickNewReservationBottons");

    const root = ReactDOM.createRoot(document.getElementById("NewReservationContainer"));
    switch (option) {
        case "ReservationDetails":
            root.render(<ReservationDetails />);
          break;
        case "SelectTable":
            root.render(<ReservationDetails />);
          break;
        case "ClientDetails":
            root.render(<ReservationDetails />);
          break;
        case "Payment" :
            root.render(<ReservationDetails />);
          break;
       
        
      }

}
export default NewReservation;