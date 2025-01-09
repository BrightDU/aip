import React, { Component } from 'react';
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
                <div className="height-emulator d-none d-lg-block" />
                <footer className="footer-area footer-fixed">
                    {/* Footer Top */}
                    <div className="footer-top ">
                        <div className="container">
                            <div className="row" style={{marginBottom: '1rem'}}>
                                <div className="col-12 col-sm-6 col-lg-4">
                                    {/* Footer Items */}
                                    <div className="footer-items">
                                        {/* Footer Title */}
                                        <h3 className="footer-title mb-2" style={{ textAlign: strings.direction }}>{strings.download}</h3>
                                        {/* Store Buttons */}
                                        <div className="button-group store-buttons store-black d-flex flex-wrap" style={{ justifyContent: strings.direction }}>
                                            {/* {this.state.footerList_3.map((item, idx) => {
                                        return(
                                            <a key={`flth_${idx}`} href="/#">
                                                <img src={item.image} alt="" />
                                            </a>
                                        );
                                    })} */}
                                            <a target="_" href='https://play.google.com/store/apps/details?id=com.scanner.sc_regula_scanner3' ><img className='storeLogo' alt='Get it on Google Play' src='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg' /></a>
                                            <a target="_" href='https://apps.apple.com/us/app/arms-it-qr-scanner/id1590851493' ><img className='storeLogo' alt='Get it on Google Play' src='https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg' /></a>
                                            <a target="_" href='https://appsource.microsoft.com/en-us/product/dynamics-365-business-central/TYPE.connect%7CPUBID.forinformationtechnologyestablishment1623494504392%7CAID.armseinv-0001%7CPAPPID.4276565a-7ac7-47d5-b7a2-90e3c2b6da25?tab=Overview' ><img className='storeLogo' alt='Dynamics' src='./dynamics.png' /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-4 middleItem">
                                    {/* Footer Items */}

                                    <div className="footer-items ">
                                        {/* Logo */}

                                        {/* <p className="mt-2 mb-3">{this.state.data.text}</p> */}
                                        {/* Social Icons */}
                                        <div className="social-icons d-flex">
                                            {/* {this.state.iconList.map((item, idx) => {
                                                return (
                                                    <a key={`fi_${idx}`} className={item.link} href="/#">
                                                        <i className={item.iconClass} />
                                                        <i className={item.iconClass} />
                                                    </a>
                                                );
                                            })} */}
                                            <a href="https://www.facebook.com/armsforit/"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-facebook-social-media-justicon-flat-justicon.png" /></a>
                                            <a href="https://www.instagram.com/armsit001/"><img src="https://img.icons8.com/office/80/000000/instagram-new.png" /></a>
                                            <a href="https://www.linkedin.com/company/72392544"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-linkedin-social-media-justicon-flat-justicon.png" /></a>
                                            <a href="https://twitter.com/arms_it"><img src="https://img.icons8.com/external-justicon-lineal-color-justicon/50/000000/external-twitter-social-media-justicon-lineal-color-justicon.png" /></a>
                                            <a href="https://www.youtube.com/channel/UCNUToZVvrVNgLCiF8GmzWhA"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-youtube-social-media-justicon-flat-justicon.png" /></a>
                                        </div>
                                    </div>
                                    <div className="footer-copyright">
                                        <img className='payment' src="https://sandbox.payments.tap.company/images/MASTERCARD.svg" />
                                        <img className='payment' src="https://sandbox.payments.tap.company/images/VISA.svg" />
                                        <img className='payment' src="https://sandbox.payments.tap.company/images/MADA.svg" />
                                        <img className='payment' src="https://sandbox.payments.tap.company/images/AMERICAN_EXPRESS.svg" />


                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-4">
                                    {/* Footer Items */}
                                    <a className="low" href="/#">
                                        <img className="logow" src={this.state.data.image} alt="" />
                                    </a>
                                    <div className="footer-items">
                                        {/* Footer Title */}
                                        {/* <h3 className="footer-title mb-2">{this.state.data.linkText_1}</h3>
                                <ul>
                                    {this.state.footerList_1.map((item, idx) => {
                                        return(
                                            <li key={`flo_${idx}`} className="py-2"><a href="/#">{item.text}</a></li>
                                        );
                                    })}
                                </ul> */}<div className='logosCont'>


                                        </div>
                                    </div>
                                    <a className="low" target="_" href="https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx" style={{ margin: 'auto' }}><img src="img\zatca.svg" alt="Logo" className='logow' style={{ "width": "9rem", "display": "inline-block", background: 'black' }} alt="Arms IT - E-Invoicing Solution" /></a>
                                </div>
                                {/* Footer Items */}
                                {/* Footer Title */}
                                {/* <div className="col-12 col-sm-6 col-lg-3">
                                        <h3 className="footer-title mb-2">{this.state.data.linkText_2}</h3>
                                    <div className="footer-items">
                                <ul>
                                    {this.state.footerList_2.map((item, idx) => {
                                        return(
                                            <li key={`flt_${idx}`} className="py-2"><a href="/#">{item.text}</a></li>
                                        );
                                    })}
                                </ul>

                                    </div>
                                </div> */}

                            </div>
                    <Row>
                        <Col bsPrefix={`col centering ${strings.getLanguage()}`}  xs lg="2"><p>{strings.footerDes}</p> </Col>
                        <Col bsPrefix='col centering' xs lg="2">
                            <Row><strong>{strings.phone}: </strong></Row>
                            <Row>0112699980</Row>
                            <Row><strong>{strings.email}: </strong></Row>
                            <Row>info@armsit.com</Row>
                        </Col>
                        <Col  bsPrefix={`col centering ${strings.getLanguage()}`} xs lg="2">
                            <strong>{strings.address}</strong> 
                            <p style={{textAlign: 'right'}}>الرياض، 13244، شارع سعيد بن زياد ، قرطبة، 7090 - الدور الرابع – مكتب 12</p>
                           </Col>
                    </Row>
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    {/* Copyright Area */}
                                    <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                                        {/* Copyright Left */}
                                        <div className="copyright-left">Copyright &copy; 2021 - rights reserved.</div>
                                        {/* Copyright Right */}
                                        <div className="copyright-right"><a target="_" href="https://armsit.com">ARMS IT E-invoice solutions</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default FooterSection;