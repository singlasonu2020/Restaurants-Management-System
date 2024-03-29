import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "./TableSetIcon";
import AddNewTable from "./AddTable";
import AddFloor from "./AddFloor";
// import "../Styling/AdminWindowWorkingTime.css"
import "../Styling/AdminWindowSeatMap.css"
import { useSearchParams } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";




var ArrayofFoor1 = [{ TableNumber: "1", AddressNumber: "200", FloorNumber: "1", NumberOfSeat: "3" }, { TableNumber: "2", AddressNumber: "800", FloorNumber: "1", NumberOfSeat: "4" }];
var ArrayofFoor2 = [{ TableNumber: "3", AddressNumber: "300", FloorNumber: "2", NumberOfSeat: "2" }, { TableNumber: "4", AddressNumber: "2200", FloorNumber: "2", NumberOfSeat: "5" }];

var PreveusRender = [];
var FloorNumber = 1;
var EditMapValue = false;
var FloorOption = [1, 2];

function SeatMap() {

    const [searchParams] = useSearchParams();
    const FloorId = searchParams.get("floorId");
    const navigate = useNavigate();

    useEffect(() => {
        FloorTableRender(FloorId);

    })

    return (
        <div id="AdminWindowSeatMapReturningDiv" >

            <div id="AdminWindowReturningSeatMapDivHeadingDiv" className="AdminWindowWorkingTimeReturningDivHeadingDiv" >
                <h1 className="AdminWindowWorkingTimeReturningDivHeadingDivHeading">Restaurant Map</h1>
                <h3 className="AdminWindowWorkingTimeReturningDivHeadingDivSubHeading"> <FontAwesomeIcon icon={faInfoCircle} /> Set "Restaurant Map" to Good UI Exprense. You Can Add New Table, Bar Area, Music Area and Add New Flow. On Click on Any Table in Map You Can Able to Edit the Setting Of Table.  </h3>
            </div>


            <div id="AdminWindowSeatMapMainContentDiv" >
                <div id="AdminWindowSeatMapEditsOption">
                    <div className="SveButtonDefaultWorkingTime AdminWindowEditMapButton AdminWindowSaveButtonCss"  id="AdminWindowEditMapButton" onClick={()=>{EditMap(FloorId,navigate)}}>Edit</div>
                    <div className="SveButtonDefaultWorkingTime AdminWindowSaveMapButton AdminWindowSaveButtonCss" id="AdminWindowSaveMapButton" onClick={SaveMap}>Save</div>
                    <div className="SveButtonDefaultWorkingTime AdminWindowSaveMapButton AdminWindowSaveButtonCss" id="AdminWindowAddTableMapButton" onClick={AddTableInMap}>Add Table</div>
                    <div className="SveButtonDefaultWorkingTime AdminWindowSaveMapButton AdminWindowSaveButtonCss" id="AdminWindowAddFloorMapButton" onClick={AddFloorInMap}>Add Floor</div>
                </div>



                <div id="AdminWindowMapFloorOption" >
                    {FloorOptionFuntion(FloorId)}
                </div>
                <div id="AdminWindowSeatMapMainContentDivMap" >


                  
                    <div id="AdminWindowSeatMapMainContentInsideDivMap" >

                        <ul >
                            {MakeArrayOfList()}
                        </ul>

                    </div>
                </div>

            </div>


        </div>
    )
}

function FloorOptionFuntion(FloorId) {
    const FloorOptionRender = [];
    FloorOption.forEach((item) => {
        FloorOptionRender.push(<NavLink  to={{pathname: "/admin_window/seat_map", search: `?floorId=${item}`,}} className={ FloorId==item ? 'FloorButtonClick' : 'FloorButton'}>Floor {item}{DeleteFloorIcon(item)}</NavLink>)
    });

    return FloorOptionRender;
}
function DeleteFloorIcon(FloorNumber)
{
    const TempArrayOnDeleteFunction=[];
    if(EditMapValue)
    {
        TempArrayOnDeleteFunction.push(<FontAwesomeIcon id = {`Floor-${FloorNumber}-Delete`} className = "AdminWindowDeleteFloor"icon={faTrash}  onClick={()=>{DeleteFloorFunction(FloorNumber)}} />);

    }
    return TempArrayOnDeleteFunction;

}

function DeleteFloorFunction(TempFloorNumberOnDeleteFuntion)
{
    FloorOption.forEach((item,i)=>{
        if(item==TempFloorNumberOnDeleteFuntion)
        {
            FloorOption.splice(i,1);           
            return;


        }
    })


}

