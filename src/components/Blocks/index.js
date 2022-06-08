import "./style.css";

const Blocks = ({ phases, events }) => {
  function handleClick(e) {
    const block = e.target

    console.debug("Block clicked...");
  }

  const years = Object.keys(events).map(Number)

  return (
    <>
      <h2>Years</h2>

      <table onClick={handleClick}>
        {[...Array(10)].map((_, i) => {
          return (
            <tr>
              {[...Array(10)].map((_, j) => {
                const year = (i * 10) + (j + 1)

                let color = ""

                phases.map((phase, index) => {
                  if (year >= phase.from && year <= phase.to) {
                    color = phase.color
                  }
                })

                let content = ""

                if (years.includes(year))
                  content = "⬤"

                return (
                  <td title={"Age: " + year} style={color && { border: "1px solid " + color, color: color }}>{content}</td>
                )
              })}
            </tr>
          )
        })}
      </table>
    </>
  );
}

export default Blocks;