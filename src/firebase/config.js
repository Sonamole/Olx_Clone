// import {firebase} from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth'; // Import Firebase Authentication
import 'firebase/firestore'; // Import Firebase Firestore


const firebaseConfig = { //// Defines a JavaScript object named firebaseConfig that contains configuration settings required to initialize Firebase.
    apiKey: "AIzaSyApPgU_UhEFqoEXlqqQp9rZ9XrldBueAPk",
    authDomain: "olxclone-ff0de.firebaseapp.com",
    projectId: "olxclone-ff0de",
    storageBucket: "olxclone-ff0de.appspot.com",
    messagingSenderId: "782842344068",
    appId: "1:782842344068:web:e96e32d18a3f10e11ac8d1",
    measurementId: "G-J9SJJ2LXQV"
  };

export const Firebase =firebase.initializeApp(firebaseConfig)

// export const Firebase = firebase.initializeApp(firebaseConfig);: Initializes Firebase with the firebaseConfig object. This function call initializes Firebase with the provided configuration, making Firebase services (like Firestore) available for use throughout your application.
// export const Firebase: Exports the initialized Firebase instance as Firebase, making it accessible for importing into other parts of your application.




































