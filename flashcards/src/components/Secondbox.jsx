import React from "react";
import { useState } from "react";


const Secondbox = ({ textsecond, Settextsecond, colorsecond, Setcolorsecond }) => {
    const changingColorHandler = () => {
        Settextsecond(true)
        Setcolorsecond(true)
    }

    const revertColorHandler = () => {
        Settextsecond(false)
        Setcolorsecond(false)
    }
    return (
    <div className="w-2/6 h-300 flex items-center justify-center "
     onMouseOver={changingColorHandler} onMouseLeave={revertColorHandler} 
        style={{
            height: "300px",
            borderRadius: "10px",
            backgroundColor: colorsecond ? "red" : "grey",
            color: colorsecond ? "red": "white"
            }}>           
            <p className="text-white">{textsecond ? "Components" : "What are the building blocks of React apps?"}</p>            
    </div>
    );
};  



export default Secondbox;