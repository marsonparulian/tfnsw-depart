import React from "react";
import DepartureItem from "./departure-item";

/**
 * Component to show list of departures
*/
type propsType = {
    stopEvents: any[]
}
const DepartureList: React.FC<propsType> = ({ stopEvents }) => {
    let c = 1;
    // Render
    return (
        <div>
            {stopEvents.map(stopEvent => (
                <DepartureItem
                    key={c++}
                    stopEvent={stopEvent}
                />
            ))}
        </div>
    )
}
export default DepartureList;
