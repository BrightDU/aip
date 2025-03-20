import React, { Component } from 'react';
import ContactForm from './ContactForm';
import axios from 'axios';
import strings from '../../translations';

const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server-1/themeOneContactSection";

class ContactSection extends Component {
    state = {
        data: {},
        iconList: []
    };

    componentDidMount() {
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    iconList: res.data.iconList
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <section id="contact" className="contact-area bg-gray ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-6">
                            {/* Section Heading */}
                            <div className="section-heading text-center">
                                <h2 className="text-capitalize">{strings.contactUs}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Left Content Section */}
                        <div className="col-12 col-md-5 d-flex align-items-center">
                            <div
                                className="d-flex flex-column justify-content-center align-items-start"
                                style={{
                                    width: "604px",
                                    height: "450px",
                                    top: "-120px",
                                    backgroundColor: "#FFFFFF",
                                    boxShadow: "0px 4px 4px 0px #00000040",
                                    padding: "20px",
                                    position: "relative",
                                    textAlign: "left"
                                }}
                            >
                                <h4 className="mb-4" style={{ fontSize: '32px', textAlign:'center', color:'#60BFB6' }}>{strings.hearFromYou}</h4>
                                <ul className="list-unstyled mb-4" style={{ paddingLeft: '0' }}>
                                    <li className="mb-3 d-flex align-items-center" style={{ marginBottom: '20px' }}>
                                        <img
                                            src="/img/aiphoneicon.png"
                                            alt="Phone Icon"
                                            style={{ width: 40, height: 40, marginLeft: '-16px' }}
                                        />
                                        <span style={{ fontSize: "14px" }}>
                                            {strings.phoneNumber1}
                                        </span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-center" style={{ marginBottom: '20px' }}>
                                        <a
                                            href="https://api.whatsapp.com/send?phone=966540963570"
                                            className="d-flex align-items-center text-decoration-none"
                                            style={{ color: "inherit" }}
                                        >
                                            <img
                                                src="/img/aiwhatappicon.png"
                                                alt="WhatsApp Icon"
                                                style={{ width: 40, height: 40, marginLeft: '15px' }}
                                            />
                                            <span style={{ fontSize: "14px", marginLeft:'30px' }}>
                                                {strings.reachUsOnWhatsApp}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <img
                                            src="/img/email icon.png"
                                            alt="Email Icon"
                                            style={{ width: 40, height: 40, marginRight: '15px' }}
                                        />
                                        <span style={{ fontSize: "14px", marginLeft:'10px' }}>
                                            Sales@ARMSit.com
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Form Section */}
                        <div className="col-12 col-md-6 pt-4 pt-md-0">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactSection;
