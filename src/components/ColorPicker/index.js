import { Fragment } from "react";
import { reasonable } from "../../models/ColorPalettes";
import "./style.css";

const currentColorPalette = reasonable;

const ColorPicker = () => {
  return (
    <div id="colorPicker">
      {Object.keys(currentColorPalette).map(function (colorName, index) {
        return (
          <Fragment>
            {(index > 0 && index % 6 == 0) && <br />}

            <span style={{ color: currentColorPalette[colorName] }} title={colorName} key={index}>⬤</span>
          </Fragment>
        )
      })}
    </div>
  );
}

export default ColorPicker;