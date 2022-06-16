import React  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import WorkingTimeCustomMonthDetailsOneDiv from "./CustomWorkingTimeLastMonthDetailsOneEntry";
// import "../Styling/AdminWindowCustomWorkingTime.css"




const WorkingTimeCustomThisMonthDetails=(data)=>
{
 
    return(
        <div id="AdminWindowCustomWorkingTimeList">
            <div className="AdminWindowCustomWorkingTimeListOne" >
                <div className="UpperOptionDivCheckBox" >
                    <input id = "AllCheckBoxInput"   type="checkbox" class = "WorkingTimeCustomDetailsCheckBox AllCheckBoxInput" style={{display:"none"}}/>
                    <div id = "AllCheckBox" className = "AllCheckBox"> <FontAwesomeIcon icon={faCheck} className="AdminCheckBoxTick" onClick={()=>{OnClickOnCheckBoxInCustomThisMonthDetails("00000","AllCheckBox",data.ArrayOfFillCustomForm)}}/></div>
                </div>
                <div className="StyleForUpperOptionDiv">
                    Title
                </div>
                <div className="StyleForUpperOptionDiv">
                    Date
                </div>                    
                <div className="StyleForUpperOptionDiv">
                    Start Time
                </div>
                <div className="StyleForUpperOptionDiv">
                    End Time
                </div>
                <div className="StyleForUpperOptionDiv">
                     Is Day off	
                </div>
            </div>
            <hr id="AminWindowCustomMonthDetailHrTag"></hr>
            {data.ArrayOfFillCustomForm.map((item) => (<WorkingTimeCustomMonthDetailsOneDiv Title={item.Title} Date = {item.Date}  StartTimeHours={item.StartHours} StartTimeMin={item.StartMin} EndTimeHours = {item.EndHours} EndTimeMin={item.EndMin} IsDayOf = {item.IsDayOf} Id = {item.Id} DeleteFromMainArray={item.DeleteFromMainArray} OnClickOnCheckBox = {OnClickOnCheckBoxInCustomThisMonthDetails} EditInMainArray={item.EditInMainArray}/>))}
                  
            <div id="CustomMonthDetailsSelectDeleteButton"
            onClick={()=>{DeleteSelectedDiv(data.DeleteFromMainArray)}}>
                Delete Selected
            </div>
        </div>
    )

}





let selectedMonthDayDiv=[];
function OnClickOnCheckBoxInCustomThisMonthDetails(Id,IdOfCheckBox,array) {
   
   
   var value = document.getElementById(`${IdOfCheckBox}Input`).value;
  
   if(value=="on")
   {

    if(Id=="00000")
    {
        
       const length = document.getElementsByClassName(IdOfCheckBox).length;
     

       for (let index = 0; index < length; index++) {
        document.getElementsByClassName(IdOfCheckBox)[index].style.backgroundColor="rgb(35,41,54)";
        document.getElementsByClassName(`${IdOfCheckBox}Input`)[index].value="of";
       }
       array.map((item)=>{
           console.log(item);
        selectedMonthDayDiv.push(item.Id);
       });
              
    }

    else
    {
        document.getElementById(IdOfCheckBox).style.backgroundColor="rgb(35,41,54)"; 
        document.getElementById(`${IdOfCheckBox}Input`).value="of";
        selectedMonthDayDiv.push(Id);
        console.log(selectedMonthDayDiv);
    }
    
  
    
   }

   else
   {

    if(Id=="00000")
    {
       const length = document.getElementsByClassName(IdOfCheckBox).length;
       for (let index = 0; index < length; index++) {
        document.getElementsByClassName(IdOfCheckBox)[index].style.backgroundColor="";
        document.getElementsByClassName(`${IdOfCheckBox}Input`)[index].value="on";           
       }  
       selectedMonthDayDiv.splice(0,selectedMonthDayDiv.length)
      

    }

    else
    {
        document.getElementById(IdOfCheckBox).style.backgroundColor=""; 
        document.getElementById(`${IdOfCheckBox}Input`).value="on";
        selectedMonthDayDiv.forEach((element,i) => {
            if(element==Id)
            {
                selectedMonthDayDiv.splice(i, 1);
                return;

            }

            
        });


    }
    
   }
   
}

function DeleteSelectedDiv(DeleteFunction) {
    
    console.log(selectedMonthDayDiv);

    selectedMonthDayDiv.forEach((item)=>{
        document.getElementById(item).remove();
        DeleteFunction(item);
    })

    selectedMonthDayDiv=[];
    console.log(selectedMonthDayDiv);
    document.getElementById("AllCheckBox").style.backgroundColor=""; 
    document.getElementById("AllCheckBoxInput").value="on";
}

export default WorkingTimeCustomThisMonthDetails;