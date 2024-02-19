import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firstbox from './components/Firstbox'
import Secondbox from './components/Secondbox'

 

function App() { 
  
  const [mainfirst, Setmainfirst] = useState(false)


  const [textfirst, Settextfirst] = useState(false)
  const [colorfirst, Setcolorfirst] = useState(false)

  const [textsecond, Settextsecond] = useState(false)
  const [colorsecond, Setcolorsecond] = useState(false)


  const changingColorHandler = () => {
    
    Setmainfirst(true)
}

const revertColorHandler = () => {
    
    Setmainfirst(false)
}
  
  return (
    <div  className='h-screen flex flex-col' style={{border: "10px solid red", backgroundColor: mainfirst ? "white" : "black", }}  onMouseOver={changingColorHandler} onMouseLeave={revertColorHandler} >
       <div className="flex flex-1/2 text-black gap-2 m-2">
             <Firstbox textfirst={textfirst} Settextfirst={Settextfirst} colorfirst={colorfirst} Setcolorfirst={Setcolorfirst} />  
             <Secondbox textsecond={textsecond} Settextsecond={Settextsecond} colorsecond={colorsecond} Setcolorsecond={Setcolorsecond} />        
      </div>
    </div>
  )
}

export default App
