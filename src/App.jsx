import React, { useState } from 'react'
import Cul_Attendance from './Cul_Attendance'
import { Context } from './context/Context'

function App() {
  const [navTrigger, setNavTrigger] = useState(false)

  const value={navTrigger,setNavTrigger}
  return (
    <React.Fragment>
      <Context.Provider value={value}>
        <Cul_Attendance/>
      </Context.Provider>
    </React.Fragment>
  )
}

export default App