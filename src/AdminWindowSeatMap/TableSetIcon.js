import React, { useEffect,useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChair } from "@fortawesome/free-solid-svg-icons";
// import "../Styling/AdminWindowSeatMap.css"




function Table(data) {

    const TableRef = useRef();

    
    useEffect(()=>{
        let element = document.getElementById(data.TableNumber);
        element.addEventListener("dragstart" , (event)=>{data.DragStart(event)});
        element.addEventListener("click" , (event)=>{data.ClickOnTable(data.TableNumber,data.NumberOfSeat,data.FloorNumber)});
        data.SetRef(data.TableNumber,TableRef);

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
            SideChairLeft.push(<div><FontAwesomeIcon icon={faChair} className="SideChairLeft1" /></div>);

        }
        else {
            SideChairLeft.push(<div><FontAwesomeIcon icon={faChair} className="SideChairLeft2" /></div>);

        }
    }

    if(NumberOfSeatAtSideRight==NumberOfSeatAtSideLeft)
    {
        SideChairRight=SideChairLeft;
    }
    

    for (var i = 0; i < NumberOfSeatAtTop; i++) {
        TopChair.push(<FontAwesomeIcon icon={faChair} className="TopChair" />);
    }

    if(NumberOfSeatAtTop==NumberOfSeatAtBottom)
    {
        BottomChair=TopChair;
    }



    return (
       
        <div id={data.TableNumber} draggable="true" className="TableChairSet" >
            <div>
                <tbody>{SideChairLeft}</tbody>
            </div>
            <div >
                <div >
                    <tbody>{TopChair}</tbody>
                </div>
                <div ref={TableRef} className="Table"style={{width: TableWidth,height: TableHeight}}><span className="TableNumber">{data.TableNumber}</span></div>
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



export default Table;