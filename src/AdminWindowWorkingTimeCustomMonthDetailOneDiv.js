import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import WorkingTimeCustomEditForm from "./AdminWindowWorkingTimeCustomEditForm";




class WorkingTimeCustomMonthDetailsOneDiv extends  React.Component
{
    render()
    {
        
       
        function CheckDayOf(IsDayOf) {
            if(IsDayOf)
            {return <span>Yes</span>} 
            else
            {return <span>No</span>}
            
        }

        return(


            
            <div id= {this.props.Id} style={{display:"flex" ,paddingBottom:"10px",paddingTop:"10px"}}>
                {console.log(this.props)}
            <div  style={StyleForUpperOptionDivCheckBox}>
                <input id = {`CheckBox${this.props.Id}Input`} type="checkbox" class = "WorkingTimeCustomDetailsCheckBox AllCheckBoxInput"  style={{display:"none"}}/>
                <div id = {`CheckBox${this.props.Id}`} className="AllCheckBox" style={{width:"25px",height:"25px", border:"3px solid rgb(35,41,54)"}}> <FontAwesomeIcon icon={faCheck} style={{fontSize:"18px" , margin:"2px" ,color:"white"}} onClick={()=>{this.props.OnClickOnCheckBox(this.props.Id,`CheckBox${this.props.Id}`)}}/></div>
            </div>

            <div style={StyleForUpperOptionDiv}>
                {this.props.Title}
            </div>

            <div style={StyleForUpperOptionDiv}>
            {this.props.Date}
            </div>
            <div style={StyleForUpperOptionDiv}>
            {this.props.StartTimeHours}:{this.props.StartTimeMin}
            </div>

            <div style={StyleForUpperOptionDiv}>
            {this.props.EndTimeHours}:{this.props.EndTimeMin}
            </div>

            <div style={StyleForUpperOptionDiv}>
            {CheckDayOf(this.props.IsDayOf)}
            </div>
            <div style={{width:"10%", display:"flex",fontSize:"18px",color:"rgb(35,41,54,0.7)"}}>
                {console.log(this.props.DeleteFromMainArray)}
            <FontAwesomeIcon id={`EditIconOf${this.props.Id}`} icon={faEdit} onMouseOver={()=>{document.getElementById(`EditIconOf${this.props.Id}`).style.color="rgb(35,41,54)"}} onMouseOut={()=>{document.getElementById(`EditIconOf${this.props.Id}`).style.color="rgb(35,41,54,0.7)"}}  onClick = {()=>{OnClickOnEditCustomWorkingTime(this.props)}} />
            <FontAwesomeIcon  id={`DeleteIconOf${this.props.Id}`} icon={faTrash} style={{paddingLeft:"20px",color:"rgb(237,85,101,0.8)"}} onMouseOver={()=>{document.getElementById(`DeleteIconOf${this.props.Id}`).style.color="rgb(237,85,101)"}} onMouseOut={()=>{document.getElementById(`DeleteIconOf${this.props.Id}`).style.color="rgb(237,85,101,0.8)"}} onClick = {()=>{OnClickOnDeleteCustomWorkingTime(this.props.Id,this.props.DeleteFromMainArray)}}/>

            </div>
        </div>
        )
    }
}


const StyleForUpperOptionDivCheckBox = {
    width:"5%"
}

const StyleForUpperOptionDiv = {
    width:"17%",
    textAlign:"left",
    color:"rgb(35,41,54)"
}

function OnClickOnDeleteCustomWorkingTime(Id,DeleteFromMainArray) {
    
    
    document.getElementById(Id).remove();
    
    DeleteFromMainArray(Id);

}

function OnClickOnEditCustomWorkingTime(thisprops) {

    const UpperDiv = ReactDOM.createRoot(document.getElementById("UpperDiv"));
    UpperDiv.render(<WorkingTimeCustomEditForm Id = {thisprops.Id} Date={thisprops.Date} Title = {thisprops.Title} StartHours = { thisprops.StartTimeHours} StartMin = {thisprops.StartTimeMin} EndHours = {thisprops.EndTimeHours} EndMin = {thisprops.EndTimeMin} IsDayOf = {thisprops.IsDayOf} EditInMainArray={thisprops.EditInMainArray}/>);
    
}
export default WorkingTimeCustomMonthDetailsOneDiv;