import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import "../Styling/MapView.css"
import MapViewTimeLine from "./MapViewTimeLine";
import MapViewMap from "./MapViewMap";


let ListRef = [];



function CheckBooking(startTimeTemp, endTimeTemp, TableNumber) {
    if (TableNumber % 2 != 0)
        return true;

    return false;

}




function MapView(data) {

    let SelectedTable=data.SelectedTable;
    let SetSelectedTable= data.SetSelectedTableData
    console.log(data);
    let NewTimigHrs = new Date().getHours();
    const NewTimigMin = new Date().getMinutes();
    const Timing = { StartTime: "07:00", EndTime: "24:00" };
    let startTimeTemp;
    let endTimeTemp;


    if (data.ST != undefined) {
        startTimeTemp = data.ST;
        endTimeTemp = data.ET;
    }
    else {

        startTimeTemp = NewTimigHrs * 60 + NewTimigMin;
        endTimeTemp = NewTimigHrs * 60 + NewTimigMin + 60;
    }


    const [floorNumber, SetFloorNumber] = useState(1);

    const Set = (val, from) => {
        if (from == "Min") {
            startTimeTemp = val;
        }
        else if (from == "Max") {
            endTimeTemp = val;
        }
        SetSelectedTable(()=>[]);
        const root = ReactDOM.createRoot(document.getElementById("TimeShow"));
        root.render(TimeShowfUN(startTimeTemp, endTimeTemp));
        TableBookingData(startTimeTemp, endTimeTemp);
    }


    const SetRef = (TableData, TableRef) => {

        let TableNumber=TableData.TableNumber;
        let check = CheckBooking(startTimeTemp,endTimeTemp,TableNumber);
        let CheckSelectedA =CheckSelected(TableData);

        console.log(CheckSelectedA);
        if (check) {
            TableRef.current.classList.add("TableBookedClass");
        }
        else if(CheckSelectedA>-1)
        {
            TableRef.current.classList.add("selectedTable");
        }
        const Temp = {
            TableNumber: TableNumber,
            TableRef: TableRef
        }
        ListRef.push(Temp);
    }

    const CheckSelected = (TN)=>{
        return SelectedTable.indexOf(TN);
    }

    const ClickOnTable = (item) => {
        if(data.SelectTable==true)
        {
            const a = CheckSelected(item);

            if(CheckBooking(startTimeTemp,endTimeTemp,item.TableNumber))
            {
                window.alert(`Sory Table No. ${item.TableNumber} is Already Booked Please Select Other Table`);
            }
         
            else if(a>-1)
            {
                SetSelectedTable(SelectedTable.filter(e => e.TableNumber !== item.TableNumber)) ;
                ListRef.forEach((e)=>{
                    if(e.TableNumber==item.TableNumber)
                    {
                        e.TableRef.current.classList.remove("selectedTable");
                    }
                })   
                window.alert("Remove From Selected Tables");
            }
            else
            {
                
                SetSelectedTable((e)=>[...e,item]);
                ListRef.forEach((e)=>{
                    if(e.TableNumber==item.TableNumber)
                    {
                        e.TableRef.current.classList.add("selectedTable");
                    }
                })
                window.alert(`Table No. ${item.TableNumber} is Select Thanks`);


            }
        }

    }




    return (
        <div style={{ height: "100%", display: "flex", flexDirection: "column-reverse" ,overflow:"auto"}}>
            <div><MapViewTimeLine Timing={Timing} StartTime={startTimeTemp} Set={Set} /></div>
            <div id="MapViewShow" className="MapViewMapRender" style={{ overflowX: "auto", overflowY: "auto" }}><MapViewMap SetRef={SetRef} floorNumber={floorNumber} SetRef={SetRef} ClickOnTable={ClickOnTable} /></div>
            <div style={{ width: "100%", display: "flex", backgroundColor: "white" }}>
                <div style={{ display: "flex", flex: "0.5" }}>{FloorOptionFuntion(floorNumber, SetFloorNumber)}</div>
                <div id="TimeShow" className="TimeShow">



                    {TimeShowfUN(startTimeTemp, endTimeTemp)}
                </div>
            </div>

        </div>
    )
}



function TimeShowfUN(start, end) {
    const array = [];
    array.push(<div className="BookedColorShow" >Booked</div>);
    array.push(<div className="TimeShowDiv">Time {(start - start % 60) / 60}:{start % 60} - {((end - end % 60) / 60)}:{end % 60}</div>);
    return array
}
function FloorOptionFuntion(floorNumber, SetFloorNumber) {
    const FloorOptionRender = [];
    const FloorOption = [1, 2];
    FloorOption.forEach((item) => {
        let ClassName = "";
        if (item == floorNumber) {

            ClassName = "FloorButtonClick";


        }
        else {
            ClassName = "FloorButton";


        }
        FloorOptionRender.push(<div id={`Floor-${item}`} className={ClassName} onClick={() => { SetFloorNumber(item); ListRef = []; }}>
            Floor {item}
        </div>)
    });

    return FloorOptionRender;
}
function TableBookingData(start, end) {

    console.log("1");
    ListRef.forEach((element) => {
        element.TableRef.current.classList.remove("TableBookedClass");
        element.TableRef.current.classList.remove("selectedTable");
        let check = CheckBooking(start, end, element.TableNumber);
        if (check == true)
            element.TableRef.current.classList.add("TableBookedClass");
    })

}





export default MapView;