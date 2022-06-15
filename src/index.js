import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Calendar from "./components/Calendar";
import Phases from "./components/Phases";
import Events from './components/Events';
import "./style.css";

const profile = {
  phases: [
    { "from": 1, "to": 1, "name": "Infancy" },
    { "from": 2, "to": 3, "name": "Toddler age" },
    { "from": 3, "to": 5, "name": "Playing age" },
    { "from": 6, "to": 11, "name": "School age" },
    { "from": 12, "to": 18, "name": "Adolescence" },
    { "from": 19, "to": 40, "name": "Early adulthood" },
    { "from": 40, "to": 65, "name": "Adulthood" },
    { "from": 65, "to": 100, "name": "Mature adulthood" },
  ],
  events: {
    1: "Year of birth"
  }
}

const App = () => {
  const [phases, setPhases] = useState(profile.phases)
  const [events, setEvents] = useState(profile.events)
  const [range, setRange] = useState()
  const [name, setName] = useState()
  const [year, setYear] = useState()

  function editPhase(phaseNumber, year) {
    const phase = phases[phaseNumber - 1]

    if (phase) {
      const { from, to, name } = phase

      setRange(`${from}-${to}`)
      setName(name)
    }

    setYear(year)
  }

  return (
    <div>
      <h1>Calender of life</h1>

      <h2>Years</h2>

      <Calendar phases={phases} events={events} selectedYear={year} editPhase={editPhase} />

      <h2>Phases</h2>

      <form>
        <label for="range">Range:</label><br />
        <input type="text" id="range" placeholder="1-100" value={range} /><br />
        <label for="name">Name:</label><br />
        <input type="text" id="name" placeholder="Name of the phase" value={name} /><br />
      </form>

      <Phases phases={phases} />

      <h2>Events</h2>

      <form>
        <label for="year">Year:</label><br />
        <input type="text" id="year" placeholder="1-100" value="" /><br />
        <label for="event">Event:</label><br />
        <input type="text" id="event" placeholder="Event that happened" value="" /><br />
      </form>

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