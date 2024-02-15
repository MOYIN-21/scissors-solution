import React from "react";
import style from './index.module.css'
import FilledButton from '../../../resuables/buttons/FilledButton'

const DeskTop5 =()=>{
    return(
        <div className={style.mainContainer}>
            <div className={style.text}>
                <h1 style={{color: "white", fontSize: "50px"}}>Revolutionizing Link Optimization</h1>
                <Link to="/signUp"><FilledButton text="Get Started" width="200px"/></Link>
            </div>

        </div>
    );
}
export default DeskTop5;