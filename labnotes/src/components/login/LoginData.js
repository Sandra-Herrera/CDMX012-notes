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
            <div class="data">
                <section>
                    <img alt="imagen logo" class="imgLogo" src={imgCreateNotes}/>
                </section>
                <section class="sesion">
                    Iniciar sesión
                </section>
                <br></br>
                <button class="buttonGoogle" onClick={SignInWithFirebase} >
                    <img alt="imagen Google" class="google" src={imgGoogle} />
                    Acceder con Google
                </button>
                <br></br>
                <input class="inputMail" placeholder="Ingresa tu correo" />
                <br></br>
                <input class="inputPassword" placeholder="Ingresa tu contraseña" />
                <br></br>
                <button class="buttonLogin">Ingresar</button>
            </div>
        </div>
    );
}