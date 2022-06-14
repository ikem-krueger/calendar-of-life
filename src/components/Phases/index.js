import "./style.css";
import Phase from "../Phase";

const Phases = ({ phases }) => {
  return (
    <dl>
      {phases.map((phase, i) => {
        const className = "phase-" + (i + 1)

        return (
          <Phase phase={phase.phase} className={className}/>
        )
      })}
    </dl>
  );
}

export default Phases;