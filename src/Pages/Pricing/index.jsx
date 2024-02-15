import React from "react";
import style from './index.module.css'
import checkCircle from '../../assets/check-circle.svg'
import FilledButton from "../../resuables/buttons/FilledButton"
import OutLineButton from "../../resuables/buttons/OutlineButton"


const Pricing = () =>{
    return(
        <div className={style.mainContainer}>

            <div className={style.advert}>

                <h1>A <span style={{color: "blue"}}>price perfect</span> for your needs.</h1>
                <p>From catering for your personal, business, event, socials needs, you can be <br />
                 rest assured we have you in mind in our pricing.</p>
            </div>
            <div className={style.advertGroup}>

                <div className={style.basicDiv}>
                    <p style={{
                        fontFamily: "Gilroy-Medium",
                        fontSize: "24px", 
                        top: "24px",
                        paddingLeft: "60px"}}>
                            Basic
                    </p>

                    
                    <div className={style.categories}>
                    <h1>Free</h1>
                    <p>Free plan for all users</p>

                        <div className={style.gbogbo}>
                            <img src={checkCircle} alt="" />
                            <p>Unlimited URL Shortening</p>
                        </div>

                        <div className={style.gbogbo}>
                        <img src={checkCircle} alt="" />
                        <p>Basic Link Analytics</p>
                        </div>

                        <div className={style.gbogbo}>
                        <img src={checkCircle} alt="" />
                        <p>Customizable Short Links</p>
                        </div>

                        <div className={style.gbogbo}>
                        <img src={checkCircle} alt="" />
                        <p>Standard Support</p>
                        </div>
                    </div>
                    
                </div>

                <div className={style.personal}>
                { <p style={{
                        fontFamily: "Gilroy-Medium",
                        fontSize: "24px", 
                        paddingTop: "80px",
                        paddingLeft: "60px",
                        backgroundColor: "#1E3448",
                        color: "white"}}>
                            Professional
                    </p> }

                    
                    <div className={style.cate}>
                    <h1>$15/month</h1>
                    <p>Ideal for business creators</p>

                    <div className={style.gbogbo1}>
                            <img src={checkCircle} alt="" />
                            <p>Enhanced Link Analytics</p>
                        </div>

                        <div className={style.gbogbo1}>
                        <img src={checkCircle} alt="" />
                        <p>Custom Branded Domains</p>
                        </div>

                        <div className={style.gbogbo1}>
                        <img src={checkCircle} alt="" />
                        <p>Advanced Link Customization</p>
                        <p></p>
                        </div>

                        <div className={style.gbogbo1}>
                        <img src={checkCircle} alt="" />
                        <p>Priority Support</p>
                        </div>

                        <div className={style.gbogbo1}>
                        <img src={checkCircle} alt="" />
                        <p>Ad-free Experience</p>
                        </div>
                    </div>
                    
                </div>



                <div className={style.team}>
                <p style={{
                        fontFamily: "Gilroy-Medium",
                        fontSize: "24px", 
                        top: "24px",
                        paddingLeft: "60px"}}>
                            Teams
                    </p>

                    
                    <div className={style.categories}>
                    <h1>$25/month</h1>
                    <p>Share with up to 10 users</p>

                        <div className={style.gbogbo}>
                            <img src={checkCircle} alt="" />
                            <p>Team Collaboration</p>
                        </div>

                        <div className={style.gbogbo}>
                        <img src={checkCircle} alt="" />
                        <p>User Roles and Permissions</p>
                        </div>

                        <div className={style.gbogbo}>
                        <img src={checkCircle} alt="" />
                        <p>Enhanced Security</p>
                        </div>

                        <div className={style.gbogbo}>
                        <img src={checkCircle} alt="" />
                        <p>API Access</p>
                        </div>

                        <div className={style.gbogbo}>
                        <img src={checkCircle} alt="" />
                        <p>Dedicated Account Manager</p>
                        </div>
                    </div>
                    
                </div>

                </div>

                <div className={style.btn}>
                    <OutLineButton text="Get custom pricing"/>
                    <FilledButton text="Select pricing" width={"200px"}/>
                  
                </div>

               
            </div>
    )
}
export default Pricing;