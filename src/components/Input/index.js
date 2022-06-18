const Input = ({ label, placeholder, value, id, setValue }) => {
  function handleChange(e) {
    setValue(e.target)
  }

  return (
    <>
      <label htmlFor={id}>{label}</label><br />
      <input type="text" id={id} placeholder={placeholder} value={value} onChange={handleChange} /><br />
    </>
  )
}

export default Input;