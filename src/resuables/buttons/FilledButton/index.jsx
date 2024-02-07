import React from 'react'
import '../FilledButton'
const filledButton = ({text, color}) => {
    return (
        <button className="btn">
        {text}
        </button>
    )
}
export default filledButton