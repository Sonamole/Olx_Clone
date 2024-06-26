import React,{useEffect,useContext,useState} from 'react';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'

import { AuthContext, FirebaseContext } from './store/Context';

import Home from './Pages/Home';


function App() {
  const {setUser}=useContext(AuthContext)
  const firebase=useContext(FirebaseContext)
   useEffect(()=>{
    // console.log(user);
    firebase.auth().onAuthStateChanged((user) => {      // This function is called whenever the authentication state changes (user logs in or logs out).

      // if(user){
      //   console.log('User is',user);
      // }

      setUser(user);
      // console.log('User details are',user);

      // setUser is a function that updates the state with the current user.
      // If the user is logged in, 'user' will be an object containing user details.
      // If the user is logged out, 'user' will be null.
    });


   })

  return (
    <div>
<Router>

    <Route exact path='/'> <Home /></Route>
    <Route path='/signup'><Signup/></Route>
    <Route path='/login'><Login/></Route>
    <Route path='/create'><Create/></Route>
    <Route path='/viewpost'><View/></Route>

</Router>


    </div>
  );
}

export default App;
