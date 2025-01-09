import logo from './logo.svg';
import React, { Component, useEffect } from 'react'
// import './App.css';
import './style.css';

import axios from 'axios';
import { Route, Switch } from "react-router";
import Checkout from './Checkout';
import Countdown from 'react-countdown';
import strings from './translations';
import MobileStoreButton from 'react-mobile-store-button';

let API = process.env.REACT_APP_API;

export const InvCountdown = () => {
    // let { plans } = this.state;

    const renderer = ({ days,hours, minutes, seconds, completed }) => {
        // if (completed) {
        //   // Render a completed state
        //   return <div/>;
        // } else {
        // }
          // Render a countdown
            return (<div  style={{ margin: "25px auto",verticalAlign: "middle"}}>
                {/* <p className="mb-0 font-weight-bold text-white text-uppercase">{strings.countdown}</p>
                <div id="clock-c" className="countdown py-4">
                <span class="h1 font-weight-bold">{days}</span> {strings.days}
                <span class="h1 font-weight-bold" >/&nbsp;{hours}</span> {strings.hours} 
                <span class="h1 font-weight-bold">/&nbsp;{minutes}</span> {strings.minutes} 
                <span class="h1 font-weight-bold">/&nbsp;{seconds}</span> {strings.seconds} 
                </div> */}

                {/* <a target="_" href="https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx"><img src="img\zatca.svg" alt="Logo" style={{ "width": "150px", "display": "inline-block", paddingLeft: '10px'}} alt="Arms IT - E-Invoicing Solution" /></a>
                <br/>
                <br/>
                <a target="_" href="https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx" style={{color:'white',textDecoration:'none'}}>{strings.certified}</a>
                <br/>
                <br/> */}
                <div class="storelogocontainer">
                  <a target="_" href='https://play.google.com/store/apps/details?id=com.scanner.sc_regula_scanner3' style={{alignItems:'end' , maxWidth: '33%'}}><img className='storeLogo'  alt='Get it on Google Play' src='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg'/></a>
                  <a target="_" href='https://apps.apple.com/us/app/arms-it-qr-scanner/id1590851493' style={{alignItems:'center', maxWidth: '33%', height: '3rem'}}><img className='storeLogo'   alt='Get it on Google Play' src='https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg'/></a>
                  <a target="_"  href='https://appsource.microsoft.com/en-us/product/dynamics-365-business-central/TYPE.connect%7CPUBID.forinformationtechnologyestablishment1623494504392%7CAID.armseinv-0001%7CPAPPID.4276565a-7ac7-47d5-b7a2-90e3c2b6da25?tab=Overview' style={{alignItems:'start', maxWidth: '33%'}}><img className='storeLogo'   alt='Dynamics' src='./dynamics.png'/></a>
                </div>
            </div>
            )
      };
      
    return (
        <Countdown
        date={"Dec 04, 2021 00:00:00"}
        renderer={renderer}
      />    
    );
}

export default InvCountdown;

