import "./style.css";

const Events = ({ phases, events }) => {
  function handleClick(e) {
    console.debug("Event clicked...");
  }

  return (
    <>
      <h2>Events</h2>

      <ul className="events" onClick={handleClick}>
        {Object.keys(events).map((age, i) => {
          const event = events[age]

          let color

          phases.map((phase) => {
            const { from, to } = phase

            if(age >= from && age <= to)
              color = phase.color
          })

          return (
            <li key={i}><span style={ color && { color: color }}>&#x2B24;</span>{event}</li>
          )
        })}
      </ul>
    </>
  );
}

export default Events;