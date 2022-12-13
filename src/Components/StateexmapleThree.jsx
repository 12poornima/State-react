import React, { useState } from 'react'

function StateexmapleThree() {
    const [image, setImage] = useState(false)
    function viewImage() {
        setImage(true)
    }
    function closeImage() {
        setImage(false)
    }
    return (
        <div>
            <button onClick={viewImage} >View Image</button>
            {image && <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" alt="" />
            }
            {image && <button onClick={closeImage} >Close Image</button>}
        </div>
    )
}

export default StateexmapleThree