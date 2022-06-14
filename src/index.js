import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Calendar from "./components/Calendar";
import Phases from "./components/Phases";
import Events from './components/Events';
import "./style.css";

const profile = {
  phases: [
    {"from":1, "to":1, "phase":"Infancy"},
    {"from":2, "to":3, "phase":"Toddler age"},
    {"from":3, "to":5, "phase":"Playing age"},
    {"from":6, "to":11, "phase":"School age"},
    {"from":12, "to":18, "phase":"Adolescence"},
    {"from":19, "to":40, "phase":"Early adulthood"},
    {"from":40, "to":65, "phase":"Adulthood"},
    {"from":65, "to":100, "phase":"Mature adulthood"},
  ],
  events: {
    1: "Year of birth",
    38: "Current age",
    67: "Retirement age",
    70: "Life expectancy"
  }
}

const App = () => {
  const [phases, updatePhases] = useState(profile.phases)
  const [events, updateEvents] = useState(profile.events)

  return (
    <div>
      <h1>Calender of life</h1>

      <h2>Years</h2>

      <Calendar phases={phases} events={events} />

      <h2>Phases</h2>

      <Phases phases={phases} />

      <h2>Events</h2>

      <Events phases={phases} events={events} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);