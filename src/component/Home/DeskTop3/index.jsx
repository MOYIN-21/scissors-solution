import React from "react";
import style from './index.module.css'
import FilledButton from '../../../resuables/buttons/FilledButton'
import { Link } from "react-router-dom";




const DeskTop3 =()=> {
    return (
        <div className={style.mainContainer}>
            <div className={style.trimUrl}>
                <div className={style.inputCollector}>
                    <input type="text" placeholder="Post URL Here" className={style.ipt}/>
                </div>
                

                <div className={style.inputCollector2}>
                    <select className={style.domainDropDown} id="">
                        <option value=""></option>
                    </select>
                    <input type="text" placeholder="Type Alias here" id="" />
                </div>


                <div className="buttonAndContent">
                  <Link to="/logIn"><FilledButton text="Trim URL" className={style.btn} width="392px"/></Link>  
                    <p style={{color: "blue"}}>By clicking TrimURL, I agree to the Terms of Service,<br />
                     Privacy Policy and Use of Cookies.</p>

                </div>
            </div>
        </div>

    );
}
export default DeskTop3;