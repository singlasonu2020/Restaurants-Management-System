import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "../Styling/AdminWindowNewReservation.css";
import DatePicker from "../DatePicker/DatePick";
import { faCalendarAlt, faDollyBox } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCountries, getStates } from "country-state-picker";
import "/node_modules/flag-icons/css/flag-icons.min.css";



function ClientDetails() {

    const [dob, SetDob] = useState();
    const [country, SetCountry] = useState("in");


    useEffect(() => {
        PutDate(dob)
    })



    let countries = getCountries();
    console.log(countries);
    return (
        <div className="ReservationDetails NewReservationContainerTemp">
             {/* <div className="fi fi-in fis"></div> */}
            <div>
                <div className="LabelSelectDate LabelTemp">Name <FontAwesomeIcon icon={faUser} /> <span style={{ color: "red" }}>*</span> </div>
                <div id="ClientNameRD" className="DateComponenrRD">
                    <input id="InputClientNameRD" className="InputDateComponenrRDTemp" type="text" name="fname" placeholder="Client Name" />
                </div>
            </div>

            <div style={{ display: "flex", gap: "20px" }}>
            <div style={{flex:"0.5"}}>
                <div className="LabelSelectDate LabelTemp">Email Id <FontAwesomeIcon icon={faEnvelope} /> <span style={{ color: "red" }}>*</span> </div>
                <div id="ClientNameRD" className="DateComponenrRD">
                    <input id="InputClientNameRD" className="InputDateComponenrRDTemp" type="email" name="fname" placeholder="email@address.com" />
                </div>
            </div>

            <div style={{flex:"0.5"}}>
                <div className="LabelSelectDate LabelTemp">Mobile Number <FontAwesomeIcon icon={faPhone} /> <span style={{ color: "red" }}>*</span> </div>
                <div id="ClientNameRD" className="DateComponenrRD">
                    <div>
                    <select id="DialCode" name="Occasion" className="InputDateComponenrRDTemp" style={{ color: "rgba(0,0,0,0.6)" , padding:"7px 0" ,fontSize:"14px" ,height:"100%" ,width:"60px"}} onChange={ChangrDialCode}>                        
                        {countries.map((item) => {
                            return (<option value={item.dial_code} style={{ color: "rgba(0,0,0,1)"}}>{item.dial_code} <div className="SONU">123</div></option>)
                        })}
                    </select>
                    </div>
                    
                    <input id="InputClientNameRD" className="InputDateComponenrRDTemp" type="tel" name="fname" placeholder="xxx-xxx-xxxx" pattern="[0-9]{10}" />
                </div>
            </div>
            </div>


            <div style={{ display: "flex", gap: "20px" }}>
            <div style={{flex:"0.5"}}>
                <div className="LabelSelectDate LabelTemp">Occasion</div>
                <div id="OccasionRD" className="DateComponenrRD">
                    <select id="Occasion" name="Occasion" className="InputDateComponenrRDTemp" style={{ color: "rgba(0,0,0,0.6)" }} onChange={ChangeOccasion}>
                        <option value="" disabled selected >Select Occasion</option>
                        <option value="Birthday" style={{ color: "rgba(0,0,0,1)" }}>Birthday</option>
                        <option value="Anniversary" style={{ color: "rgba(0,0,0,1)" }}>Anniversary</option>
                        <option value="other" style={{ color: "rgba(0,0,0,1)" }}>other</option>
                    </select>
                </div>
            </div>

            <div style={{flex:"0.5"}}>
                <div className="LabelSelectDate LabelTemp">Date Of Birth</div>
                <div id="DateComponenrRD" className="DateComponenrRD">
                    <input id="InputDOBComponenrRD" className="InputDateComponenrRDTemp" type="text" name="fname" placeholder="Select Date Of Birth" />
                    <div className="CalenderIconDateComponenrRD" onClick={() => { onfocusDate(dob, SetDob) }} ><FontAwesomeIcon icon={faCalendarAlt} /></div>
                </div>
            </div>

            </div>

            <div>
                <div className="LabelSelectDate LabelTemp">Address</div>
                <div id="ClientNameRD" className="DateComponenrRD">
                    <input id="InputClientNameRD" className="InputDateComponenrRDTemp" type="text" name="fname" placeholder="Enter Address" />
                </div>
            </div>

            <div >
                <div className="LabelSelectDate LabelTemp">Select Country</div>
                <div id="OccasionRD" className="DateComponenrRD">
                    <select id="SelectCountry" name="Occasion" className="InputDateComponenrRDTemp" style={{ color: "rgba(0,0,0,0.6)" }} onChange={() => { OnChangeCountry(SetCountry) }}>
                        <option value="" disabled selected >Select Country</option>
                        {countries.map((item) => {
                            return (<option value={item.code} style={{ color: "rgba(0,0,0,1)" }}>{item.name}</option>)
                        })}
                    </select>
                </div>
            </div>


            <div style={{ display: "flex", gap: "20px" }}>
                <div  >
                    <div className="LabelSelectDate LabelTemp">Select State</div>
                    <div id="ClientNameRD" className="DateComponenrRD">
                        <select id="SelectState" name="Occasion" className="InputDateComponenrRDTemp" style={{ color: "rgba(0,0,0,0.6)" }} onChange={OnChangeState}>
                            <option value="" disabled selected >Select State</option>
                            {getStates(country).map((item) => {
                                return (<option value={item} style={{ color: "rgba(0,0,0,1)" }}>{item}</option>)
                            })}
                        </select>
                    </div>
                </div>

                <div >
                    <div className="LabelSelectDate">ZIP Code</div>
                    <div id="ClientNameRD" className="DateComponenrRD">
                        <input id="InputClientNameRD" className="InputDateComponenrRDTemp" type="text" name="fname" placeholder="Enter ZIP Code" pattern="[0-9]{10}" />
                    </div>
                </div>

            </div>




        </div>
    )
}

function OnChangeState() {
    document.getElementById("SelectState").style.color = "black";
}


function ChangrDialCode()
{
    document.getElementById("DialCode").style.color = "black";
}


function OnChangeCountry(SetCountry) {
    document.getElementById("SelectCountry").style.color = "black";
    let code = document.getElementById("SelectCountry").value;
    SetCountry(code);
}


function onfocusDate(date, SetDate) {
    if (date == undefined) {
        SetDate(new Date());
        const root = ReactDOM.createRoot(document.getElementById("UpperUpperDiv"));
        root.render(<DatePicker Date={new Date()} clear={onfocusDate} SetDate={SetDate} cancel={CancelDtePicker} color="rgb(189,166,59)" />);
    }
    else {
        const root = ReactDOM.createRoot(document.getElementById("UpperUpperDiv"));
        root.render(<DatePicker Date={date} clear={onfocusDate} SetDate={SetDate} cancel={CancelDtePicker} color="rgb(189,166,59)" />);

    }


}

function ChangeOccasion() {
    document.getElementById("Occasion").style.color = "black";
    if (document.getElementById("Occasion").value == "other") {
        const root = ReactDOM.createRoot(document.getElementById("OccasionRD"));
        root.render(<input id="InputClientNameRD" className="InputDateComponenrRD" type="text" name="fname" placeholder="Enter Occasion" />);
    }

}


function CancelDtePicker() {
    const root = ReactDOM.createRoot(document.getElementById("UpperUpperDiv"));
    root.render(<div></div>);
}

function PutDate(Date) {
    if (Date != undefined)
        document.getElementById("InputDOBComponenrRD").value = Date.toDateString();

}
export default ClientDetails;