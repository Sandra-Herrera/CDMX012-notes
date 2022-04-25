import imgAddNote from "../../img/imgAddNote.png";

export default function TopBar(){
    return(
        <div>
            <div>
                <button class="buttonAddNote">
                    <img alt="img add note" class="imgAddNote" src={imgAddNote} />
                </button>
            </div>
        </div>
    );
}