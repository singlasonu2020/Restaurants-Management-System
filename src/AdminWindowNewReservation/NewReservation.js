import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "../Styling/AdminWindowNewReservation.css";
import ReservationDetails from "./ReservationDetails.js";
import ClientDetails from "./ClientDetails.js";


function NewReservation() {
    const [option, SetOption] = useState(0);

    useEffect(() => {
        ClickButton(option,SetOption);
    })

    return (

        <div className="NewReservation ">
            <div className="MainNewReservation">
                <div className="NewReservationOption">
                    <div id="ReservationDetails" onClick={(e) => { SetOption(0) }} className="NewReservationBottons"> Reservation Details</div>
                    <div id="SelectTable" onClick={(e) => { SetOption(1) }} className="NewReservationBottons">Select Table</div>
                    <div id="ClientDetails" onClick={(e) => { SetOption(2) }} className="NewReservationBottons">Client Details</div>
                    <div id="Payment" onClick={(e) => { SetOption(3) }} className="NewReservationBottons">Payment</div>
                </div>
                <div id="NewReservationContainer" className="NewReservationContainer">

                </div>

                
                <div className="ButtonForNewReservationDetails">
                   <div className="CancelBottonReservationDetails">Cancel</div>
                   <div className="NextBottonReservationDetails" onClick={()=>{ SetOption(option+1) }}>Save & Next</div>
                </div>


            </div>

        </div>
    )

}










function ClickButton(option,SetOption) {
    console.log(option)
    if(option>3)
    {
        SetOption(0);
        return;
    }

    document.getElementById("ReservationDetails").classList.remove("ClickNewReservationBottons");
    document.getElementById("SelectTable").classList.remove("ClickNewReservationBottons");
    document.getElementById("ClientDetails").classList.remove("ClickNewReservationBottons");
    document.getElementById("Payment").classList.remove("ClickNewReservationBottons");

    const root = ReactDOM.createRoot(document.getElementById("NewReservationContainer"));
    switch (option) {
        case 0:
            root.render(<ReservationDetails />);
            document.getElementById("ReservationDetails").classList.add("ClickNewReservationBottons");

          break;
        case 1:
            root.render(<ReservationDetails />);
            document.getElementById("SelectTable").classList.add("ClickNewReservationBottons");

          break;
        case 2:
            root.render(<ClientDetails />);
            document.getElementById("ClientDetails").classList.add("ClickNewReservationBottons");

          break;
        case 3:
            root.render(<ReservationDetails />);
            document.getElementById("Payment").classList.add("ClickNewReservationBottons");

          break;
       
        
      }

}
export default NewReservation;