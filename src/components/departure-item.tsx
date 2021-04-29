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
        <div>
            <h3>{stopEvent.transportation.disassembledName}</h3>
            <div>{stopEvent.transportation.description}</div>
            <div>{stopEvent.departureTimeEstimated}</div>
        </div>
    )
}

export default DepartureItem;

