import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "./AdminWindowTableIcon";
import AddNewTable from "./AdminWindowSetMapAddTable";
import AddFloor from "./AdminWindowAddFloor";



var ArrayofFoor1 = [{ TableNumber: "1", AddressNumber: "200", FloorNumber: "1", NumberOfSeat: "3" }, { TableNumber: "2", AddressNumber: "800", FloorNumber: "1", NumberOfSeat: "4" }];
var ArrayofFoor2 = [{ TableNumber: "3", AddressNumber: "300", FloorNumber: "2", NumberOfSeat: "2" }, { TableNumber: "4", AddressNumber: "2200", FloorNumber: "2", NumberOfSeat: "5" }];

var PreveusRender = [];
var FloorNumber = 1;
var EditMapValue = false;
var FloorOption = [1, 2];

function SeatMap() {


    useEffect(() => {
        document.getElementById("Floor-1").click();

    })

    return (
        <div id="AdminWindowSeatMapReturningDiv" >

            <div id="AdminWindowReturningSeatMapDivHeadingDiv" style={styleForSeatMapReturningDivHeadingDiv} >
                <h1 style={{ fontSize: "24px" }}>Restaurant Map</h1>
                <h3 style={{ fontSize: "14px", color: "rgb(35,41,54,0.6)", marginRight: "10%" }}> <FontAwesomeIcon icon={faInfoCircle} style={{ margingRight: "5px" }} /> Set "Restaurant Map" to Good UI Exprense. You Can Add New Table, Bar Area, Music Area and Add New Flow. On Click on Any Table in Map You Can Able to Edit the Setting Of Table.  </h3>
            </div>


            <div id="AdminWindowSeatMapMainContentDiv" style={{ backgroundColor: "white", width: "94%", margin: "3%", height: "94%", padding: "3%" }}>
                <div style={{ display: "flex" }}>
                    <div style={StyleForEditButtonInsideMainContentDiv} id="AdminWindowEditMapButton" onClick={EditMap}>Edit</div>
                    <div style={StyleForSaveButtonInsideMainContentDiv} id="AdminWindowSaveMapButton">Save</div>
                    <div style={StyleForSaveButtonInsideMainContentDiv} id="AdminWindowAddTableMapButton">Add Table</div>
                    <div style={StyleForSaveButtonInsideMainContentDiv} id="AdminWindowAddFloorMapButton">Add Floor</div>
                </div>



                <div id="AdminWindowMapFloorOption" style={{ marginTop: "3%", display: "flex" }}>
                    {FloorOptionFuntion()}
                </div>
                <div id="AdminWindowSeatMapMainContentDivMap" style={StyleForSeatMapAreaInsideMainContentDiv}>


                  
                    <div id="AdminWindowSeatMapMainContentInsideDivMap" style={{ width: "1200px", height: "1200px" }}>

                        <ul style={{ listStyle: "none", padding: "0" }}>
                            {MakeArrayOfList()}
                        </ul>

                    </div>
                </div>

            </div>


        </div>
    )
}

function FloorOptionFuntion() {
    console.log("hello from Flooroption");
    const FloorOptionRender = [];
    var StyleForFloorButton;

    FloorOption.forEach((item) => {
        if (item == FloorNumber) {
            StyleForFloorButton = {
                fontSize: "14px",
                padding: "5px",
                backgroundColor: "rgb(35,41,54)",
                color: "white",
                cursor: "pointer"
            }

        }
        else {
            StyleForFloorButton = {
                fontSize: "14px",
                padding: "5px",
                backgroundColor: "rgb(35,41,54,0.5)",
                color: "white",
                cursor: "pointer"
            }

        }
        FloorOptionRender.push(<div id={`Floor-${item}`} style={StyleForFloorButton} onClick={(event) => { OnClickFloorButton(event) }}>
            Floor {item}{DeleteFloorIcon(item)}
        </div>)
    });

    console.log(FloorOptionRender);
    return FloorOptionRender;
}
function DeleteFloorIcon(FloorNumber)
{
    const TempArrayOnDeleteFunction=[];
    if(EditMapValue)
    {
        TempArrayOnDeleteFunction.push(<FontAwesomeIcon id = {`Floor-${FloorNumber}-Delete`} className = "AdminWindowDeleteFloor"icon={faTrash} style={{fontSize:"10px" , marginLeft:"7px" , padding:"3px",border:"1px solid"}} onClick={()=>{DeleteFloorFunction(FloorNumber)}} />);

    }
    return TempArrayOnDeleteFunction;

}

function DeleteFloorFunction(TempFloorNumberOnDeleteFuntion)
{
    console.log(TempFloorNumberOnDeleteFuntion);
    FloorOption.forEach((item,i)=>{
        if(item==TempFloorNumberOnDeleteFuntion)
        {
            FloorOption.splice(i,1);
            console.log(FloorOption);
            const FloorOptionDiv = ReactDOM.createRoot(document.getElementById("AdminWindowMapFloorOption"));
            FloorOptionDiv.render(<tbody style={{ display: "flex" }}>{FloorOptionFuntion()}</tbody>);
            return;


        }
    })


}

