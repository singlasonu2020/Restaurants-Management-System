import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import WorkingTimeCustomForm from "./AdminWindowWorkingTimeCustomFormForm"
import WorkingTimeCustomThisMonthDetails from "./AdminWindowWorkingTimeCustomThisMonthDetails"

const arr = [];
function OnSubmitCustomFormWorkingTime(Title,Date,IsDayOf,StartHours,StartMin,EndHours,EndMin) {
 
    console.log("ONSUBMIT---------------------");
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
        <div style={{ paddingLeft: "2%", paddingTop: "3%",paddingRight: "2%" }}>
            <div>
            <WorkingTimeCustomForm OnSubmit = {OnSubmitCustomFormWorkingTime}/>
            </div>

            <hr style={{marginTop:"7%",color:"rgb(35,41,54,0.8)"}}></hr>

            <div id="WorkingTimeCustomDtailsInMainDiv" style={{ padding: "2%"}}>
            <WorkingTimeCustomThisMonthDetails ArrayOfFillCustomForm={arr} DeleteFromMainArray={DeleteFromMainArray}/>
            </div>


        </div>

    )
}

export default WorkingTimeCustom;