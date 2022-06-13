import "./style.css";
import Phase from "../Phase";

const Phases = ({ phases }) => {
  return (
    <dl>
      {phases.map((phase, i) => {
        return (
          <Phase phase={phase.phase} />
        )
      })}
    </dl>
  );
}

export default Phases;