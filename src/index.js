import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Calendar from "./components/Calendar";
import Phases from "./components/Phases";
import Events from './components/Events';
import Input from './components/Input';
import "./style.css";

const profile = {
  phases: [
    { "start": 1, "end": 1, "name": "Infancy" },
    { "start": 2, "end": 3, "name": "Toddler age" },
    { "start": 3, "end": 5, "name": "Playing age" },
    { "start": 6, "end": 11, "name": "School age" },
    { "start": 12, "end": 18, "name": "Adolescence" },
    { "start": 19, "end": 40, "name": "Early adulthood" },
    { "start": 40, "end": 65, "name": "Adulthood" },
    { "start": 65, "end": 100, "name": "Mature adulthood" }
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

  function setValue(target) {
    const { id, value } = target

    switch (id) {
      case "range": setRange(value); break;
      case "name": setName(value); break;
      case "age": setAge(value); break;
      case "event": setEvent(value); break;
    }
  }

  function foo(target) {
    const { id } = target

    if (id == "range" || id == "name") {
      let [start, end] = range.match(/(\d+)\-(\d+)/).slice(1)

      start = parseInt(start)
      end = parseInt(end)

      if (start && end && name) {
        if (start <= end) {
          const phase = { start: start, end: end, name: name }

          let index = -1

          if (phases.length == 0)
            index = 0

          phases.forEach((phase, i) => {
            if (phase.start == start && phase.end == end)
              index = i
          })

          if (index == -1)
            index = phases.length

          phases[index] = phase

          setPhases([...phases])
        }
      }
    }

    if (id == "age" || id == "event") {
      if (age && event) {
        if (age >= 1 && age <= 100) {
          events[age] = event

          setEvents({ ...events })
        }
      }
    }
  }

  return (
    <div>
      <h1>Calender of life</h1>

      <h2>Years</h2>

      <Calendar phases={phases} events={events} selectedYear={selectedYear} setState={setState} />

      <h2>Phases</h2>

      <form>
        <Input label="Range:" placeholder="1-100" value={range} id="range" setValue={setValue} foo={foo} />

        <Input label="Name:" placeholder="Name of the phase" value={name} id="name" setValue={setValue} foo={foo} />
      </form>

      <Phases phases={phases} />

      <h2>Events</h2>

      <form>
        <Input label="Age:" placeholder="1-100" value={age} id="age" setValue={setValue} foo={foo} />

        <Input label="Event:" placeholder="Event that happened" value={event} id="event" setValue={setValue} foo={foo} />
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