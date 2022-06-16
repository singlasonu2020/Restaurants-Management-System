import React ,{useState} from "react";
import "../Styling/AdminWindowReservationList.css";

function FloorNumberView(data)
{
    return(
        <div className="FllorNumberView">
            Floor Number - {data.FloorNumber}
        </div>
    )
}

export default FloorNumberView