import { useState } from 'react'
import Tooltip from './tooltip/Tooltip'
import TooltipText from './tooltip/TooltipText'

import './App.css'

function App() {

  return (
    <>
      <p><TooltipText tooltip={"Im a tooltip dude"}>Put the mouse over me </TooltipText> this is cool right!?</p>
      <p>Check how the colored text in this paragraph changes</p>
      <p>With the mouse over them:<TooltipText className="text-[#00D483]" tooltip={"you are the best"}> over here! </TooltipText> See! Thank You.</p>
      
    </>
  )
}

export default App
