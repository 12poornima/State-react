import React from 'react'
import { useState } from "react"

function Stateexample() {
    const [message, setMessage] = useState("Please Like This Page");
    const [num, setNum] = useState(0)
    let msg = "Please Like This Page!!!"
    function liked() {
        msg = "Thanks For Your Like"
        setMessage("Thanks For Your Like")
        console.log(message)
    }
    function add() {
        setNum(num + 1)
    }
    return (
        <div className="App">
            <div>
                <h1>{message}</h1>
                <button onClick={liked} >LIKE</button>
                <p>{num}</p>
                <button onClick={add} >Ingrement</button>
            </div>
        </div>
    )
}

export default Stateexample