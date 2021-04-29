import React from "react";
import { IStopEvent } from "../type";
import DepartureItem from "./departure-item";

/**
 * Component to show list of departures
*/
type propsType = {
    stopEvents: IStopEvent[]
}
const DepartureList: React.FC<propsType> = ({ stopEvents }) => {
    // Used as key for <DepartureItem />
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
