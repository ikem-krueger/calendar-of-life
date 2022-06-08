function cmToMeter(cm) {
  return cm / 100
}

function roundToPlaces(num, places) {
  return +(Math.round(num + "e+" + places) + "e-" + places);
}

export {cmToMeter, roundToPlaces };