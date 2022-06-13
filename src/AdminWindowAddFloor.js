import React from "react";
import ReactDOM from "react-dom/client";



class AddFloor extends React.Component {

   

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

        const StyleForSveButtonWorkingTimeCustom = {
            padding: "5px",
            width: "100px",
            fontSize: "16px",
            backgroundColor: "rgb(35,41,54)",
            borderRadius: "3px",
            color: "white",
            textAlign: "center",
            marginTop: "40px",
            cursor: "pointer",
            marginRight:"10px"
        
        }
        
        function CancelAddFloor() {
            const root = ReactDOM.createRoot(document.getElementById("UpperDiv"));
            root.render(<div/>);
            
        }
        function AddNewFloor(AddrNewFloorFunction)
        {
            let NewFloorNumberInput = document.getElementById("AddFloorInput").value;
            AddrNewFloorFunction(NewFloorNumberInput);
        }

       
        return (



            <div style={{ backgroundColor: "rgb(35,41,54,0.5)", position: "absolute", left: "0", right: "0", top: "0", bottom: "0" }}>
                <div style={{ backgroundColor: "white", width: `${DivWidth}`, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", padding: "3%" }}>
                    <h1 style={{ textAlign: "center", fontSize: "20px", color: "rgb(35,41,54,0.8)" }}>Add New Floor</h1>


                    <div id="AddFloor" class="input-group mb-3" style={{ width: "100%", postion: "absolute" }}>
                        <div class="input-group-prepend" style={{ width: "40%" }}>
                            <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%", fontSize: "14px" }}>Floor Number</span>
                        </div>
                        <input id="AddFloorInput" type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
                    </div>


                    <div style={{ display: "flex" }}>
                        <div style={StyleForSveButtonWorkingTimeCustom} onClick={() => {AddNewFloor(this.props.AddrNewFloorFunction)}}>Add Floor</div>
                        <div style={StyleForSveButtonWorkingTimeCustom} onClick={CancelAddFloor}>Cancel</div>
                    </div>



                </div>
            </div>

        )
    }
}




export default AddFloor;