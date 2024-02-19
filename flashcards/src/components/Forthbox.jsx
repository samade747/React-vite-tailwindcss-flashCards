import React from "react";
import { useState } from "react";


const Forthbox = ({ textforth, Settextforth, colorforth, Setcolorforth }) => {
    const changingColorHandler = () => {
        Settextforth(true)
        Setcolorforth(true)
    }

    const revertColorHandler = () => {
        Settextforth(false)
        Setcolorforth(false)
    }
    return (
    <div className="w-6/12 h-300 flex items-center justify-center"
     onMouseOver={changingColorHandler} onMouseLeave={revertColorHandler} 
        style={{
            height: "300px",
            textAlign: "center",
            borderRadius: "10px",
            backgroundColor: colorforth ? "red" : "grey",
            color: colorforth ? "red": "white"
            }}>           
            <p className="text-white">{textforth ? "JSX" : "What's the name of the syntax we use to describe a UI in React?"}</p>            
    </div>
    );
};  



export default Forthbox;