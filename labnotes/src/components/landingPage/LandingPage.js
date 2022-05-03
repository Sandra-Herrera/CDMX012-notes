import CardsNotes from "../cards/Cards";
import TopBar from "../bar/TopBar";
import "./landingPage.css";
import { useContext, useEffect } from "react";
import LoginContext from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    //const allNotes = getNotes();
    const {authentication} = useContext(LoginContext);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!authentication){
            navigate('/');
        }
    },[]);
    
    
    return (
        <div className="landingContainer">
            <TopBar />
            <CardsNotes />
        </div>
    );
}


