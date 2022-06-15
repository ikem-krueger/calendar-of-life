import "./style.css";
import Phase from "../Phase";

const Phases = ({ phases, editPhase }) => {
  return (
    <dl>
      {phases.map((phase, i) => {
        const phaseNumber = (i + 1)
        const className = "phase-" + phaseNumber

        return (
          <Phase phaseNumber={phaseNumber} name={phase.name} className={className} editPhase={editPhase} />
        )
      })}
    </dl>
  );
}

export default Phases;