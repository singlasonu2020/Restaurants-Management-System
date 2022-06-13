import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './AdminWindowHeader';




function AdminWindow() {
    document.getElementById("root").style.backgroundImage = "none";
    document.getElementById("root").style.backgroundColor = "rgb(243,243,244)";

     useEffect(()=>{

        AdminWindowReadyToRender()
        const WindowHeight = window.screen.height;
        const RemaingHeight = WindowHeight - 55;
        document.getElementById("AdminWindowContaintBar").style.height = `${RemaingHeight}px`;    
        console.log(document.getElementById("AdminWindowContaintBar").style.height);

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

    console.log("Hello from");
    const root = ReactDOM.createRoot(document.getElementById('AdminWindowHeader'));
    root.render(
        <NavBar />
    );
}
export default AdminWindow;
