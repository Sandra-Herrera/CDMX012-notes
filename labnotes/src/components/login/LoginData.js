import imgCreateNotes from "../../img/imgCreateNotes.PNG"
import imgGoogle from "../../img/imgGoogle.png";
import "./loginData.css"
import {app, provider, signIn, auth} from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";


export default function LoginData() {
    const navigate = useNavigate();

    const SignInWithFirebase = ()=>{
        signIn(auth, provider)
        .then((loginDone)=>{
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
                <button className="buttonGoogle" onClick={SignInWithFirebase} >
                    <img alt="imagen Google" className="google" src={imgGoogle} />
                    Acceder con Google
                </button>
                <br></br>
                <input className="inputMail" placeholder="Ingresa tu correo" />
                <br></br>
                <input className="inputPassword" placeholder="Ingresa tu contraseña" />
                <br></br>
                <button className="buttonLogin">Ingresar</button>
            </div>
        </div>
    );
}