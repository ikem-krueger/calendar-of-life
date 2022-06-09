import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

import Profile from './components/Profile';
import Blocks from "./components/Blocks";
import Phases from "./components/Phases";
import Events from './components/Events';
import Editor from "./components/Editor";

import "./style.css";

import { eightStagesOfDevelopment, smvTimeline } from './models/Phases'

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
  phases: eightStagesOfDevelopment,
  events: {
    1: "Year of birth",
    38: "Current age",
    67: "Retirement age",
    70: "Life expectancy"
  }
}

const App = () => {
  const [events, updateEvents] = useState(profile.events)

  return (
    <div>
      <h1>Calender of life</h1>

      <Profile profile={profile} />

      <Blocks phases={profile.phases} events={events} />

      <Phases phases={profile.phases} />

      <Events phases={profile.phases} events={events} />

      <Editor events={events} updateEvents={updateEvents} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);