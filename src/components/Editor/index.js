import ColorPicker from "../ColorPicker";
import "./style.css";

const Editor = ({ events, updateEvents }) => {
  function addUpdateEvent(e) {
    const year = document.querySelector("#yearInput").value
    const title = document.querySelector("#titleInput").value

    if (year && title) {
      updateEvents({ ...events, [year]: { color: "red", title: title } })
    }
  }

  function deleteEvent() {
    const year = document.querySelector("#yearInput").value
    let _

    ({ [year]: _, ...events } = events);

    updateEvents(events);
  }

  return (
    <div id="editSection">
      <ColorPicker />

      <input id="yearInput" placeholder="Year"></input>

      <input id="titleInput" placeholder="Title"></input>

      <div className="btn-group">

        <button id="addUpdateButton" onClick={addUpdateEvent}>Add</button>
        <button id="deleteButton" onClick={deleteEvent}>Delete</button>

      </div>

    </div>
  );
}

export default Editor;