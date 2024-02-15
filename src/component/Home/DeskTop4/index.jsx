import React from "react";
import style from './index.module.css'
import {line} from '../../../assets/Line 70.png';

const DeskTop4 =()=>{
    return (
        <div className={style.mainContainer} style={{background: "white"}}>
            <div className={style.holder}>
                <div className={style.header}>
                    <img src={line} alt="thick line" />
                    <h1>FAQs</h1>
                </div>
            </div>

           
        </div>
    );
}
export default DeskTop4;