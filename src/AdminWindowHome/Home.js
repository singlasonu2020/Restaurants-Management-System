import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import "../Styling/AdminWindowHome.css";
import NavBar from './NavBar';




function AdminWindow() {
    document.getElementById("root").style.backgroundImage = "none";
    document.getElementById("root").style.backgroundColor = "rgb(243,243,244)";

     useEffect(()=>{
        AdminWindowReadyToRender();

    });

    return (
    
       
        <div id="AdminWindowReturnDiv">


            <div><div id='AdminWindowHeader' ></div></div>
            <div id='AdminWindowSideBar'></div>
            <div id= "AdminWindowContaintBar"></div>

        </div>

    );


}

function AdminWindowReadyToRender() {

   
    const root = ReactDOM.createRoot(document.getElementById('AdminWindowHeader'));
    root.render(
        <NavBar />
    );
}
export default AdminWindow;
