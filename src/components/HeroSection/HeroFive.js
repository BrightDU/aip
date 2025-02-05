


// import React, { Component } from 'react';
// import strings from '../../translations';
// import ReCAPTCHA from 'react-google-recaptcha';
// import axios from 'axios';
// import GoSellDemo, { makeid } from '../../GoSell';

// let API = process.env.REACT_APP_API;

// class HeroSection extends Component {
//     state = {
//         data: {},
//         submitEnabled: false,
//         loading: false,
//         name: '',
//         email: '',
//         phone: '',
//         success: false,
//         errorCode: ''
//     }

//     submitForm = (e) => {
//         // e.preventDefault();
//         // e.target.reset()
//         this.setState({ loading: true });
//         if (!this.state.email || !this.state.phone) {
//             // alert('Email and phone are required, please fill them.');
//             this.setState({
//                 loading: false
//             });
//         }
//         else {
//             var referral = JSON.parse(localStorage.getItem('referral')??"{}");

//             axios.post(`${API}/subscription`, {
//                 SubscriptionPlanId: "free",
//                 UserEmail: this.state.email,
//                 UserPhone: this.state.phone,
//                 UserName: this.state.name,
//                 Name: this.state.subName,
//                 TapId: "chg_free_" + makeid(10),
//                 referralTrackingId: referral.trackingId,
//                 SubscriptionInterval: 3
//             }).then(({ data }) => {
//                 this.setState({
//                     success: true,
//                     loading: false
//                 })
//                 localStorage.setItem('createdFreeSubscription', true);

//                 axios.post(`${API}/feedback`, {
//                     name: this.state.name,
//                     email: this.state.email,
//                     phone: this.state.phone,
//                     description: `[Lead Captured] New free subscription was created for email ${this.state.email} and phone ${this.state.phone}.`,
//                     organizationSize: 'NA',
//                     industry: 'NA',
//                     city: 'NA',
//                 })
//             }).catch((error) => this.setState({ errorCode: error.response.data.errorCode, submitEnabled: false, name: '', email: '', phone: '' }))

//         }
//     }
//     changeUserField = (e) => {
//         e.PreventDefault()
//         let user = { ...this.state.user }
//         user[e.target.name] = e.target.value;
//         this.setState({ user })
//     }

//     // componentDidMount() {
//     //     this.setState({
//     //         data: initData
//     //     })
//     // }
//     render() {

//         const { name, email, phone } = this.state
//         return (
//             <section id="home" className="section welcome-area bg-overlay d-flex align-items-center" style={{ padding: '0 10%' }}>
//                 <div className="container container2">
//                     <div className="row align-items-center justify-content-center">
//                         {/* Welcome Intro Start */}
//                         <div className="col-12 col-lg-7" >
//                             <div className="welcome-intro" style={{marginBottom : '170px'}}>
//                                 <h1 className="text-white   heroHead" style={{fontSize: '40px' , marginBottom: '250px'}}>{strings.heroHead}</h1>
//                                 <div className='' style={{marginTop: '-240px'}}>

//                                     {/* //hero discription */}
//                                 <p className="text-white my-4" style={{  marginTop: '-70px'}}>{strings.heroDescription}</p>
//                                 </div>
//                                  {/* Button Section */}
//                                         <div style={{ marginTop: '30px' }}> {/* Adjust spacing above the button */}
                                            
//                                             <button
//                                                 style={{
//                                                     backgroundColor: 'white',
//                                                     color: '#1D2130',
//                                                     width: '250px',
//                                                     height: '70px',
//                                                     borderRadius: '15px',
//                                                     border: 'none',
//                                                     fontSize: '16px',
//                                                     fontWeight: 'bold',
//                                                     cursor: 'pointer',
//                                                 }}
//                                             >
//                                                 Get Started for FREE!
//                                             </button>
//                                         </div>
                                    




//                                 {/* Store Buttons */}
//                                 {/* <div className="button-group store-buttons d-flex">
//                                     <a href="/demo" className="btn sApp-btn text-uppercase">{strings.demo}</a>
//                                 </div> */}
//                             </div>
//                         </div>
//                         <div className="col-12 col-md-8 col-lg-5">

//                             {/* Picture Section */}
//                             <div className="col-12 col-md-8 col-lg-5"  style={{marginLeft: '-60px'}}>
//                             <div className="hero-image " style={{ marginBottom: '260px' ,marginRight:'70px' }}>
//                                 <img
//                                     src="/img/herocomputer.png" // Accessing the image directly from the public folder
//                                     alt="Hero Computer"
//                                     className="img-fluid rounded"
//                                     style={{ maxWidth: '900%', height: '500%' }}
//                                 />
//                             </div>
//                         </div>






//                             {/* Contact Box */}
//                             {/* <div className="contact-box bg-white text-center rounded p-4 p-sm-5 mt-5 mt-lg-0 shadow-lg"> */}
//                                 {/* Contact Form */}
//                                 {/* {!this.state.success && <form id="contact-form">
//                                     <div className="contact-top">
//                                         <h3 className="contact-title">{strings.formHeading}</h3>
//                                         <h5 className="text-secondary fw-3 py-3">{strings.formText}</h5>
//                                     </div>
//                                     <div className="row">
//                                         <div className="col-12">
//                                             <div className="form-group">
//                                                 <input type="text" className="form-control" name="name" onChange={(e) => this.setState({ name: e.target.value })} placeholder={strings.name} required="required" />
//                                             </div>
//                                             <div className="form-group">
//                                                 <input type="email" className="form-control" name="email" onChange={(e) => this.setState({ email: e.target.value })} placeholder={strings.email} required="required" />
//                                             </div>
//                                             <div className="form-group">
//                                                 <input type="text" className="form-control" name="phone" onChange={(e) => this.setState({ phone: e.target.value })} placeholder={strings.phone} required="required" />
//                                             </div>
//                                             <div className="form-group">
//                                                 {this.props.platformSettings['FreeSubReferralEnabled']?.value == '1' && this.props.platformSettings['ReferralFeatureEnabled']?.value == '1' ? <span style={{ padding: '20px', margin: '0px', background:'green' }} className={`btn btn-secondary`} >{strings.formatString(strings.promoCodeNote,this.props.platformSettings['FreeSubReferralAmount']?.value)}</span>:''}
//                                             </div>

