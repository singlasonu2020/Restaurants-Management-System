import React, { useEffect, useState,useRef } from "react";
import ReactDOM from "react-dom/client";
import "../Styling/MapView.css"
import MapViewTimeLine from "./MapViewTimeLine";
import MapViewMap from "./MapViewMap";


let ListRef=[];


function CheckBooking(startTimeTemp,endTimeTemp,TableNumber)
{
    if(TableNumber%2!=0)
    return true;

    return false;

}


function MapView()
{

    let  NewTimigHrs = new Date().getHours();
    const  NewTimigMin = new Date().getMinutes();
    const Timing={StartTime: "07:00",EndTime: "24:00"};
    
    let startTimeTemp=NewTimigHrs*60+NewTimigMin;
    let endTimeTemp=NewTimigHrs*60+NewTimigMin+60;

    const[floorNumber,SetFloorNumber] = useState(1);

    const Set=(val,from)=>{
        if(from=="Min")
        {
            startTimeTemp=val;
        }
        else if(from=="Max")
        {
            endTimeTemp=val;
        }
        const root = ReactDOM.createRoot(document.getElementById("TimeShow"));
        root.render(TimeShowfUN(startTimeTemp,endTimeTemp));
        TableBookingData(startTimeTemp,endTimeTemp);
    }

  

    const SetRef = (TableNumber, TableRef) => {

        let check = CheckBooking(startTimeTemp,endTimeTemp,TableNumber);
        if(check)
        {
            TableRef.current.classList.add("TableBookedClass");
        }
        const Temp = {
            TableNumber:TableNumber,
            TableRef:TableRef
        }
        ListRef.push(Temp);
    }

  


    
    return(
        <div style={{height:"100%",display:"flex",flexDirection: "column-reverse"}}>
            <div><MapViewTimeLine Timing={Timing} StartTime={startTimeTemp} Set={Set}  /></div>
            <div id="MapViewShow" className="MapViewMapRender"style={{overflowX:"auto",overflowY:"auto"}}><MapViewMap SetRef ={SetRef} floorNumber={floorNumber} SetRef={SetRef}/></div>
            <div style={{width:"100%" ,display:"flex",backgroundColor:"white"}}>
                <div style={{display:"flex",flex:"0.5"}}>{FloorOptionFuntion(floorNumber,SetFloorNumber)}</div>
                <div id="TimeShow" className="TimeShow">

                

                    {TimeShowfUN(startTimeTemp,endTimeTemp)}
                </div>
            </div>

        </div>
    )
}



function TimeShowfUN(start,end)
{
    const array =[];
    array.push(<div className="BookedColorShow" >Booked</div>);
    array.push(<div className="TimeShowDiv">Time {(start-start%60)/60}:{start%60} - {((end-end%60)/60)}:{end%60}</div>);
    return array
}
function FloorOptionFuntion(floorNumber,SetFloorNumber) {
    const FloorOptionRender = [];
    const FloorOption=[1,2];
    FloorOption.forEach((item) => {
        let ClassName = "";
        if (item == floorNumber) {

            ClassName = "FloorButtonClick";


        }
        else {
            ClassName = "FloorButton";


        }
        FloorOptionRender.push(<div id={`Floor-${item}`} className={ClassName} onClick={() => { SetFloorNumber(item); ListRef=[]; }}>
            Floor {item}
        </div>)
    });

    return FloorOptionRender;
}
function TableBookingData(start,end)
{
    
    console.log("1");
    ListRef.forEach((element)=>{
       let check = CheckBooking(start,end ,element.TableNumber);
       if(check==true)
        element.TableRef.current.classList.add("TableBookedClass");

    })

}



export default MapView;