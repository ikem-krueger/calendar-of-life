import { reasonable } from "./ColorPalettes";

const erikson = [
  { color: reasonable["Green Shade 2"], title: "Säuglingsalter", range: { from: 1, to: 1 } },
  { color: reasonable["Green Shade 4"], title: "Kleinkindalter", range: { from: 2, to: 3 } },
  { color: reasonable["Magenta Shade 3"], title: "Spielalter", range: { from: 3, to: 5 } },
  { color: reasonable["Magenta Shade 5"], title: "Schulalter", range: { from: 6, to: 11 } },
  { color: reasonable["Red Shade 3"], title: "Adoleszenz", range: { from: 12, to: 18 } },
  { color: reasonable["Cyan Shade 2"], title: "Frühes Erwachsenenalter", range: { from: 19, to: 40 } },
  { color: reasonable["Blue Shade 5"], title: "Erwachsenenalter", range: { from: 40, to: 65 } },
  { color: reasonable["Gray Shade 6"], title: "Reifes Erwachsenenalter", range: { from: 65, to: 100 } }
];

export default erikson;