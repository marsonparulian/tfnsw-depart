import React, { useState, useCallback } from "react";
import { AxiosResponse } from "axios";
import ReactSelectSearch, { SelectSearchProps, SelectSearchOption } from "react-select-search";
import { IResponse } from "../type";
import tripPlannerAPI from "../apis/tripPlanner";
import "react-select-search/style.css";

/**
 * Component to search & select stop
 */
const StopSelect: React.FC<SelectSearchProps> = ({ options, onChange }) => {
    // Hold the status of stops fetching. Possible values : "initial", "fetching", "fetched"
    const [stopsFetchStatus, setStopsFetchStatus] = useState<string>("initial");
    // Hold  the query to search for stop
    const [stopQuery, setStopQuery] = useState<string>("");

    /**
       * Get options for stop selection component
       */
    const getStopSelectOptions = useCallback(async (query: string): Promise<SelectSearchOption[]> => {
        // Persist the query to be used  in search result as N/A message
        setStopQuery(query);

        // Return empty result if query is empty
        if (!query) {
            return [];
        }

        // Set status to "fetching"
        setStopsFetchStatus("fetching");

        // Wait for response
        const response: AxiosResponse<IResponse> = await tripPlannerAPI.getStopList(query);

        // Set stops fetching status to "fetched"
        setStopsFetchStatus("fetched");

        // Create `SelectSearchOption` array
        return response.data.locations.map(loc => {
            // Use name from `location.assignedStops[0].name` if exist or use `location.name`
            const n: string = loc.assignedStops[0].name || loc.name;
            const value: string = loc.id;

            return {
                name: n,
                value: value
            }
        });
    }, []);

    /**
     * Create empty-list message
     */
    const createEmptyMessage = useCallback(() => {
        // If query is falsy
        if (!stopQuery) return "Please type to search for stops..";
        else if (stopsFetchStatus === "fetching") return `Fetching stops with keywords '${stopQuery}'..`;
        else return `No stops found with keyword '${stopQuery}'`;
    }, [stopsFetchStatus, stopQuery]);

    // Render
    return (
        <div className="stop-select">
            <ReactSelectSearch
                search
                // wait 900ms after typing search term. Note :  type definition in `react-seelect-search` must be fixed first.
                debounce={900}
                options={options}
                getOptions={getStopSelectOptions}
                onChange={onChange}
                placeholder="Search a stop.."
                emptyMessage={createEmptyMessage}
            />
        </div>
    )
}

export default StopSelect;
