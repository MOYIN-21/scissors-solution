import React from 'react'
import style from './index.module.css'
import FilledButton from '../../resuables/buttons/FilledButton'
import GhostButton from '../../resuables/buttons/GhostButton'
 

const Frame =()=>{
    return(
        <div className={style.mainContainer}>
            <p>Optimize Your Online Experience With Our <br />Optimize
            <span style={{color:"blue", fontSize: "20px"}}>URL Shortening</span>Solution</p>
            <div className={style.smallDiv}>
            <p>Personalize your shortened URLs to align with your brand identity. Utilize custom slugs,<br />
                branded links, and domain customization options to reinforce your brand presence and <br />
                enhance user engagement.
            </p>
            </div>
            <div className={style.btn}>
                <FilledButton text="Sign Up"/>  
                <GhostButton text="Learn more"/>
            </div>
        </div>
    )
}
export default Frame
