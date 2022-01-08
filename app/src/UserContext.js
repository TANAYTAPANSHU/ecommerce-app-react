import React from 'react'

export const LoginContext = React.createContext();

export const LoginProvider = ({children}) =>{
const [user,setUser] = React.useState({name:'',auth:false});


const login = (name) =>{
    setUser(() => ({name:name ,auth:true}) )
}

const logout = () =>{
    setUser(() => ({name:'' ,auth:false}) )
}


return(
    <LoginContext.Provider value={{user,login,logout}}>
        {children}
    </LoginContext.Provider>
)





}
