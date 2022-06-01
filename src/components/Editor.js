import ColorPicker from "./ColorPicker";
import "./Editor.css";

const Editor = () => {
  return (
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
  );
}

export default Editor;
