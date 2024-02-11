import React from "react";
import style from './index.module.css'

const DeskTop2 = () =>{
    return(
        <div className={style.mainContainer}>
            <div className={style.advert}>
                <h1>A <span style={{color: "blue"}}>Price Perfect</span> For Your Needs.</h1>
                <p>From catering for your personal, business, event, socials needs, you can be <br />
                rest assured we have you in mind in our pricing.</p>
            </div>

            <div className={style.advertGroup}>
                <div className={style.basicDiv}>
                    <p style={{top: "24px", left: "87px"}}>Basic</p>
                    <div className={style.innerDiv}>
                        <h1 style={{left: "87px"}}>Free</h1>
                        <p style={{left: "87px"}}>Free plans for all users</p>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default DeskTop2