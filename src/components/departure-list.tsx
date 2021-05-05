import React, { useMemo } from "react";
import { IStop, IStopEvent } from "../type";
import DepartureItem from "./departure-item";

export type propsType = {
    stop: IStop | undefined
    stopEvents: IStopEvent[]
}
/**
 * Component to show list of departures
*/
const DepartureList: React.FC<propsType> = ({ stop, stopEvents }) => {
    // Used as key for <DepartureItem />
    let c = 1;

    // Create title of 'departure list' component
    const title = useMemo(() => {
        if (!stop) return "Please search & select a stop above";
        else if (stopEvents.length === 0) return `No departures found at stop : ${stop.name}`;
        else return `Next departures from stop: ${stop.name}`;
    }, [stop, stopEvents]);

    // Render
    return (
        <div className="departure-list">
            <h2>{title}</h2>
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
