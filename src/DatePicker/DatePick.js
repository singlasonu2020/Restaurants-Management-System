import { useState, useMemo } from 'react';
import "../Styling/DatePicker.css"
import { faCaretDown, faAngleLeft, faAngleRight, faPersonWalkingDashedLineArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom/client";


function DatePicker(data) {
    const [date, SetDate] = useState(new Date(data.Date).getDate());
    const [Month, SetMonth] = useState(new Date(data.Date).getMonth());
    const [Year, SetYear] = useState(new Date(data.Date).getFullYear());
    const [StartYear,SetStartYear]=useState(new Date(data.Date).getFullYear()-10);
    const handelSetMonth = (Mon) => {
        if (Month + Mon < 0) {
            SetMonth(11);
            SetYear(Year - 1);
        }
        else if (Month + Mon > 11) {
            SetMonth(0);
            SetYear(Year + 1);
        }
        else {
            SetMonth(Month + Mon);
        }
    }

    const RightLeft =(m)=>{
        if(document.getElementById("MainDateComponent").style.display == "none")
        {
            SetStartYear(m*24+StartYear);
        }
        else
        {
            handelSetMonth(m);
        }
    }
    
    var MonthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const MonthArrayShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const WeekArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    console.log(Month);
    return (
        <div className='DatePickerReturnDiv' >
            <div className='DatePicker'>
                <div className="SelectedDate" style={{backgroundColor:data.color}}>
                    <div className='SelectDate'>SELECT DATE</div>
                    <div className="DateView">{WeekArray[new Date(`${Year}-${Month + 1}-${date}`).getDay()]}, {MonthArrayShort[Month]} {date}</div>
                </div>
                <div className='DateTakeInput'>
                    <div className='MonthsYears'>
                        <div id="MonthYear" className="MonthYear"  onClick={()=>{ClickMonthYear(Year-10,SetStartYear)}} >
                            <div id="MonthYearComponent">{MonthArray[Month]} {Year} <FontAwesomeIcon icon={faCaretDown} /></div>
                            <div id="YearYearComponent">{StartYear}-{StartYear+23}</div>
                        </div>
                        <div><FontAwesomeIcon icon={faAngleLeft} className="LeftIconDatePicker" onClick={() => { RightLeft(-1) }} /><FontAwesomeIcon icon={faAngleRight} className="RightIconDatePicker" onClick={() => { RightLeft(1) }} /></div>
                    </div>
                    <div id="DateInput" className="DateInput">
                        <div id="MainDateComponent">{DateInput(Month, Year, date, SetDate, handelSetMonth)}</div>
                        <div id="MainYearComponent"><table>{YearComponent(Year, StartYear, SetYear)}</table></div>
                        <div id="MainMonthComponent">{MonthComponent(Year, SetMonth)}</div>
                    </div>
                    <div className='BotttonDiv'>
                        <div className="ClearBottonDiv">
                            <div className="BottonsDatePicker" onClick={() => { data.clear(data.Date, data.SetDate) }}>CLEAR</div>
                        </div>

                        <div className="CancelOkBotton">
                            <div id="CancellDateComponent" className="BottonsDatePicker" onClick={data.cancel}>CANCEL</div>
                            <div className="BottonsDatePicker" onClick={() => { OnClickSetDate(data.SetDate, date, Month, Year) }}>Ok</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function OnClickSetDate(SetDate, D, M, Y) {
    SetDate(new Date(`${Y}-${M + 1}-${D}`));
    document.getElementById("CancellDateComponent").click();

}


function ClickMonthYear(StartYear,SetStartYear) {

    SetStartYear(StartYear);
    console.log(document.getElementById("MainDateComponent").style.display);

    if (document.getElementById("MainDateComponent").style.display == "none") 
    {
        document.getElementById("MonthYearComponent").style.display = "block";
        document.getElementById("YearYearComponent").style.display = "none";
        document.getElementById("MainDateComponent").style.display = "block";
        document.getElementById("MainMonthComponent").style.display = "none";
        document.getElementById("MainYearComponent").style.display = "none";
        console.log("aaaaaaaaaaa");

    }
    else {
        document.getElementById("MonthYearComponent").style.display = "none";
        document.getElementById("YearYearComponent").style.display = "block";
        document.getElementById("MainDateComponent").style.display = "none";
        document.getElementById("MainMonthComponent").style.display = "none";
        document.getElementById("MainYearComponent").style.display = "block";
        console.log("sssssssss");


    }


}

function YearComponent(year, TempYear, SetYear) {
    const ResultArray = [];
    for (let i = 0; i < 6; i++) {

        const temp = []
        for (let j = 0; j < 4; j++) {


            if (TempYear == year) {
                temp.push(<td id={`${TempYear}Years`} onClick={(e) => { OnClickOnYear(e, year, SetYear) }} className="CurrentYear">{TempYear}</td>)
            }

            else {
                temp.push(<td id={`${TempYear}Years`} onClick={(e) => { OnClickOnYear(e, SetYear) }} className="YearCell">{TempYear}</td>)
            }
            TempYear++;
        }
        ResultArray.push(<tr>{temp}</tr>)
    }
    return ResultArray;
}


function OnClickOnYear(e, SetYear) {
    document.getElementById("MonthYearComponent").style.display = "block";
    document.getElementById("YearYearComponent").style.display = "none";
    document.getElementById("MainDateComponent").style.display = "none";
    document.getElementById("MainMonthComponent").style.display = "block";
    document.getElementById("MainYearComponent").style.display = "none";
    const newYear = e.target.id.substring(0, 4) * 1;
    SetYear(newYear);

}

function MonthComponent(Month, SetMonth) {
    const MonthArrayShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const Rarray = [];
    for (let i = 0; i < 3; i++) {
        const temp = [];
        for (let j = 0; j < 4; j++) {
            const TempMonth = i * 4 + j;
            if (Month == TempMonth) {
                temp.push(<td id={`${TempMonth}_Month`} onClick={(e) => { ClickOnSelectMonth(e, SetMonth) }} className='CurrentMonthCell'>{MonthArrayShort[TempMonth]}</td>)

            }
            else {
                temp.push(<td id={`${TempMonth}_Month`} onClick={(e) => { ClickOnSelectMonth(e, SetMonth) }} className='MonthCells'>{MonthArrayShort[TempMonth]}</td>)
            }

        }
        Rarray.push(<tr>{temp}</tr>);
    }

    return (<table>{Rarray}</table>)
}

function ClickOnSelectMonth(e, SetMonth) {
    const month = e.target.id.split("_", 1)[0] * 1;
    SetMonth(month);
    document.getElementById("MainDateComponent").style.display = "block";
    document.getElementById("MainMonthComponent").style.display = "none";
    document.getElementById("MainYearComponent").style.display = "none";

}

function DateInput(Month, Year, date, SetDate, SetMonth) {
    const NumberOfDays = new Date(Year, Month + 1, 0).getDate();
    let NumberOfDaysInLastMonth = new Date(Year, Month, 0).getDate();
    if (Month == 0) {
        NumberOfDaysInLastMonth = new Date(Year, 12, 0).getDate();
    }
    const FistDay = new Date(Year, Month, 1).getDay();

    return (
        <table className="DateInputReturn">
            <tr>
                <th className='CellOfDate'>S</th>
                <th className='CellOfDate'>M</th>
                <th className='CellOfDate'>T</th>
                <th className='CellOfDate'>W</th>
                <th className='CellOfDate'>T</th>
                <th className='CellOfDate'>F</th>
                <th className='CellOfDate'>S</th>
            </tr>
            {DateInsert(NumberOfDays, NumberOfDaysInLastMonth, FistDay, date, SetDate, SetMonth)}

        </table>
    )
}

function MakeArray(NODD, NODLM, FD) {
    const NumberArray = [];

    let number = NODLM - FD + 1;
    while (number <= NODLM) {
        NumberArray.push({ value: number, type: "Previous" });
        number++;
    }

    number = 1;
    while (number <= NODD) {
        NumberArray.push({ value: number, type: "Current" });
        number++;
    }

    number = 1;
    while (NumberArray.length % 7 != 0) {
        NumberArray.push({ value: number, type: "Next" });
        number++;
    }

    return NumberArray;
}

function DateInsert(NODD, NODLM, FD, date, SetDate, SetMonth) {
    const array = MakeArray(NODD, NODLM, FD);

    let j = 0
    const ResultArray = [];
    while (j < array.length) {
        let z = 0;
        const temp = [];
        while (z < 7) {
            if (date == array[j].value && array[j].type == "Current") {
                temp.push(<td id={`${array[j].value}_${array[j].type}_DateCell`} className={`${array[j].type}DateCell CellOfDate CurrentDay`} >{array[j].value}</td>);
            }
            else {
                temp.push(<td id={`${array[j].value}_${array[j].type}_DateCell`} className={`${array[j].type}DateCell CellOfDate AllDateCell`} onClick={(e) => { ClickOnDate(e, SetDate, SetMonth) }}>{array[j].value}</td>);
            }

            z++;
            j++;
        }

        ResultArray.push(<tr>{temp}</tr>);
    }

    return ResultArray;

}

function ClickOnDate(e, SetDate, SetMonth) {
    const date = e.target.id.split("_", 2);
    if (date[1] == "Current") {
        SetDate(date[0]);
    }
    else if (date[1] == "Next") {
        SetMonth(1);
        SetDate(date[0]);


    }
    else {
        SetMonth(-1);
        SetDate(date[0]);

    }


}

export default DatePicker;