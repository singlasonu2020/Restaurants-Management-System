import React from "react";
import ReactDOM from "react-dom/client";
import WorkingTimeCustomForm from "./CustomForm";
import WorkingTimeCustomThisMonthDetails from "./CustomWorkingTimeLastMonthDetails";
import "../Styling/AdminWindowCustomWorkingTime.css";

const arr = [];
function OnSubmitCustomFormWorkingTime(Title,Date,IsDayOf,StartHours,StartMin,EndHours,EndMin) {
 
    const NewDate =  new window.Date().toString();
    const Detail = {
        Id: NewDate,
        Title: Title,
        Date: Date,
        StartHours: StartHours,
        StartMin: StartMin,
        EndHours: EndHours,
        EndMin: EndMin,
        IsDayOf: IsDayOf,
        DeleteFromMainArray:DeleteFromMainArray,
        EditInMainArray:EditInMainArray
    };


    arr.push(Detail);   
    const Element = ReactDOM.createRoot(document.getElementById("WorkingTimeCustomDtailsInMainDiv"));
    Element.render(
        <WorkingTimeCustomThisMonthDetails ArrayOfFillCustomForm={arr} DeleteFromMainArray={DeleteFromMainArray}/>
    );
    
}

function DeleteFromMainArray(Id)
{
    
    arr.map((item,i)=>{if(item.Id==Id){arr.splice(i,1);return;}})

}


function EditInMainArray(Id,Title,Date,StartHours,StartMin,EndHours,EndMin,IsDayOf)
{
    console.log("45------------------------");
    console.log(StartHours);
    console.log(IsDayOf);
    arr.map((item,i)=>{
        if(item.Id==Id)
        {
           item.Title=Title;
           item.Date=Date;
           item.IsDayOf=IsDayOf;
           item.StartHours=StartHours;
           item.StartMin=StartMin;
           item.EndHours=EndHours;
           item.EndMin=EndMin;
           const Element = ReactDOM.createRoot(document.getElementById("WorkingTimeCustomDtailsInMainDiv"));
           Element.render(
               <WorkingTimeCustomThisMonthDetails ArrayOfFillCustomForm={arr} DeleteFromMainArray={DeleteFromMainArray}/>
           );
           return;
        }
    }
    )
}

function WorkingTimeCustom()
{
    return(
        <div id="CustomWorkingTimeReturn">
            <div id="CustomWorkingTimeReturnCustomForm">
            <WorkingTimeCustomForm OnSubmit = {OnSubmitCustomFormWorkingTime}/>
            </div>

            <hr id="CustomWorkingTimeReturnHrTag" ></hr>

            <div id="WorkingTimeCustomDtailsInMainDiv" >
            <WorkingTimeCustomThisMonthDetails ArrayOfFillCustomForm={arr} DeleteFromMainArray={DeleteFromMainArray}/>
            </div>


        </div>

    )
}

export default WorkingTimeCustom;