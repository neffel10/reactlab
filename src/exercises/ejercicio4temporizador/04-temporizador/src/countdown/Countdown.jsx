import { useState, useEffect } from "react";


function Countdown(){

    //targetSeconds, elapsedSeconds

    let [targetSeconds, setTargetSeconds]=useState(null);
    let [elapsedSeconds, setElapsedSeconds]= useState(0);

    useEffect(function(){

        if(targetSeconds===null)return;

        //targetSeconds has a value

        setElapsedSeconds(0); //para siempre iniciar desde 0 desde que se arranca el contador

        let interval = setInterval(function(){
                setElapsedSeconds((elapsedSeconds)=>elapsedSeconds+1)
        },1000);

        return()=>{
            clearInterval(interval); //temas de limpieza en useEffect hay que hacerlos in the return
        }

    },[targetSeconds])


    function parseForm(ev){
        ev.preventDefault(); //previene comportamiento normal del form
        let seconds = ev.target.seconds.value; //hago referencia al control de los segundos del formulario mismo
        setTargetSeconds(parseInt(seconds));
    }

       if (elapsedSeconds>=targetSeconds && targetSeconds !== null){
        return(
            <>
             <p>Termino!</p>
            <button className="bg-[#00D483] border-white border-width-[1px] p-3 m-3 rounded" onClick={()=>setTargetSeconds(null)}>Reiniciar Temporizador</button>
            </>
           
        )
    }

    if(targetSeconds !== null){
        return(   
            <p>Soy un conteo hasta el {targetSeconds} y han transcurrido {elapsedSeconds}</p>
        );
    }

 

    return(
        <div>
            <p>¿Cuantos segundos quieres contar?</p>
            <form action="#" onSubmit={ev=>parseForm(ev)}>
                <input type="number" name="seconds" id="" />
                <button className="bg-[#00D483] border-white border-width-[1px] p-3 m-3 rounded">Iniciar</button>
            </form>
        </div>    
    );
}

export default Countdown;