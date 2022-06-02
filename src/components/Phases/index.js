import "./style.css";

const Phases = ({ phases }) => {
  return (
    <ul className="phases">
      {phases.map((phase) => {
        return <li data-range={phase.range.from + "-" + phase.range.to}><span style={{ color: phase.color }}>&#x2B24;</span>{phase.title}</li>;
      })}
    </ul>
  );
}

export default Phases;