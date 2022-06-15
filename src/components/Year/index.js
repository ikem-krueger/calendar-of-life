import "./style.css";

const Year = ({ phaseNumber, year, className, editPhase }) => {
  function onClickHandler(e) {
    const phaseNumber = e.target.dataset.phaseNumber

    editPhase(phaseNumber, year)
  }

  return (
    <td data-phase-number={phaseNumber} title={"Age: " + year} className={className} onClick={onClickHandler}></td>
  )
}

export { Year };