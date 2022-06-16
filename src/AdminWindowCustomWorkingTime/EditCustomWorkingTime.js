import React from "react";
import WorkingTimeEditCustomForm from "./EditCustomWorkingTimeForm";
// import "../Styling/AdminWindowCustomWorkingTime.css"



class WorkingTimeCustomEditForm extends React.Component
{



    render() {
      
        return (



            <div className="EditCustomWorkingTimeReturn">
                <div className="EditCustomWorkingTimeReturnForm" >
                    <h1 className="EditCustomWorkingTimeReturnFormHeading" >Update</h1>
                    <WorkingTimeEditCustomForm Id={this.props.Id} Date={this.props.Date} Title={this.props.Title} StartHours={this.props.StartHours} StartMin={this.props.StartMin} EndHours={this.props.EndHours} EndMin={this.props.EndMin} IsDayOf={this.props.IsDayOf} EditInMainArray={this.props.EditInMainArray} />
                </div>
            </div>

        )
    }
}

export default WorkingTimeCustomEditForm;