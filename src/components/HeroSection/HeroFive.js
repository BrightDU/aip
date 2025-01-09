import React, { Component } from 'react';
import strings from '../../translations';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import GoSellDemo, { makeid } from '../../GoSell';
let API = process.env.REACT_APP_API;

class HeroSection extends Component {
    state = {
        data: {},
        submitEnabled: false,
        loading: false,
        name: '',
        email: '',
        phone: '',
        success: false,
        errorCode: ''
    }

    submitForm = (e) => {
        // e.preventDefault();
        // e.target.reset()
        this.setState({ loading: true });
        if (!this.state.email || !this.state.phone) {
            // alert('Email and phone are required, please fill them.');
            this.setState({
                loading: false
            });
        }
        else {
            var referral = JSON.parse(localStorage.getItem('referral')??"{}");

            axios.post(`${API}/subscription`, {
                SubscriptionPlanId: "free",
                UserEmail: this.state.email,
                UserPhone: this.state.phone,
                UserName: this.state.name,
                Name: this.state.subName,
                TapId: "chg_free_" + makeid(10),
                referralTrackingId: referral.trackingId,
                SubscriptionInterval: 3
            }).then(({ data }) => {
                this.setState({
                    success: true,
                    loading: false
                })
                localStorage.setItem('createdFreeSubscription', true);

                axios.post(`${API}/feedback`, {
                    name: this.state.name,
                    email: this.state.email,
                    phone: this.state.phone,
                    description: `[Lead Captured] New free subscription was created for email ${this.state.email} and phone ${this.state.phone}.`,
                    organizationSize: 'NA',
                    industry: 'NA',
                    city: 'NA',
                })
            }).catch((error) => this.setState({ errorCode: error.response.data.errorCode, submitEnabled: false, name: '', email: '', phone: '' }))

        }
    }
    changeUserField = (e) => {
        e.PreventDefault()
        let user = { ...this.state.user }
        user[e.target.name] = e.target.value;
        this.setState({ user })
    }

    // componentDidMount() {
    //     this.setState({
    //         data: initData
    //     })
    // }
    render() {

        const { name, email, phone } = this.state
        return (
            <section id="home" className="section welcome-area bg-overlay d-flex align-items-center" style={{ padding: '0 10%' }}>
                <div className="container container2">
                    <div className="row align-items-center justify-content-center">
                        {/* Welcome Intro Start */}
                        <div className="col-12 col-lg-7">
                            <div className="welcome-intro">
                                <h1 className="text-white heroHead">{strings.heroHead}</h1>
                                <p className="text-white my-4">{strings.heroDescription}</p>
                                {/* Store Buttons */}
                                {/* <div className="button-group store-buttons d-flex">
                                    <a href="/demo" className="btn sApp-btn text-uppercase">{strings.demo}</a>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-5">
                            {/* Contact Box */}
                            <div className="contact-box bg-white text-center rounded p-4 p-sm-5 mt-5 mt-lg-0 shadow-lg">
                                {/* Contact Form */}
                                {!this.state.success && <form id="contact-form">
                                    <div className="contact-top">
                                        <h3 className="contact-title">{strings.formHeading}</h3>
                                        <h5 className="text-secondary fw-3 py-3">{strings.formText}</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="name" onChange={(e) => this.setState({ name: e.target.value })} placeholder={strings.name} required="required" />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="email" onChange={(e) => this.setState({ email: e.target.value })} placeholder={strings.email} required="required" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="phone" onChange={(e) => this.setState({ phone: e.target.value })} placeholder={strings.phone} required="required" />
                                            </div>
                                            <div className="form-group">
                                                {this.props.platformSettings['FreeSubReferralEnabled']?.value == '1' && this.props.platformSettings['ReferralFeatureEnabled']?.value == '1' ? <span style={{ padding: '20px', margin: '0px', background:'green' }} className={`btn btn-secondary`} >{strings.formatString(strings.promoCodeNote,this.props.platformSettings['FreeSubReferralAmount']?.value)}</span>:''}
                                            </div>

                                            <div className="text-center" style={{ margin: 'auto', display: this.state.submitEnabled ? 'inherit' : 'none' }}>
                                                <ReCAPTCHA
                                                    sitekey="6LcDd_wcAAAAAHf2AWegpgm7j3p4BSySKahdn0QT"
                                                    onChange={this.submitForm}
                                                />
                                            </div>
                                        </div>
                                       {!this.state.errorCode && <div className="col-12" style={{ display: !this.state.submitEnabled ? 'inherit' : 'none' }}>
                                            <button className="btn btn-bordered w-100 mt-3 mt-sm-4" type="button" onClick={() => this.setState({ submitEnabled: true })} disabled={name && email && phone ? false : true}>{strings.send}</button>
                                        </div>}
                                            {/* <div className="contact-bottom">
                                <span className="d-inline-block mt-3">{this.state.data.formBtnText} <a href="/#">{this.state.data.formBtnText_2}</a> &amp; <a href="/#">{this.state.data.formBtnText_3}</a></span>
                                </div> */}
                                    </div>
                                </form>}
                                <p className="form-message">{this.state.success ? <p>{strings.freeSubscriptionDescription}</p> : null}</p>
                                {this.state.errorCode && <p style={{ color: 'red', fontWeight: 600 }}>{strings[this.state.errorCode]}</p>}
                              {this.state.errorCode &&  <div>
                                    <button className="btn btn-bordered w-0 mt-3 mt-sm-4" type="button" onClick={() => window.location = '/#contact'}>{strings.contactUs}</button>{' '}
                                    <button className="btn btn-bordered w-0 mt-3 mt-sm-4" type="button" onClick={() => window.location = '/#pricing'}>{strings.buyPackage}</button>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Shape Bottom */}
                <div className="shape-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="shape-fill" fill="#FFFFFF" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z" />
                    </svg>
                </div>
            </section>
        );
    }
}

export default HeroSection;