import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";







function AddNewTableForm(data) {

    useEffect(()=>{
        document.getElementById("AddTableFormNumberOfSeatInput").value=data.NumberOfSeat;
        document.getElementById("AddTableFormFloorNumberInput").value=data.FloorNumber;
    })
    console.log(data);

    var CustomDivWidth = "100%";

    return (
        <div>
            <div id="AddTableFormTableNumber" class="input-group mb-3" style={{ width: `${CustomDivWidth}`, postion: "absolute" }}>
                <div class="input-group-prepend" style={{ width: "40%" }}>
                    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%", fontSize: "14px" }}>Table Number</span>
                </div>
                <input id="AddTableFormTableNumberInput" disabled={data.disabled} type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" min="0" value={data.TableNumber}></input>
            </div>
            <div id="AddTableFormFloorNumber" class="input-group mb-3" style={{ width: `${CustomDivWidth}`, postion: "absolute" }}>
                <div class="input-group-prepend" style={{ width: "40%" }}>
                    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%", fontSize: "14px" }}>Floor Number</span>
                </div>
                <input id="AddTableFormFloorNumberInput" type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"  min={data.MinFloor} max={data.MaxFloor} ></input>
            </div>
            <div id="AddTableFormFloorNumber" class="input-group mb-3" style={{ width: `${CustomDivWidth}`, postion: "absolute" }}>
                <div class="input-group-prepend" style={{ width: "40%" }}>
                    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%", fontSize: "14px" }}>Seating Capacity</span>
                </div>
                <input id="AddTableFormNumberOfSeatInput" type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"  min="0" max="20" ></input>
            </div>
            <div style={{display : "flex"}}>
            <div style={StyleForSveButtonWorkingTimeCustom} onClick={()=>{AddNewTable(data.RenderNewTable)}}>{data.Name} Table</div>
            {ThirdOption(data)}
            <div style={StyleForSveButtonWorkingTimeCustom} onClick={CancelAddTable}>Cancel</div>
            </div>
        </div>
    )


}

function ThirdOption(data)
{
    var NameOfThirdOOption = data.NameOfThirdOOption;
    var temparray=[];
    if(NameOfThirdOOption=="Delete Table")
    {
        temparray.push(<div style={StyleForSveButtonWorkingTimeCustom} onClick={()=>{DeleteTable(data)}}>{NameOfThirdOOption}</div>);
      
    }
    return temparray;
}

function DeleteTable(data)
{ 
    data.DeleteTableFunction(data.FloorNumber,data.TableNumber);

}

function CancelAddTable() {
    const root = ReactDOM.createRoot(document.getElementById("UpperDiv"));
    root.render(<div/>);
    
}

function AddNewTable(NewFunction)
{
    console.log(NewFunction);
    var TableNumber = document.getElementById("AddTableFormTableNumberInput").value;
    var FloorNumber = document.getElementById("AddTableFormFloorNumberInput").value;
    var NumberOfSeat = document.getElementById("AddTableFormNumberOfSeatInput").value;

    NewFunction(FloorNumber,TableNumber,NumberOfSeat);



}

const StyleForSveButtonWorkingTimeCustom = {
    padding: "5px",
    width: "100px",
    fontSize: "16px",
    backgroundColor: "rgb(35,41,54)",
    borderRadius: "3px",
    color: "white",
    textAlign: "center",
    marginTop: "40px",
    cursor: "pointer",
    marginRight:"10px"

}




export default AddNewTableForm;
