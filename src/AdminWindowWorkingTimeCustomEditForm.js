import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import WorkingTimeEditCustomForm from "./AdminWindowWorkingTimeCustomEditFormForm";
import { render } from "@testing-library/react";


class WorkingTimeCustomEditForm extends React.Component
{



    render() {
        var DivWidth;
        let WindowWidth = window.screen.width;

        if (WindowWidth >= 1024) {
            DivWidth = "35%";
        } else if (WindowWidth >= 512) {
            DivWidth = "55%";
        } else {
            DivWidth = "75%";
        }
        return (



            <div style={{ backgroundColor: "rgb(35,41,54,0.5)", position: "absolute", left: "0", right: "0", top: "0", bottom: "0" }}>
                {console.log("helooooooooooo")}
                {console.log(this.props.Id)}
                <div style={{ backgroundColor: "white", width: `${DivWidth}`, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", padding: "3%" }}>
                    <h1 style={{ textAlign: "center", fontSize: "20px", color: "rgb(35,41,54,0.8)" }}>Update</h1>
                    <WorkingTimeEditCustomForm Id={this.props.Id} Date={this.props.Date} Title={this.props.Title} StartHours={this.props.StartHours} StartMin={this.props.StartMin} EndHours={this.props.EndHours} EndMin={this.props.EndMin} IsDayOf={this.props.IsDayOf} EditInMainArray={this.props.EditInMainArray} />


                </div>
            </div>

        )
    }
}

export default WorkingTimeCustomEditForm;