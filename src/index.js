import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Calendar from "./components/Calendar";
import Phases from "./components/Phases";
import Events from './components/Events';
import "./style.css";
import Editor from './components/Editor';

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
    1: "Year of birth",
    38: "Current age",
    67: "Retirement age",
    70: "Life expectancy"
  }
}

const App = () => {
  const [phases, setPhases] = useState(profile.phases)
  const [events, setEvents] = useState(profile.events)
  const [range, setRange] = useState("1-1")
  const [name, setName] = useState("Infancy")

  function editPhase(phaseNumber) { // TODO: refactor function name
    const phase = phases[phaseNumber - 1]

    if (phase) {
      const { from, to, name } = phase

      setRange(`${from}-${to}`)
      setName(name)
    }
  }

  return (
    <div>
      <h1>Calender of life</h1>

      <h2>Years</h2>

      <Calendar phases={phases} events={events} editPhase={editPhase} />

      <h2>Phases</h2>

      <Editor range={range} name={name} />

      <Phases phases={phases} editPhase={editPhase} />

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