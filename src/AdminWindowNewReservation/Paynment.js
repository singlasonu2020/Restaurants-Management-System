import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "../Styling/AdminWindowNewReservation.css";
import { faCreditCard, faInr, faCheck, faGooglePay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SingleSelect from "react_select_single_element";
import upi from "../image/upi.png"
import GoogleIcon from "../image/google-pay-icon.png";
import NetBanking from "../image/NetBanking.png"
import CashIcon from "../image/CashIcon.png"
import NewReservationData from "./UseContext";



function Payment() {

    const data = useContext(NewReservationData);

    const onChange = (item) => {
        const root = ReactDOM.createRoot(document.getElementById("GetIdComponent"));
        if (item == "upi") {

            root.render(<GetId title={<div> <img src={upi} width="40px" height="20px" /> UPI ID</div>} placeholder="Please Enter UPI ID "  buttonName="Send Request"/>);
        }
        else if(item=="google_pay")
        {
            root.render(<GetId title={<div> <img src={GoogleIcon} width="40px" height="20px" style={{ padding: "0 10px" }} />Googe Pay</div>} placeholder="Please Enter Googe Pay Phone No. " buttonName="Send Request"/>);
        }

        else if(item=="cash")
        {
            root.render(<GetId title={<div> <img src={CashIcon} width="40px" height="20px" style={{ padding: "0 10px" }} />Cash</div>} placeholder="Enter OTP @ Mobile" buttonName="Verify"/>);
        }

        else
        {
            root.render();
        }
    }

    const Data = [];
    Data.push({
        item: <div> <img src={upi} width="40px" height="20px" /> UPI ID</div>,
        value: "upi"
    }
    )
    Data.push({
        item: <div> <img src={GoogleIcon} width="40px" height="20px" style={{ padding: "0 10px" }} />Googe Pay</div>,
        value: "google_pay"
    }
    )
    Data.push({
        item: <div> <img src={NetBanking} width="40px" height="20px" style={{ padding: "0 10px" }} />Net Banking</div>,
        value: "net_banking"
    }
    )
    Data.push({
        item: <div> <FontAwesomeIcon icon={faCreditCard} style={{ padding: "0 10px" }} /> Credit / Debit Card </div>,
        value: "Cards"
    }
    )
    Data.push({
        item: <div> <img src={CashIcon} width="40px" height="20px" style={{ padding: "0 10px" }} />Cash</div>,
        value: "cash"
    }
    )





    return (
        <div>
            <div style={{ marginTop: "20px" }}>
                <div className="LabelSelectDate">Reservation Fee</div>
                <div id="DateComponenrRD" className="DateComponenrRD">
                    <input id="InputToTime" className="InputDateComponenrRD" type="text" name="fname" placeholder="Enter Reservation Fee" />
                    <div className="CalenderIconDateComponenrRD" ><FontAwesomeIcon icon={faInr} /></div>
                </div>
            </div>

            <div style={{ marginTop: "20px" }}>
                <div className="LabelSelectDate">Select Payment Method <FontAwesomeIcon icon={faCheck} /></div>
                <div id="DateComponenrRD" className="DateComponenrRD" >
                    < SingleSelect Data={Data} onChange={onChange} />
                </div>
            </div>

            <div  id="GetIdComponent" style={{ marginTop: "20px" }}>

            </div>

        </div>
    )
}

function GetId(data) {
    return (
        <div>       
            <div className="LabelSelectDate">{data.title}</div>
            <div id="DateComponenrRD" className="DateComponenrRD" >
            <input id="InputId" className="InputDateComponenrRD" type="text" name="fname" placeholder={data.placeholder} />
            </div>
            <div className="PaymentRequestButton">{data.buttonName}</div>
        </div>
    )
}



export default Payment;