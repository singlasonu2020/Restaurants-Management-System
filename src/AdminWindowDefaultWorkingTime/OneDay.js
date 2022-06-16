import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

function InputTime(upto, difference) {
    let content = [];
    for (var i = 0; i < upto; i = i + difference) {
        let WritenValue = `${i}`;
        if (i < 10) {
            WritenValue = `0${i}`;
        }
        content.push(<option value={i}>{WritenValue}</option>);
    }
    return content;
};

class OneDay extends React.Component {

   

    render() {
        let BackGroundInputDiv ="white";
        if(this.props.BackgroundColor)
        {
            BackGroundInputDiv ="rgb(35,41,54,0.05)";
            console.log(BackGroundInputDiv);

        }

        return (
            <div className="AdminWindowDefaultWorkingTimeOneDay" style={{ backgroundColor:`${BackGroundInputDiv}`}}>
                <div className="AdminWindowDefaultWorkingTimeOneDayDays FullNameOfDays">{this.props.Name}</div>
                <div className="AdminWindowDefaultWorkingTimeOneDayDays ShortNameOfDays">{this.props.ShortName}</div>
                <div className="AdminWindowDefaultWorkingTimeOneDayStartTime">
                    <select id={`WorkingTimeStartHour${this.props.Name}`} name={`WorkingTimeStartHour${this.props.Name}`} className="AdminWinowDefaultWorkingTimeOneDaySelectHrs">
                        {InputTime(24, 1)}
                    </select>
                    <select id={`WorkingTimeStartMin${this.props.Name}`} name={`WorkingTimeStartMin${this.props.Name}`}  className="AdminWinowDefaultWorkingTimeOneDaySelectMin">
                        {InputTime(60, 5)}
                    </select>
                </div>
                <div className="AdminWindowDefaultWorkingTimeOneDayStartTime">
                    <select id={`WorkingTimeEndHour${this.props.Name}`} name={`WorkingTimeEndHour${this.props.Name}`} className="AdminWinowDefaultWorkingTimeOneDaySelectHrs">
                        {InputTime(24, 1)}

                    </select>
                    <select id={`WorkingTimeEndMin${this.props.Name}`} name={`WorkingTimeEndMin${this.props.Name}`}  className="AdminWinowDefaultWorkingTimeOneDaySelectMin">
                        {InputTime(60, 5)}
                    </select>
                </div>
                <div className="AdminWindowDefaultWorkingTimeOneIsDayOff">
                    <div  id={`RestaurentOnOfButton${this.props.Name}`} className="AdminWindowDefaultWorkingTimeOneIsDayOffButton"  onClick={() => {
                        OnClickOffOrOnButton(this.props.Name);
                    }}>
                        <div id={`RestaurentOpen${this.props.Name}`} className="AdminWindowDefaultWorkingTimeOneIsDayOffButtonYes">Yes</div>
                        <div style={{ width: "30%" }}></div>
                        <div id={`RestaurentClose${this.props.Name}`} className="AdminWindowDefaultWorkingTimeOneIsDayOffButtonNo">No</div>
                    </div>
                </div>

            </div>

        )
    }
}
function OnClickOffOrOnButton(Name) {
    const ElementDisplay = document.getElementById(`RestaurentOpen${Name}`).style.display;
    if (ElementDisplay === "none" || ElementDisplay=="") {
        
        document.getElementById(`WorkingTimeStartHour${Name}`).value=0;
        document.getElementById(`WorkingTimeStartMin${Name}`).value = 0;
        document.getElementById(`WorkingTimeEndHour${Name}`).value = 0;
        document.getElementById(`WorkingTimeEndMin${Name}`).value = 0;
        document.getElementById(`WorkingTimeStartHour${Name}`).disabled=true;
        document.getElementById(`WorkingTimeStartMin${Name}`).disabled = true;
        document.getElementById(`WorkingTimeEndHour${Name}`).disabled = true;
        document.getElementById(`WorkingTimeEndMin${Name}`).disabled = true;

        document.getElementById(`RestaurentClose${Name}`).style.display = "none";
        document.getElementById(`RestaurentClose${Name}`).style.width = "0";
        document.getElementById(`RestaurentOpen${Name}`).style.display = "block"
        document.getElementById(`RestaurentOpen${Name}`).style.width = "70%";
        document.getElementById(`RestaurentOnOfButton${Name}`).style.borderColor = "rgb(35,41,54)";
    }
    else {
        document.getElementById(`RestaurentOpen${Name}`).style.display = "none";
        document.getElementById(`RestaurentOpen${Name}`).style.width = "0";
        document.getElementById(`RestaurentClose${Name}`).style.display = "block"
        document.getElementById(`RestaurentClose${Name}`).style.width = "71%";
        document.getElementById(`RestaurentOnOfButton${Name}`).style.borderColor = "rgb(35,41,54,0.7)";
        document.getElementById(`WorkingTimeStartHour${Name}`).disabled=false;
        document.getElementById(`WorkingTimeStartMin${Name}`).disabled = false;
        document.getElementById(`WorkingTimeEndHour${Name}`).disabled = false;
        document.getElementById(`WorkingTimeEndMin${Name}`).disabled = false;

    }
}
export default OneDay;
