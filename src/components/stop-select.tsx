import React from "react";
import ReactSelectSearch, { SelectSearchOption } from "react-select-search";
import "react-select-search/style.css";


type propsType = {
    options: SelectSearchOption[]
    getOptions: (query: string) => Promise<SelectSearchOption[]>
}
/**
 * Component to search & select stop
 */
const StopSelect: React.FC<propsType> = ({ options, getOptions }) => {

    // Render
    return (
        <div className="stop-select">
            <ReactSelectSearch
                search
                options={options}
                getOptions={getOptions}
                placeholder="Search a stop.."
            />
        </div>
    )
}

export default StopSelect;
