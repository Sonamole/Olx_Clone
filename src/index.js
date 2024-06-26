import React from 'react'; //Import React library to use JSX syntax and React components.
import { createRoot } from 'react-dom/client';// This function is used for concurrent mode rendering in React.
import App from './App';//Import the App component from the './App' file.
import { FirebaseContext } from './store/Context';//Import FirebaseContext from './store/FirebaseContext'. This assumes FirebaseContext is a context object created with React's createContext()
import firebase from './firebase/config';//Import firebase instance from './firebase/config'. This typically contains Firebase configuration and initialization.
import Context from './store/Context'//Import Context from './store/FirebaseContext'. This seems to be another context or possibly a provider component.


// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(// sets up a React root and prepares it for rendering React components into the HTML element with the id root.(public->index.html)
  <FirebaseContext.Provider value={firebase}>
    <Context> {/*Assuming Context is a component or provider  it wraps its children with additional context or functionality. */}
    <App /> {/* children in context */}
    </Context>
  </FirebaseContext.Provider>
);
