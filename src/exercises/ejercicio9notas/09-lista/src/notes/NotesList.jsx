import { useContext } from "react";
import Note from "./Note";
import { NotesContext } from "../context/NotesContext";

function NotesList(){
    const { notes } = useContext(NotesContext);
    return(
        <div>
            <p style={{ textAlign: "center" }}>You have {notes.length} notes saved</p>
            {
                notes.map(note => <Note key={note.id} id={note.id} title={note.title} message={note.message} />)
            }
        </div>
    )
}

export default NotesList;