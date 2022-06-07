import React from 'react';
import ReactDOM from 'react-dom/client';

import Blocks from "./components/Blocks";
import Phases from "./components/Phases";
import Editor from "./components/Editor";

import "./style.css";

import { erikson, smv } from './models/Phases';

const App = () => {
  const events = [1, 38, 67, 70]
  const foo = [
    { color: "#D7091D", title: "Geburtsjahr", from: 1, to: 1 },
    { color: "#2FBBCE", title: "Alter", from: 38, to: 38 },
    { color: "#4F7193", title: "Renteneintrittsalter", from: 67, to: 67 },
    { color: "#4F7193", title: "Lebenserwartung", from: 70, to: 70 }
  ]

  return (
    <div>

      <h1>Calender of life</h1>

      <ul>
        <li>Name: Marco</li>
        <li>Geburtsjahr: 1983</li>
        <li>Wohnort: Deutschland, Berlin</li>
        <li>Alter: 38 Jahre</li>
        <li>Status: Ledig</li>
        <li>Kinder: Keine</li>
        <li>Zeit bis zur Rente: {67-38} Jahre</li>
        <li>Renteneintrittsalter: 67 Jahre</li>
        <li>Lebenserwartung: 70 Jahre</li>
        <li>Zeit bis zum Tod: {70-38} Jahre</li>
        <li>Gute Jahre: ? Jahre</li>
      </ul>

      <h2>Years</h2>

      <Blocks phases={erikson} events={events} />

      <h2>Phases</h2>

      <Phases phases={erikson} />

      <h2>Events</h2>

      <Phases phases={foo} />

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