import "./style.css";

const Phases = () => {
  return (
    <ul className="phases">

      <li data-range="1"><span style={{ color: "rgb(114, 255, 108)" }}>&#x2B24;</span>Säuglingsalter</li>
      <li data-range="2-3"><span style={{ color: "rgb(0, 130, 23" }}>&#x2B24;</span>Kleinkindalter</li>
      <li data-range="3-5"><span style={{ color: "rgb(249, 17, 224" }}>&#x2B24;</span>Spielalter</li>
      <li data-range="6-11"><span style={{ color: "rgb(116, 0, 104" }}>&#x2B24;</span>Schulalter</li>
      <li data-range="12-18"><span style={{ color: "rgb(255, 70, 71" }}>&#x2B24;</span>Adoleszenz</li>
      <li data-range="19-40"><span style={{ color: "rgb(0, 250, 251" }}>&#x2B24;</span>Frühes Erwachsenenalter</li>
      <li data-range="40-65"><span style={{ color: "rgb(0, 56, 109" }}>&#x2B24;</span>Erwachsenenalter</li>
      <li data-range="65+"><span style={{ color: "rgb(34, 34, 34" }}>&#x2B24;</span>Reifes Erwachsenenalter</li>

    </ul>
  );
}

export default Phases;