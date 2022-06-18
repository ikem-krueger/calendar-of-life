const Input = ({ label, placeholder, value, id, setValue, foo }) => {
  function handleChange(e) {
    setValue(e.target)
  }

  function handleKeyDown(e) {
    if (e.key == "Enter")
      foo(e.target)
  }

  return (
    <>
      <label htmlFor={id}>{label}</label><br />
      <input type="text" id={id} placeholder={placeholder} value={value} onChange={handleChange} onKeyDown={handleKeyDown} /><br />
    </>
  )
}

export default Input;