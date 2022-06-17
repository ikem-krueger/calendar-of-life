import { Year } from "../Year";

const Calendar = ({ phases, events, selectedYear, editPhase }) => {
  const years = Object.keys(events).map(Number)

  return (
    <table>
      <tbody>
        {[...Array(10)].map((_, columnNumber) => {
          return (
            <tr key={columnNumber}>
              {[...Array(10)].map((_, rowNumber) => {
                const year = (columnNumber * 10) + (rowNumber + 1)

                let phaseNumber

                phases.map((currentPhase, i) => {
                  if (year >= currentPhase.from && year <= currentPhase.to)
                    phaseNumber = (i + 1)
                })

                let className = []

                if (phaseNumber)
                  className.push("phase-" + phaseNumber)

                if (years.includes(year))
                  className.push("event")

                if (year == selectedYear)
                  className.push("selectedYear")

                return <Year key={rowNumber} phaseNumber={phaseNumber} year={year} className={className.join(" ")} editPhase={editPhase} />
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default Calendar;