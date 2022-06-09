import "./style.css";

const Phases = ({ phases }) => {
  function handleClick(e) {
    console.debug("Phase clicked...");
  }

  return (
    <>
      <h2>Phases</h2>

      <ul className="phases" onClick={handleClick}>
        {phases.map((currentPhase, i) => {
          return <li key={i}><span style={{ color: currentPhase.color }}>&#x2B24;</span>{currentPhase.phase}</li>;
        })}
      </ul>
    </>
  );
}

export default Phases;