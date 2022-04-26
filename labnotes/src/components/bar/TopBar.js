import imgAddNote from "../../img/imgAddNote.png";
import "./topBar.css";
import { useNavigate } from "react-router-dom";

export default function TopBar(){
    const navigate = useNavigate();
    const logOut = ()=>{
        navigate('/');
    }
    return(
        <div>
            <div class="topBar">
                <section class="userTemplate">
                    <img alt="imgProf" class="profilePic" />
                    <label class="nameTemplate">Karina Hernández</label>
                </section>
                <label class="addNoteLabel">Agregar una nota</label>
                <button class="buttonAddNote">
                    <img alt="imgNote" class="imgAddNote" src={imgAddNote} />
                </button>
                <button class="buttonLogOut" onClick={logOut}>
                    Cerrar sesión
                </button>
            </div>
        </div>
    );
}