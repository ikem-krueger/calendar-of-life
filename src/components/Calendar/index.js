import "./style.css";
import { Year } from "../Year";

const Calendar = ({ phases, events, foo }) => {
  const years = Object.keys(events).map(Number)

  return (
    <table>
      <tbody>
        {[...Array(10)].map((column, i) => {
          return (
            <tr>
              {[...Array(10)].map((row, j) => {
                const year = (i * 10) + (j + 1)

                let phase

                phases.map((currentPhase, i) => {
                  if (year >= currentPhase.from && year <= currentPhase.to)
                    phase = (i + 1)
                })

                let className = ""

                if (years.includes(year))
                  className += "event"

                return <Year year={year} phase={phase} className={className} foo={foo} />
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default Calendar;