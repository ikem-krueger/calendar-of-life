import "./style.css";

const Blocks = ({ phases, events }) => {
  function handleClick(e) {
    const block = e.target

    console.debug(`Block clicked...`);
  }

  return (
    <div className="blocks" onClick={handleClick}>
      {[...Array(100)].map(function (_, index) {
        const year = index + 1

        let block = <div title={"Alter: " + year}></div>
        let content

        phases.map((phase, index) => {
          if (year >= phase.from && year <= phase.to) {
            const phaseNumber = index + 1

            if(events.includes(year))
              content = <span style={{ color: phase.color }}>⬤</span>

            block = <div title={"Alter: " + year + " (Phase " + phaseNumber + ": " + phase.title + ")"} style={{ border: "1px solid " + phase.color }}>{content}</div>
          }
        })

        return block
      })}
    </div>
  );
}

export default Blocks;