import {Component} from "react";
import React from "react";

/*This component format and converts Timestamps dates to M DD, YYYY */
class FormatDate extends Component {
    render() {

        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        let timestamp = this.props.timestamp;
        let NewDateObject = new Date(timestamp*1000);
        let FullDate = (monthNames[NewDateObject.getMonth()]) + ' ' + NewDateObject.getDate() + ', ' + NewDateObject.getFullYear();
        return (
            <span>{FullDate}</span>
        )

    }

}

export default FormatDate;