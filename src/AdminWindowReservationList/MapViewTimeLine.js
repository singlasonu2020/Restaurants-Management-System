import React, { useEffect, useState, useRef } from "react";
import "../Styling/MapView.css"




function MapViewTimeLine(data) {
    const MinValue = useRef();
    const MaxValue = useRef();
    const Slider = useRef();


    const Timing = data.Timing;
    const gridTemplateColumnsValueArray = [];




    

    useEffect(() => {

        const NumberOfBox = document.getElementById("TimeLineReturningDiv").childElementCount * 30;

        let gridTemplateColumnsValue = "";
        gridTemplateColumnsValueArray.forEach((item) => {

            gridTemplateColumnsValue = gridTemplateColumnsValue + " " + item;
        })
        document.getElementById("TimeLineReturningDiv").style.gridTemplateColumns = gridTemplateColumnsValue;

      
        MinValue.current.max = NumberOfBox;
        MaxValue.current.max = NumberOfBox;
        MinValue.current.value = data.StartTime-Timing.StartTime.substring(0,2)*60+30;
        MaxValue.current.value = data.StartTime+60-Timing.StartTime.substring(0,2)*60+30;;
        Slider.current.style.left=`${((MinValue.current.value)/(MinValue.current.max))*100}%`;
        Slider.current.style.right=`${100-(((MaxValue.current.value)/(MaxValue.current.max))*100)}%`;

    },[])


    return (

        <div id="TimeLineViewReturnDivMapView" style={{ position: "relative", backgroundColor: "black" ,overflowX:"auto"}}>
            <div id="TimeLineReturningDiv" className="TimeLineReturningDiv" style={{ fontSize: "10px" }}>{InsertTiming(Timing.StartTime, Timing.EndTime, gridTemplateColumnsValueArray)}</div>
            <div id="slider" className="Slider" ref={Slider}  ></div>
            <input ref={MinValue}  onChange={()=>{onChangeMinMax(MinValue,MaxValue,Slider,"Min"); data.Set(MinValue.current.value*1+Timing.StartTime.substring(0,2)*60-30,"Min"); }} type="range" className="SliderInput" name="points" min="0" max="1000" />
            <input ref={MaxValue}   onChange={() => { onChangeMinMax(MinValue,MaxValue,Slider,"Max"); data.Set(MaxValue.current.value*1+Timing.StartTime.substring(0,2)*60-30,"Max"); }} type="range" className="SliderInput" name="points" min="0" max="1000" />
        </div>
    )
}



function onChangeMinMax(MinValue,MaxValue,Slider,from ) {
    if (MaxValue.current.value - MinValue.current.value < 30) {
        if (from == "Min") {
            MinValue.current.value = MaxValue.current.value * 1 - 30;
        }
        else if (from == "Max") {
            MaxValue.current.value = MinValue.current.value * 1 + 30;
        }

    }

    Slider.current.style.left=`${((MinValue.current.value)/(MinValue.current.max))*100}%`;
    Slider.current.style.right=`${100-(((MaxValue.current.value)/(MaxValue.current.max))*100)}%`;
    

   
    

}


function InsertTiming(StartTime, EndTime, gridTemplateColumnsValueArray) {
    let StartTimeHrs = StartTime.substring(0, 2);
    let EndTimeHrs = EndTime.substring(0, 2);
    let EndTimeMin = EndTime.substring(3);
    const DataArray = [];


    if (EndTimeMin != 0)
        EndTimeHrs++;



    while (StartTimeHrs <= EndTimeHrs) {
        DataArray.push(<div className="HrsContainer" style={{color:"rgba(255, 255, 255, 0.7)",borderColor:"rgba(35, 41, 54, 0.6)"}}>{StartTimeHrs}:</div>)
        DataArray.push(<div className="MinContainer" style={{color:"rgba(255, 255, 255, 0.7)",borderColor:"rgba(35, 41, 54, 0.6)"}}>00</div>)
        gridTemplateColumnsValueArray.push("1fr");
        gridTemplateColumnsValueArray.push("1fr");

        StartTimeHrs++;
    }

    return DataArray;
}

export default MapViewTimeLine;