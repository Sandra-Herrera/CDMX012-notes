import React,{useState} from "react";


const LoginContext = React.createContext();

export const LoginContextProvider = (props) =>{
    const[authentication, setAuthentication] = useState();

    const authenticationDone =(logDone)=>{
        setAuthentication(logDone);
    }

    return(
        <LoginContext.Provider value={{authentication,authenticationDone}}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginContext;