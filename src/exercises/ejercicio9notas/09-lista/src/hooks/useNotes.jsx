//un hook en react es cualquier funcion que empieza con la palabra use y luego un identificador del hook
//hooks no muestran ui, es mas para funcionalidad

import { useEffect, useState } from "react";

const list =[
    {title: "Hola", message: "Mundo", id: "123"},
    {title: "Segunda nota", message: "Mundo", id: "1234"}
];

const LOCALSTORAGE_KEY = "MIAPP.list";

function useNotes(){
    const [notes, setNotes] = useState([]);

    useEffect(()=>{

        let localStorageSavedNotes = localStorage.getItem(LOCALSTORAGE_KEY);
        if(localStorageSavedNotes){
            setNotes(
                JSON.parse(localStorageSavedNotes)
            )
        }
    },[]);

    useEffect(()=>{
        if(!notes || notes.length==0) return;
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(notes))
    }, [notes]);
    
    function add(title, message){
        const id = Date.now();    
        const noteObjetct ={ title,  message,  id}
        setNotes([noteObjetct, ...notes]);
    }

    function remove(id){
        let newNotes = notes.filter( note=>note.id !== id);
        setNotes(newNotes);
    }

    return{
        notes,
        add,
        remove
    }
}

export default useNotes;