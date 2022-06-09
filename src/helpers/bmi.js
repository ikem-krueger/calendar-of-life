import { cmToMeter, roundToPlaces } from "./Math";

function getWeightCategory(age, sex) {
  if (age < 2 && sex == "male") return [15.5, 16.8, 18.3];
  if (age < 3 && sex == "male") return [14.5, 15.7, 17.1];
  if (age < 4 && sex == "male") return [14.4, 15.6, 17.0];
  if (age < 5 && sex == "male") return [14.1, 15.3, 16.7];
  if (age < 6 && sex == "male") return [13.9, 15.2, 16.7];
  if (age < 7 && sex == "male") return [14.0, 15.3, 16.8];
  if (age < 8 && sex == "male") return [14.2, 15.5, 17.1];
  if (age < 9 && sex == "male") return [14.4, 15.7, 17.5];
  if (age < 10 && sex == "male") return [14.6, 16.0, 18.0];
  if (age < 11 && sex == "male") return [14.9, 16.4, 18.6];
  if (age < 12 && sex == "male") return [15.3, 16.9, 19.3];
  if (age < 13 && sex == "male") return [15.7, 17.5, 20.1];
  if (age < 14 && sex == "male") return [16.3, 18.2, 20.9];
  if (age < 15 && sex == "male") return [16.9, 19.0, 21.9];
  if (age < 16 && sex == "male") return [17.6, 19.8, 22.8];
  if (age < 17 && sex == "male") return [18.2, 20.5, 23.7];
  if (age < 18 && sex == "male") return [18.7, 21.1, 24.4];
  if (age < 19 && sex == "male") return [19.2, 21.7, 25.0];
  if (age < 20 && sex == "male") return [19.5, 22.2, 25.6];
  if (age < 25 && sex == "male") return [18.5, 21.75, 24.9];
  if (age < 35 && sex == "male") return [19.5, 22.75, 25.9];
  if (age < 45 && sex == "male") return [20.5, 23.75, 26.9];
  if (age < 55 && sex == "male") return [21.5, 24.75, 27.9];
  if (age < 65 && sex == "male") return [22.5, 25.75, 28.9];
  if (age > 64 && sex == "male") return [23.5, 26.75, 29.9];

  if (age < 2 && sex == "female") return [15, 16.45, 17.9];
  if (age < 3 && sex == "female") return [14.4, 15.8, 17.2];
  if (age < 4 && sex == "female") return [14.1, 15.5, 16.9];
  if (age < 5 && sex == "female") return [13.9, 15.35, 16.8];
  if (age < 6 && sex == "female") return [13.8, 15.4, 17];
  if (age < 7 && sex == "female") return [13.8, 15.45, 17.1];
  if (age < 8 && sex == "female") return [13.9, 15.65, 17.4];
  if (age < 9 && sex == "female") return [14.1, 15.95, 17.8];
  if (age < 10 && sex == "female") return [14.4, 16.1, 18.4];
  if (age < 11 && sex == "female") return [14.8, 16.6, 19.1];
  if (age < 12 && sex == "female") return [15.3, 17.2, 20.0];
  if (age < 13 && sex == "female") return [15.9, 18, 20.9];
  if (age < 14 && sex == "female") return [16.5, 18.8, 21.9];
  if (age < 15 && sex == "female") return [17.4, 19.6, 23.3];
  if (age < 16 && sex == "female") return [17.7, 20.2, 23.7];
  if (age < 17 && sex == "female") return [18.1, 20.7, 24.2];
  if (age < 18 && sex == "female") return [18.3, 21, 24.7];
  if (age < 19 && sex == "female") return [18.5, 21.3, 24.9];
  if (age < 20 && sex == "female") return [18.6, 21.4, 25.1];
  if (age < 25 && sex == "female") return [17.5, 20.75, 23.9];
  if (age < 35 && sex == "female") return [18.5, 21.75, 24.9];
  if (age < 45 && sex == "female") return [19.5, 22.75, 25.9];
  if (age < 55 && sex == "female") return [20.5, 23.75, 26.9];
  if (age < 65 && sex == "female") return [21.5, 24.75, 27.9];
  if (age > 64 && sex == "female") return [22.5, 25.75, 28.9];
}

function getWhoCategory(weight, height, sex, age) {
  height = cmToMeter(height)

  const bmi = calculateBmi(weight, height)
  const weightCategory = getWeightCategory(age, sex)

  // normal weight
  const min = roundToPlaces(weightCategory[0] * (height * height), 2)
  const max = roundToPlaces(weightCategory[2] * (height * height), 2)

  // ideal weight
  const middle = roundToPlaces(weightCategory[1] * (height * height), 2)

  let whoCategory = ""

  if (weight < min) {
    if (bmi < 16) whoCategory = "Severe underweight"
    else if (bmi < 17) whoCategory = "Underweight"
    else if (bmi < 18.5) whoCategory = "Slight underweight"
  }
  else if (weight > max) {
    if (bmi < 26.5) whoCategory = "Slight overweight"
    else if (bmi < 30) whoCategory = "Overweight"
    else if (bmi < 35) whoCategory = "Obesity grade I"
    else if (bmi < 40) whoCategory = "Obesity grade II"
    else if (bmi > 39) whoCategory = "Obesity grade III"

  } else whoCategory = "Normal weight"

  return whoCategory
}

function calculateBmi(weight, height) {
  height = cmToMeter(height)

  return roundToPlaces(weight / (height * height), 2)
}

export { calculateBmi, getWhoCategory };