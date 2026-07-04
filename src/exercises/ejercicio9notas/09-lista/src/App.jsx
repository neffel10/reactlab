import './App.css'
import NotesList from './notes/NotesList'
import NotesForm from './notes/NotesForm'
import { NotesProvider } from './context/NotesContext'

function App() {

  return (
    <div className='App items-center align-center justify-center'>
      <NotesProvider>
        <NotesForm/>
        <NotesList/>
      </NotesProvider>
    </div>
  )
}

export default App
