export default function PersonalDetails({ personalDetails, setPersonalDetails }) {
  return (
    <>
      <h1>Personal Details</h1>
      <div>Full name</div>
      <input value={personalDetails.fullName} onChange={e => setPersonalDetails({...personalDetails, fullName : e.target.value})}></input>
      <div>Email</div>
      <input value={personalDetails.email} onChange={e => setPersonalDetails({...personalDetails, email : e.target.value})}></input>
      <div>Phone number</div>
      <input value={personalDetails.phoneNumber} onChange={e => setPersonalDetails({...personalDetails, phoneNumber : e.target.value})}></input>
      <div>Address</div>
      <input value={personalDetails.address} onChange={e => setPersonalDetails({...personalDetails, address : e.target.value})}></input>
    </>
  )
}