function EditMap(FloorId,navigate) {

    EditMapValue = true;
    // const FloorOptionDiv = ReactDOM.createRoot(document.getElementById("AdminWindowMapFloorOption"));
    // FloorOptionDiv.render(<tbody style={{ display: "flex" }}>{FloorOptionFuntion()}</tbody>);
    navigate({pathname:"/admin_window/seat_map", search: `?floorId=${FloorId}`})
    document.getElementsByClassName("AdminWindowEditMapButton")[0].style.display="none";
    document.getElementsByClassName("AdminWindowSaveMapButton")[0].style.display="block";
    document.getElementsByClassName("AdminWindowSaveMapButton")[1].style.display="block";
    document.getElementsByClassName("AdminWindowSaveMapButton")[2].style.display="block";
    





}

function AddFloorInMap() {
    const root = ReactDOM.createRoot(document.getElementById("UpperDiv"));
    root.render(<AddFloor AddrNewFloorFunction={RenderNewFloor} Name="Add" NameOfHeading="Add New Table" />);

}

function AddTableInMap() {
    const root = ReactDOM.createRoot(document.getElementById("UpperDiv"));
    root.render(<AddNewTable MinFloor="1" MaxFloor="2" RenderNewTable={RenderNewTableFuction} Name="Add" NameOfHeading="Add New Table" />);

}

function RenderNewFloor(NewFloorNumber) {



    FloorOption.push(NewFloorNumber*1);
    console.log(FloorOption);
    FloorOption.sort();
    const root = ReactDOM.createRoot(document.getElementById("UpperDiv"));
    root.render(<div />);





}

function EditTableData(NewFloorNumber, NewTableNumber, NewNumberOfSeat) {
    ArrayofFoor1.forEach((item, i) => {
        if (item.TableNumber == NewTableNumber) {
            if (item.FloorNumber == NewFloorNumber) {
                item.NumberOfSeat = NewNumberOfSeat;
            }
            else {
                let RemoveElement = ArrayofFoor1.splice(i, 1);
                RemoveElement[0].FloorNumber = NewFloorNumber
                RemoveElement[0].NumberOfSeat = NewNumberOfSeat;
                ArrayofFoor2.push(RemoveElement[0]);
                console.log(ArrayofFoor2);
            }

            document.getElementById(`Floor-${FloorNumber}`).click();
            const root = ReactDOM.createRoot(document.getElementById("UpperDiv"));
            root.render(<div />);
            return;

        }

    })
    ArrayofFoor2.forEach((item, i) => {
        if (item.TableNumber == NewTableNumber) {
            if (item.FloorNumber == NewFloorNumber) {
                item.NumberOfSeat = NewNumberOfSeat;
            }
            else {
                let RemoveElement = ArrayofFoor2.splice(i, 1);
                RemoveElement[0].FloorNumber = NewFloorNumber
                RemoveElement[0].NumberOfSeat = NewNumberOfSeat;
                ArrayofFoor1.push(RemoveElement[0]);
                console.log(ArrayofFoor1);
            }

            document.getElementById(`Floor-${FloorNumber}`).click();
            const root = ReactDOM.createRoot(document.getElementById("UpperDiv"));
            root.render(<div />);
            return;

        }

    })
}

function RenderNewTableFuction(NewFloorNumber, NewTableNumber, NewNumberOfSeat) {
    var NewTableData = { TableNumber: `${NewTableNumber}`, AddressNumber: "1", FloorNumber: `${NewFloorNumber}`, NumberOfSeat: `${NewNumberOfSeat}` }

    if (NewFloorNumber == 1) {
        ArrayofFoor1.push(NewTableData);
    }
    else if (NewFloorNumber == 2) {
        ArrayofFoor2.push(NewTableData);
    }
    else {
        return
    }

    const root = ReactDOM.createRoot(document.getElementById("UpperDiv"));
    root.render(<div />);

}

function SaveMap() {
    EditMapValue = false;
    document.getElementsByClassName("AdminWindowEditMapButton")[0].style.display="block";
    document.getElementsByClassName("AdminWindowSaveMapButton")[0].style.display="none";
    document.getElementsByClassName("AdminWindowSaveMapButton")[1].style.display="none";
    document.getElementsByClassName("AdminWindowSaveMapButton")[2].style.display="none";


}

