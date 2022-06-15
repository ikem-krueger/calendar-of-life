import "./style.css";
import { Year } from "../Year";

const Calendar = ({ phases, events, editPhase }) => {
  const years = Object.keys(events).map(Number)

  return (
    <table>
      <tbody>
        {[...Array(10)].map((_, columnNumber) => {
          return (
            <tr>
              {[...Array(10)].map((_, rowNumber) => {
                const year = (columnNumber * 10) + (rowNumber + 1)

                let phaseNumber

                phases.map((currentPhase, i) => {
                  if (year >= currentPhase.from && year <= currentPhase.to)
                    phaseNumber = (i + 1)
                })

                let className = ""

                if (years.includes(year))
                  className += "event"

                return <Year phaseNumber={phaseNumber} year={year} className={className} editPhase={editPhase} />
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default Calendar;