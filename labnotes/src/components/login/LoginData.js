import imgCreateNotes from "../../img/imgCreateNotes.PNG"
import imgGoogle from "../../img/imgGoogle.png";
import "./loginData.css"
import {app, provider, signIn, auth} from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import LoginContext from "../../context/LoginContext";


export default function LoginData() {
    const { authenticationDone} = useContext(LoginContext);
    const navigate = useNavigate();

    const SignInWithFirebase = ()=>{
        signIn(auth, provider)
        .then((loginDone)=>{
            authenticationDone(loginDone);
            navigate('/landing');
        });
    }

    return (
        <div>
            <div className="data">
                <section>
                    <img alt="imagen logo" className="imgLogo" src={imgCreateNotes}/>
                </section>
                <section className="sesion">
                    Iniciar sesión
                </section>
                <br></br>
                <br></br>
                <br></br>
                <button className="buttonGoogle" onClick={SignInWithFirebase} >
                    <img alt="imagen Google" className="google" src={imgGoogle} />
                </button>
                <label className="labelGoogle">Accede con Google</label>
                {/* <br></br>
                <input className="inputMail" placeholder="Ingresa tu correo" />
                <br></br>
                <input className="inputPassword" placeholder="Ingresa tu contraseña" />
                <br></br>
                <button className="buttonLogin">Ingresar</button> */}
            </div>
        </div>
    );
}