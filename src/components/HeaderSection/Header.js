// import React, { Component } from 'react';
// import strings from '../../translations';
// import { Link } from 'react-router-dom';
// import { If, Then } from 'react-if'
// import TemporaryDrawer from '../../sidebar'
// class Header extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             locale: this.props.locale
//         }
//     }
//     componentDidMount(){
//         let w = window.innerWidth
//         let c = document.querySelectorAll('.container.position-relative')[0] || document.querySelectorAll('.position-relative.logo')[0]
//         if(w <= 990){
//             c.setAttribute('class', 'position-relative logo')
    
//         } else{
//             c.setAttribute('class', 'container position-relative')
    
//         }
//     }
    
//     render() {
    
        
//         var referral = localStorage.getItem('referral');
//         if(referral)
//         {
//             referral = JSON.parse(referral);
//         }
        
//         return (
//             <header className="navbar navbar-sticky navbar-expand-lg  navbar-dark" 
//             style={{ backgroundColor: '#0D1716' }} >
//             <TemporaryDrawer changeLanguage={this.props.changeLanguage}/>
//                 <div className="container position-relative">
//                     {this.props.platformSettings['ReferralFeatureEnabled']?.value == '1' && referral?.referrerSub?.referralCode ?
//                     <span style={{padding:'5px'}} className="btn btn-primary" to="/#">
//                         {strings.promoCode} {referral?.referrerSub?.referralCode}
//                     </span>:''}

//                     <a className="" href="/">
//                     </a>
//                     <Link to="/">
//                         <img className="navbar-brand-regular" src={this.props.imageData} alt="brand-logo" />
//                         <img className="navbar-brand-sticky" src="/img/company_logo.svg" alt="sticky brand-logo" />
//                     </Link>
//                     {/* <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon" />
//                     </button> */}
//                     <div className="navbar-inner">
//                         {/*  Mobile Menu Toggler */}
//                         {/* <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon" />
//                         </button> */}
//                         <nav>
//                             <ul className="navbar-nav  " id="navbar-nav">
//                                 <li className="nav-item ">
//                                     <Link className='nav-link' to="/#">
//                                         {strings.homepage}
//                                     </Link>
//                                     {/* <a className="nav-link" href="" id="navbarDropdownMenuLink"  aria-haspopup="true" aria-expanded="false">
//                                     </a> */}
//                                     {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                                             <li>
//                                                 <a className="dropdown-item" href="/theme-one">Homepage-1</a>
//                                             </li>
//                                             <li>
//                                                 <a className="dropdown-item" href="/theme-two">Homepage-2</a>
//                                             </li>
//                                             <li>
//                                                 <a className="dropdown-item" href="/theme-three">Homepage-3</a>
//                                             </li>
//                                             <li>
//                                                 <a className="dropdown-item" href="/theme-four">Homepage-4</a>
//                                             </li>
//                                             <li>
//                                                 <a className="dropdown-item" href="/theme-five">Homepage-5</a>
//                                             </li>
//                                             <li>
//                                                 <a className="dropdown-item" href="/theme-six">Homepage-6</a>
//                                             </li>
//                                         </ul> */}
//                                 </li>

//                                 <li className="nav-item">
//                                     <a className="nav-link" href="/faq">{strings.About}</a>
//                                 </li>


