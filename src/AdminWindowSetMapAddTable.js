import React from "react";
import AddNewTableForm from "./AdminWindowSetMapAddTableForm";


class AddNewTable extends React.Component
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
                <div style={{ backgroundColor: "white", width: `${DivWidth}`, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", padding: "3%" }}>
                    <h1 style={{ textAlign: "center", fontSize: "20px", color: "rgb(35,41,54,0.8)" }}>{this.props.NameOfHeading}</h1>
                    <AddNewTableForm MinFloor={this.props.MinFloor} MaxFloor={this.props.MaxFloor} RenderNewTable = {this.props.RenderNewTable} TableNumber={this.props.TableNumber} NumberOfSeat={this.props.NumberOfSeat} FloorNumber={this.props.FloorNumber} disabled={this.props.disabled} Name = {this.props.Name} NameOfThirdOOption = {this.props.NameOfThirdOOption} DeleteTableFunction = {this.props.DeleteTableFunction}/>
                </div>
            </div>

        )
    }
}

export default AddNewTable;