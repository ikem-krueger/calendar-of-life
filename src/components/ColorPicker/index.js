import { useState } from "react";
import { custom } from "../../models/ColorPalettes";
import { hexToRgb } from "../../helpers/ColorConvert";
import "./style.css";

const currentColorPalette = custom;

const ColorPicker = ({ color, setEventColor }) => {
  const [selectedColor, setSelectedColor] = useState(color)

  function handleClick(e) {
    const color = e.target.style.color // this is an rgb() value

    setSelectedColor(color)

    setEventColor(color)
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