//                                 <If condition={window.location.pathname === '/'}>
//                                     <Then>
//                                         <li className="nav-item">
//                                             <a className="nav-link scroll" href="#pricing">{strings.pricing}</a>
//                                         </li>
//                                     </Then>
//                                 </If>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="/faq">{strings.faq}</a>
//                                 </li>
//                                 {/* <li className="nav-item dropdown">
//                                     <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                     Pages
//                                     </a>
//                                     <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                                                 <li>
//                                                     <a className="dropdown-item" href="/pricing">{strings.pricing}</a>
//                                                 </li>
//                                         <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/#" data-toggle="dropdown">Inner Pages<span className="badge badge-pill badge-warning ml-2">New</span></a>
//                                             <ul className="dropdown-menu">
//                                                 <li>
//                                                     <a className="dropdown-item" href="/download-page">Download</a>
//                                                 </li>
//                                                 <li>
//                                                     <a className="dropdown-item" href="/subscribe-page">Newsletter</a>
//                                                 </li>
//                                                 <li>
//                                                     <a className="dropdown-item" href="/thank-you">Thank you</a>
//                                                 </li>
//                                                 <li>
//                                                     <a className="dropdown-item" href="/coming-soon">Coming Soon</a>
//                                                 </li>
//                                                 <li>
//                                                     <a className="dropdown-item" href="/error-page">404</a>
//                                                 </li>
//                                             </ul>
//                                         </li>
//                                         <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/#" data-toggle="dropdown">Blog Pages</a>
//                                             <ul className="dropdown-menu">
//                                                 <li>
//                                                     <a className="dropdown-item" href="/blog-two-column">Blog- 2 Column</a>
//                                                 </li>
//                                                 <li>
//                                                     <a className="dropdown-item" href="/blog-three-column">Blog- 3 Column</a>
//                                                 </li>
//                                                 <li>
//                                                     <a className="dropdown-item" href="/blog-left-sidebar">Blog- Left Sidebar</a>
//                                                 </li>
//                                                 <li>
//                                                     <a className="dropdown-item" href="/blog-right-sidebar">Blog- Right Sidebar</a>
//                                                 </li>
//                                             </ul>
//                                         </li>
//                                         <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/#" data-toggle="dropdown">Blog Details</a>
//                                             <ul className="dropdown-menu">
//                                                 <li>
//                                                     <a className="dropdown-item" href="/blog-details-left-sidebar">Blog Details- Left Sidebar</a>
//                                                 </li>
//                                                 <li>
//                                                     <a className="dropdown-item" href="/blog-details-right-sidebar">Blog Details- Right Sidebar</a>
//                                                 </li>
//                                             </ul>
//                                         </li>
//                                         <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/#" data-toggle="dropdown">Accounts<span className="badge badge-pill badge-warning ml-2">New</span></a>
//                                             <ul className="dropdown-menu">
//                                                 <li>
//                                                     <a className="dropdown-item" href="/login">Login</a>
//                                                 </li>
//                                                 <li>
//                                                     <a className="dropdown-item" href="/signup">Signup</a>
//                                                 </li>
//                                                 <li>
//                                                     <a className="dropdown-item" href="/forgot">Reset Password</a>
//                                                 </li>
//                                             </ul>
//                                         </li>
//                                         <li>
//                                             <a className="dropdown-item" href="/reviews">Reviews</a>
//                                         </li>
//                                         <li>
//                                             <a className="dropdown-item" href="/faq">FAQ</a>
//                                         </li>
//                                         <li>
//                                             <a className="dropdown-item" href="/contact-page">Contact</a>
//                                         </li>
//                                         <li>
//                                             <a className="dropdown-item disabled" href="/#">More Coming Soon</a>
//                                         </li>
//                                     </ul>
//                                 </li> */}
//                                 <li className="nav-item">
//                                     <a target="_blank" className="nav-link" href={`/terms-and-conditions-${strings.getLanguage()}.pdf`}>{strings.termsAndConditions}</a>
//                                 </li>
                               
//                                 <li className="nav-item">
//                                     <a className="nav-link scroll" href="#contact">{strings.contactUs}</a>
//                                 </li>

//                                 <li className="nav-item">
//                                     <a className="nav-link scroll" href="#contact">{strings.Tutorial}</a>
//                                 </li>
//                                 <li>

//                                 <li className="nav-item d-flex align-items-center">
//         <button
//             className="btn login-btn"
//             style={{
//                 width: '105px',
//                 height: '43px',
//                 color: 'white',
//                 background: 'linear-gradient(90deg, #00998A 0%, #00403A 100%)',
//                 padding: '12px 32px',
//                 border: 'none',
//                 borderRadius: '5px',
//                 cursor: 'pointer',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//             }}
//             onClick={() => {
//                 // Add your login logic here
//             }}
//         >
//             Login
//         </button>
//     </li>


                               
//                                     <div className="navbar2" style={{ textAlign: 'end' }}>
//                                         <span className="navbar-text" style={{ padding: '10px' }}>
//                                             <button type="button" className="btn btn-secondary" value={strings[strings.getLanguage()]} onClick={(e) => {
//                                                 this.props.changeLanguage(e.target.value)
//                                             }}>{strings[strings.getLanguage()]}</button>
//                                         </span>
//                                     </div>

//                                 </li>
//                             </ul>
//                         </nav>
//                     </div>
//                 </div>
//             </header>
//         );
//     }
// }

// export default Header;



