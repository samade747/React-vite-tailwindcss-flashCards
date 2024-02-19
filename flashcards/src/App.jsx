import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firstbox from './components/Firstbox'

 

function App() { 

  const [textfirst, Settextfirst] = useState(false)
  const [colorfirst, Setcolorfirst] = useState(false)
  
  return (
    <div  className='h-screen flex flex-col' style={{border: "10px solid red"}}>
       <div className="flex flex-1/2 text-black">
             <Firstbox textfirst={textfirst} Settextfirst={Settextfirst} colorfirst={colorfirst} Setcolorfirst={Setcolorfirst} />  
      
      </div>
    </div>
  )
}

export default App
