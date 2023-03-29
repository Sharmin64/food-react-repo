import { useState } from 'react'

import './App.css'
import Meals from './components/Meals/Meals'
import Home from './components/Home/Home'

function App() {
 
  return (
    <div className="App">
      <Home></Home>
      <Meals></Meals>
       
    </div>
  )
}

export default App
