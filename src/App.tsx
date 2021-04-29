import React, { useEffect, useState } from 'react';
import { IDepartureMonResponse, IStopEvent } from "./type";
import tripPlannerAPI from "./apis/tripPlanner";
import StopSelect from "./components/stop-select";
import DepartureList from "./components/departure-list";
import './App.css';
import { AxiosResponse } from 'axios';

function App() {
  // Hold departures / stopEvents
  const [stopEvents, setStopEvents] = useState<IStopEvent[]>([]);

  // Set after effect, no dependencies
  useEffect(() => {
    fetchNextDepartures();
  }, []);

  /**
   * Fetch next departures
   */
  const fetchNextDepartures = async (): Promise<void> => {
    const response: AxiosResponse<IDepartureMonResponse> = await tripPlannerAPI.getDepartureList();
    setStopEvents(response.data.stopEvents);
  }
  return (
    <div className="App">
      <header><h1>Departure board for NSW - Australia</h1></header>
      <div className="departure-select-cont">
        <StopSelect />
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
