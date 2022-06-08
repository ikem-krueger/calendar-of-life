import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

import Profile from './components/Profile';
import Blocks from "./components/Blocks";
import Phases from "./components/Phases";
import Events from './components/Events';
import Editor from "./components/Editor";

import "./style.css";

import { eightStagesOfDevelopment } from './models/Phases'

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
    1: { color: "#D7091D", title: "Year of birth" },
    38: { color: "#2FBBCE", title: "Current age" },
    67: { color: "#4F7193", title: "Retirement age" },
    70: { color: "#4F7193", title: "Life expectancy" }
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

      <Events events={events} />

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