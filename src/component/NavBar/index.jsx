import React from "react";
import GhostButton from "../../resuables/buttons/GhostButton"
import FilledButton from "../../resuables/buttons/FilledButton"
import style from './index.module.css'
import logo from '../../assets/Logo.png'
import { Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <div className={style.mainContainer}>
            <div>
                <img src={logo} alt="web logo" />
            </div>
            <div className={style.midsection}>
               <Link to="/url"><p style={{color: "blue"}}>My URLS</p></Link> 
                <p>Features</p>
                <Link to= "/price"><p >Pricing</p></Link>
                <p>Analytics</p>
                <Link to="/faqs"><p>FAQS</p></Link>
            </div>

            <div className={style.btn}>
               <Link to="/logIn"><GhostButton text="Log in"/></Link>
                <Link to="/signUp"><FilledButton text="Try for free"/></Link>
            </div>
        </div>
    );
}
export default NavBar;