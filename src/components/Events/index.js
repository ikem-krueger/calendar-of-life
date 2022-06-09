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
          const currentEvent = events[age]

          let color = ""

          phases.map((currentPhase) => {
            const { from, to } = currentPhase

            if(age >= from && age <= to)
              color = currentPhase.color
          })

          return (
            <li key={i}><span style={ color && { color: color }}>&#x2B24;</span>{currentEvent}</li>
          )
        })}
      </ul>
    </>
  );
}

export default Events;