import React from "react";
import { IStopEvent } from "../type"

/**
 * This component display item of departures
 */
type propsType = {
    stopEvent: IStopEvent
}
const DepartureItem: React.FC<propsType> = ({ stopEvent }) => {

    // Render
    return (
        <div className="departure-item">
            <h3 className="title">{stopEvent.transportation.disassembledName}</h3>
            <div className="lv-1">{stopEvent.transportation.description}</div>
            <div className="lv-2">{stopEvent.departureTimeEstimated}</div>
            <div className="clear"></div>
        </div >
    )
}

export default DepartureItem;

