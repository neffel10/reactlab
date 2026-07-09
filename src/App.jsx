import { useState } from 'react';

// 1. Import my 9 exercises
import Ejercicio1Hello from './exercises/ejercicio1hello/01-hola-mundo/src/App.jsx';
import Ejercicio2Presentacion from './exercises/ejercicio2presentacion/02-presentacion/src/App.jsx';
import Ejercicio3Contador from './exercises/ejercicio3contador/03-contador/src/App.jsx';
import Ejercicio4Temporizador from './exercises/ejercicio4temporizador/04-temporizador/src/App.jsx';
import Ejercicio5Lista from './exercises/ejercicio5lista/05-filtrar-lista/src/App.jsx';
import Ejercicio6Tooltip from './exercises/ejercicio6tooltip/06-tooltip/src/App.jsx';
import Ejercicio7Form from './exercises/ejercicio7form/07-formulario-contacto/src/App.jsx';
import Ejercicio8ListaContext from './exercises/ejercicio8listacontext/08-filtrar-lista-context/src/App.jsx';
import Ejercicio9Notas from './exercises/ejercicio9notas/09-lista/src/App.jsx';

export default function App() {
  // State to keep track of the active tab (exercise)
  const [activeTab, setActiveTab] = useState('default');

  // 2. The switch statement to render the selected exercise based on the activeTab state
  const renderExercise = () => {
    switch (activeTab) {
      
      case 'introduction': return <Ejercicio2Presentacion />;
      case 'contador':     return <Ejercicio3Contador />;
      case 'temporizador': return <Ejercicio4Temporizador />;
      case 'lista':        return <Ejercicio5Lista />;
      case 'tooltip':      return <Ejercicio6Tooltip />;
      case 'form':         return <Ejercicio7Form />;
      case 'context':      return <Ejercicio8ListaContext />;
      case 'notas':        return <Ejercicio9Notas />;
      case 'welcome':
      default:
        return (
          <div className="text-center font-mono py-12 flex flex-col items-center justify-center gap-4">
            {/* Icono de código parpadeante */}
            <div className="text-5xl text-emerald-500 animate-pulse mb-2">&lt;/&gt;</div>
            <div className="space-y-1">
              <p className="text-emerald-400 tracking-widest text-sm font-bold animate-pulse">
                [ SYSTEM STATUS: ONLINE ]
              </p>
              <p className="text-slate-500 text-xs uppercase tracking-wider">
                Initializing interactive modules...
              </p>
            </div>
            <div className="mt-6 text-xs text-slate-400 max-w-xs border border-slate-800/80 bg-slate-900/40 px-4 py-2 rounded-lg">
              Select an exercise from the sidebar to get started.
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0b0f19] text-white font-sans">
      
      {/* BARRA LATERAL (MENU) */}
      <aside className="w-80 bg-[#0d1321] border-r border-slate-800 p-6 flex flex-col justify-between">
        <div>
          <div className="mb-8">
            <h1 className="text-xl font-bold tracking-wider text-emerald-400 font-mono">REACT_UI_LAB//</h1>
            <p className="text-xs text-slate-500 mt-1">Technical demos and fundamentals</p>
          </div>
          
          <nav className="flex flex-col gap-1.5">
            
            {/* EXERCISE BUTTONS */}
               
            <button 
              onClick={() => setActiveTab('introduction')} 
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'introduction' ? 'bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400 pl-[1.75rem]' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}
            >
              01. Introduction
            </button>
            <button 
              onClick={() => setActiveTab('contador')} 
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'contador' ? 'bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400 pl-[1.75rem]' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}
            >
              02. Counter
            </button>
            <button 
              onClick={() => setActiveTab('temporizador')} 
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'temporizador' ? 'bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400 pl-[1.75rem]' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}
            >
              03. Timer
            </button>

            <button 
              onClick={() => setActiveTab('tooltip')} 
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'tooltip' ? 'bg-emerald-500/10 text-emerald-400 pl-[1.75rem]' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}
            >
              04. Tooltip
            </button>

            
            
            <button 
              onClick={() => setActiveTab('form')} 
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'form' ? 'bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400 pl-[1.75rem]' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}
            >
              05. Forms
            </button>

            <button 
              onClick={() => setActiveTab('lista')} 
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'lista' ? 'bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400 pl-[1.75rem]' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}
            >
              06. List (using Prop Drilling)
            </button>
       
              <button 
              onClick={() => setActiveTab('context')} 
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'context' ? 'bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400 pl-[1.75rem]' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}
            >
              07. List (using Context API)
            </button>
            <button 
              onClick={() => setActiveTab('notas')} 
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'notas' ? 'bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400 pl-[1.75rem]' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}
            >
              08. Notes
            </button>
          </nav>
        </div>

       

      

       {/* Footer del Sidebar */}
        <div className="pt-4 border-t border-slate-800/60 text-xs text-slate-500 font-mono flex justify-between items-center">
          <span>ALESSANDRO TORRES</span>
          <span className="text-emerald-500/80">v1.0.0</span>
        </div>
      </aside>
      {/* ÁREA PRINCIPAL DE VISUALIZACIÓN */}

      <main className="flex-grow p-8 md:p-12 lg:p-16 flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/40 via-[#0b0f19] to-[#0b0f19]">
        
        {/* PUNTO 2: TARJETA CON "EFECTO CRT / ESCÁNER" (Borde brillante degradado y glow esmeralda) */}
        <div className="w-full max-w-4xl bg-[#0d1321]/60 backdrop-blur-md min-h-[450px] flex flex-col justify-center rounded-2xl p-8 border border-slate-800/80 hover:border-emerald-500/30 shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(16,185,129,0.04)] transition-all duration-700 ease-out relative before:absolute before:inset-0 before:rounded-2xl before:bg-[linear-gradient(rgba(18,24,38,0)_50%,_rgba(0,0,0,0.15)_50%)] before:bg-[length:100%_4px] before:pointer-events-none align-items-center justify-center items-center">
          
          <div className="relative z-10 flex flex-col items-center justify-center w-full text-center">            
           {renderExercise()}
          </div>
          
        </div>
      </main>

    </div>
  );
}