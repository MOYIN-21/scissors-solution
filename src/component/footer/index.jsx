import React from 'react'
import style from './index.module.css'
import Instagram from '../../assets/Instagram.svg'
import Twitter from '../../assets/Twitter.png'
import Facebook from '../../assets/facebook.svg'
import Linkedin from '../../assets/linkedIn.svg'

const Footer =() => {
  return (
    <div className={style.mainContainer}>
      <div className={style.all}>
      <div className={style.symbol}>
        <div className={style.first}>
        <img src={Twitter} alt="" />
        <img src={Facebook} alt="" />
        </div>
      
      <div className={style.second}>
        <img src={Linkedin} alt="" />
        <img src={Instagram} alt="" />
      </div>
      </div>
      


      <div className={style.content}>
        <div className={style.myScissor}>
          <h1>Why Scissors </h1>
          <p>Scissor 101</p>
          <p>Integrations & API</p>
          <p>Pricing</p>
        </div>

        <div className={style.solution}>
          <h1>Solution</h1>
          <p>Social Media</p>
          <p>Digital Marketing</p>
          <p>customer Service</p>
          <p>For Developers</p>
        </div>

        <div className={style.product}>
          <h1>Products</h1>
          <p>Link Management</p>
          <p>QR Codes</p>
          <p>Link-in-bio</p>
        </div>

        <div className={style.company}>
          <h1>Company</h1>
          <p>About Scissor</p>
          <p>Careers</p>
          <p>Partners</p>
          <p>Press</p>
          <p>Contact</p>
          <p>Reviews</p><br />
        </div>
      </div>


        <div className={style.resource}>
          <h1>Resources</h1>
          <p>Blog</p>
          <p>Resource Library</p>
          <p>Developers</p>
          <p>App Connectors</p>
          <p>Support</p>
          <p>Trust Center</p>
          <p>Browser Extension</p>
          <p>Mobile App</p>
        </div>

        <div className={style.feature}>
          <h1>Features</h1>
          <p>Branded Links</p>
          <p>Mobile Links</p>
          <p>Campaign</p>
          <p>Management & </p>
          <p>Analytics</p>
          <p>QR Code Generation</p>
        </div>

        <div className={style.legal}>
          <h1>Legal</h1>
          <p>Privacy Policy</p>
          <p>Cookie Polic</p>
          <p>Terms of Service</p>
          <p>Acceptable Use Policy</p>
          <p>Code of Conduct</p>
        </div>
      </div>


    <div className={style.under}>

    </div>



    </div>
 
  );
}

export default Footer;