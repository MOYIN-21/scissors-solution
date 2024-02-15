import React from 'react'
import style from './index.module.css'
import '../FilledButton'
const filledButton = ({text, color, width, marginLeft, height}) => {
    return (
        <div>
        <button className={style.btn} style={{background:color, width:width, marginLeft:marginLeft, height:height}}>
            {text}
        </button>
        </div>
    );
}
export default filledButton;