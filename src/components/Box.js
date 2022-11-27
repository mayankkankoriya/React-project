import React from "react";

import "./Box.css"

// i have used props here in line no 5
export const Box = ({ value, onClick }) => {
    const style = value === "X" ? "box x" : "box o";
    return (
        <button className={style} onClick={onClick}>{value}</button>
    )
}