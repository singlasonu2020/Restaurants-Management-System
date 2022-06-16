import React, { useEffect } from "react";
import { NavItem } from "react-bootstrap";



function TimeLine(data) {
    
    const Timing =data.Timing;
    const StartTime = Timing.StartTime;
    const EndTime = Timing.EndTime;
    const gridTemplateColumnsValueArray = ["160px"];




    useEffect(()=>{

       
        let gridTemplateColumnsValue ="";
        gridTemplateColumnsValueArray.forEach((item)=>{

            gridTemplateColumnsValue=gridTemplateColumnsValue+" "+item;
        })
        document.getElementById("TimeLineReturningDiv").style.gridTemplateColumns=gridTemplateColumnsValue;
    })
    
    
    return (

        <div id="TimeLineReturningDiv" className="TimeLineReturningDiv" style={{backgroundColor:data.color}}>
            
            <div className="TableNameRowSide"></div>
            {InsertTiming(StartTime,EndTime,gridTemplateColumnsValueArray)}
            
        </div>
    )

}



function InsertTiming(StartTime,EndTime,gridTemplateColumnsValueArray) {
    let StartTimeHrs = StartTime.substring(0,2);
    let EndTimeHrs = EndTime.substring(0,2);
    let EndTimeMin = EndTime.substring(3);
    const DataArray =[];

   
    if(EndTimeMin!=0)
    EndTimeHrs++;
    

    
    while(StartTimeHrs<=EndTimeHrs)
    {
            DataArray.push(<div className="HrsContainer">{StartTimeHrs}:</div>)
            DataArray.push(<div className="MinContainer">00</div>)
            gridTemplateColumnsValueArray.push("1fr");
            gridTemplateColumnsValueArray.push("1fr");

            StartTimeHrs++;
    }

    return DataArray;
}

export default TimeLine;
