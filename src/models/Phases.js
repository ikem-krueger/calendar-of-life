import { reasonable } from "./ColorPalettes";

const smv = [
  { color: "#F8DC02", title: "Teen", range: { from: 14, to: 18 } },
  { color: "#FEB710", title: "Break", range: { from: 18, to: 20 } },
  { color: "#F67622", title: "Party Years", range: { from: 20, to: 27 } },
  { color: "#DE1921", title: "Epiphany", range: { from: 27, to: 29 } },
  { color: "#B31F1F", title: "Transition", range: { from: 29, to: 31 } },
  { color: "#DB1B21", title: "Security", range: { from: 31, to: 36 } },
  { color: "#F27822", title: "Development", range: { from: 36, to: 40 } },
  { color: "#FCB80E", title: "Redevelopment/Reinsurance", range: { from: 40, to: 48 } },
  { color: "#FCBA11", title: "Security", range: { from: 48, to: 65 } },
]

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

export { erikson, smv };