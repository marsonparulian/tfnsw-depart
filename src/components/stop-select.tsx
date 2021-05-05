import React, { useCallback } from "react";
import { AxiosResponse } from "axios";
import ReactSelectSearch, { SelectSearchProps, SelectSearchOption } from "react-select-search";
import { IResponse } from "../type";
import tripPlannerAPI from "../apis/tripPlanner";
import "react-select-search/style.css";

/**
 * Component to search & select stop
 */
const StopSelect: React.FC<SelectSearchProps> = ({ options, onChange }) => {
    /**
       * Get options for stop selection component
       */
    const getStopSelectOptions = useCallback(async (query: string): Promise<SelectSearchOption[]> => {
        // Return empty result if query is empty
        if (!query) {
            return [];
        }

        // Wait for response
        const response: AxiosResponse<IResponse> = await tripPlannerAPI.getStopList(query);

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
            />
        </div>
    )
}

export default StopSelect;
