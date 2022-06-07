import ColorPicker from "../ColorPicker";
import "./style.css";

const Editor = () => {
  function handleClick(e) {
    console.debug("Button clicked...")
  }

  return (
    <div id="editSection">
      <ColorPicker />

      <input id="titleInput" placeholder="Title"></input>

      <input id="rangeInput" placeholder="Range"></input>

      <div className="btn-group">

        <button id="addButton" onClick={handleClick}>Add</button>
        <button id="updateButton" onClick={handleClick}>Update</button>
        <button id="deleteButton" onClick={handleClick}>Delete</button>

      </div>

    </div>
  );
}

export default Editor;