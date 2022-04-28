import imgAddNote from "../../img/imgAddNote.png";
import sandy from "../../img/sandy.jpg";
import "./topBar.css";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
    const navigate = useNavigate();
    const logOut = () => {
        navigate('/');
    }
    return (
        <div>
            <div className="topBar">
                <section className="userTemplate">
                    <img alt="imgProf" className="profilePic" src={sandy} />
                    <label className="nameTemplate">Sandra Herrera</label>
                </section>
                    <label className="addNoteLabel">Agregar una nota</label>
                    <button className="buttonAddNote">
                        <img alt="imgNote" className="imgAddNote" src={imgAddNote} />
                    </button>
                <button className="buttonLogOut" onClick={logOut}>
                    Cerrar sesión
                </button>
            </div>
        </div>
    );
}