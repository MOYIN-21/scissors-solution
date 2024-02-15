import React from "react"
import '../OutlineButton'
import style from './index.module.css'
const OutlineButton =({text, color}) => {
   return(
      <button className={style.btn} style={{background:color}}>
      {text}
      </button>
   );
}
export default OutlineButton;