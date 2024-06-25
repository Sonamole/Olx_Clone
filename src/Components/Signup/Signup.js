// Import React and the useState hook from the 'react' library
import React, { useState,useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/FirebaseContext';


export default function Signup() {
  // Declare state variables and their setters using the useState hook
  const [username, setUsername] = useState(''); // State for username, initially empty string
  const [email, setEmail] = useState('');       // State for email, initially empty string
  const [phone, setPhone] = useState('');       // State for phone, initially empty string
  const [password, setPassword] = useState(''); // State for password, initially empty string

  const {Firebase}=useContext(FirebaseContext) //Use the useContext hook to access the value provided by FirebaseContext

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting the default way
    // console.log(Firebase);
    Firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username})

    })
  }

  // The component's JSX output
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form onSubmit={handleSubmit}> {/* Attach handleSubmit to form's onSubmit event */}
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="fname"
            name="name"
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
            name="phone"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
          />
          <br />
          <br />
          <button type="submit">Signup</button>
        </form>
        <a href="/login">Login</a>
      </div>
    </div>
  );
}
