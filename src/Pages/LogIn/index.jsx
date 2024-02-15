import React from "react"
import style from './index.module.css'
import Apple from '../../assets/Apple.png'
import Google from '../../assets/Google.svg'
import FilledButton from '../../resuables//buttons/FilledButton'
import { Link } from "react-router-dom";


const LogIn =()=>{
    return(
            <div className={style.SignUp}>
                <h1 style={{textAlign: "center"}}>Log In</h1>
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
                            <p style={{marginLeft: "790px", color:"blue"}}>Forgot your Password? </p>
                            <FilledButton text="Log in" width="800px" marginLeft="155px" height="50px"/> 
                            <p style={{textAlign: "center"}}>Don't have an account?<span style={{color: "blue"}}><Link> Sign up</Link></span></p> 
                            <div className={style.cont}>
                                <p style={{textAlign: "center", marginTop: "30px", fontSize: ""}}> <span style={{color: "#5C6F7F"}}> By signing in with  an account, you agree to </span></p>
                                <p style={{textAlign:"center"}}> <span style={{color: "#5C6F7F"}}> Sciccor's </span>Terms of Service, Privacy Policy <span style={{color: "#5C6F7F"}}>and</span> Acceptable Use Policy.</p>
                            </div>

                        </div>
                        


                </div>

                
            </div>
    )

}
export default LogIn;