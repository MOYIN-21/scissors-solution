import React from 'react'
import style from './index.module.css'
import '../FilledButton'
const filledButton = ({text, color}) => {
    return (
        <div>
        <button className={style.btn} style={{background:color}}>
            {text}
        </button>
        </div>
    );
}
export default filledButton;