import React, { Component } from "react";
import { GoSell, GoSellElements } from "@tap-payments/gosell";
import strings from "./translations";
import axios from "axios";
import qs from 'qs';
import ReCAPTCHA from "react-google-recaptcha";

let API = process.env.REACT_APP_API;
let publicKey = process.env.REACT_APP_TAP_PK;
let host = process.env.REACT_APP_HOST;

export function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}


export default class GoSellDemo extends Component {

    constructor(props){
      super(props);
        this.state = {
            subscription: null,
            user: {},
            ready: false,
            showCaptcha:false,
            charge: null,
            plan: {}
        }
    }

    callbackFunc(response) {
        console.log(response);
    }

    getPrice = () => {
        let { freq, plan } = this.props;
        if (freq == 1) {
            return plan.monthlyPrice;
        } else if (freq == 2) {
            return plan.annualPrice;
        } else if (freq == 6) {
            return plan.threeYearsPrice;
        }
    }

    getFreqDesc = () => {
        let { freq } = this.props;
        if (freq == 1) {
            return "/mo";
        } else if (freq == 2) {
            return "/yr";
        } else if (freq == 6) {
            return "/3yr";
        }
    }

    render() {
        let { freq, plan } = this.props;
        
        return (
            <div className="App">

                {this.state.showCaptcha ? <ReCAPTCHA
                        sitekey="6LcDd_wcAAAAAHf2AWegpgm7j3p4BSySKahdn0QT"
                        onChange={() => {
                            GoSell.openPaymentPage()
                        }}
                    />
                :
                <button disabled={this.props.disabled} type="button" class="btn btn-info" style={{ backgroundColor: '#189d94', color: '#fff', margin: '30px' }} cla onClick={() => {

                    if (this.props.validator.allValid()) {
                        this.setState({showCaptcha: true})
                    } else {
                        this.props.validator.showMessages();
                        // rerender to show messages for the first time
                        // you can use the autoForceUpdate option to do this automatically`
                        this.props.update();
                    }


                }}>
                    {strings.buySubs}
                </button>}
                
                {<GoSell
                    gateway={{
                        publicKey: publicKey,
                        language: "en",
                        contactInfo: true,
                        supportedCurrencies: "SAR",
                        supportedPaymentMethods: "all",
                        saveCardOption: false,
                        customerCards: true,
                        notifications: "standard",
                        backgroundImg: {
                            url: "imgURL",
                            opacity: "0.5",
                        },
                        callback: this.callbackFunc,
                        labels: {
                            cardNumber: "Card Number",
                            expirationDate: "MM/YY",
                            cvv: "CVV",
                            cardHolder: "Name on Card",
                            actionButton: "Pay",
                        },
                        style: {
                            base: {
                                color: "#535353",
                                lineHeight: "18px",
                                fontFamily: "sans-serif",
                                fontSmoothing: "antialiased",
                                fontSize: "16px",
                                "::placeholder": {
                                    color: "rgba(0, 0, 0, 0.26)",
                                    fontSize: "15px",
                                },
                            },
                            invalid: {
                                color: "red",
                                iconColor: "#fa755a ",
                            },
                        },
                    }}
                    customer={{
                        first_name: this.props.user.name,
                        email: this.props.user.email,
                        phone: {
                            country_code: "966",
                            number: this.props.user.phone,
                        },
                    }}
                    order={{
                        amount: this.getPrice() + this.getPrice() * 0.15,
                        currency: "SAR",
                        items: [
                            {
                                id: 1,
                                name: this.props.plan.title + this.getFreqDesc(),
                                description: this.props.plan.description,
                                quantity: "1",
                                amount_per_unit: this.getPrice(),
                                total_amount: this.getPrice(),
                            },
                            {
                                id: 2,
                                name: 'VAT',
                                description: '15% VAT',
                                quantity: "1",
                                amount_per_unit: this.getPrice() * 0.15,
                                total_amount: this.getPrice() * 0.15,
                            },
                        ],
                        shipping: null,
                        taxes: null,
                    }}
                    transaction={{
                        mode: "charge",
                        charge: {
                            saveCard: false,
                            threeDSecure: true,
                            description: this.props.plan.description + " - "+this.getFreqDesc(),
                            statement_descriptor: "Sample",
                            reference: {
                                transaction: "txn_"+makeid(6),
                                order: "ord_"+makeid(6),
                            },
                            metadata: {},
                            receipt: {
                                email: true,
                                sms: false,
                            },
                            redirect: `${host}/checkout?planId=${plan.uuid}&freq=${freq}`,
                            post: `${API}/charge`,
                        },
                    }}
                />}
            </div>
        );
    }
}
