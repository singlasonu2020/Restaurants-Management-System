import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {EntryAnimation,Login} from "./EntryAnimation/EntryAnimation"
import WorkingTime from "./AdminWindowWorkingTime/WorkingTime"
import SeatMap from "./AdminWindowSeatMap/SeatMap"
import AddSchedule from "./AdminWindowSchedule/Schedule";
import {ReservationList,TimeLine,TempMapView,CellViewINSIDE} from "./AdminWindowReservationList/ReservationList";
import NewReservation from "./AdminWindowNewReservation/NewReservation";
import AdminWindow from "./AdminWindowHome/Home";
import WorkingTimeDefault from "./AdminWindowDefaultWorkingTime/DefaultWorkingTime";
import WorkingTimeCustom from "./AdminWindowCustomWorkingTime/CustomWorkingTime"
import LoginDiv from "./LoginWindow/Login";
import AdminForgotPassword from "./LoginWindow/ForgotPassword"
import AdmimOtpWindow from "./LoginWindow/Otp";
import EnterNewPasswordPage from "./LoginWindow/EnterNewPassword";
import AdminNewPasswordUpdateSuccessfully from "./LoginWindow/PasswordUpdateSuccessfully";
import ReservationDetails from "./AdminWindowNewReservation/ReservationDetails.js";
import ClientDetails from "./AdminWindowNewReservation/ClientDetails.js";
import SelectTable from "./AdminWindowNewReservation/SelectTable"
import Payment from "./AdminWindowNewReservation/Paynment";
import DefaultSchedule from "./AdminWindowSchedule/DefaultScheduleForm";
import CustomSchedule from "./AdminWindowSchedule/CustomScheduleForm";
import DashBoard from "./AdminWindowDashBorad/dash_board";




const Time_cell =()=>
{
   
  if(window.innerWidth<500)
  {
    return <Navigate to="../full_screen_cell_view"/>;
  }
  else if(window.innerWidth<1200)
  {
    return <Navigate to="../full_screen_time_line_view"/>;
  }
 
  const array=[];
  array.push(<TimeLine/>);
  array.push(<CellViewINSIDE/>)
  return array;


}

const Time_cell_A = ()=>
{
  if(window.innerWidth<500)
  {
    return <Navigate to="/full_screen_cell_view"/>;
  }
  else if(window.innerWidth<1200)
  {
    return <Navigate to="/full_screen_map_view"/>;
  }
  const array1=[];
  array1.push(<TempMapView/>);
  array1.push(<CellViewINSIDE/>)
  return array1;

}


const AccordingWindowSizeReservationListIndex = ()=>{
  if(window.innerWidth<500)
  {
    return "full_screen_cell_view";
  }
  else if(window.innerWidth<1200)
  {
    return "time_line_view_&_cell_view/full";
  }
  else
  {
    return "time_line_view_&_cell_view";
  }
}




export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EntryAnimation />}/>
        <Route path="admin_login" element={<Login/>}>
        <Route index element={<LoginDiv/>}/>
        <Route path="forgot_password" element={<AdminForgotPassword/>}/>
        <Route path="forgot_password/otp_verify" element={<AdmimOtpWindow/>}/>
        <Route path="forgot_password/otp_verify/enter_new_password" element={<EnterNewPasswordPage/>}/>
        <Route path="forgot_password/otp_verify/enter_new_password/status" element={<AdminNewPasswordUpdateSuccessfully/>}/>

        </Route>

        <Route path="admin_window" element={<AdminWindow />}>


                 <Route index element={<Navigate to="dash_board" />} />
                 <Route path="dash_board" element={<DashBoard />} />
                 <Route path="new_reservation" element={<NewReservation />} >
                      <Route index element={<Navigate to="reservation_details" />} />
                      <Route path="reservation_details" element={<ReservationDetails/>}/>
                      <Route path="select_seat" element={<SelectTable/>}/>
                      <Route path="client_details" element={<ClientDetails/>}/>
                      <Route path="payment_details" element={<Payment/>}/>
                 </Route>


          <Route path="reservation_list" element={<ReservationList />}>
          <Route index element={<Navigate to={AccordingWindowSizeReservationListIndex()} />} />

            <Route path="map_view_&_cell_view" element={<Time_cell_A/>}/>
            <Route path="map_view_&_cell_view/full" element={<TempMapView/>}/>
            <Route path="time_line_view_&_cell_view" element={<Time_cell/>}/>
            <Route path="time_line_view_&_cell_view/full" element={<TimeLine/>}/>
            <Route path="cell_view_&_time_line_view" element={<CellViewINSIDE/>}/>
            <Route path="cell_view_&_time_line_view/full" element={<CellViewINSIDE/>}/>

          </Route>


          <Route path="working_time" element={<WorkingTime />}>
            <Route index element={<Navigate to="default" />} />
            <Route path="default" element={<WorkingTimeDefault />} />
            <Route path="custom" element={<WorkingTimeCustom />} />
          </Route>
          <Route path="seat_map" element={<SeatMap />} />
          <Route path="add_schedule" element={<AddSchedule />} >
             <Route index element={<Navigate to="default" />} />
             <Route path="default" element={<DefaultSchedule />} />
             <Route path="custom" element={<CustomSchedule />} /> 
          </Route>


        </Route>


      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
);