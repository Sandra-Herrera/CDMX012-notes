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
        setValues({...values, [id]: value})
    }

    //const washingtonRef = doc(db, "note", "DC");
    const saveNote = async (e) => {
        e.preventDefault();
        let docRef;
        // if(values.noteId){
        //     const upDoc = doc(db, "note", "noteId");
        //     docRef = await updateDoc(upDoc, values);
        // }else{
            docRef = await addDoc(collection(db, "note"),values);
            setValues({...values, noteId:docRef.id})
        //}
        console.log(docRef.id);     
    }

    return(
        props.visible ?
        <>
            {/* <!-- The Modal --> */}
            <div id="myModal" className="modal" >

                {/* <!-- Modal content --> */}
                <div className="modal-content">
                    <span className="close" onClick={props.onClickCloseModal}>&times;</span>
                    <input className="titleModal" id="title" onChange={areaEditChange} placeholder="Título" ></input>
                    <textarea className="writeNoteModal" id="noteText" onChange={areaEditChange} placeholder="Escribe una nota..."></textarea>
                    <section className="areaSaveButton">
                        <button className="saveEditButton" onClick={saveNote} > 
                            Guardar
                        </button>
                    </section>
                </div>
            </div>
        </>
        : null
    );
}