//                                             <div className="text-center" style={{ margin: 'auto', display: this.state.submitEnabled ? 'inherit' : 'none' }}>
//                                                 <ReCAPTCHA
//                                                     sitekey="6LcDd_wcAAAAAHf2AWegpgm7j3p4BSySKahdn0QT"
//                                                     onChange={this.submitForm}
//                                                 />
//                                             </div>
//                                         </div>
//                                        {!this.state.errorCode && <div className="col-12" style={{ display: !this.state.submitEnabled ? 'inherit' : 'none' }}>
//                                             <button className="btn btn-bordered w-100 mt-3 mt-sm-4" type="button" onClick={() => this.setState({ submitEnabled: true })} disabled={name && email && phone ? false : true}>{strings.send}</button>
//                                         </div>}
//                                             {/* <div className="contact-bottom">
//                                 <span className="d-inline-block mt-3">{this.state.data.formBtnText} <a href="/#">{this.state.data.formBtnText_2}</a> &amp; <a href="/#">{this.state.data.formBtnText_3}</a></span>
//                                 </div> */}
//                                     {/* </div>
//                                 </form>}
//                                 <p className="form-message">{this.state.success ? <p>{strings.freeSubscriptionDescription}</p> : null}</p>
//                                 {this.state.errorCode && <p style={{ color: 'red', fontWeight: 600 }}>{strings[this.state.errorCode]}</p>}
//                               {this.state.errorCode &&  <div>
//                                     <button className="btn btn-bordered w-0 mt-3 mt-sm-4" type="button" onClick={() => window.location = '/#contact'}>{strings.contactUs}</button>{' '}
//                                     <button className="btn btn-bordered w-0 mt-3 mt-sm-4" type="button" onClick={() => window.location = '/#pricing'}>{strings.buyPackage}</button>
//                                 </div>}
//                             </div> */} 





//                         </div>
//                     </div>
//                 </div>
                
//             </section>
//         );
//     }
// }

// export default HeroSection;




import React, { Component } from 'react';
import Modal from './Getstartedmodal'; // Adjust the import path as needed
import strings from '../../translations';

class HeroSection extends Component {
    state = {
        isModalOpen: false, // State to control modal visibility
    };

    openModal = () => {
        this.setState({ isModalOpen: true });
    };

    closeModal = () => {
        this.setState({ isModalOpen: false });
    };

    render() {
        return (
            <section
                id="home"
                className="section welcome-area bg-overlay d-flex align-items-center"
                style={{ padding: '0 10%', height: '600px' }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        {/* Text Section */}
                        <div className="col-12 col-lg-7 mb-5">
                            <div className="welcome-intro">
                                <h1 className="text-white heroHead">
                                    {strings.heroHead}
                                </h1>
                                <p className="text-white my-4">
                                    {strings.heroDescription}
                                </p>
                                <button
                                    style={{
                                        backgroundColor: 'white',
                                        color: '#1D2130',
                                        width: '250px',
                                        height: '70px',
                                        borderRadius: '15px',
                                        border: 'none',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                    }}
                                    onClick={this.openModal}
                                >
                                    {/* Get Started for FREE! */}
                                    {strings.getStartedButton}
                                </button>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="col-12 col-md-8 col-lg-5">
                            <div className="hero-image">
                                <img
                                    src="/img/herocomputer.png"
                                    alt="Hero Computer"
                                    className="img-fluid rounded"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal Component */}
                <Modal isOpen={this.state.isModalOpen} onClose={this.closeModal} />
                <style jsx>{`
                    /* Default Styles for Large Screens */
                    .welcome-area {
                        display: flex;
                        align-items: center;
                        padding: 0 10%;
                    }

                    .heroHead {
                        font-size: 40px;
                    }

                    .welcome-intro p {
                        font-size: 16px;
                    }

                    .hero-image img {
                        max-width: 130%;
                        height: auto;
                        display: block;
                        margin: 0 auto;
                        margin-bottom: 170px;
                    }

                    /* Media Query for Mobile Devices */
                    @media (max-width: 768px) {
                        .welcome-area {
                            flex-direction: column;
                            text-align: left;
                        }

                        .heroHead {
                            font-size: 33px;
                            margin-bottom: 15px;
                            margin-top:30px;
                        }

                        .welcome-intro p {
                            font-size: 14px;
                        }

                        .hero-image {
                            width: 80%;
                            margin: 20px auto 0;
                            margin-top:-48px;
                        }

                        .hero-image img {
                            max-width: 100%;
                            height: auto;
                        }

                        button {
                            width: 200px;
                            height: 60px;
                            font-size: 14px;
                            margin-top:5px;
                            margin-left: 20px;
                        }
                    }
                `}</style>
            </section>
        );
    }
}

export default HeroSection;




