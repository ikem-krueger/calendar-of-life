import "./style.css";

const Year = ({ year, phaseNumber, className, editPhase }) => {
  function onClickHandler(e) {
    const phaseNumber = e.target.dataset.phaseNumber

    editPhase(phaseNumber, year)
  }

  if (phaseNumber)
    className += " phase-" + phaseNumber

  return (
    <td data-phase-number={phaseNumber} title={"Age: " + year} className={className} onClick={onClickHandler}></td>
  )
}

export { Year };