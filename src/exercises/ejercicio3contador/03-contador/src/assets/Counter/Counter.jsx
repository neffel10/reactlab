import { useState } from "react";

function Counter(){

    
    //El estado
    const [contador, setContador]=useState(0); //const [valor1, valor2]=useState(valorinicial); 


    return(
        <div>
            <p>Haz hecho clic {contador} veces a este boton</p>
            <button className="bg-[#00D483] border-white border-width-[1px] p-3 m-3 rounded" onClick={()=>{setContador(contador+1)}}>Incrementar</button>
            <button className="bg-[#00D483] border-white border-width-[1px] p-3 m-3 rounded" onClick={()=>{setContador(contador-1)}}>Decrementar</button>
            <button className="bg-[#00D483] border-white border-width-[1px] p-3 m-3 rounded" onClick={()=>{setContador(0)}}>Resetear</button>
        </div>
    )
}

export default Counter;