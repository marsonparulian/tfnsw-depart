import React from "react";
import ReactSelectSearch, { SelectSearchProps } from "react-select-search";
import "react-select-search/style.css";

/**
 * Component to search & select stop
 */
const StopSelect: React.FC<SelectSearchProps> = ({ options, getOptions, onChange }) => {

    // Render
    return (
        <div className="stop-select">
            <ReactSelectSearch
                search
                // wait 900ms after typing search term. Note :  type definition in `react-seelect-search` must be fixed first.
                debounce={900}
                options={options}
                getOptions={getOptions}
                onChange={onChange}
                placeholder="Search a stop.."
            />
        </div>
    )
}

export default StopSelect;
