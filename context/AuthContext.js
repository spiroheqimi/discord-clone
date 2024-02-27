import { createContext, useContext, useState } from "react"

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
  const [ isLoggedIn, setisLoggedIn] = useState(false)

  const login = () => {
    // User logs in
    // Will take date from the form 
    // data === in db ?  setisLoggedIn(true) :  setisLoggedIn(false)
    // Store the Log boolean in local storage 
    setisLoggedIn(true)
  }

  const logout = () => {
    // Logout on button click
    setisLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
