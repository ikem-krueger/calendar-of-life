import "./style.css";

const Events = ({ years }) => {
  function handleClick(e) {
    console.debug("Event clicked...");
  }

  const li = []

  for (const year in years) {
    const event = years[year]

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