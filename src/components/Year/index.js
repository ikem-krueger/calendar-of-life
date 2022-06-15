const Year = ({ year, phase, className, foo }) => {
  function onClickHandler(e) {
    const phase = e.target.dataset.phase

    foo(phase)
  }

  if (phase)
    className += " phase-" + phase

  return (
    <td data-phase={phase} title={"Age: " + year} className={className} onClick={onClickHandler}></td>
  )
}

export { Year };