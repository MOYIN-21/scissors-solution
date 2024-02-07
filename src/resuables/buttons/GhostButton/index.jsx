import React from "react"
import '../GhostButton'
const GhostButton = ({text, color}) => {
    return (
        <button className="btn" color={{color}}>
            {text}
        </button>
    )
}

export default GhostButton