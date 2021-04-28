import React from "react";

/**
 * This component display item of departures
 */
type propsType = {
    stopEvent: any
}
const DepartureItem: React.FC<propsType> = ({ stopEvent }) => {

    // Render
    return (
        <div>
            <h3>{stopEvent.transportation.disassembledName}</h3>
            <div>{stopEvent.departureTimeEstimated}</div>
            <div>{stopEvent.transportation.description}</div>
        </div>
    )
}

export default DepartureItem;

