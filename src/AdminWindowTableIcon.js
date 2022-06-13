import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faChair } from "@fortawesome/free-solid-svg-icons";
import { faHandPointer  } from "@fortawesome/free-solid-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";



function Table(data) {

    console.log(data.ClickOnTable);
    useEffect(()=>{
        let element = document.getElementById(data.TableNumber);
        element.addEventListener("dragstart" , (event)=>{data.DragStart(event)});
        element.addEventListener("click" , (event)=>{data.ClickOnTable(data.TableNumber,data.NumberOfSeat,data.FloorNumber)});
    })

    var NumberOfSeatAtSideLeft;
    var NumberOfSeatAtSideRight;
    var NumberOfSeatAtTop
    var NumberOfSeatAtBottom;
    var TableWidth;
    var TableHeight;

    if (data.NumberOfSeat % 4 == 0) {

        NumberOfSeatAtSideLeft = data.NumberOfSeat / 4;
        NumberOfSeatAtTop = data.NumberOfSeat / 4;
        NumberOfSeatAtBottom=NumberOfSeatAtTop;
        NumberOfSeatAtSideRight=NumberOfSeatAtSideLeft;
        TableWidth = `${NumberOfSeatAtBottom*40}px`;
        TableHeight = `${NumberOfSeatAtSideLeft*40}px`;

    }
    else if (data.NumberOfSeat%2==0)
    {
        NumberOfSeatAtSideLeft = (data.NumberOfSeat -2)/4;
        NumberOfSeatAtTop = (data.NumberOfSeat/2)-NumberOfSeatAtSideLeft;
        NumberOfSeatAtBottom=NumberOfSeatAtTop;
        NumberOfSeatAtSideRight=NumberOfSeatAtSideLeft;
        TableWidth = `${NumberOfSeatAtBottom*40}px`;
        TableHeight = `${Math.max(NumberOfSeatAtSideLeft*40,40)}px`;
    }

    else
    {
        if(data.NumberOfSeat==1)
        {
        NumberOfSeatAtSideLeft=0;
        NumberOfSeatAtSideRight=0;
        NumberOfSeatAtTop = 1;
        NumberOfSeatAtBottom=0;;
        TableWidth =`40px`;
        TableHeight = `40px`;

        }
        else{
        NumberOfSeatAtSideLeft=1;
        NumberOfSeatAtSideRight=0;
        NumberOfSeatAtTop = (data.NumberOfSeat-1)/2;
        NumberOfSeatAtBottom=NumberOfSeatAtTop;
        TableWidth =`${NumberOfSeatAtBottom*40}px`;
        TableHeight = `${NumberOfSeatAtSideLeft*40}px`;
        }




    }

    
    

    var SideChairLeft = [];
    var SideChairRight = [];
    var TopChair = [];
    var BottomChair = [];

    

    for (var i = 0; i < NumberOfSeatAtSideLeft; i++) {
        if (i == 0) {
            SideChairLeft.push(<div><FontAwesomeIcon icon={faChair} style={{ fontSize: "20px", marginTop: "30px" }} /></div>);

        }
        else {
            SideChairLeft.push(<div><FontAwesomeIcon icon={faChair} style={{ fontSize: "20px", marginTop: "10px" }} /></div>);

        }
    }

    if(NumberOfSeatAtSideRight==NumberOfSeatAtSideLeft)
    {
        SideChairRight=SideChairLeft;
    }
    

    for (var i = 0; i < NumberOfSeatAtTop; i++) {
        TopChair.push(<FontAwesomeIcon icon={faChair} style={{ fontSize: "20px", marginLeft: "10px", marginRight: "10px" }} />);
    }

    if(NumberOfSeatAtTop==NumberOfSeatAtBottom)
    {
        BottomChair=TopChair;
    }

    return (
       
        <div id={data.TableNumber} draggable="true"  style={{ display: "flex" ,zIndex:+10}}>
            <div>
                <tbody>{SideChairLeft}</tbody>
            </div>
            <div >
                <div >
                    <tbody>{TopChair}</tbody>
                </div>
                <div style={{width: TableWidth,height: TableHeight,backgroundColor: "rgb(35,41,54,0.8)" ,borderRadius:"5px",textAlign:"center"}}><span style={StyleForTableNumber}>{data.TableNumber}</span></div>
                <div >
                    <tbody>{BottomChair}</tbody>
                </div>
            </div>
            <div>
                <tbody>{SideChairRight}</tbody>
            </div>
        </div>
      
    )

}

const StyleForTableNumber = {
    color:"white",
    fontSize:"20px",
    border:"2px solid white",
    padding:" 0 7px"
    
}


export default Table;