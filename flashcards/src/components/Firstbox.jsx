import React from "react";
import { useState } from "react";

const Firstbox = ({ textfirst, Settextfirst }) => {
    const changingColorHandler = () => {
        Settextfirst(true)
        Setcolorfirst(true)

  return(
    <div
    className="w-1/6 h-full flex items-center justify-center"
    onMouseEnter={changingColorHandler}
    style={{ backgroundColor: colorfirst ? "red" : "blue" }}
>
    <p>{textfirst ? "Javascript" : "What language is React based on?"}</p>
</div>
        )
    }
}
export default Firstbox;