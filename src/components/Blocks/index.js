import "./style.css";

const Blocks = ({ phases, events, selectedBlock, setSelectedBlock }) => {
  function handleClick(e) {
    const block = e.target

    const i = parseInt(block.parentNode.rowIndex)
    const j = parseInt(block.cellIndex)

    const year = (i * 10) + (j + 1)

    setSelectedBlock(year);
  }

  const years = Object.keys(events).map(Number)

  return (
    <>
      <h2>Years</h2>

      <table onClick={handleClick}>
        <tbody>
          {[...Array(10)].map((column, i) => {
            return (
              <tr key={i}>
                {[...Array(10)].map((row, j) => {
                  const year = (i * 10) + (j + 1)

                  let color = ""

                  phases.map((currentPhase) => {
                    if (year >= currentPhase.from && year <= currentPhase.to) {
                      color = currentPhase.color
                    }
                  })

                  let content = ""

                  if (years.includes(year))
                    content = "⬤"

                  if (year === selectedBlock)
                    color = "black"

                  return (
                    <td key={j} title={"Age: " + year} style={color && { border: "1px solid " + color, color: color }}>{content}</td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );
}

export default Blocks;