import React, { useEffect, useState, useRef } from "react";
import "../Styling/MapView.css"
import Table from "../AdminWindowSeatMap/TableSetIcon";
import ReactDOM from "react-dom/client";



var ArrayofFoor1 = [{ TableNumber: "1", AddressNumber: "200", FloorNumber: "1", NumberOfSeat: "3" }, { TableNumber: "2", AddressNumber: "800", FloorNumber: "1", NumberOfSeat: "4" }];
var ArrayofFoor2 = [{ TableNumber: "3", AddressNumber: "300", FloorNumber: "2", NumberOfSeat: "2" }, { TableNumber: "4", AddressNumber: "2200", FloorNumber: "2", NumberOfSeat: "5" }];

var PreveusRender = [];



function MapViewMap(data) {

   

   

    useEffect(() => {
        FloorTableRender(data.floorNumber,data.SetRef,data.ClickOnTable);        
    })

    return (
        <div>
            <div id="AdminWindowSeatMapMainContentDivMap" style={{ backgroundColor: "black", marginBottom: 0 }} >




                <div id="AdminWindowSeatMapMainContentInsideDivMap"  >

                    <ul >
                        {MakeArrayOfList()}
                    </ul>

                </div>
            </div>
        </div>
    )

}


function MakeArrayOfList() {
    var array = [];
    for (let i = 0; i < 14000; i++) {


        array.push(<li id={`li${i}`} style={{ float: "left", width: "10px", height: "10px", border: "0.3px solid rgb(35,41,54,0.2)" }} ></li>)


    }

    return <tbody>{array}</tbody>
}


function FloorTableRender(RenderFloorNumber,SetRef,ClickOnTable) {

console.log(ClickOnTable);

    PreveusRender.forEach((item) => {
        document.getElementById(`li${item.AddressNumber}`).innerHTML = "";
    })

    PreveusRender = [];
    var FloorTableData = TableData(RenderFloorNumber);


    FloorTableData.forEach((item) => {
        PreveusRender.push(item);

        if(ClickOnTable!=undefined)
        {
            document.getElementById(`li${item.AddressNumber}`).style.cursor="pointer";
            document.getElementById(`li${item.AddressNumber}`).onclick=()=>{ClickOnTable(item)}
            document.getElementById(`li${item.AddressNumber}`).style.backgroundColor="white";

        }
        
        const address = ReactDOM.createRoot(document.getElementById(`li${item.AddressNumber}`));
        address.render(<Table NumberOfSeat={item.NumberOfSeat} TableNumber={item.TableNumber} SetRef={SetRef} />);



    })

}




function TableData(TempFloorNumber) {

    if (TempFloorNumber == 1) {
        return ArrayofFoor1;
    }

    else if (TempFloorNumber == 2) {
        return ArrayofFoor2
    }
    else {
        return [];
    }

}

export default MapViewMap;