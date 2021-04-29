import React, { useEffect, useState } from 'react';
import { IDepartureMonResponse, IStopEvent } from "./type";
import tripPlannerAPI from "./apis/tripPlanner";
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
      <h1>Departure board for NSW - Australia</h1>
      <header className="App-header">
      </header>
      <div className="list departure-list">
        <DepartureList
          stopEvents={stopEvents}
        />
      </div>
    </div>
  );
}

export default App;
