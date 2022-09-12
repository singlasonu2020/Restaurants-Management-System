import React, { useState ,useEffect} from "react";
import "../Styling/AdminWindowNewReservation.css";
import { Outlet,NavLink} from "react-router-dom";
import NewReservationData from "./UseContext";
import { useLocation,useNavigate} from "react-router-dom";






function NewReservation() {
    const [ReservationData, SetReservationData] = useState();
    const [TableData, SetSetTableData] = useState();
    const [ClientData, SetClientData] = useState();
    const [PaymentData, SetPaymentData] = useState();
   
    const location = useLocation();
    const navigator =useNavigate();

    let SaveDataFunCtion
    const SetReservatioDataFunction = (fun)=>{
        SaveDataFunCtion=fun;
    }


    const ClickOnSaveAndNext =()=>{
       const option = location.pathname.split("/")[3];
       console.log(option);
        const data = SaveDataFunCtion();
        switch (option) {
            case "reservation_details":
                SetReservationData(data);
                navigator("select_seat")
              break;
            case "select_seat":
                SetSetTableData(data);
                navigator("client_details")

              break;
            case "client_details":
                SetClientData(data);
                navigator("payment_details")
              break;
            case "payment_details" :   
              SetPaymentData(data);
              break;
           
            
        }
    }


    const user = {ReservationData:ReservationData,TableData:TableData,ClientData:ClientData,PaymentData:PaymentData,SetReservatioDataFunction:SetReservatioDataFunction};

    useEffect(()=>{
        if( location.pathname.split("/")[3]=="payment_details")
        {
            document.getElementById("SaveAndNextButton").classList.add("InActiveButton");
        }
        else
        {
            document.getElementById("SaveAndNextButton").classList.remove("InActiveButton");
        }
    },)

   
    return (
        <NewReservationData.Provider value={user}>
        <div className="NewReservation ">
            <div className="MainNewReservation">
                <div className="NewReservationOption">
                    <NavLink  to="reservation_details"   className={({ isActive }) =>isActive ? 'NewReservationBottons ClickNewReservationBottons' : 'NewReservationBottons'}> Reservation Details</NavLink>
                    <NavLink to="select_seat"  className={({ isActive }) =>isActive ? 'NewReservationBottons ClickNewReservationBottons' : 'NewReservationBottons'}>Select Table</NavLink>
                    <NavLink  to="client_details" className={({ isActive }) =>isActive ? 'NewReservationBottons ClickNewReservationBottons' : 'NewReservationBottons'}>Client Details</NavLink>
                    <NavLink to="payment_details"  className={({ isActive }) =>isActive ? 'NewReservationBottons ClickNewReservationBottons' : 'NewReservationBottons'}>Payment</NavLink>
                </div>
                <div id="NewReservationContainer" className="NewReservationContainer">
                    <Outlet/>
                </div>

                
                <div className="ButtonForNewReservationDetails">
                   <div className="CancelBottonReservationDetails">Cancel</div>
                   <div id="SaveAndNextButton" className="NextBottonReservationDetails" onClick={()=>{ ClickOnSaveAndNext()}}>Save & Next</div>
                </div>


            </div>

        </div>
        </NewReservationData.Provider>
    );

}




export default NewReservation;
