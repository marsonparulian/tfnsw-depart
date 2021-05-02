import React from "react";
import ReactSelectSearch, { SelectedOption, SelectedOptionValue, SelectSearchOption } from "react-select-search";
import "react-select-search/style.css";


type propsType = {
    options: SelectSearchOption[]
    getOptions: (query: string) => Promise<SelectSearchOption[]>
    onChange: (selectedOptionValue: SelectedOptionValue | SelectedOptionValue[], selectedOption: SelectedOption | SelectedOption[]) => void
}
/**
 * Component to search & select stop
 */
const StopSelect: React.FC<propsType> = ({ options, getOptions, onChange }) => {

    // Render
    return (
        <div className="stop-select">
            <ReactSelectSearch
                search
                options={options}
                getOptions={getOptions}
                onChange={onChange}
                placeholder="Search a stop (minimum 5 chars).."
            />
        </div>
    )
}

export default StopSelect;