function EditMap() {
    EditMapValue = true;
    const FloorOptionDiv = ReactDOM.createRoot(document.getElementById("AdminWindowMapFloorOption"));
    FloorOptionDiv.render(<tbody style={{ display: "flex" }}>{FloorOptionFuntion()}</tbody>);
    document.getElementById(`Floor-${FloorNumber}`).click();
    document.getElementById("AdminWindowEditMapButton").onClick = "";
    document.getElementById("AdminWindowSaveMapButton").addEventListener("click", () => { SaveMap() });
    document.getElementById("AdminWindowAddTableMapButton").addEventListener("click", () => { AddTableInMap() });
    document.getElementById("AdminWindowAddFloorMapButton").addEventListener("click", () => { AddFloorInMap() });

    document.getElementById("AdminWindowEditMapButton").style.backgroundColor = "rgb(35,41,54,0.4)";
    document.getElementById("AdminWindowSaveMapButton").style.backgroundColor = "rgb(35,41,54)";
    document.getElementById("AdminWindowAddTableMapButton").style.backgroundColor = "rgb(35,41,54)";
    document.getElementById("AdminWindowAddFloorMapButton").style.backgroundColor = "rgb(35,41,54)";
    document.getElementById("AdminWindowEditMapButton").style.cursor = "text";
    document.getElementById("AdminWindowSaveMapButton").style.cursor = "pointer";
    document.getElementById("AdminWindowAddTableMapButton").style.cursor = "pointer";
    document.getElementById("AdminWindowAddFloorMapButton").style.cursor = "pointer";





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



    FloorOption.push(NewFloorNumber);
    FloorOption.sort();
    const FloorOptionDiv = ReactDOM.createRoot(document.getElementById("AdminWindowMapFloorOption"));
    FloorOptionDiv.render(<tbody style={{ display: "flex" }}>{FloorOptionFuntion()}</tbody>);
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

    document.getElementById(`Floor-${FloorNumber}`).click();
    const root = ReactDOM.createRoot(document.getElementById("UpperDiv"));
    root.render(<div />);

}

function SaveMap() {
    EditMapValue = false;
    const FloorOptionDiv = ReactDOM.createRoot(document.getElementById("AdminWindowMapFloorOption"));
    FloorOptionDiv.render(<tbody style={{ display: "flex" }}>{FloorOptionFuntion()}</tbody>);
    document.getElementById(`Floor-${FloorNumber}`).click();
    document.getElementById("AdminWindowEditMapButton").addEventListener("click", () => { EditMap() });
    document.getElementById("AdminWindowSaveMapButton").onClick = "";
    document.getElementById("AdminWindowAddTableMapButton").onClick="";
    document.getElementById("AdminWindowAddFloorMapButton").onClick="";
    document.getElementById("AdminWindowEditMapButton").style.backgroundColor = "rgb(35,41,54)";
    document.getElementById("AdminWindowSaveMapButton").style.backgroundColor = "rgb(35,41,54,0.4)";
    document.getElementById("AdminWindowAddTableMapButton").style.backgroundColor = "rgb(35,41,54,0.4)";
    document.getElementById("AdminWindowAddFloorMapButton").style.backgroundColor = "rgb(35,41,54,0.4)";
    document.getElementById("AdminWindowEditMapButton").style.cursor = "pointer";
    document.getElementById("AdminWindowSaveMapButton").style.cursor = "text";
    document.getElementById("AdminWindowAddTableMapButton").style.cursor = "text";
    document.getElementById("AdminWindowAddFloorMapButton").style.cursor = "text";

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
            address.render(<Table NumberOfSeat={item.NumberOfSeat} TableNumber={item.TableNumber} FloorNumber={item.FloorNumber} DragStart={drag_start} ClickOnTable={ClickOnTable} />);

        }
        else {
            document.getElementById(`li${item.AddressNumber}`).style.backgroundColor = "";
            const address = ReactDOM.createRoot(document.getElementById(`li${item.AddressNumber}`));
            address.render(<Table NumberOfSeat={item.NumberOfSeat} TableNumber={item.TableNumber} />);

        }



    })

}

function ClickOnTable(EditTableNumber, EditNumberOfSeat, EditFloorNumber) {

    const root = ReactDOM.createRoot(document.getElementById("UpperDiv"));
    root.render(<AddNewTable MinFloor="1" MaxFloor="2" RenderNewTable={EditTableData} TableNumber={EditTableNumber} NumberOfSeat={EditNumberOfSeat} FloorNumber={EditFloorNumber} disabled="disabled" Name="Edit" NameOfHeading="Edit Table Data" NameOfThirdOOption="Delete Table" DeleteTableFunction={DeleteTableFunction} />);
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

function OnClickFloorButton(event) {

    var id = event.target.id;
    var idFloorNumber = id.substring(6);
    FloorOption.forEach((item) => {
        if (item == idFloorNumber) {
            document.getElementById(`Floor-${item}`).style.backgroundColor = "rgb(35,41,54)";

        }
        else {
            document.getElementById(`Floor-${item}`).style.backgroundColor = "rgb(35,41,54,0.5)";

        }

    })

    FloorTableRender(idFloorNumber);
    FloorNumber = idFloorNumber;

}

const StyleForSeatMapAreaInsideMainContentDiv = {

    border: "0.5px solid rgb(35,41,54,0.7) ",
    height: "1000px",
    overFlowX: "auto",
    marginBottom: "5%",
    overflowY: "hidden"



}



const StyleForEditButtonInsideMainContentDiv = {
    marginRight: "10px",
    padding: "8px 30px",
    fontSize: "16px",
    backgroundColor: "rgb(35,41,54)",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer"
}

const StyleForSaveButtonInsideMainContentDiv = {
    marginRight: "10px",
    padding: "8px 30px",
    fontSize: "16px",
    backgroundColor: "rgb(35,41,54,0.4)",
    borderRadius: "5px",
    color: "white"
}

const styleForSeatMapReturningDivHeadingDiv = {
    backgroundColor: "white",
    width: "100%",
    padding: "2%",
    color: "rgb(35,41,54,0.8)"
};

export default SeatMap;