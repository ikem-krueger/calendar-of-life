import { Year } from "../Year";

const Calendar = ({ phases, events, selectedYear, setState }) => {
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
                  if (year >= currentPhase.start && year <= currentPhase.end)
                    phaseNumber = (i + 1)
                })

                let className = []

                if (phaseNumber)
                  className.push("phase-" + phaseNumber)

                if (years.includes(year))
                  className.push("event")

                if (year == selectedYear)
                  className.push("selectedYear")

                className = className.join(" ")

                return <Year key={year} phase={phases[--phaseNumber]} setState={setState} events={events} year={year} className={className} />
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default Calendar;