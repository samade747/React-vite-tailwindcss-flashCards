import React from "react";
import { useState } from "react";


const Fifthbox = ({ textfifth, Settextfifth, colorfifth, Setcolorfifth }) => {
    const changingColorHandler = () => {
        Settextfifth(true)
        Setcolorfifth(true)
    }

    const revertColorHandler = () => {
        Settextfifth(false)
        Setcolorfifth(false)
    }
    return (
    <div className="w-6/12 h-300 flex items-center justify-center"
     onMouseOver={changingColorHandler} onMouseLeave={revertColorHandler} 
        style={{
            height: "300px",
            textAlign: "center",
            borderRadius: "10px",
            backgroundColor: colorfifth ? "red" : "grey",
            color: colorfifth ? "red": "white"
            }}>           
            <p className="text-white">{textfifth ? "useState hook" : "What's the name of the syntax we use to describe a UI in React?"}</p>            
    </div>
    );
};  



export default Fifthbox;