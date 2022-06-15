import "./style.css";
import Phase from "../Phase";

const Phases = ({ phases }) => {
  return (
    <dl>
      {phases.map((phase, i) => {
        const phaseNumber = (i + 1)
        const className = "phase-" + phaseNumber

        return (
          <Phase name={phase.name} className={className} />
        )
      })}
    </dl>
  );
}

export default Phases;