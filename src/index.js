import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Calendar from "./components/Calendar";
import Phases from "./components/Phases";
import Events from './components/Events';
import Input from './components/Input';
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

  const [selectedYear, setSelectedYear] = useState()

  const [range, setRange] = useState()
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [event, setEvent] = useState()

  function setState(state) {
    const { range, name, age, event } = state

    setSelectedYear(age)

    setRange(range)
    setName(name)
    setAge(age)
    setEvent(event)
  }

  return (
    <div>
      <h1>Calender of life</h1>

      <h2>Years</h2>

      <Calendar phases={phases} events={events} selectedYear={selectedYear} setState={setState} />

      <h2>Phases</h2>

      <form>
        <Input label="Range:" placeholder="1-100" value={range} id="range" />

        <Input label="Name:" placeholder="Name of the phase" value={name} id="name" />
      </form>

      <Phases phases={phases} />

      <h2>Events</h2>

      <form>
        <Input label="Age:" placeholder="1-100" value={age} id="age" />

        <Input label="Event:" placeholder="Event that happened" value={event} id="event" />
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