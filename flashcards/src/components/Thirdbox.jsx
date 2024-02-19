import React from "react";
import { useState } from "react";


const Thirdbox = ({ textthird, Settextthird, colorthird, Setcolorthird }) => {
    const changingColorHandler = () => {
        Settextthird(true)
        Setcolorthird(true)
    }

    const revertColorHandler = () => {
        Settextthird(false)
        Setcolorthird(false)
    }
    return (
    <div className="w-6/12 h-300 flex items-center justify-center"
     onMouseOver={changingColorHandler} onMouseLeave={revertColorHandler} 
        style={{
            height: "300px",
            textAlign: "center",
            borderRadius: "10px",
            backgroundColor: colorthird ? "red" : "grey",
            color: colorthird ? "red": "white"
            }}>           
            <p className="text-white">{textthird ? "JSX" : "What's the name of the syntax we use to describe a UI in React?"}</p>            
    </div>
    );
};  



export default Thirdbox;