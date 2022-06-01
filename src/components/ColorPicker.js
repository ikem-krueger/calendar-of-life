import { Fragment } from "react";
import reasonable from "./ColorPalettes";

const currentColorPalette = reasonable;

function ColorPicker() {
  return (
    <div id="colorPicker">
      {Object.keys(currentColorPalette).map(function (colorName, index) {
        return (
          <Fragment>
            { (index > 0 && index % 6 == 0) && <br></br> }

            <span style={{ color: currentColorPalette[colorName] }} title={colorName} key={index}>⬤</span>
          </Fragment>
        )
      })}
    </div>
  );
}

export default ColorPicker;