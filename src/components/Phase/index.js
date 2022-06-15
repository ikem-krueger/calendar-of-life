const Phase = ({ phaseNumber, name, className, editPhase }) => {
  function onClickHandler(e) {
    const phaseNumber = e.target.dataset.phaseNumber

    console.debug(e.target.dataset)

    editPhase(phaseNumber)
  }

  return (
    <dd data-phase-number={phaseNumber} phaseNumber onClick={onClickHandler}><span className={className}></span>{name}</dd>
  )
}

export default Phase;