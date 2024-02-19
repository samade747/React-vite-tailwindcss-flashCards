import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firstbox from './components/Firstbox'
import Secondbox from './components/Secondbox'

 

function App() { 

  const [textfirst, Settextfirst] = useState(false)
  const [colorfirst, Setcolorfirst] = useState(false)

  const [textsecond, Settextsecond] = useState(false)
  const [colorsecond, Setcolorsecond] = useState(false)
  
  return (
    <div  className='h-screen flex flex-col' style={{border: "10px solid red"}}>
       <div className="flex flex-1/2 text-black gap-2 m-2">
             <Firstbox textfirst={textfirst} Settextfirst={Settextfirst} colorfirst={colorfirst} Setcolorfirst={Setcolorfirst} />  
             <Secondbox textsecond={textsecond} Settextsecond={Settextsecond} colorsecond={colorsecond} Setcolorsecond={Setcolorsecond} />        
      </div>
    </div>
  )
}

export default App
