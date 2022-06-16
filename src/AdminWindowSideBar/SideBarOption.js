import React from "react";
// import "../Styling/AdminWindowSideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class SideBarOption extends React.Component {
  

  render() {
    return (
      <div
        className="AdminWindowSideBarOptionReturnDiv"
        id={`AdminWindowSideBarOptionReturnDiv${this.props.Name}`}
        onClick={(e) => {
          this.props.OnClickFunction(
            this.props.Name,
            this.props.ArrayOfInsideItem
          
          );
        }}
      >
          

        <h3 className="AdminWindowSideBarOptionOption" >
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
                className="AdminWindowSideBarAngleDownIcon"
                style={{ paddingRight: "10px", float: "right" }}
              />
            </span>
          }
        </h3>
      </div>
    );
  }
}



export default SideBarOption;
