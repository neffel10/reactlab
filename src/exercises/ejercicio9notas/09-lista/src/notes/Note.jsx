import NoteDeleteBtn from "./NoteDeleteBtn";

function Note({title, message,id}){
    return(
        <div className="note bg-white/5 backdrop-blur-md rounded-lg p-4 border border-slate-800/80 hover:border-emerald-500/30 shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(16,185,129,0.04)] transition-all duration-700 ease-out relative before:absolute before:inset-0 before:rounded-lg before:bg-[linear-gradient(rgba(18,24,38,0)_50%,_rgba(0,0,0,0.15)_50%)] before:bg-[length:100%_4px] before:pointer-events-none">
            <h2>{title}</h2>
            <p>{message}</p>
            <NoteDeleteBtn id={id}/>
        </div>
    )
}

export default Note;