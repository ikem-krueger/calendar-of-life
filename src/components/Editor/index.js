const Editor = ({ range, name }) => {
  return (
    <form>
      <label for="range">Range:</label><br />
      <input type="text" id="range" value={range} /><br />
      <label for="name">Name:</label><br />
      <input type="text" id="name" value={name} /><br />
    </form>
  )
}

export default Editor;