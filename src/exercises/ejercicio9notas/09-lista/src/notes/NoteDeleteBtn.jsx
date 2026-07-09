import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

function NoteDeleteBtn({id}){

    let {remove}=useContext(NotesContext);

    return(
        <button className="text-red-600" onClick={ ev=> remove(id)}>Delete</button>
    )
}

export default NoteDeleteBtn;