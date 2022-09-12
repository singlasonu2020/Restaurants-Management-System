import React from "react";
import ReactDOM from "react-dom/client";
// import "../Styling/AdminWindowSeatMap.css"
// import "../Styling/AdminWindowCustomWorkingTime.css";




class AddFloor extends React.Component {

   

    render() {
   
        
        function CancelAddFloor() {
            const root = ReactDOM.createRoot(document.getElementById("UpperDiv"));
            root.render(<div/>);
            
        }
        function AddNewFloor(AddrNewFloorFunction)
        {
            let NewFloorNumberInput = document.getElementById("AddFloorInput").value;
            console.log(NewFloorNumberInput);
            AddrNewFloorFunction(NewFloorNumberInput);
        }

       
        return (



            <div className="EditCustomWorkingTimeReturn">
                <div className="EditCustomWorkingTimeReturnForm">
                    <h1 className="EditCustomWorkingTimeReturnFormHeading">Add New Floor</h1>


                    <div id="AddFloor" class="input-group mb-3" style={{ width: "100%", postion: "absolute" }}>
                        <div class="input-group-prepend AdminWindowCustomFormInputDivLabel">
                            <span class="input-group-text AdminWindowCustomFormInputDivLabelTitle FullAddFloor" id="inputGroup-sizing-default" >Floor Number</span>
                        </div>
                        <input id="AddFloorInput" type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
                    </div>


                    <div style={{ display: "flex" }}>
                        <div className="ButtonWorkingTimeCustom" onClick={() => {AddNewFloor(this.props.AddrNewFloorFunction)}}>Add Floor</div>
                        <div className="ButtonWorkingTimeCustom" style={{marginLeft:"10px"}} onClick={CancelAddFloor}>Cancel</div>
                    </div>



                </div>
            </div>

        )
    }
}




export default AddFloor;