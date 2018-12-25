import {Component} from "react";
import React from "react";

/*This component format and converts Timestamps dates to MM/DD/YYYY */
class FormatDate extends Component {
    render() {
        let timestamp = this.props.timestamp;
        let NewDateObject = new Date(timestamp*1000);
        let FullDate = (NewDateObject.getMonth() + 1) + '/' + NewDateObject.getDate() + '/' + NewDateObject.getFullYear();
        return (
            <span>{FullDate}</span>
        )

    }

}

export default FormatDate;