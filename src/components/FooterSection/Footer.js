
























import React, { Component } from 'react';
import '../FooterSection/Footer.css'

import axios from 'axios';
import strings from '../../translations'
import { Col, Row } from 'react-bootstrap'
const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server-1/themeOneFooterSection";

class FooterSection extends Component {
    state = {
        data: {},
        iconList: [],
        footerList_1: [],
        footerList_2: [],
        footerList_3: []
    }
    componentDidMount() {
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    iconList: res.data.iconList,
                    footerList_1: res.data.footerList_1,
                    footerList_2: res.data.footerList_2,
                    footerList_3: res.data.footerList_3
                })
                // console.log(this.state.data)
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
             

            
                <div>
                    <div className="height-emulator d-none d-lg-block"  />
                    <footer className="footer-area footer-fixed" style={{backgroundColor:'#ffffff', Height:'1300px', color:'#000000'}} >
                        {/* Footer Top */}
                        <div className="footer-top ">
                            <div className="container">
                                <div className="row" style={{marginBottom: '-30px'}}>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        {/* Footer Items */}
                                        <div className="footer-items"  >
                                            {/* Footer Title */}
                                            <div className='footer-logo'style={{marginTop:'-70px'}}>
                                            <img src="/img/new_company_logo.png" alt="fecebook Icon" style={{ width: 300, height: 100 }} />
                                             
                                            <h3 className="logo-text mb-2 "id='logo-text' style={{ textAlign: strings.direction ,color:'#000000', fontSize:'14px', fontWeight: "300"   }}>{strings.footerlogotext}</h3>
                                            </div>
                                            <h3 className="footer-title mb-2" style={{ textAlign: strings.direction ,color:'#000000', marginTop:'80px',fontSize:'20px',marginLeft:'20px' }}>{strings.download}</h3>
                                            {/* Store Buttons */}
                                            <div className="button-group store-buttons store-black d-flex flex-wrap" style={{ justifyContent: strings.direction }}>
                                                <a target="_" href='https://play.google.com/store/apps/details?id=com.scanner.sc_regula_scanner3' ><img className='storeLogo' alt='Get it on Google Play' src='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg' /></a>
                                                <a target="_" href='https://apps.apple.com/us/app/arms-it-qr-scanner/id1590851493' ><img className='storeLogo' alt='Get it on Google Play' src='https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg' /></a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* middle section */}
                                    <div className="col-12 col-sm-6 col-lg-4 middleItem">
                                        {/* Footer Items */}
                                        <div className="footer-items ">
                                            {/* Social Heading */}
                                            <h3 className="footer-title mb-2" style={{ textAlign: 'left',  color:'#000000', fontSize:'20px',marginTop:'-70px' }}>Social</h3>
                                            {/* Social Icons */}
                                            <div className="social-icons d-flex justify-content-left " style={{marginBottom:'40px', marginLeft:'-20px'}}>
                                                <a href="https://www.facebook.com/armsforit/"><img src="/img/facebookicon.png" alt="fecebook Icon" style={{ width: 48, height: 40 }} /></a>
                                                <a href="https://www.instagram.com/armsit001/"><img src="/img/instagramicon.png" alt="instagram Icon" style={{ width: 48, height: 40 }} /></a>
                                                <a href="https://www.linkedin.com/company/72392544"><img src="/img/linkdenicon.png" alt="linkden Icon" style={{ width: 48, height: 40 }} /></a>
                                                <a href="https://twitter.com/arms_it"><img src="/img/twittericon.png" alt="twitter Icon" style={{ width: 48, height: 40 }} /></a>
                                                <a href="https://www.youtube.com/channel/UCNUToZVvrVNgLCiF8GmzWhA"><img src="/img/yutubeicon.png" alt="youtube Icon" style={{ width: 48, height: 40 }} /></a>
                                            </div>
                                            {/* Contact Heading */}
                                            <h3 className="footer-title mt-10 mb-2" style={{ textAlign: 'left', color:'#000000', fontSize:'20px', marginTop:'90px'  }}>Contact</h3>
                                            {/* Contact Details */}
                                            <h3 className='address'style={{fontSize:'16px' , color:'#000000', fontWeight: "400", marginTop:'10px',fontFamily: "Inter, sans-serif"}}>Address</h3>
                                            <p style={{ textAlign: 'left',  color:'#000000', fontSize:'13px', fontWeight: "30px" }}> Riyadh, 13244, Saeed Bin Ziyad Street, Qurtubah, 7090 – Fourth Floor – Office 12</p>




                                            <h3 className='phone'style={{fontSize:'16px' , color:'#000000', fontWeight: "400", marginTop:'10px',fontFamily: "Inter, sans-serif", marginBottom:'-20px'}}>Phone</h3>
                                            <p style={{ textAlign: 'left',  color:'#000000', marginTop:'20px',fontSize:'13px', fontWeight: "30px"  }}> 0112699980</p>
                                            <p style={{ textAlign: 'left',  color:'#000000', marginTop:'20px',fontSize:'13px', fontWeight: "30px"  }}> الرياض، 13244، شارع سعيد بن زياد ، قرطبة، 7090 - الدور
                                            الرابع – مكتب12</p>



                                            <h3 className='email'style={{fontSize:'16px' , color:'#000000', fontWeight: "400", marginTop:'10px',fontFamily: "Inter, sans-serif", marginBottom:'-20px'}}>Email</h3>
                                            <p style={{ textAlign: 'left',  color:'#000000' , marginTop:'20px',fontSize:'13px', fontWeight: "30px"  }}> info@armsit.com</p>
                                        </div>

                                      
                                    </div>
                                    <div id="footer-logo-section" className="col-12 col-sm-6 col-lg-4">
    {/* Footer Items */}
    <a className="low" href="/#">
        <img className="logow" src={this.state.data.image} alt="" />
    </a>
    <div className="footer-items">
        <div className='logosCont'></div>
    </div>
   
</div>

                                </div>
                            </div>
                        </div>
                        {/* Footer Bottom */}
                        <div className="footer-bottom" style={{marginBottom:'-100px', alignContent:'center', textAlign:'center', fontSize:'15'}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <>
                <style>
                    {`
                    .footer-responsive {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-top: 150px;
                        margin-bottom: -100px;
                        width: 100%;
                        padding-left: 100px;
                        padding-right: 100px;
                    }

                    .footer-responsive h4 {
                        font-weight: 300;
                        color: #000000;
                        font-size: 14px;
                        margin: 0;
                    }

                    @media (max-width: 768px) {
                        .footer-responsive {
                        flex-direction: column;
                        padding-left: 20px;
                        padding-right: 20px;
                        text-align: center;
                        gap: 10px;
                        }
                    }
                    `}
                </style>

                <div className="footer-responsive">
                    <h4>© 2021 - rights reserved.</h4>
                    <h4>ARMS IT AI price solutions</h4>
                </div>
                </>


                        
                    </footer>
                    
                </div>
            );
            
        
    }
}

export default FooterSection;