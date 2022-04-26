import CardsNotes from "../cards/Cards";
import TopBar from "../bar/TopBar";
import "./landingPage.css";

export default function LandingPage() {
    return (
        <div class="landingContainer">
            <TopBar />
            <CardsNotes />
        </div>
    );
}