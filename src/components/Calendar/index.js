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

                return (
                  <Year year={year} content="" />
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default Calendar;