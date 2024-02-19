import React from "react";
import { useState } from "react";


const Sixthbox = ({ textsixth, Settextsixth, colorsixth, Setcolorsixth }) => {
    const changingColorHandler = () => {
        Settextsixth(true)
        Setcolorsixth(true)
    }

    const revertColorHandler = () => {
        Settextsixth(false)
        Setcolorsixth(false)
    }
    return (
    <div className="w-6/12 h-300 flex items-center justify-center"
     onMouseOver={changingColorHandler} onMouseLeave={revertColorHandler} 
        style={{
            height: "300px",
            textAlign: "center",
            borderRadius: "10px",
            backgroundColor: colorsixth ? "red" : "grey",
            color: colorsixth ? "red": "white"
            }}>           
            <p className="text-white">{textsixth ? "Controlled component" : "What do we call an input element that is completely synchronised with state?"}</p>            
    </div>
    );
};  



export default Sixthbox;