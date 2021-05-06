import React, { useEffect, useState } from 'react';
import { IDepartureMonResponse, IStop, IStopEvent } from "./type";
import tripPlannerAPI from "./apis/tripPlanner";
import StopSelect from "./components/stop-select";
import DepartureList from "./components/departure-list";
import './App.css';
import { AxiosResponse } from 'axios';

function App() {
  // Hold the selected stop
  const [selectedStop, setSelectedStop] = useState<IStop>();

  // Hold departures / stopEvents
  const [stopEvents, setStopEvents] = useState<IStopEvent[]>([]);

  // The fetch status of `stopEvents`. Possible values : "initial", "fetching", "fetched"
  const [stopEventsFetchStatus, setStopEventsFetchStatus] = useState<string>("initial");

  // Set after effect, no dependencies
  useEffect(() => {
  }, []);

  /**
   * Fetch next departures
   */
  const fetchNextDepartures = async (stopId: string): Promise<void> => {
    // Set status
    setStopEventsFetchStatus("fetching")

    // Reset the `stopEvents` to initial (empty array)
    setStopEvents([]);

    const response: AxiosResponse<IDepartureMonResponse> = await tripPlannerAPI.getDepartureList(stopId);
    setStopEvents(response.data.stopEvents);

    // Set fetch status
    setStopEventsFetchStatus("fetched");
  }
  /**
   * Handle change on selected stop
   */
  const onStopSelectChange = (selectedValue: any, selectedOption: any): void => {
    // Hold the selected stop
    setSelectedStop({
      id: selectedOption.value,
      name: selectedOption.name
    });

    // Because we know for sure the first argument will be a string
    const stopId = selectedValue as string;

    // fetch based on the selected stop
    fetchNextDepartures(stopId);
  }

  return (
    <div className="App">
      <header>
        <h1>
          Departure board NSW - Australia
        </h1>
      </header>
      <div className="departure-select-cont">
        <StopSelect
          options={[]}
          onChange={onStopSelectChange}
        />
      </div>
      <div className="list departure-list-cont">
        <DepartureList
          fetchStatus={stopEventsFetchStatus}
          stop={selectedStop}
          stopEvents={stopEvents}
        />
      </div>
      <footer>
        Powered by <a href="https://glitch.com" target="_blank">glitch.com</a>
      </footer>
    </div>
  );
}

export default App;
