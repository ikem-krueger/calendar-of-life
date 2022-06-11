import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Blocks from "./components/Blocks";
import Editor from "./components/Editor";
import Events from './components/Events';
import Phases from "./components/Phases";
import Profile from './components/Profile';
import { eightStagesOfDevelopment } from './models/Phases';
import "./style.css";

let profile = {
  name: "Marco",
  birthYear: 1983,
  residence: "Germany/Berlin",
  age: 38,
  status: "Single",
  children: "0",
  weight: 78,
  height: 175,
  sex: "male",
  phases: eightStagesOfDevelopment, // FIXME: Crashes if other phases are used
  events: {
    1: "Year of birth", // TODO: Add logic for multiple events in one year
    38: "Current age",
    67: "Retirement age",
    70: "Life expectancy"
  }
}

const App = () => {
  const [selectedBlock, setSelectedBlock] = useState(profile.age)
  const [phases, updatePhases] = useState(profile.phases)
  const [events, updateEvents] = useState(profile.events)

  return (
    <div>
      <h1>Calender of life</h1>

      <Profile profile={profile} />

      <Blocks phases={phases} events={events} selectedBlock={selectedBlock} setSelectedBlock={setSelectedBlock} />

      <Phases phases={phases} />

      <Events phases={phases} events={events} />

      <Editor events={events} updateEvents={updateEvents} selectedBlock={selectedBlock} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);