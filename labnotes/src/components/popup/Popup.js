import './popup.css'
import { useState } from "react";
import {db} from '../firebase/Firebase'
import { doc, addDoc, collection, updateDoc } from 'firebase/firestore';

export function Popup(props) {

    const initialStateValues = {
        title: '',
        noteText:'',
    };

    const [values, setValues] = useState(initialStateValues);
    
    const areaEditChange = e =>{
        const {id, value} = e.target;
        const newValue = {...values, [id]: value};
        setValues(newValue);
    }


    const saveNote = note => async (e) => {
        e.preventDefault();
        let docRef;
        if(note && note.id){
            const upDoc = doc(db, "note", note.id);
            docRef = await updateDoc(upDoc, values);
            props.onClickCloseModal();
        }else{
            docRef = await addDoc(collection(db, "note"),values);
            setValues({...values, noteId:docRef.id});
            props.onClickCloseModal();
        }  
    }

    return(
        props.visible ?
        <>
            {/* <!-- The Modal --> */}
            <div id="myModal" className="modal" >

                {/* <!-- Modal content --> */}
                <div className="modal-content">
                    <span className="close" onClick={props.onClickCloseModal}>&times;</span>
                    <input className="titleModal" id="title" onChange={areaEditChange} placeholder="Título" defaultValue={props.attrNote?.title}></input>
                    <textarea className="writeNoteModal" id="noteText" onChange={areaEditChange} placeholder="Escribe una nota..." defaultValue={props.attrNote?.noteText}></textarea>
                    <section className="areaSaveButton">
                        <button className="saveEditButton" onClick={saveNote(props.attrNote)} > 
                            Guardar
                        </button>
                    </section>
                </div>
            </div>
        </>
        : null
    );
}