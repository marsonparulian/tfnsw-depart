import React, { useEffect, useState } from 'react';
import { IDepartureMonResponse, IResponse, IStopEvent } from "./type";
import tripPlannerAPI from "./apis/tripPlanner";
import StopSelect from "./components/stop-select";
import DepartureList from "./components/departure-list";
import './App.css';
import { AxiosResponse } from 'axios';
import { SelectedOption, SelectedOptionValue, SelectSearchOption } from 'react-select-search';

function App() {
  // Hold the options  to select `stop`
  const [stopSelectOptions] = useState<SelectSearchOption[]>([]);
  /**
   * Get options for stop selection component
   */
  const getStopSelectOptions = async (query: string): Promise<SelectSearchOption[]> => {
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


  }

  // Hold departures / stopEventreturn ()
  const [stopEvents, setStopEvents] = useState<IStopEvent[]>([]);

  // Set after effect, no dependencies
  useEffect(() => {
  }, []);

  /**
   * Fetch next departures
   */
  const fetchNextDepartures = async (stopId: string): Promise<void> => {
    const response: AxiosResponse<IDepartureMonResponse> = await tripPlannerAPI.getDepartureList(stopId);
    setStopEvents(response.data.stopEvents);
  }
  /**
   * Handle change on selected stop
   */
  const onStopSelectChange = (selectedValue: any): void => {
    // Because we know for sure the first argument will be a string
    const stopId = selectedValue as string;

    // fetch based on the selected stop
    fetchNextDepartures(stopId);
  }

  return (
    <div className="App">
      <header><h1>Departure board for NSW - Australia</h1></header>
      <div className="departure-select-cont">
        <StopSelect
          options={stopSelectOptions}
          getOptions={getStopSelectOptions}
          onChange={onStopSelectChange}
        />
      </div>
      <div className="list departure-list-cont">
        <DepartureList
          stopEvents={stopEvents}
        />
      </div>
    </div>
  );
}

export default App;
