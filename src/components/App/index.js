import Blocks from "../Blocks";
import Editor from "../Editor";
import Phases from "../Phases";
import "./style.css";

const App = () => {
  return (
    <div>

      <h1>Calender of life</h1>

      <h2>Years</h2>

      <Blocks />

      <h2>Phases</h2>

      <Phases />

      <Editor />

    </div>
  );
}

export default App;