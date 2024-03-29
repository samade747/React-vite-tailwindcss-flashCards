import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firstbox from './components/Firstbox'
import Secondbox from './components/Secondbox'
import Thirdbox from './components/Thirdbox'
import Forthbox from './components/Forthbox'
import Fifthbox from './components/Fifthbox'
import Sixthbox from './components/Sixthbox'

 

function App() { 
  
  const [mainfirst, Setmainfirst] = useState(false)


  const [textfirst, Settextfirst] = useState(false)
  const [colorfirst, Setcolorfirst] = useState(false)

  const [textsecond, Settextsecond] = useState(false)
  const [colorsecond, Setcolorsecond] = useState(false)

  const [textthird, Settextthird] = useState(false)
  const [colorthird, Setcolorthird] = useState(false)

  const [textforth, Settextforth] = useState(false)
  const [colorforth, Setcolorforth] = useState(false)

  const [textfifth, Settextfifth] = useState(false)
  const [colorfifth, Setcolorfifth] = useState(false)

  const [textsixth, Settextsixth] = useState(false)
  const [colorsixth, Setcolorsixth] = useState(false)



  const changingColorHandler = () => {
    
    Setmainfirst(true)
}

const revertColorHandler = () => {
    
    Setmainfirst(false)
}
  
  return (
    <div  className='h-screen flex flex-col ' style={{border: "10px solid red", backgroundColor: mainfirst ? "white" : "black", }}  onMouseOver={changingColorHandler} onMouseLeave={revertColorHandler} >
       <div className="flex text-black gap-2 m-2 items-center justify-center">
             <Firstbox textfirst={textfirst} Settextfirst={Settextfirst} colorfirst={colorfirst} Setcolorfirst={Setcolorfirst} />  
             <Secondbox textsecond={textsecond} Settextsecond={Settextsecond} colorsecond={colorsecond} Setcolorsecond={Setcolorsecond} />        
             <Thirdbox textthird={textthird} Settextthird={Settextthird} colorthird={colorthird} Setcolorthird={Setcolorthird} />        
             
      </div>
      <div className="flex text-black gap-2 m-2 items-center justify-center">
             <Forthbox textforth={textforth} Settextforth={Settextforth} colorforth={colorforth} Setcolorforth={Setcolorforth} />        
             <Fifthbox textfifth={textfifth} Settextfifth={Settextfifth} colorfifth={colorfifth} Setcolorfifth={Setcolorfifth} />        
             <Sixthbox textsixth={textsixth} Settextsixth={Settextsixth} colorsixth={colorsixth} Setcolorsixth={Setcolorsixth} />        
      </div>
    </div>
  )
}

export default App
