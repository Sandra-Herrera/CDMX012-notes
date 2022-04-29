import CardsNotes from "../cards/Cards";
import TopBar from "../bar/TopBar";
import "./landingPage.css";

export default function LandingPage() {
    //const allNotes = getNotes();
    
    
    return (
        <div className="landingContainer">
            <TopBar />
            <CardsNotes />
        </div>
    );
}


