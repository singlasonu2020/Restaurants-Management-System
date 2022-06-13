import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import WorkingTimeCustomMonthDetailsOneDiv from "./AdminWindowWorkingTimeCustomMonthDetailOneDiv";




const WorkingTimeCustomThisMonthDetails=(data)=>
{
 
    console.log(`${data.DeleteFromMainArray}=============`)
    return(
        <div id="AdminWindowCustomWorkingTimeList">
            <div style={{display:"flex"}}>
                <div  style={StyleForUpperOptionDivCheckBox}>
                    <input id = "AllCheckBoxInput"   type="checkbox" class = "WorkingTimeCustomDetailsCheckBox AllCheckBoxInput" style={{display:"none"}}/>
                    <div id = "AllCheckBox" className = "AllCheckBox"style={{width:"25px",height:"25px", border:"3px solid rgb(35,41,54)"}}> <FontAwesomeIcon icon={faCheck} style={{fontSize:"18px",margin:"2px" ,color:"white"}} onClick={()=>{OnClickOnCheckBoxInCustomThisMonthDetails("00000","AllCheckBox",data.ArrayOfFillCustomForm)}}/></div>
                </div>

                <div style={StyleForUpperOptionDiv}>
                    Title
                </div>

                <div style={StyleForUpperOptionDiv}>
                    Date
                </div>
                <div style={StyleForUpperOptionDiv}>
                    Start Time
                </div>

                <div style={StyleForUpperOptionDiv}>
                    End Time
                </div>

                <div style={StyleForUpperOptionDiv}>
                     Is Day off	
                </div>
            </div>
            <hr style={{height:"2px",color:"rgb(35,41,54)"}}></hr>
            {data.ArrayOfFillCustomForm.map((item) => (<WorkingTimeCustomMonthDetailsOneDiv Title={item.Title} Date = {item.Date}  StartTimeHours={item.StartHours} StartTimeMin={item.StartMin} EndTimeHours = {item.EndHours} EndTimeMin={item.EndMin} IsDayOf = {item.IsDayOf} Id = {item.Id} DeleteFromMainArray={item.DeleteFromMainArray} OnClickOnCheckBox = {OnClickOnCheckBoxInCustomThisMonthDetails} EditInMainArray={item.EditInMainArray}/>))}
                  
            <div id="CustomMonthDetailsSelectDeleteButton"
            style={{cursor:"pointer",marginTop:"20px",borderRadius:"5px",padding:"8px",width:"120px",fontSize:"14px",color:"rgb(237,85,101)",backgroundColor:"white", border: "2px solid rgb(237,85,101)"}} 
            onMouseOver={()=>{document.getElementById("CustomMonthDetailsSelectDeleteButton").style.color="white";document.getElementById("CustomMonthDetailsSelectDeleteButton").style.backgroundColor="rgb(237,85,101)"}} onMouseOut={()=>{document.getElementById("CustomMonthDetailsSelectDeleteButton").style.color="rgb(237,85,101)"; document.getElementById("CustomMonthDetailsSelectDeleteButton").style.backgroundColor="white"}}
            onClick={()=>{DeleteSelectedDiv(data.DeleteFromMainArray)}}>
                {console.log(`${data.DeleteFromMainArray}----------------`)}
                Delete Selected
            </div>
        </div>
    )

}

const StyleForUpperOptionDivCheckBox = {
    width:"5%"
}

const StyleForUpperOptionDiv = {
    width:"17%",
    textAlign:"left",
    color:"rgb(35,41,54)"
}

const selectedMonthDayDiv=[];
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
    console.log("/-----------------------");
    console.log(DeleteFunction);

    console.log("/-----------------------");


    selectedMonthDayDiv.map((item,i)=>{ 

        selectedMonthDayDiv.splice(i, 1); 
        document.getElementById(item).remove();
        DeleteFunction(item);
    })

    document.getElementById("AllCheckBox").style.backgroundColor=""; 
    document.getElementById("AllCheckBoxInput").value="on";
}

export default WorkingTimeCustomThisMonthDetails;