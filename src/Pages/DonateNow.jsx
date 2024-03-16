import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from 'firebase/database';
import { Navbar_Component } from '../Components/Navbar_Component';
import { Footer_Components } from '../Components/Footer_Components';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-4Ep_tWkT0CUjsnNDjLOsEULWZ_Bgzkw",
  authDomain: "dbhackathon-2b3a8.firebaseapp.com",
  databaseURL: "https://dbhackathon-2b3a8-default-rtdb.firebaseio.com",
  projectId: "dbhackathon-2b3a8",
  storageBucket: "dbhackathon-2b3a8.appspot.com",
  messagingSenderId: "212338550967",
  appId: "1:212338550967:web:8eec2d71ce43353bca0532"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const DonateNow = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [donationType, setDonationType] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save data to Firebase Realtime Database
    const bloodDonationsRef = ref(database, 'bloodDonations');
    push(bloodDonationsRef, {
      fullName: fullName,
      email: email,
      bloodGroup: bloodGroup,
      donationType: donationType,
      phoneNumber: phoneNumber
    }).then(() => {
      alert('Data submitted successfully!');
      setFullName('');
      setEmail('');
      setBloodGroup('');
      setDonationType('');
      setPhoneNumber('');
    }).catch((error) => {
      console.error('Error submitting data:', error);
      alert('An error occurred. Please try again later.');
    });
  };

  return (
    <>
      <div>
        <Navbar_Component />
        <br /><br /><br />
        <div className="container" style={{ background: '#fff', maxWidth: '500px', height: '600px', marginTop: '20px', border: '1px solid red' }}>
          <br /><br /><h2 align='center' style={{ color: 'red' }}><b>Blood Donation Form</b></h2><br />
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Enter Your Name: </label><br />
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required /><br /><br />
            <label htmlFor="email">Enter Your Email: </label><br />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />
            <label htmlFor="bloodGroup">Blood Group:</label><br />
            <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} required>
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select><br /><br />
            <label htmlFor="donationType">Donation Type:</label><br />
            <select value={donationType} onChange={(e) => setDonationType(e.target.value)} required>
              <option value="">Select Donation Type</option>
              <option value="Free Donation">Free Donation</option>
              <option value="Health Checkup">Health Checkup</option>
              <option value="Paid Donation">Paid Donation</option>
            </select><br /><br />
            <label htmlFor="phoneNumber">Phone Number:</label><br />
            <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} pattern="[0-9]{10}" required /><br /><br />
            <center><button type="submit" style={{ background: 'red', color: '#fff', border: 'none', padding: '10px 100px' }}>Submit</button></center>
          </form>
        </div>
        <br /><br /><br /><br /><br />
        <Footer_Components />
      </div>
    </>
  )
}

export { DonateNow }


