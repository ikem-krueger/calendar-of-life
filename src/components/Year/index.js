import "./style.css";

const Year = ({ phase, events, setState, year, className }) => {
  function onClickHandler() {
    const range = phase ? phase.from + "-" + phase.to : ""
    const name = phase ? phase.name : ""
    const age = year
    const event = events[year] || ""

    const state = { 
      range: range, 
      name: name, 
      age: age, 
      event: event 
    }

    setState(state)
  }

  return (
    <td title={"Age: " + year} className={className} onClick={onClickHandler}></td>
  )
}

export { Year };