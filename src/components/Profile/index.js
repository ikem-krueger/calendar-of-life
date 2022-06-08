import { calculateBmi, getWhoCategory } from "../../helpers/bmi";

const Profile = ({ profile }) => {
  const bmi = calculateBmi(profile.weight, profile.height)

  const whoCategory = getWhoCategory(profile.weight, profile.height, profile.sex, profile.age)

  const retirementAge = 67
  const lifeExpectancy = 70

  return (
    <>
      <ul>
        <li>Name: {profile.name}</li>
        <li>Year of birth: {profile.birthYear}</li>
        <li>Place of residence: {profile.residence}</li>
        <li>Age: {profile.age} years</li>
        <li>Sex: {profile.sex}</li>
        <li>Height: {profile.height / 100} m</li>
        <li>Weight: {profile.weight} kg</li>
        <li>Status: {profile.status}</li>
        <li>Children: {profile.children}</li>
      </ul>

      <ul>
        <li>BMI: {bmi} kg/m²</li>
        <li>Weight category: {whoCategory}</li>
        <li>Time until retirement: {retirementAge - profile.age} years</li>
        <li>Retirement age: {retirementAge} years</li>
        <li>Time until death: {lifeExpectancy - profile.age} years</li>
        <li>Life expectancy: {lifeExpectancy} years</li>
        <li>Good years: - years</li>
      </ul>
    </>
  )
}

export default Profile;