import './popup.css'
import { useState } from "react";
import {db} from '../firebase/Firebase'
import { doc, addDoc, collection, updateDoc } from 'firebase/firestore';
import { useContext } from "react";
import LoginContext from "../../context/LoginContext";

export function Popup(props) {
    const {authentication} = useContext(LoginContext);
    const initialStateValues = {
        title: '',
        noteText:'',
        date:'',
    };

    const [values, setValues] = useState(initialStateValues);
    
    const areaEditChange = e =>{
        const {id, value} = e.target;
        let today = new Date().toISOString()
        const newValue = {...values, [id]: value, "date":today};
        setValues(newValue);
    }


    const saveNote = note => async (e) => {
        e.preventDefault();
        let docRef;
        let collectionName = `${authentication.user.email}note`;
        if(note && note.id){
            const upDoc = doc(db, collectionName, note.id);
            docRef = await updateDoc(upDoc, values);
            props.onClickCloseModal();
        }else{
            docRef = await addDoc(collection(db, collectionName),values);
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