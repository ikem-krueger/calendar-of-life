import { useState } from "react";
import { custom } from "../../models/ColorPalettes";
import "./style.css";

const currentColorPalette = custom;

const ColorPicker = ({ colorName = "Gray Shade 1" }) => {
  const [selectedColor, setSelectedColor] = useState(colorName)

  function handleClick(e) {
    setSelectedColor(e.target.title)
  }

  return (
    <div id="colorPicker">
      {Object.keys(currentColorPalette).map(function (colorName, index) {
        const color = currentColorPalette[colorName]

        return (
            <span onClick={handleClick} style={{ color: color, border: colorName === selectedColor && "1px solid " + color }} title={colorName}>⬤</span>
        )
      })}
    </div>
  );
}

export default ColorPicker;