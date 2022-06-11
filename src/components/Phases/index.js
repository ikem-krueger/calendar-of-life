import "./style.css";

const Phases = ({ phases }) => {
  function handleClick(e) {
    console.debug("Phase clicked...");
  }

  return (
    <>
      <h2>Phases</h2>

      <dl className="phases" onClick={handleClick}>
        {phases.map((currentPhase, i) => {
          return <dd key={i}><span style={{ color: currentPhase.color }}>&#x2B24;</span>{currentPhase.phase}</dd>;
        })}
      </dl>
    </>
  );
}

export default Phases;