import "./style.css";

const Blocks = () => {
  function handleClick(e) {
    const block = e.target

    console.debug(`Block clicked...`);
  }

  return (
    <div className="blocks" onClick={handleClick}>
      {[...Array(100)].map(function (_, index) {
        return <div title={index + 1}></div>;
      })}
    </div>
  );
}

export default Blocks;