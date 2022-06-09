function componentToHex(c) {
  const hex = parseInt(c).toString(16).toUpperCase();

  return hex;
}

function rgbToHex(rgb) {
  const [r, g, b] = rgb.split(/rgb\((\d+), (\d+), (\d+)\)/).slice(1);

  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex) {
  const [r, g, b] = hex.toLowerCase().split(/#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/).slice(1);

  return "rgb(" + parseInt(r, 16) + ", " + parseInt(g, 16) + ", " + parseInt(b, 16) + ")"
}

export { rgbToHex, hexToRgb };