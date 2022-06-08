import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';

import Profile from './components/Profile';
import Blocks from "./components/Blocks";
import Phases from "./components/Phases";
import Events from './components/Events';
import Editor from "./components/Editor";

import "./style.css";

import { erikson, smv } from './models/Phases';

const App = () => {
  const profile = {
    name: "Marco",
    birthYear: 1983,
    residence: "Germany/Berlin",
    age: 38,
    status: "Single",
    children: "0",
    weight: 78,
    height: 175,
    sex: "male"
  }

  const events = {
    1: { color: "#D7091D", title: "Year of birth" },
    38: { color: "#2FBBCE", title: "Current age" },
    67: { color: "#4F7193", title: "Retirement age" },
    70: { color: "#4F7193", title: "Life expectancy" }
  }

  const phases = erikson

  return (
    <div>

      <h1>Calender of life</h1>

      <h2>Profile</h2>

      <Profile profile={profile} />

      <h2>Years</h2>

      <Blocks phases={phases} events={events} />

      <h2>Phases</h2>

      <Phases phases={phases} />

      <h2>Events</h2>

      <Events years={events} />

      <Editor />

    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);