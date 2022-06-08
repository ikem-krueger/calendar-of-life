import "./style.css";

const Events = ({ events }) => {
  function handleClick(e) {
    console.debug("Event clicked...");
  }  

  const li = []

  for (const year in events) {
    const event = events[year]

    li.push(<li><span style={{ color: event.color }}>&#x2B24;</span>{event.title}</li>)
  }

  return (
    <>
      <h2>Events</h2>

      <ul className="phases" onClick={handleClick}>
        {li}
      </ul>
    </>
  );
}

export default Events;