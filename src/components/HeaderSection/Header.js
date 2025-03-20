import React, { Component } from 'react'; 
import strings from '../../translations';
import { Link } from 'react-router-dom';
import { If, Then } from 'react-if';
import TemporaryDrawer from '../../sidebar';
import { FaLanguage, FaSearch } from 'react-icons/fa'; // For language and search icons

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
                backgroundColor: isMobile || isScrolled ? 'white' : 'white',
                color: 'black',
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
                width: '111px',
                height: '43px',
                color: 'white', // Text color white
                background: 'linear-gradient(245.49deg, #00998A 15.66%, #71C6BE 84.34%)', // Linear gradient background
                padding: '12px 32px',
                cursor: 'pointer',
                display: 'flex',
                borderRadius:'10px',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap', // Prevent text from breaking
                border: 'none', // Remove border radius and border
            },
            signInBtn: {
                width: '111px',
                height: '43px',
                color: 'black', // Text color black
                fontSize: '16px',
                background: 'none', // Remove background color
                border: '2px solid black', // Black border with thinner weight
                borderRadius: '10px', // Remove border radius
                textAlign: 'center',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap', // Prevent text from breaking
            },
            languageBtn: {
                width: '111px',
                height: '43px',
                color: 'white', // Text color black
                fontSize: '16px',
                background: "#001E1C",

                border: '2px solid white', // Black border with thinner weight
                borderRadius: '10px', // Remove border radius
                textAlign: 'center',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap', // Prevent text from breaking
            },
            searchIconContainer: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '20px', // Add space between the buttons
                border: '2px solid black', // Black border for search icon container
                borderRadius: '0px', // Remove border radius
                padding: '5px',
            },
            searchIcon: {
                color: 'black', // Change color to black for the search icon
            },
            navLink: {
                color: isScrolled || isMobile ? '#000' : 'black',
                transition: 'color 0.3s ease',
                fontWeight: 'bold', // Make the nav link text bold
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
                            style={{ width: "200px", height: "50.78px" }}
                            src="/img/new_company_logo.png"  // Updated PNG path
                            alt="brand-logo"
                        />
                        <img
                            className="navbar-brand-sticky"
                            style={{ width: "200px", height: "55.78px" }}
                            src="/img/new_company_logo.png"  // Updated PNG path
                            alt="sticky brand-logo"
                        />
                    </Link>

                    <div className="navbar-inner d-flex justify-content-between align-items-center w-100">
                        <nav>
                            <ul className="navbar-nav d-flex align-items-center" style={{ marginLeft: '30px' }}>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/#" style={styles.navLink}>
                                        {strings.homepage}
                                    </Link>
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
                                    <a className="nav-link scroll" href="/tutorial" style={styles.navLink}>
                                        {strings.Tutorial}
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div style={styles.searchIconContainer}>
                                <FaSearch size={20} style={styles.searchIcon} />
                            </div>

                        <div className="d-flex align-items-center">
                            {/* Sign In Button */}
                            <button
                                className="btn sign-in-btn"
                                style={styles.signInBtn}
                                onClick={() => {
                                    // Add your sign in logic here
                                }}
                            >
                                 {strings.Signin}
                            </button>

                            {/* Add gap between Sign In and Sign Up */}
                            <div style={{ marginLeft: '15px' }} />

                            {/* Sign Up Button */}
                            <button
                                className="btn login-btn"
                                style={styles.loginBtn}
                                onClick={() => {
                                    // Add your sign up logic here
                                }}
                            >
                                 {strings.SignUp}
                            </button>

                            {/* Search Icon inside a bordered box */}
                           
                        </div>

                         {/* Language Switch Button (Icon version for Arabic and English switch) */}
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
                                                                    }}
                                                                >
                                                                    {strings.getLanguage() === "en" ? "Arabic" : "English"}
                                                                </button>

                                </span>
                            </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
