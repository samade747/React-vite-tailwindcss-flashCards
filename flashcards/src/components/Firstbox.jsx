import React from "react";
import { useState } from "react";


const Firstbox = ({ textfirst, Settextfirst, colorfirst, Setcolorfirst }) => {
    const changingColorHandler = () => {
        Settextfirst(true)
        Setcolorfirst(true)
    }
    return (
        <div className="w-2/6 h-300flex items-center justify-center border border-gray-500" onMouseEnter={changingColorHandler}
        style={{height: "300px", backgroundColor: colorfirst ? "blue" : "black" }}>           
            <p className="text-white">{textfirst ? "Javascript" : "What language is React based on?"}</p>            
        </div>
    );
};  



export default Firstbox;