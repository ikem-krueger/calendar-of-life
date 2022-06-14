const Event = ({ event, className }) => {
  return (
    <dd><span className={className}></span>{event}</dd>
  )
}

export default Event;