import React from 'react';
import ReactDOM from 'react-dom/client';

import Blocks from "./components/Blocks";
import Phases from "./components/Phases";
import Editor from "./components/Editor";

import "./style.css";

import erikson from './models/Phases';

const App = () => {
  return (
    <div>

      <h1>Calender of life</h1>

      <h2>Years</h2>

      <Blocks />

      <h2>Phases</h2>

      <Phases phases={erikson} />

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