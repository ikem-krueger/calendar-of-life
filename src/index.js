import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Calendar from "./components/Calendar";
import Phases from "./components/Phases";
import Events from './components/Events';
import "./style.css";

const profile = {
  phases: [ { from: 1, to: 12, phase: "Childhood" }, ],
  events: { 1: "Birth", 38: "Now" }
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

      <Events events={events} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);