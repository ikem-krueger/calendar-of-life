const Input = ({ label, placeholder, value, id }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label><br />
      <input type="text" id={id} placeholder={placeholder} value={value} /><br />
    </>
  )
}

export default Input;