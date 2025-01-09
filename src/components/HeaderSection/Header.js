import React, { Component } from 'react';
import strings from '../../translations';
import { Link } from 'react-router-dom';
import { If, Then } from 'react-if'
import TemporaryDrawer from '../../sidebar'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locale: this.props.locale
        }
    }
    componentDidMount(){
        let w = window.innerWidth
        let c = document.querySelectorAll('.container.position-relative')[0] || document.querySelectorAll('.position-relative.logo')[0]
        if(w <= 990){
            c.setAttribute('class', 'position-relative logo')
    
        } else{
            c.setAttribute('class', 'container position-relative')
    
        }
    }
    
    render() {
    
        
        var referral = localStorage.getItem('referral');
        if(referral)
        {
            referral = JSON.parse(referral);
        }
        
        return (
            <header className="navbar navbar-sticky navbar-expand-lg navbar-dark" >
            <TemporaryDrawer changeLanguage={this.props.changeLanguage}/>
                <div className="container position-relative">
                    {this.props.platformSettings['ReferralFeatureEnabled']?.value == '1' && referral?.referrerSub?.referralCode ?
                    <span style={{padding:'5px'}} className="btn btn-primary" to="/#">
                        {strings.promoCode} {referral?.referrerSub?.referralCode}
                    </span>:''}

                    <a className="" href="/">
                    </a>
                    <Link to="/">
                        <img className="navbar-brand-regular" src={this.props.imageData} alt="brand-logo" />
                        <img className="navbar-brand-sticky" src="/img/company_logo.svg" alt="sticky brand-logo" />
                    </Link>
                    {/* <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button> */}
                    <div className="navbar-inner">
                        {/*  Mobile Menu Toggler */}
                        {/* <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button> */}
                        <nav>
                            <ul className="navbar-nav" id="navbar-nav">
                                <li className="nav-item">
                                    <Link className='nav-link' to="/#">
                                        {strings.homepage}
                                    </Link>
                                    {/* <a className="nav-link" href="" id="navbarDropdownMenuLink"  aria-haspopup="true" aria-expanded="false">
                                    </a> */}
                                    {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li>
                                                <a className="dropdown-item" href="/theme-one">Homepage-1</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/theme-two">Homepage-2</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/theme-three">Homepage-3</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/theme-four">Homepage-4</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/theme-five">Homepage-5</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/theme-six">Homepage-6</a>
                                            </li>
                                        </ul> */}
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/faq">{strings.faq}</a>
                                </li>
                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Pages
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <li>
                                                    <a className="dropdown-item" href="/pricing">{strings.pricing}</a>
                                                </li>
                                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/#" data-toggle="dropdown">Inner Pages<span className="badge badge-pill badge-warning ml-2">New</span></a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="/download-page">Download</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/subscribe-page">Newsletter</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/thank-you">Thank you</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/coming-soon">Coming Soon</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/error-page">404</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/#" data-toggle="dropdown">Blog Pages</a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="/blog-two-column">Blog- 2 Column</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/blog-three-column">Blog- 3 Column</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/blog-left-sidebar">Blog- Left Sidebar</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/blog-right-sidebar">Blog- Right Sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/#" data-toggle="dropdown">Blog Details</a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="/blog-details-left-sidebar">Blog Details- Left Sidebar</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/blog-details-right-sidebar">Blog Details- Right Sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/#" data-toggle="dropdown">Accounts<span className="badge badge-pill badge-warning ml-2">New</span></a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="/login">Login</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/signup">Signup</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/forgot">Reset Password</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/reviews">Reviews</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/faq">FAQ</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/contact-page">Contact</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item disabled" href="/#">More Coming Soon</a>
                                        </li>
                                    </ul>
                                </li> */}
                                <li className="nav-item">
                                    <a target="_blank" className="nav-link" href={`/terms-and-conditions-${strings.getLanguage()}.pdf`}>{strings.termsAndConditions}</a>
                                </li>
                                <If condition={window.location.pathname === '/'}>
                                    <Then>
                                        <li className="nav-item">
                                            <a className="nav-link scroll" href="#pricing">{strings.pricing}</a>
                                        </li>
                                    </Then>
                                </If>
                                <li className="nav-item">
                                    <a className="nav-link scroll" href="#contact">{strings.contactUs}</a>
                                </li>
                                <li>
                                    <div className="navbar2" style={{ textAlign: 'end' }}>
                                        <span className="navbar-text" style={{ padding: '10px' }}>
                                            <button type="button" className="btn btn-secondary" value={strings[strings.getLanguage()]} onClick={(e) => {
                                                this.props.changeLanguage(e.target.value)
                                            }}>{strings[strings.getLanguage()]}</button>
                                        </span>
                                    </div>

                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;