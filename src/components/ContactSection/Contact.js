// import React, { Component } from 'react';
// import ContactForm from './ContactForm';
// import axios from 'axios';
// import strings from '../../translations'

// const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server-1/themeOneContactSection";

// class ContactSection extends Component {
//     state = {
//         data: {},
//         iconList: []
//     }
//     componentDidMount(){
//         axios.get(`${BASE_URL}`)
//         .then(res => {
//             this.setState({
//                 data: res.data,
//                 iconList: res.data.iconList
//             })
//             // console.log(this.state.data)
//         })
//         .catch(err => console.log(err))
//     }
//     render() {
        
        
//         return (
//             <section id="contact" className="contact-area bg-gray ptb_100">
//                 <div className="container">
//                     <div className="row justify-content-center">
//                     <div className="col-12 col-md-10 col-lg-6">
//                         {/* Section Heading */}
//                         <div className="section-heading text-center">
//                         <h2 className="text-capitalize">{strings.contactUs}</h2>
//                         {/* <p className="d-none d-sm-block mt-4">{this.state.data.headingText}</p>
//                         <p className="d-block d-sm-none mt-4">{this.state.data.headingTexttwo}</p> */}
//                         </div>
//                     </div>
//                     </div>
//                     <div className="row justify-content-between">
//                     <div className="col-12 col-md-5">
//                         {/* Contact Us */}
//                         <div className="contact-us">
//                         {/* <p className="mb-3">{this.state.data.content}</p> */}
//                             <ul>
//                                 {/* {this.state.iconList.map((item, idx) => {
//                                     return(
//                                         <li key={`ci_${idx}`} className="py-2">
//                                             <a className="media" href="/#">
//                                                 <div className="social-icon mr-3">
//                                                     <i className="fas fa-phone-alt" />
//                                                 </div>
//                                                 <span className="media-body align-self-center">{item.text}</span>
//                                             </a>
//                                         </li>
//                                     );
//                                 })} */}
//                                  <li key='phones' className="py-2">
//                                             <a className="media" href="/#">
//                                                 <div className="social-icon mr-3">
//                                                 <img src="https://img.icons8.com/dotty/64/000000/phone.png"/>   
//                                                 {/* <img src="https://img.icons8.com/color/48/000000/apple-phone.png"/>  */}
//                                                                                          </div>
//                                                 <span className="media-body align-self-center">+966540963570 - +966540963890 - +966540967210 - +966540965840</span>
//                                             </a>
//                                         </li>
//                                         <li key='whatsapp' className="py-2">
//                                             <a className="media" href="https://api.whatsapp.com/send?phone=966540963570">
//                                                 <div className="social-icon mr-3">
//                                                 <img src="https://img.icons8.com/color/48/000000/whatsapp--v2.png"/>                                                {/* <i className="bi bi-whatsapp fs-2 mb-3 text-muted"></i> */}
//                                                     {/* <i className="fas fa-phone-alt" /> */}
//                                                     {/* <img src="https://i0.wp.com/wallpaperaccess.com/full/5480300.jpg" alt="whatsapp"/> */}
//                                                 </div>
//                                                 <span className="media-body align-self-center" style={{textAlign: strings.direction}}>{strings.contactWhatsupp}</span>
//                                             </a>
//                                         </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="col-12 col-md-6 pt-4 pt-md-0">
//                         <ContactForm />
//                     </div>
//                     </div>
//                 </div>
//             </section>
//         );
//     }
// }

// export default ContactSection;












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
                                className="d-flex flex-column justify-content-center align-items-center"
                                style={{
                                    width: "480px",
                                    height: "560px",
                                    border: "2px solid #00403A",
                                    borderRadius: "10px",
                                    backgroundColor: "#fff",
                                    textAlign: "center",
                                    padding: "20px",
                                }}
                            >
                                <h4 className="mb-4" style={{fontSize:'32px'}}>{strings.hearFromYou}</h4>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-3">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="/img/contactphoneicon.png"
                                                alt="Phone Icon"
                                                style={{ width: 60, height: 60, marginRight:'-40px'}}
                                            />
                                            <div
                                                style={{
                                                    width: "2px",
                                                    height: "60px",
                                                    backgroundColor: "#00403A",
                                                    margin: "0 15px",
                                                }}
                                            ></div>
                                            <span style={{ fontSize: "14px", textAlign: "left", marginLeft:'-40px'}}>
                                                {strings.phoneNumber1}
                                                <br />
                                                {strings.phoneNumber2}
                                                <br />
                                                {strings.phoneNumber3}
                                                <br />
                                                {strings.phoneNumber4}
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <a
                                            href="https://api.whatsapp.com/send?phone=966540963570"
                                            className="d-flex align-items-center text-decoration-none"
                                            style={{ color: "inherit" }}
                                        >
                                            <img
                                                src="/img/contactwhatappicon.png"
                                                alt="WhatsApp Icon"
                                                style={{ width: 60, height: 60, marginLeft:'40px' }}
                                            />
                                            <div
                                                style={{
                                                    width: "2px",
                                                    height: "60px",
                                                    backgroundColor: "#00403A",
                                                    margin: "0 15px",
                                                }}
                                            ></div>
                                            <span style={{ fontSize: "14px", marginLeft:'-6px' }}>
                                                {strings.reachUsOnWhatsApp}
                                            </span>
                                        </a>
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
