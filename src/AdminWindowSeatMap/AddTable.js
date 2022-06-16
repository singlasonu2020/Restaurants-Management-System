import React from "react";
import AddNewTableForm from "./AddTableForm";
// import "../Styling/AdminWindowSeatMap.css"
// import "../Styling/AdminWindowCustomWorkingTime.css";



class AddNewTable extends React.Component
{



    render() {
        
        return (



            <div className="EditCustomWorkingTimeReturn">
                <div className="EditCustomWorkingTimeReturnForm">
                    <h1 className="EditCustomWorkingTimeReturnFormHeading">{this.props.NameOfHeading}</h1>
                    <AddNewTableForm MinFloor={this.props.MinFloor} MaxFloor={this.props.MaxFloor} RenderNewTable = {this.props.RenderNewTable} TableNumber={this.props.TableNumber} NumberOfSeat={this.props.NumberOfSeat} FloorNumber={this.props.FloorNumber} disabled={this.props.disabled} Name = {this.props.Name} NameOfThirdOOption = {this.props.NameOfThirdOOption} DeleteTableFunction = {this.props.DeleteTableFunction}/>
                </div>
            </div>

        )
    }
}

export default AddNewTable;