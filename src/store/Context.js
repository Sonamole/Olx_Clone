import { useState } from "react";
import { createContext } from "react"; //This line imports the createContext function from the React library. The createContext function is used to create a Context object, which allows you to pass data through the component tree without having to pass props down manually at every level.


export const AuthContext= createContext(null);
export const FirebaseContext=createContext(null) //This calls the createContext function to create a new Context object. The null argument specifies the default value for this context. Here, it is set to null, meaning that initially, the context does not have any value.


//the below set of code is a componenent which is exported..imported on index.js
export default function Context({children})//In React, children is a special prop that represents any nested elements between the opening and closing tags of the component.
    {
        const [user,setUser] = useState(null) //null in tutorial
        return(
            <AuthContext.Provider value={{ user,setUser }}>
                 {/* The 'children' prop represents any components nested(inside) within this Context component.
                By wrapping them in AuthContext.Provider and passing down the 'user' state
                as the value, all descendants of Context can access the current 'user' state. */}
                {children} {/*Here App Component comes */}
            </AuthContext.Provider>
        )
    }


