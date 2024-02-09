import GhostButton from "../../resuables/buttons/GhostButton"
import FilledButton from "../../resuables/buttons/FilledButton"
import style from './index.module.css'
import logo from '../../asserts/Logo.png'

const NavBar = () =>{
    return(
        <div className={style.mainContainer}>
            <div>
                <img src={logo} alt="web logo" />
            </div>
            <div className={style.midsection}>
                <p>My URLS</p>
                <p>Features</p>
                <p>Pricing</p>
                <p>Analytics</p>
                <p>FAQS</p>
            </div>

            <div className={style.btn}>
                <GhostButton text="Log in" style={{color:"blue"}} />
                <FilledButton text="Try for free"/>  
            </div>
        </div>
    )
}
export default NavBar