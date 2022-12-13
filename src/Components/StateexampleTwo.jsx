import React, { useState } from 'react'
import "./State.css"

function StateexampleTwo() {
    const [background, setBackground] = useState("red-box")
    function changeColor() {
        setBackground("blue-box")
    }
    return (
        <div className={background} >
            <button onClick={changeColor} >Change Color</button>
        </div>
    )
}

export default StateexampleTwo