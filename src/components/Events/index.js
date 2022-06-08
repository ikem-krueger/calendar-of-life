import "./style.css";

const Events = ({ events }) => {
  function handleClick(e) {
    console.debug("Event clicked...");
  }

  return (
    <>
      <h2>Events</h2>

      <ul className="events" onClick={handleClick}>
        {Object.values(events).map((event, i) => {
          return (
            <li key={i}><span style={{ color: event.color }}>&#x2B24;</span>{event.title}</li>
          )
        })}
      </ul>
    </>
  );
}

export default Events;