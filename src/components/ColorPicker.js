import { Fragment } from "react";
import reasonable from "./ColorPalettes";

const currentColorPalette = reasonable;

function ColorPicker() {
  return (
    <div id="colorPicker">
      {Object.keys(currentColorPalette).map(function (colorName, index) {
        if (index > 0 && index % 6 == 0) {
          return (
            <Fragment>
              <br></br><span style={{ color: currentColorPalette[colorName] }} title={colorName} key={index}>⬤</span>
            </Fragment>
          )
        }

        return <span style={{ color: currentColorPalette[colorName] }} title={colorName} key={index}>⬤</span>;
      })}
    </div>
  );
}

export default ColorPicker;