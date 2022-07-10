
import "./topBar.css";
import { useContext } from "react";
import LoginContext from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
    const navigate = useNavigate();
    const {authentication} = useContext(LoginContext);
    const logOut = () => {
        navigate('/');
    }
    return (
        <div>
            <div className="topBar">
                <section className="userTemplate">
                <img alt="" className="profilePic" referrerPolicy="no-referrer" src={authentication.user.photoURL} />
                    <label className="nameTemplate">{authentication.user.displayName}</label>
                </section>
                <button className="buttonLogOut" onClick={logOut}>
                    Cerrar sesión
                </button>
            </div>
        </div>
    );
}