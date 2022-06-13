import "./style.css";
import Event from "../Event";

const Events = ({ events }) => {
  return (
    <dl>
      {Object.values(events).map((event, i) => {
        return (
          <Event event={event} />
        )
      })}
    </dl>
  );
}

export default Events;