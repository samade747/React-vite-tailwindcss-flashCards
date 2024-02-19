import React from "react";
import { useState } from "react";


const Firstbox = ({ textfirst, Settextfirst, colorfirst, Setcolorfirst }) => {
    const changingColorHandler = () => {
        Settextfirst(true)
        Setcolorfirst(true)
    }

    const revertColorHandler = () => {
        Settextfirst(false)
        Setcolorfirst(false)
    }

    return (
    <div className="w-2/6 h-300 flex items-center justify-center"
     onMouseOver={changingColorHandler} onMouseLeave={revertColorHandler} 
        style={{
            height: "300px",
            borderRadius: "10px",
            backgroundColor: colorfirst ? "red" : "grey",
            color: colorfirst ? "red": "white" 
            }}>           
            <p className="text-white">{textfirst ? "Javascript" : "What language is React based on?"}</p>            
    </div>
    );
};  



export default Firstbox;