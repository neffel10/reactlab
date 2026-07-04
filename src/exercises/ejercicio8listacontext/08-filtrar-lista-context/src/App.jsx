import { useState } from 'react'
import { SearchProvider } from './context/SearchContext'
import List from './list/List'
import './App.css'
import { ItemsProvider } from './context/ItemsContext'

function App() {

  return (
    <div>

   
    <List/>
     
    </div>
  )
}

export default App
