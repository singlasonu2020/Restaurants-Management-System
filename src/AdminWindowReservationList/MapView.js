import React, {  useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import "../Styling/MapView.css"
import MapViewTimeLine from "./MapViewTimeLine";
import MapViewMap from "./MapViewMap";
import ReservationListData from "./UseContext";



let ListRef = [];



function CheckBooking(startTimeTemp, endTimeTemp, TableNumber) {
    if (TableNumber % 2 != 0)
        return true;

    return false;

}




function MapView(data) {

    const temp = useContext(ReservationListData);
    if(Object.keys(data).length==0)
    data= temp;
    


    const [SelectedTable,SetSelectedTable] = useState(data.SelectedTable);
   
    let NewTimigHrs = new Date().getHours();
    const NewTimigMin = new Date().getMinutes();
    const Timing = { StartTime: "07:00", EndTime: "24:00" };
    let startTimeTemp;
    let endTimeTemp;

    const SetfUNCTION =()=>
    {
       return( {
        startTimeTemp:startTimeTemp,
        endTimeTemp:endTimeTemp,
        TaleData:SelectedTable
       });

    }

    if(data.SetFun!=undefined)
    {
        data.SetFun(SetfUNCTION);
    }


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
        console.log("hello");
        if (from == "Min") {
            startTimeTemp = val;
        }
        else if (from == "Max") {
            endTimeTemp = val;
        }
        SetSelectedTable(() => []);
        const root = ReactDOM.createRoot(document.getElementById("TimeShow"));
        root.render(TimeShowfUN(startTimeTemp, endTimeTemp));
        TableBookingData(startTimeTemp, endTimeTemp);
        console.log("hello1");

    }


    const SetRef = (TableData, TableRef) => {

        let TableNumber = TableData.TableNumber;
        let check = CheckBooking(startTimeTemp, endTimeTemp, TableNumber);
        let CheckSelectedA =false

        if(data.SelectTable)
        {
            CheckSelectedA=includes(SelectedTable, TableData);
        }

        if (check) {
            TableRef.current.classList.add("TableBookedClass");
        }
        else if (CheckSelectedA) {
            TableRef.current.classList.add("selectedTable");
        }
        const Temp = {
            TableNumber: TableNumber,
            TableRef: TableRef
        }
        ListRef.push(Temp);
    }



    const includes = (arr, e) => {
        for (let index = 0; index < arr.length; index++) {
            if (arr[index].TableNumber == e.TableNumber) {
                return true;
            }
        }
        return false
    }

    const ClickOnTable = (item) => {
        if (data.SelectTable == true) {
            const a = includes(SelectedTable, item);

            if (CheckBooking(startTimeTemp, endTimeTemp, item.TableNumber)) {
                window.alert(`Sory Table No. ${item.TableNumber} is Already Booked Please Select Other Table`);
            }

            else if (a) {
                SetSelectedTable(SelectedTable.filter(e => e.TableNumber !== item.TableNumber));
            }
            else {
                SetSelectedTable(oldArray => [...oldArray, item]);
            }
        }

        else
        {
            let check = CheckBooking(startTimeTemp, endTimeTemp, item.TableNumber);
            window.alert(`You Click on Table nUmber ${item.TableNumber} --- ${check} `);
        }

    }




    return (
        <div style={{ height: "100%", display: "flex", flexDirection: "column-reverse", overflow: "auto" }}>
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

    ListRef.forEach((element) => {
        element.TableRef.current.classList.remove("TableBookedClass");
        element.TableRef.current.classList.remove("selectedTable");
        let check = CheckBooking(start, end, element.TableNumber);
        if (check == true)
            element.TableRef.current.classList.add("TableBookedClass");
    })

}





export default MapView;