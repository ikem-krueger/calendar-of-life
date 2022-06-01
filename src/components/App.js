import ColorPicker from "./ColorPicker";

function App() {
  return (
    <div>

      <h1>Calender of life</h1>

      <div id="editSection">

        <ColorPicker></ColorPicker>

        <input id="titleInput" placeholder="Title"></input>

        <input id="rangeInput" placeholder="Range"></input>

        <div className="btn-group">

          <button id="addButton">Add</button>
          <button id="updateButton" style={{ display: "none" }}>Update</button>
          <button id="deleteButton">Delete</button>

        </div>

      </div>

    </div>
  );
}

export default App;
