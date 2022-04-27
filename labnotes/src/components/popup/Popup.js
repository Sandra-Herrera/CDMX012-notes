import './popup.css'

export function Popup(props) {



    return(
        props.visible ?
        <>
            {/* <!-- The Modal --> */}
            <div id="myModal" class="modal" >

                {/* <!-- Modal content --> */}
                <div class="modal-content">
                    <span class="close" onClick={props.onClickCloseModal}>&times;</span>
                    <input class="titleModal" placeholder="Título"></input>
                    <textarea className="writeNoteModal" placeholder="Escribe una nota...">Some text in the Modal..</textarea>
                    <section className="areaSaveButton">
                        <button className="saveEditButton" > 
                            Guardar
                        </button>
                    </section>
                </div>
            </div>
        </>
        : null
    );
}