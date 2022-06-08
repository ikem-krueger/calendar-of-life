const Profile = ({ profile }) => {
  return (
    <ul>
      <li>Name: {profile.name}</li>
      <li>Geburtsjahr: {profile.birthYear}</li>
      <li>Wohnort: {profile.residence}</li>
      <li>Alter: {profile.age} Jahre</li>
      <li>Status: {profile.status}</li>
      <li>Kinder: {profile.children}</li>
      <li>Zeit bis zur Rente: {67 - 38} Jahre</li>
      <li>Renteneintrittsalter: 67 Jahre</li>
      <li>Lebenserwartung: 70 Jahre</li>
      <li>Zeit bis zum Tod: {70 - 38} Jahre</li>
      <li>Gute Jahre: ? Jahre</li>
    </ul>
  )
}

export default Profile;