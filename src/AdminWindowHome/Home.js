import React, { useRef } from 'react';
import { Outlet } from "react-router-dom";
import "../Styling/AdminWindowHome.css";
import NavBar from './NavBar';

import {SideBar} from "../AdminWindowSideBar/SideBar";






function AdminWindow() {


    const NavBarRef = useRef();

    
    return (


        <div style={{backgroundColor: "rgb(243,243,244)", position:"fixed",top:"0",bottom:"0",right:"0" ,left:"0", overflowY:"auto"}}>

            <NavBar NavBarRef={NavBarRef}/>
            <SideBar NavBarRef={NavBarRef}/>
            <div id="AdminWindowContaintBar"><Outlet /></div>

        </div>

    );


}


export default AdminWindow;
