import React, { useState } from "react";
// Using react hook useState for existing profile to display and update when info is changed immediately

function Profile() {
  const [profile, setProfile] = useState({
    name: "King",
    address: "Kajaanintie 80 K 13,2000 Oulu",
    email:"king123@queen.com",
    gender:"Male",
    age: 80,
    phone: 10234566780,
  });

  const onNameChange = (e) => {
    setProfile({ ...profile, name: e.target.value });
  };
  const onAddressChange = (e) => {
    setProfile({ ...profile, address: e.target.value });
  };
  const onEmailChange = (e) => {
    setProfile({ ...profile, email: e.target.value });
  };
  const onGenderChange = (e) => {
    setProfile({ ...profile, gender: e.target.value });
  };
  const onAgeChange = (e) => {
    setProfile({ ...profile, age: e.target.value });
  };
  const onPhoneChange = (e) => {
    setProfile({ ...profile, phone: e.target.value });
  };

  return (
    <div>
      <form>
        <input type="text" value={profile.name} onChange={onNameChange} />
        <input type="text" value={profile.address} onChange={onAddressChange} />
        <input type="text" value={profile.email} onChange={onEmailChange} />
        <input type="text" value={profile.gender} onChange={onGenderChange} />
        <input type="text" value={profile.age} onChange={onAgeChange} />
        <input type="text" value={profile.phone} onChange={onPhoneChange} />
        
        <p>The personal information is as below</p>       
         <li>Name: {profile.name}</li> 
         <li>Address: {profile.address}</li>
         <li>Gender: {profile.gender}</li>
         <li>Email: {profile.email}</li>
         <li>Age: {profile.age}</li> 
         <li>Phone: {profile.phone}</li>
        
      </form>
    </div>
  );
}
export default Profile;