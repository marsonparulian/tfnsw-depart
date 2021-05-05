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
      <header><h1>Departure board for NSW - Australia</h1></header>
      <div className="departure-select-cont">
        <StopSelect
          options={[]}
          onChange={onStopSelectChange}
        />
      </div>
      <div className="list departure-list-cont">
        <DepartureList
          stop={selectedStop}
          stopEvents={stopEvents}
        />
      </div>
    </div>
  );
}

export default App;
