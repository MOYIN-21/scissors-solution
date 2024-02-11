import React from "react"
import './index.module.css'
import '../GhostButton'
import style from './index.module.css'
const GhostButton = ({text, color}) => {
    return (
        <div>
        <button className={style.btn} style={{background:color}}>
            {text}
        </button>
        </div>
    );
}

export default GhostButton;