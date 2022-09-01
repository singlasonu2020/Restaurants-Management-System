import React, { useEffect } from "react";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styling/AdminWindowReservationList.css";

function TableView(data) {

    const Timing = data.Timing;
    const StartTime = Timing.StartTime;
    const EndTime = Timing.EndTime;
    const gridTemplateColumnsValueArray = ["160px"];

    console.log(data.SelectedTableData);
    const CheckTableSelectEd = ()=>{
        for (let index = 0; index < data.SelectedTableData.length; index++) {
            const element = data.SelectedTableData[index];
            
            if(element.TableNumber==data.Data.TBN)
            {
                return "rgb(19 111 12 / 30%)";

            }
            
        }

        return data.color;
        
    }
    

    useEffect(() => {
        let gridTemplateColumnsValue = "";
        gridTemplateColumnsValueArray.forEach((item) => {

            gridTemplateColumnsValue = gridTemplateColumnsValue + " " + item;
        })
        document.getElementById(`TableViewReturnDiv${data.Data.TBN}`).style.gridTemplateColumns = gridTemplateColumnsValue;
    })


    return (
        <div id={`TableViewReturnDiv${data.Data.TBN}`} className="TableViewReturnDiv" style={{ backgroundColor: CheckTableSelectEd() }}>
            <div className="TableNameRowSideTBN"> 
            <div>Table {data.Data.TBN}</div>
            <div style={{color:BrighterColor(),fontWeight:500}}>{(data.Data.capacity-data.Data.capacity%3)/3}-{data.Data.capacity}</div>
            </div>
            {InsertTable(StartTime, EndTime, gridTemplateColumnsValueArray, data.Data.BT)}
        </div>
    )

}

function InsertTable(ST, ET, gridTemplateColumnsValueArray, ArrayOfData) {
    let StartTime = ST.substring(0, 2) * 60 - 30;
    let EndTimeHrs = ET.substring(0, 2);
    let EndTimeMin = ET.substring(3);

    if (EndTimeMin != 0)
        EndTimeHrs++;

    let EndTime = EndTimeHrs * 60 + 30;
    const DataArray =[];

    ArrayOfData.forEach((element)=>{
        let RST = element.StartTimeHrs * 60 + element.StartTimeMin * 1;
        let RET = element.EndTimeHrs * 60 + element.EndTimeMin * 1;
       
        PushDefaultDiv(DataArray, (RST - StartTime), gridTemplateColumnsValueArray);
        DataArray.push(<ReservationTable Data={element} />)
        gridTemplateColumnsValueArray.push(`${(RET - RST)}fr`);
        StartTime=RET;

    })
 
  
    PushDefaultDiv(DataArray, (EndTime - StartTime), gridTemplateColumnsValueArray);
    return DataArray;


}




function PushDefaultDiv(Array, Number, gridTemplateColumnsValueArray) {

    for (let index = 0; index < Number; index++) {
        Array.push(<div className="ReservationTable" style={{padding:0}}></div>)
        gridTemplateColumnsValueArray.push("1fr");

    }
}


function ReservationTable(Data)
{
    const TableData = Data.Data;
    const color =BrighterColor(TableData.NumberOfGuest);

    return(<div style={ReservationTableStyle(color)} className="ReservationTable">
        
        <div style={{display:"flex"}}><div className="NumberOfGuest" style={{backgroundColor:color}}>{TableData.NumberOfGuest}</div>{TableData.Name}</div>
        <div>
            <div className="TimingOnReservationDiv"><FontAwesomeIcon icon={faClock}/> {TableData.StartTimeHrs}:{TableData.StartTimeMin} -  {TableData.EndTimeHrs}:{TableData.EndTimeMin}</div>
        </div>
    </div>)
}

function ReservationTableStyle(color)
{
   

    return({
            backgroundColor:color.substring(0,color.length-1)+ ",0.2)",
            borderTop:`3px solid ${color}`
        }
    )
}


function BrighterColor(index)
{
    const Color =["rgb(255,102,1)","rgb(204,0,1)","rgb(102,17,102)","rgb(1,21,102)","rgb(0,102,102)","rgb(51,153,0)","rgb(102,204,0)","rgb(255,153,1)","rgb(255,51,1)","rgb(153,11,102)","rgb(2,51,153)"];
    if(index==null)
    {
             index = Math.floor(Math.random() * (10 - 0 + 1) + 0);

    }
    return Color[index];
}
export default TableView;