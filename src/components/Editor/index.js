import { useState } from "react";
import ColorPicker from "../ColorPicker";
import "./style.css";

const Editor = ({ events, updateEvents }) => {
  function addUpdateEvent(e) {
    const age = document.querySelector("#ageInput").value
    const event = document.querySelector("#eventInput").value

    if (age && event) {
      updateEvents({ ...events, [age]: { color: eventColor, event: event } })
    }
  }

  function deleteEvent() {
    const age = document.querySelector("#ageInput").value
    let _

    ({ [age]: _, ...events } = events);

    updateEvents(events);
  }

  const [eventColor, setEventColor] = useState();

  return (
    <div id="editSection">
      <ColorPicker setEventColor={setEventColor} />

      <input id="ageInput" placeholder="Age"></input>

      <input id="eventInput" placeholder="Event"></input>

      <div className="btn-group">

        <button id="addUpdateButton" onClick={addUpdateEvent}>Add</button>
        <button id="deleteButton" onClick={deleteEvent}>Delete</button>

      </div>

    </div>
  );
}

export default Editor;