const Year = ({ year, phaseNumber, className, foo }) => {
  function onClickHandler(e) {
    const phaseNumber = e.target.dataset.phaseNumber

    foo(phaseNumber)
  }

  if (phaseNumber)
    className += " phase-" + phaseNumber

  return (
    <td data-phase-number={phaseNumber} title={"Age: " + year} className={className} onClick={onClickHandler}></td>
  )
}

export { Year };