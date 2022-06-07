import "./style.css";

const Phases = ({ phases }) => {
  function handleClick(e) {
    console.debug("Phase clicked...");
  }

  return (
    <ul className="phases" onClick={handleClick}>
      {phases.map((phase) => {
        return <li data-range={phase.from + "-" + phase.to}><span style={{ color: phase.color }}>&#x2B24;</span>{phase.title}</li>;
      })}
    </ul>
  );
}

export default Phases;