import React from "react";
import style from './index.module.css'
import dataAnalytic from '../../asserts/DataAnalytic.png'
import customerUrl from '../../asserts/CustomerUrls.png'
import qrCode from '../../asserts/QRCodes.png'
import shortening from '../../asserts/ShorteningURL.svg'


const DeskTop1 =()=>{
    return(
        <div className={style.mainContainer}>
            
            <div className={style.header}>
                
                <div className={style.head1}>
                    <h1 style={{font: "40px"}}>One Full Stop. <br />Four <span style={{color:"blue" }}>Possibilities.</span>  </h1>
                </div>

                <div className={style.lists}>
                    <div className={style.priceAndUser}>
                        <h1>3M</h1>
                        <p>ACtive Users</p>
                    </div>

                    <div className={style.priceAndUser}>
                        <h1>60M</h1>
                        <p>Links and QR <br /> codes created</p>
                    </div>

                    <div className={style.priceAndUser}>
                        <h1>1B</h1>
                        <p>Clicked & Scanneed <br /> Connections </p>
                    </div>

                    <div className={style.priceAndUser}>
                        <h1>300K</h1>
                        <p>Apps Integration</p>
                    </div>

                </div>
            </div>


            <div className={style.head2}>
                <div className={style.why}>
                    <h1>Why Choose <span style={{color: "blue"}}>Scissors</span></h1>
                    <p>Scissors is the hub of everything that has to do <br /> 
                    with your link management. We shorten your URLs,<br />
                     allow you creating custom ones for your personal, <br /> 
                     business, event usage. Our swift QR code <br />
                     creation, management and usage tracking with <br />
                     advance analytics for all of these is second to <br /> 
                     none. </p> 
                </div>

                <div className={style.possibilities}>
                    <div className={style.possible}>
                        <div className={style.urlAndCustomAndqrcodesAndDataAnalytics}>

                            
                            <div className={style.urlAndCustom}>
                                <div className={style.url}>
                                    <img src={shortening} alt="" className={style.images} />
                                    
                                    <h1>URLS Shortening</h1>
                                    <p>Scissor allows you to shorten URLs of your <br />
                                    business, events. Shorten your <br />
                                    URL at scale, URL redirects.</p>
                                </div>

                                    <div className={style.custom}>
                                        <img src={customerUrl} alt="" className={style.images} />
                                        <h1>Custom URLS</h1>
                                        <p>With Scissor, you can create custom URLs,<br />
                                        with the length you want! A solution for socials <br />
                                        and businesses.</p>
                                    </div>
                            </div>

                            <div className={style.qrcodesAndDataAnalytics}>
                                <div className={style.qrCodes}>
                                    <img src={qrCode} alt="" className={style.images}/>
                                    <h1>QR Codes</h1>
                                    <p>Generate QR codes to your business, events. <br />
                                    Bring your audience and customers to your <br />
                                    doorstep with this scan and go solution.</p>
                                </div>

                                    <div className={style.dataAnalytics}>
                                        <img src={dataAnalytic} alt="" className={style.images}/>
                                        <h1>Data Analytics</h1>
                                        <p>Receive data on the usage of either <br />
                                        your shortened URL, custom URLs or generated QR <br />
                                        codes. Embedded to monitor progress.</p>
                                    </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default DeskTop1;