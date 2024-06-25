import React from 'react'; // Imports the React library, which is necessary for creating React components and using JSX (JavaScript XML).
import ReactDOM from 'react-dom'; // Imports the ReactDOM library, which is used for rendering React components to the DOM
import App from './App'; // Imports the main App component from the App.js file. This component will be the root of your React application.

import { FirebaseContext } from './store/FirebaseContext'; // Imports FirebaseContext from the FirebaseContext.js file located in the store directory. FirebaseContext is a React Context object used to pass Firebase configuration and methods through the component tree without having to pass props down manually at every level.
import { Firebase } from './firebase/config'; // Imports the Firebase configuration and initialization from the config.js file located in the firebase directory. This is where the Firebase app is initialized and configured.

ReactDOM.render( // Calls the render method from ReactDOM to render React elements into the DOM. This method takes two arguments: the React element to render and the DOM node to render it into.
   <FirebaseContext.Provider value={Firebase}> {/* Uses the FirebaseContext.Provider component to wrap the App component. This provides the Firebase object (the Firebase configuration and methods) to the App component and all its child components. The value prop specifies what data is provided to the consuming components. */}
        <App />
   </FirebaseContext.Provider>,
   document.getElementById('root') // Specifies the DOM node with the id of root where the React application will be rendered. This is usually a div in your index.html file.
);
