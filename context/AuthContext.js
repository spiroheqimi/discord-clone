import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
  const [ formDisplay, setformDisplay] = useState("login")
  const [ userAccess, setuserAccess ] = useState(false)

  useEffect(() => {
    logout() // default false
  }, );
 
  const login = () => {
    // User logs in
    // Will take date from the form 
    // data === in db ?  setformDisplay(true) :  setformDisplay(false)
    // Store the Log boolean in local storage 
    setformDisplay("login")
  }

  const guest = () => {
    try {
      setuserAccess(true)
    } catch (error) {
      console.log(error)
    }
  }
  const logout = () => {
    setuserAccess(false)
  }

  const register = () => {
    // Logout on button click
    setformDisplay("register")
  }

  return (
    <AuthContext.Provider value={{ formDisplay, userAccess , login, register, guest , logout }}>
      {children}
    </AuthContext.Provider>
  );
}
