import "./style.css";
import Event from "../Event";

const Events = ({ phases, events }) => {
  return (
    <dl>
      {Object.keys(events).map((key, i) => {
        const event = events[key]

        const year = key

        let className

        phases.map((phase, i) => {
          if (year >= phase.from && year <= phase.to)
            className = "phase-" + (i + 1)
        })

        return (
          <Event key={i} event={event} className={className}/>
        )
      })}
    </dl>
  );
}

export default Events;