function EditTableAddress(TableNewAddress) {

    console.log(TableNewAddress);
    if (FloorNumber == 1) {
        ArrayofFoor1.map((item) => {
            if (item.TableNumber == TableNewAddress.TableNumber) {
                item.AddressNumber = TableNewAddress.AddressNumber;
                console.log(ArrayofFoor1);
                return
            }

        });
    }

    else if (FloorNumber == 2) {
        ArrayofFoor2.map((item) => {
            if (item.TableNumber == TableNewAddress.TableNumber) {
                item.AddressNumber = TableNewAddress.AddressNumber;
                console.log(ArrayofFoor2);
                return
            }

        });
    }
    else {
        return
    }
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

function FloorTableRender(RenderFloorNumber) {



    PreveusRender.forEach((item) => {
        document.getElementById(`li${item.AddressNumber}`).innerHTML = "";
        document.getElementById(`li${item.AddressNumber}`).style.backgroundColor = "";


    })

    PreveusRender = [];
    var FloorTableData = TableData(RenderFloorNumber);


    FloorTableData.forEach((item) => {
        PreveusRender.push(item);
        if (EditMapValue) {
            document.getElementById(`li${item.AddressNumber}`).style.backgroundColor = "black";
            const address = ReactDOM.createRoot(document.getElementById(`li${item.AddressNumber}`));
            address.render(<Table NumberOfSeat={item.NumberOfSeat} TableNumber={item.TableNumber} FloorNumber={item.FloorNumber} DragStart={drag_start} ClickOnTable={ClickOnTable} SetRef={()=>{}} />);

        }
        else {
            document.getElementById(`li${item.AddressNumber}`).style.backgroundColor = "";
            const address = ReactDOM.createRoot(document.getElementById(`li${item.AddressNumber}`));
            address.render(<Table NumberOfSeat={item.NumberOfSeat} TableNumber={item.TableNumber} SetRef={()=>{}} />);

        }



    })

}

function ClickOnTable(EditTableNumber, EditNumberOfSeat, EditFloorNumber) {

    const root = ReactDOM.createRoot(document.getElementById("UpperDiv"));
    root.render(<AddNewTable MinFloor="1" MaxFloor="2" RenderNewTable={EditTableData} TableNumber={EditTableNumber} NumberOfSeat={EditNumberOfSeat} FloorNumber={EditFloorNumber} disabled="disabled" Name="Edit" NameOfHeading="Edit Table Data" NameOfThirdOOption="Delete" DeleteTableFunction={DeleteTableFunction} />);
}

function MakeArrayOfList() {
    var array = [];
    for (let i = 0; i < 14000; i++) {


        array.push(<li id={`li${i}`} style={{ float: "left", width: "10px", height: "10px", border: "0.3px solid rgb(35,41,54,0.2)" }} onDragOver={e => drag_over(e)} onDrop={(event) => { drop(event) }}></li>)


    }

    return <tbody>{array}</tbody>
}


function DeleteTableFunction(NewFloorNumber, NewTableNumber) {

    if (NewFloorNumber == 1) {
        ArrayofFoor1.forEach((item, i) => {
            if (item.TableNumber == NewTableNumber) {
                ArrayofFoor1.splice(i, 1);
                console.log(ArrayofFoor1);
            }
        })
    }
    else if (NewFloorNumber == 2) {
        ArrayofFoor2.forEach((item, i) => {
            if (item.TableNumber == NewTableNumber) {
                ArrayofFoor2.splice(i, 1);
                console.log(ArrayofFoor2);
            }
        })
    }
    else {
        return
    }

    document.getElementById(`Floor-${FloorNumber}`).click();
    const root = ReactDOM.createRoot(document.getElementById("UpperDiv"));
    root.render(<div />);


}

function drag_start(event) {

    console.log("hello drag start");
    console.log(event.target.id);
    event.dataTransfer.setData("text", event.target.id);
    var ParentId = document.getElementById(event.target.id).parentElement.id;
    document.getElementById(ParentId).style.backgroundColor = "";

}

function drop(event) {

    const NewAddressId = event.target.id;
    event.preventDefault();
    var offset = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(offset));
    document.getElementById(NewAddressId).style.backgroundColor = "black";
    var TableNumber = document.getElementById(NewAddressId).childNodes[0].id;

    console.log(document.getElementById(TableNumber));
    var TableAdressChange = {
        AddressNumber: NewAddressId.substring(2),
        TableNumber: TableNumber
    }
    EditTableAddress(TableAdressChange);


}

function drag_over(event) {
    event.preventDefault();

}







export default SeatMap;