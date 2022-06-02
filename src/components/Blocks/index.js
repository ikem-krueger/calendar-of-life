import "./style.css";

const Blocks = () => {
  return (
    <div className="blocks">
      {[...Array(100)].map(function (_, index) {
        return <div title={index + 1}></div>;
      })}
    </div>
  );
}

export default Blocks;