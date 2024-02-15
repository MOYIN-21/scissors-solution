import React from "react"
import style from './index.module.css'
import Apple from '../../assets/Apple.png'
import Google from '../../assets/Google.svg'

const SignUp =()=>{
    return(
            <div className={style.SignUp}>
                <p>Sign up with</p>
                <div className={style.inner}>
                    <div className={style.btn}>
                        <img src={Google} alt="" style={{width: "200px", color: "blue"}}/>
                        <img src={Apple} alt=""style={{width: "200px", color: "blue"}}/>
                        </div>

                    <div className={style.liner}>
                        <p className={style.line}>-</p>
                        <p className={style.or}>Or</p>
                        <p className={style.line}>-</p>
                        </div>

                        <div className={style.inputDiv}>
                                <div  className={style.input1}>
                                    <input type="text" id="userName" placeholder="Email Address or UserName"/>
                                </div>
                            <div className={style.input2}>
                                <input type="text"  id="password" placeholder="Password"/>
                            </div>
                        </div>

                </div>

                
            </div>
    )

}
export default SignUp;