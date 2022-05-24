import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SideBarOption extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div
        className="AdminWindowSideBarOptionReturnDiv"
        id={`AdminWindowSideBarOptionReturnDiv${this.props.Name}`}
        style={SideWindowOptionStyle}
        onClick={(e) => {
          this.props.VariableForOpenOrNot = this.props.OnClickFunction(
            this.props.Name,
            this.props.ArrayOfInsideItem
          );
        }}
      >
        <h3 style={{ fontSize: "14px", margin: 0, padding: 0 }}>
          <FontAwesomeIcon
            icon={this.props.Icon}
            className="AdminWindowNavBarRightSideOptionDivLogoutIcon"
            style={{ paddingRight: "10px" }}
          />
          {this.props.Name}

          {
            <span
              id={`AdminWindowSideBarOptionReturnDivUpDownIcon${this.props.Name}`}
            >
              <FontAwesomeIcon
                icon={this.props.InsideOptionIcon}
                className="AdminWindowNavBarRightSideOptionDivLogoutIcon"
                style={{ paddingRight: "10px", float: "right" }}
              />
            </span>
          }
        </h3>
      </div>
    );
  }
}

let SideWindowOptionStyle = {
  color: "white",
  padding: "8%",
  paddingRight: "10%",
  cursor: "pointer",
};

export default SideBarOption;
