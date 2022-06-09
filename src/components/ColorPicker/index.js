import { useState } from "react";
import { custom } from "../../models/ColorPalettes";
import { hexToRgb } from "../../helpers/ColorConvert";
import "./style.css";

const currentColorPalette = custom;

const ColorPicker = ({ color }) => {
  const [selectedColor, setSelectedColor] = useState(color)

  function handleClick(e) {
    setSelectedColor(e.target.style.color) // this is an rgb() value
  }

  return (
    <div id="colorPicker">
      {currentColorPalette.map((color, i) => {
        return (
          <span key={i} onClick={handleClick} style={{ color: color, border: hexToRgb(color) === selectedColor && "1px solid " + color }}>⬤</span>
        )
      })}
    </div>
  );
}

export default ColorPicker;