import React, { useState,useContext } from 'react';// Import React and the useState hook from the 'react' library
import Logo from '../../olx-logo.png';
import './Signup.css';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../store/Context';
import  firebase  from '../../firebase/config';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


export default function Signup() {
  // Declare state variables and their setters using the useState hook

  const history=useHistory()//useHistory hook, you can programmatically control the navigation within your React application. returns the history object, which has methods like push, replace, and others for navigating programmatically.

  const [username, setUsername] = useState(''); // State for username, initially empty string
  const [email, setEmail] = useState('');       // State for email, initially empty string
  const [phone, setPhone] = useState('');       // State for phone, initially empty string
  const [password, setPassword] = useState(''); // State for password, initially empty string

  const firebase=useContext(FirebaseContext) //Use the useContext hook to access the value provided by FirebaseContext

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting the default way
    // console.log(firebase);
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{//THis calls the Firebase authentications servive and creates a new user account holding and result.user gave access to the newly created user object
      result.user.updateProfile({displayName:username}).then(()=>{ ////The methods and properties provided by the Firebase API, such as auth(), createUserWithEmailAndPassword, updateProfile, and displayName, cannot be renamed. These names are fixed as they are defined by Firebase and are necessary for the API to function correctly.      // result.user gives access to the newly created user object.updateProfile({ displayName: username }): This method updates the user's profile information.{ displayName: username }:An object containing the new profile information to be set.displayName is a property of the user's profile, set to the value of the username variable.
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone
        }).then(()=>{
              history.push("/login")
        })


      })
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
<Link to ='/login'>Login</Link>

      </div>
    </div>
  );
}
