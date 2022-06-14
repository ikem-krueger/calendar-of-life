import "./style.css";
import { Year } from "../Year";

const Calendar = ({ phases, events }) => {
  const years = Object.keys(events).map(Number)

  return (
    <table>
      <tbody>
        {[...Array(10)].map((column, i) => {
          return (
            <tr>
              {[...Array(10)].map((row, j) => {
                const year = (i * 10) + (j + 1)

                let className
                
                phases.map((phase, i) => {
                  if(year >= phase.from && year <= phase.to)
                    className = "phase-" + (i + 1)
                })

                if (years.includes(year))
                  className += " event"

                return <Year year={year} className={className} />
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default Calendar;