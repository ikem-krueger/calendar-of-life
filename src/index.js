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
    residence: "Deutschland/Berlin",
    age: 38,
    status: "Ledig",
    children: "Keine"
  }

  const years = {
    1: { color: "#D7091D", title: "Geburtsjahr" },
    38: { color: "#2FBBCE", title: "Alter" },
    67: { color: "#4F7193", title: "Renteneintrittsalter" },
    70: { color: "#4F7193", title: "Lebenserwartung" }
  }  
  
  const phases = smv
  const bar = years

  return (
    <div>

      <h1>Calender of life</h1>

      <Profile profile={profile}/>

      <h2>Years</h2>

      <Blocks phases={phases} events={bar} />

      <h2>Phases</h2>

      <Phases phases={phases} />

      <h2>Events</h2>

      <Events years={bar} />

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