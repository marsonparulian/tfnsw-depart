import React from 'react';
import DepartureList from "./components/departure-list";
import './App.css';

function App() {  
  return (
    <div className="App">
      <h1>Departure board for NSW - Australia</h1>
      <header className="App-header">
      </header>
      <div className="list departure-list">
        <DepartureList />
      </div>
    </div>
  );
}

export default App;
