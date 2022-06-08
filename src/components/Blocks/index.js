import "./style.css";

const Blocks = ({ phases, events }) => {
  function handleClick(e) {
    const block = e.target

    console.debug("Block clicked...");
  }

  return (
    <>
      <h2>Years</h2>

      <div className="blocks" onClick={handleClick}>
        {[...Array(100)].map(function (_, index) {
          const years = Object.keys(events)
          const year = index + 1

          let block = <div title={"Age: " + year}></div>
          let content

          if (years.includes(year.toString()))
            block = <div title={"Age: " + year}><span>⬤</span></div>

          phases.map((phase, index) => {
            if (year >= phase.from && year <= phase.to) {
              const phaseNumber = index + 1

              if (years.includes(year.toString()))
                content = <span>⬤</span>

              block = <div title={"Age: " + year + " (Phase " + phaseNumber + ": " + phase.title + ")"} style={{ border: "1px solid " + phase.color, color: phase.color }}>{content}</div>
            }
          })

          return block
        })}
      </div>
    </>
  );
}

export default Blocks;