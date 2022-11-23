import React, { createContext, useEffect, useContext, useState } from "react";

const userContent = createContext({})
function AuthProvider({children}) {
    const [auth, setauth] = useState({})
   
    useEffect(() => {
      let details=JSON.parse(localStorage.getItem("getToken" )|| "{}")
     setauth(details)
    
    }, [])
  return (
   <>
   <userContent.Provider value={{auth,setauth}}>
{children}
   </userContent.Provider>
   </>
  )
}
const Provider=()=>useContext(userContent)
export {Provider}
export default AuthProvider