import React, { Component } from 'react';
import strings from '../../translations';
import { Link } from 'react-router-dom';
import { If, Then } from 'react-if';
import TemporaryDrawer from '../../sidebar';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locale: this.props.locale,
            isScrolled: false,
            isMobile: window.innerWidth <= 768, // Detect if the viewport is mobile size
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize); // Listen for window resize
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    }

    handleScroll = () => {
        const isScrolled = window.scrollY > 50;
        this.setState({ isScrolled });
    };

    handleResize = () => {
        const isMobile = window.innerWidth <= 768;
        this.setState({ isMobile });
    };

    render() {
        const { isScrolled, isMobile } = this.state;

        const styles = {
            navbar: {
                backgroundColor: isMobile || isScrolled ? '0D1716' : '#0D1716',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                transition: 'background-color 0.3s ease',
            },
            navbarBrandRegular: {
                display: isScrolled ? 'none' : 'block',
            },
            navbarBrandSticky: {
                display: isScrolled ? 'block' : 'none',
            },
            loginBtn: {
                width: '105px',
                height: '43px',
                color: isScrolled || isMobile ? '#ffffff' : 'white',
                background: isScrolled || isMobile
                    ? 'linear-gradient(90deg, #00998A 0%, #00403A 100%)'
                    : 'linear-gradient(90deg, #00998A 0%, #00403A 100%)',
                padding: '12px 32px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            languageBtn: {
                width: '111px',
                height: '43px',
                color: isScrolled || isMobile ? 'white' : 'white',
                fontSize: '16px',
                background: isScrolled || isMobile ? '#0D1716' : '#0D1716',
                border: isScrolled || isMobile ? '2px solid #00998A' : '2px double #00998A',
                borderRadius: '5px',
                textAlign: 'center',
                cursor: 'pointer',
                
            },
            navLink: {
                color: isScrolled || isMobile ? '#fff' : 'white',
                transition: 'color 0.3s ease',
               
            }

            
            
        };

        const referral = this.props.referral || {};

        return (
            <header className="navbar navbar-expand-lg navbar-dark" style={styles.navbar}>
                <TemporaryDrawer changeLanguage={this.props.changeLanguage} />
                <div className="container position-relative">
                    {this.props.platformSettings['ReferralFeatureEnabled']?.value === '1' && referral?.referrerSub?.referralCode ? (
                        <span style={{ padding: '5px' }} className="btn btn-primary">
                            {strings.promoCode} {referral?.referrerSub?.referralCode}
                        </span>
                    ) : null}

<Link to="/">
    <img
        className="navbar-brand-regular"
        style={{ width: "100.78px", height: "50.78px" }}
        src="/img/new_company_logo.png"  // Updated PNG path
        alt="brand-logo"
    />
    <img
        className="navbar-brand-sticky"
        style={{ width: "104.78px", height: "55.78px" }}
        src="/img/new_company_logo.png"  // Updated PNG path
        alt="sticky brand-logo"
    />
</Link>


                    <div className="navbar-inner d-flex justify-content-between align-items-center w-100">
                        <nav>
                            <ul className="navbar-nav d-flex align-items-center" style={{ marginLeft: '60px' }}>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/#" style={styles.navLink}>
                                        {strings.homepage}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about" style={styles.navLink}>
                                        {strings.About}
                                    </a>
                                </li>
                                <If condition={window.location.pathname === '/'} >
                                    <Then>
                                        <li className="nav-item">
                                            <a className="nav-link scroll" href="#pricing" style={styles.navLink}>
                                                {strings.pricing}
                                            </a>
                                        </li>
                                    </Then>
                                </If>
                                <li className="nav-item">
                                    <a className="nav-link" href="/faq" style={styles.navLink}>
                                        {strings.faq}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={`/terms-and-conditions-${strings.getLanguage()}.pdf`} style={styles.navLink}>
                                        {strings.termsAndConditions}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scroll" href="#contact" style={styles.navLink}>
                                        {strings.contactUs}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scroll" href="/tutorial" style={styles.navLink}>
                                        {strings.Tutorial}
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="d-flex align-items-center">
                            <button
                                className="btn login-btn"
                                style={styles.loginBtn}
                                onClick={() => {
                                    // Add your login logic here
                                }}
                            >
                                Login
                            </button>

                            <div className="navbar2" style={{ textAlign: 'end' }}>
    <span className="navbar-text" style={{ padding: '10px' }}>
        <button
            type="button"
            className="btn"
            onClick={() => {
                const newLang = strings.getLanguage() === "en" ? "ar" : "en";
                this.props.changeLanguage(newLang);
            }}
            style={{
                ...styles.languageBtn, // Keep existing styles
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "40px", // Adjust height if needed
                padding: "5px 15px",
                fontSize: "16px", // Adjust font size if needed
                textAlign: "center"
            }}
        >
            {strings.getLanguage() === "en" ? "Arabic" : "English"}
        </button>
    </span>
</div>


                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
