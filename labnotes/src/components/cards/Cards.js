import "./cards.css";
import imgAddNote from "../../img/imgAddNote.png";
import imgEdit from "../../img/imgEdit.png";
import imgDelete from "../../img/imgDelete.png";
import imgView from "../../img/imgView.png";
import { Popup } from "../popup/Popup";
import { useState } from "react";
import { db } from "../firebase/Firebase";
import { doc, collection, getDocs, deleteDoc } from "firebase/firestore";
import { useEffect } from "react";

export default function CardsNotes(){
    
    const [allNotes, setAllNotes] = useState([]);
    useEffect(()=>{  
        getNotes();
    },[]);
    const getNotes = async ()=>{
        const querySnapshot = await getDocs(collection(db, "note"));
        let result=[]; 
        querySnapshot.forEach((doc) => {
            let infoNote = doc.data();
            infoNote["id"] = doc.id;
            result.push(infoNote);
        });
        setAllNotes(result);
    };
    

    const [objPopup, setPopup] = useState({visibility:false});
    const onEdit = note => ()=> {
        setPopup({visibility:true, popupNote:note});
    }
    const onAdd  = () =>{
        setPopup({visibility:true});
    }
    const onClickHide = ()=> {
        setPopup({visibility:false});
        getNotes();
    }
    const onDelete = note => async () => {
        await deleteDoc(doc(db, "note", note.id));
        getNotes();
    }
    return (
        <>
            <div className="addBtnContainer">
                <label className="addNoteLabel">Agregar una nota</label>
                <button className="buttonAddNote" onClick={onAdd}>
                    <img alt="imgNote" className="imgAddNote" src={imgAddNote} />
                </button>
            </div>
            <div className="notesArea">
                {
                    allNotes.map(note=>{
                        return (
                            <section key={note.id} className="note">
                                <input className="titleNote" placeholder="Título" value={note.title} disabled></input>
                                <textarea className="textNote" placeholder="Escribe una nota..." value={note.noteText} disabled></textarea>
                                <section className="areaButtons">
                                    <button className="buttonDelete" onClick={onDelete(note)}>
                                        <img alt="imgDel" className="deleteImg" src={imgDelete}/>
                                    </button>
                                    <button className="buttonViewNote">
                                        <img alt="imgVi" className="ViewNoteImg" src={imgView}/>
                                    </button>
                                    <button className="buttonEdit" onClick={onEdit(note)}>
                                        <img alt="imgEd" className="editionImg" src={imgEdit} />
                                    </button>
                                </section>
                            </section>
                        )
                    })
                }
                
                {/* <section class="note">Hello2</section>
                <section class="note">Hello3</section>
                <section class="note">Hello4</section>
                <section class="note">Hello5</section>
                <section class="note">Hello6</section>
                <section class="note">Hello7</section>
                <section class="note">Hello8</section>  */}
            </div>
            <Popup onClickCloseModal={onClickHide} visible={objPopup.visibility} attrNote={objPopup.popupNote}/>
        </>
    );
};