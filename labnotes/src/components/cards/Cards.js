import "./cards.css";
import imgEdit from "../../img/imgEdit.png";
import { Popup } from "../popup/Popup";
import { useState } from "react";
export default function CardsNotes(){
    const [visibility, setVisibility] = useState(false);
    const onEdit = ()=> setVisibility(true);
    const onClickHide = ()=> setVisibility(false);
    return (
        <div>
            <div class="notesArea">
                <section class="note">
                    <input class="titleNote" placeholder="Título"></input>
                    <textarea class="textNote" placeholder="Escribe una nota..."></textarea>
                    <section className="areaEditButton">
                        <button className="buttonEdit" onClick={onEdit}>
                            <img alt="imgEd" class="editionImg" src={imgEdit} />
                        </button>
                    </section>
                </section>
                <section class="note">Hello2</section>
                <section class="note">Hello3</section>
                <section class="note">Hello4</section>
                <section class="note">Hello5</section>
                <section class="note">Hello6</section>
                <section class="note">Hello7</section>
                <section class="note">Hello8</section>
            </div>
            <Popup onClickCloseModal={onClickHide} visible={visibility}/>
        </div>
    );
};