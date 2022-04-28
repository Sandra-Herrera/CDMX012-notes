import "./cards.css";
import imgEdit from "../../img/imgEdit.png";
import imgDelete from "../../img/imgDelete.png";
import imgView from "../../img/imgView.png";
import { Popup } from "../popup/Popup";
import { useState } from "react";
export default function CardsNotes(){
    const [visibility, setVisibility] = useState(false);
    const onEdit = ()=> setVisibility(true);
    const onClickHide = ()=> setVisibility(false);
    return (
        <div>
            <div className="notesArea">
                <section className="note">
                    <input className="titleNote" placeholder="Título"></input>
                    <textarea className="textNote" placeholder="Escribe una nota..."></textarea>
                    <section className="areaButtons">
                        <button className="buttonDelete">
                            <img alt="imgDel" className="deleteImg" src={imgDelete}/>
                        </button>
                        <button className="buttonViewNote">
                            <img alt="imgVi" className="ViewNoteImg" src={imgView}/>
                        </button>
                        <button className="buttonEdit" onClick={onEdit}>
                            <img alt="imgEd" className="editionImg" src={imgEdit} />
                        </button>
                    </section>
                </section>
                {/* <section class="note">Hello2</section>
                <section class="note">Hello3</section>
                <section class="note">Hello4</section>
                <section class="note">Hello5</section>
                <section class="note">Hello6</section>
                <section class="note">Hello7</section>
                <section class="note">Hello8</section> */}
            </div>
            <Popup onClickCloseModal={onClickHide} visible={visibility}/>
        </div>
    );
};