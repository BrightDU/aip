import { Component } from 'react'
import './App.css';
import { Switch } from "react-router";
import { Link, Route } from "react-router-dom";
import Checkout from './Checkout';
import Homepage from './Homepage';
import strings from './translations';
import { TermsAndConditions } from './TermsAndConditions';
import Faq from './Faq';
import FreeSubscription from './FreeSubscription';
import TemporaryDrawer from './sidebar'
import { InvCountdown } from './Countdown';
import ReferralForm from './ReferralForm';
import axios from 'axios';


let API = process.env.REACT_APP_API;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            description: '',
            organizationSize: '',
            industry: '',
            city: '',
            days: '',
            hours: '',
            minutes: '',
            seconds: '',
            plans: [],
            locale: 'ar',
            opened: false,
        }


    }
    handleDrawerOpen = () => {
        this.setState({ opened: true });
    };

    handleDrawerClose = () => {
        this.setState({ opened: false });
    };
    componentDidMount() {

        let locale = localStorage.getItem('locale');
        if (locale) {
            strings.setLanguage(locale);
            this.setState({ 'locale': locale });
        } else {
            strings.setLanguage("ar");
            localStorage.setItem('locale', 'ar');
            this.setState({ 'locale': 'ar' });
        }
        let w = window.innerWidth
        let c = document.querySelectorAll('.container.position-relative')[0] || document.querySelectorAll('.position-relative.logo')[0]
        if (w <= 990) {
            c.setAttribute('class', 'position-relative logo')

        } else {
            c.setAttribute('class', 'container position-relative')

        }
    }

    componentDidUpdate(pP, pS, sS) {

        let lang = localStorage.getItem('locale')
        if (pS.locale !== lang)
            this.setState({ locale: lang });
    }
    

    render() {
        // window.addEventListener('scroll', () => {
        //     let stickyNav = document.getElementsByClassName('navbar-sticky')
        //     let offset = window.pageYOffset
        //     console.log("🚀 ~ file: App.js ~ line 70 ~ App ~ window.addEventListener ~ offset", offset)
        //     if (offset >= 120) {
        //         stickyNav.setAttribute('class', 'navbar-sticky-moved-up')
        //     } else {
        //         stickyNav.removeAttribute('class');
        //     }
        //     // apply transition
        //     if (offset >= 250) {
        //         stickyNav.setAttribute('class', 'navbar-sticky-transitioned')
        //         // $stickyNav.addClass("navbar-sticky-transitioned");
        //     } else {
        //         stickyNav.removeAttribute('class');
        //         // $stickyNav.removeClass("navbar-sticky-transitioned");
        //     }
        //     // sticky on
        //     if (offset >= 500) {
        //         stickyNav.setAttribute('class', 'navbar-sticky-on')
        //         // $stickyNav.addClass("navbar-sticky-on");
        //     } else {
        //         stickyNav.removeAttribute('class');
        //         // $stickyNav.removeClass("navbar-sticky-on");
        //     }
        // }
        // )
        return (
            <div style={{ direction: this.state.locale === 'ar' ? 'rtl' : 'ltr' }} id="page-top">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar w/ text</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText" style={{ display: 'none' }}>

                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Faq</a>
                            </li>
                        </ul>
                        <span class="navbar-text">
                            Navbar text with an inline element
                        </span>
                    </div>
                </nav>


                <nav className="navbar navbar-expand-lg fixed-top py-3" id="mainNav" >
                    <TemporaryDrawer />
                    <div className="navbar3" style={{ textAlign: 'end' }}>
                        <span className="navbar-text" style={{ padding: '10px' }}>
                            <button type="button" className="btn btn-secondary" onClick={() => {
                                let locale = strings.getLanguage();
                                if (locale === 'ar') {
                                    strings.setLanguage('en');
                                    localStorage.setItem('locale', 'en')
                                    this.setState({ 'locale': 'en' });
                                } else {
                                    strings.setLanguage('ar');
                                    localStorage.setItem('locale', 'ar')
                                    this.setState({ 'locale': 'ar' });
                                }
                            }}>{strings[strings.getLanguage()]}</button>
                        </span>
                    </div>
                    <a class="navbar-brand" href="/">
                        <img src="img\company_logo.svg" alt="Logo" style={{ "width": "150px", "display": "inline-block" }} alt="Arms IT - E-Invoicing Solution" />
                    </a>
                    <a class="navbar-brand logo2030 " href="/">
                        <img className='logo2030' src="img\logo.png" alt="Logo" style={{ "width": "99px", marginLeft: "15px" }} />
                    </a>

                    <div style={{ width: '100%' }} className="navbar2">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div style={{ width: '100%', justifyContent: "space-between", display: 'flex' }} className="collapse navbar-collapse" id="navbarResponsive">
                            <div className="navbar2" style={{ alignItems: 'start' }} >
                                <ul className="navbar-nav ms-auto my-2 my-lg-0">
                                    <li className="nav-item"><Link className="nav-link" to="/">{strings.homepage}</Link></li>
                                    <li className="nav-item"><a className="nav-link" href="#pricing">{strings.pricing}</a></li>
                                    {/* <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                            <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li> */}
                                    <li className="nav-item"><a className="nav-link" href="#contact">{strings.contactUs}</a></li>
                                    <li className="nav-item"><a className="nav-link" target="_" href={`./terms-and-conditions-${strings.getLanguage()}.pdf`}>{strings.termsAndConditions}</a></li>
                                    <li className="nav-item"><a className="nav-link" target="_" href={`/faq`}>{strings.faq}</a></li>
                                    <li className="nav-item"><button onClick={() => window.location = '/demo'} style={{ marginTop: '-5px' }} type="button" className="btn btn-success">{strings.demo}</button></li>
                                </ul>
                            </div>
                            <div className="navbar2" style={{ textAlign: 'end' }}>
                                <span className="navbar-text" style={{ padding: '10px' }}>
                                    <button type="button" className="btn btn-secondary" onClick={() => {
                                        let locale = strings.getLanguage();
                                        if (locale === 'ar') {
                                            strings.setLanguage('en');
                                            localStorage.setItem('locale', 'en')
                                            this.setState({ 'locale': 'en' });
                                        } else {
                                            strings.setLanguage('ar');
                                            localStorage.setItem('locale', 'ar')
                                            this.setState({ 'locale': 'ar' });
                                        }
                                    }}>{strings[strings.getLanguage()]}</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route path="/" exact component={() => <Homepage {...this.props} locale={this.state.locale} />} />
                    <Route path="/checkout" exact component={Checkout} />
                    <Route path="/terms-and-conditions" exact component={TermsAndConditions} />
                    <Route path="/faq" exact component={Faq} />
                    <Route path="/demo" exact component={FreeSubscription} />
                </Switch>

                <footer class="font-small pt-4 bg-light" style={{ marginTop: '30px' }}>
                    <div class="container-fluid text-center text-md-left">
                        <div class="row">
                            <div class="col-md-4" style={{ textAlign: 'center' }}>
                                <img src="img\logo.png" alt="Logo" style={{ "width": "150px", "display": "inline-block", paddingLeft: '10px' }} alt="Arms IT - E-Invoicing Solution" />
                                <a target="_" href="https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx"><img src="img\zatca.svg" alt="Logo" style={{ "width": "150px", "display": "inline-block", paddingLeft: '10px', background: 'black', marginLeft: '20px' }} alt="Arms IT - E-Invoicing Solution" /></a>
                            </div>
                            <div class="col-md-4" style={{ textAlign: 'center' }}>
                                <InvCountdown />
                            </div>
                            <div class="col-md-4" style={{ textAlign: 'center' }}>
                                <img src="img\company_logo.svg" alt="Logo" style={{ "width": "150px", "display": "inline-block" }} alt="Arms IT - E-Invoicing Solution" />
                            </div>

                        </div>

                    </div>

                    <div class="footer-copyright text-center py-3">
                        <img className='payment' height="40" src="https://sandbox.payments.tap.company/images/MASTERCARD.svg" />
                        <img className='payment' height="40" src="https://sandbox.payments.tap.company/images/VISA.svg" />
                        <img className='payment' height="40" src="https://sandbox.payments.tap.company/images/MADA.svg" />
                        <img className='payment' height="40" src="https://sandbox.payments.tap.company/images/AMERICAN_EXPRESS.svg" />
                        <hr />
                        <div className="small text-center text-muted">Copyright &copy; 2021 - <a target="_" href="https://armsit.com">ARMS IT E-invoice solutions</a></div></div>
                </footer>

            </div>
        );
    }
}

export default App;

