import { Component } from 'react'
import './App.css';
import axios from 'axios';
import GoSellDemo from './GoSell';
import CreateUser from './CreateUser';
import strings from './translations';
import SimpleReactValidator from 'simple-react-validator';
import PlanTerms from './PlanTerms';
import { GoSell, GoSellElements } from "@tap-payments/gosell";
import Breadcrumb from './components/Blogs/Breadcrumb'

let API = process.env.REACT_APP_API;

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            validate: false,
            vendor: {},
            plans: [],
            loading: true,
            method:'online',
            checked: false,
            charge: null
        }
        // this.onLoad();
        this.validator = new SimpleReactValidator();
    }

    componentDidUpdate(prevProps,prevState) {
      
        let e = document.querySelector('.nav-link') 
        let x = document.querySelector('.nav-item') 
        let y = document.querySelector('.navbar')

        if(e && x && y) {
           
            let c = e.style.color
            // document.querySelectorAll('.nav-link').forEach(i => i.style.color = 'white')
            document.querySelectorAll('div').forEach((i,idx) => {
                if(idx === 1){
                    i.style.backgroundColor ='#fff'
                    return
                }
            } )
            
            // x.style.color = '#95a8be'
            // y.style.backgroundColor = '#95a8be'
        }
    }

    init = () => {
        let tap_id = new URLSearchParams(window.location.search).get("tap_id");
        let planId = new URLSearchParams(window.location.search).get("planId");
        let freq = new URLSearchParams(window.location.search).get("freq");
        let paymentToken = new URLSearchParams(window.location.search).get("token");

        if (tap_id&&tap_id.startsWith('chg_')) {
            axios.get(`${API}/charge/${tap_id}`).then(({ data }) => {
                this.setState({ charge: data });
                this.setState({ loading: false });
                if (data.status == 'CAPTURED') {
                    var referral = JSON.parse(localStorage.getItem('referral')??"{}");
                    axios.post(`${API}/subscription`, {
                        SubscriptionPlanId: planId,
                        UserEmail: data.customer.email,
                        UserPhone: data.customer.phone.country_code + data.customer.phone.number,
                        UserName: data.customer.first_name,
                        TapId: tap_id,
                        PaymentToken: paymentToken,
                        SubscriptionInterval: freq,
                        referralTrackingId: referral.trackingId,
                    })
                }
                else 
                {
                    axios.post(`${API}/feedback`, {
                        name: this.state.name,
                        email: this.state.email,
                        phone: this.state.phone,
                        description: `[Lead Captured] subscription creation failed for email ${this.state.email} and phone ${this.state.phone}.`,
                    })
                }


            }).catch(() => {
                this.setState({ loading: false });
                this.setState({ error: "internal_server_error" });
            });
        } else {
            axios.get(`${API}/subscriptionPlan/${planId}`, {
                headers: {
                    "Accept-Language": strings.getLanguage(),
                }
            }).then(({ data }) => {
                this.setState({ plan: data });
                this.setState({ loading: false });
            }).catch(() => {
                this.setState({ plan: null });
                this.setState({ loading: false });
            });
        }
    }

    componentDidMount() {
        this.init();
    }


    submitForm = () => {
        var planId = new URLSearchParams(this.props.location.search).get("planId")

        axios.post(`${API}/subscription`, {
            SubscriptionPlanId: planId,
            UserEmail: this.state.user.email,
            UserPhone: this.state.user.phone,
            UserName: this.state.user.name,
            SubscriptionInterval: 7
        }).then(() => {
            this.setState({
                charge: {
                    status: "AskedForQuota"
                }
            })
        });
    }

    changeUserField = (e) => {
        let user = { ...this.state.user }
        user[e.target.name] = e.target.value;
        this.setState({ user })
    }

    update = () => {
        this.setState({ validate: true })
    }

    render() {

        
        // let w = e.offsetWidth
        // console.log("🚀 ~ file: Checkout.js ~ line 107 ~ Checkout ~ render ~ w", w)
        // console.log("🚀 ~ file: Checkout.js ~ line 106 ~ Checkout ~ render ~ h", h)
        let { plan, user, charge, loading, error } = this.state;
        let freq = new URLSearchParams(window.location.search).get("freq")
        let planId = new URLSearchParams(window.location.search).get("planId")
        
        if(error)
        {
            return <div className="container">
            <div className="row">
                <div className="col-md-12 py-5 text-center">
                    <div className="payment-card error">
                        <div className="mark error">
                            <i className="checkmark">!</i>
                        </div>
                        <h1 className="error">{strings.internalServerError}</h1>
                    </div>
                </div>
            </div>
        </div>
        }

        if (!planId) {
            return <div>Error: pick a plan</div>
        }

        if (loading) {
            return <div className="container">
                <div className="row">
                    <div className="col-md-12 py-5 text-center">
                        <h1>{strings.loading}</h1>
                    </div>
                </div>
            </div>
        }

        if (charge) {
            if (charge.status == "CAPTURED") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 py-5 text-center">
                                <div className="payment-card success">
                                    <div className="mark success">
                                        <i className="checkmark">✓</i>
                                    </div>
                                    <h1 className="success">{strings.paymentSuccess}</h1>
                                    <p className="message">{strings.paymentSuccessMessage}</p>
                                    <div className="bottom-section">
                                        <span>{strings.status}: {charge.status}</span>
                                        <span>{strings.chargeId}: {charge.tapId}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (charge.status == "AskedForQuota") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 py-5 text-center">
                                <div className="payment-card success">
                                    <div className="mark success">
                                        <i className="checkmark">✓</i>
                                    </div>
                                    <h1 className="success">{strings.quotaSuccess}</h1>
                                    <p className="message">{strings.quotaSuccessMessage}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            else {
                return <div className="container">
                    <div className="row">
                        <div className="col-md-12 py-5 text-center">
                            <div className="payment-card error">
                                <div className="mark error">
                                    <i className="checkmark">!</i>
                                </div>
                                <h1 className="error">{strings.paymentFailure}</h1>
                                <p className="message">{strings.paymentFailureMessage}</p>
                                <div className="bottom-section">
                                    <span>{strings.status}: {charge.status}</span>
                                    <span>{strings.chargeId}: {charge.tapId}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }
        }

        return  (
        <div className="container" style={{ padding: '50px'}}  >
                {/* <div className="py-5 text-center">
                    <h2>{strings.checkout}</h2>
                </div> */}
                <div className='row'>
                    <div className="col-md-12 text-center">
                    </div>

                </div>
                <div className="row" style={{}}>
                    <div className="col-md-4 order-md-1">
                        <div class="card" style={{ "width": "18rem;" , marginTop: '2rem' }}>
                            <div className="row">
                                <div className="col-md-12 order-md-1">

                                <div className="pricing-style mt-30">
                                    <div className="pricing-icon text-center">
                                        <img src="assets/images/basic.svg" alt="" />
                                    </div>
                                    <div className="pricing-header text-center">

                                        <h1 className="pricingTitle" style={{ color: 'white' }}>{strings.buySub} <b>{plan?.title}</b> </h1>
                                        {plan?.itemsThreshold == -1 ? <p className="month"><span className="price">{strings.askForQuote}</span></p> : <>
                                            {freq == 1 && <p className="month"><span className="price">{plan?.itemsThreshold} {strings.invoices} / {strings.perMonth}</span></p>}
                                            {freq == 2 && <p className="month"><span className="price"> {plan?.itemsThreshold * 12} {strings.invoices} / {strings.perYear}</span> </p>}
                                            {freq == 6 && <p className="month"><span className="price">{plan?.itemsThreshold * 12 * 3} {strings.invoices} / {strings.perThreeYears} </span> </p>}

                                            {freq == 1 && <p className="month"><span className="price">{strings[plan?.currency]} {(plan?.monthlyPrice)} / {strings.perMonth}</span></p>}
                                            {freq == 2 && <p className="month"><span className="price"> {strings[plan?.currency]} {(plan?.annualPrice)} / {strings.perYear}</span> </p>}
                                            {freq == 6 && <p className="month"><span className="price">{strings[plan?.currency]} {(plan?.threeYearsPrice)} / {strings.perThreeYears} </span> </p>}
                                        </>
                                        }
                        
                                    {this.props.platformSettings['SplitWithReferred']?.value == '1' && this.props.platformSettings['ReferralFeatureEnabled']?.value == '1' ? <span style={{ padding: '20px', margin: '0px', background:'green' }} className={`btn btn-secondary`} >{strings.formatString(strings.promoCodeNote,this.props.platformSettings['ReferralAmount']?.value)}</span>:''}

                                    </div>
                                    <hr />
                                    <div className="pricing-list">
                                        <ul style={{textAlign: strings.direction}}>
                                            <li><i className="lni lni-check-mark-circle"></i>{strings.unlimitedUsers}</li>
                                            <li><i className="lni lni-check-mark-circle"></i> {strings.dashboardAccess}</li>
                                            <li><i className="lni lni-check-mark-circle"></i><u>{strings.taxExclusive}</u></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8 order-md-1" style={{ marginTop: '20px', backgroundColor: '#039b9152', padding: '2rem'}}>
                    <div className="row">
                        <div className="col-md-12 order-md-1">
                            <CreateUser validate={this.state.validate} validator={this.validator} changeUserField={this.changeUserField} user={user} />
                        </div>
                        <div className="col-md-12 order-md-1" style={{justifyContent: strings.direction , textAlign: strings.direction }} >
                            <hr />
                            <PlanTerms />
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" onClick={(e) => this.setState({ checked: !this.state.checked })} checked={this.state.checked} style={{ marginLeft: '10px' }} />
                            
                            <label class="form-check-label" for="flexCheckChecked">
                                {strings.termsLine5} <a target="_" href={`./terms-and-conditions-${strings.getLanguage()}.pdf`} >{strings.termsAndConditions}</a>
                            </label>
                            <br />
                        </div>
                        <div className="col-md-12 order-md-1" style={{justifyContent: strings.direction , textAlign: strings.direction }}>
                            <hr />

                            <label style={{ paddingLeft: '10px' }}>
                                <input class="form-check-input" type="radio" value="online" defaultChecked="true" name="paymentmethod" onChange={(e) => this.setState({ method: e.target.value })} style={{ marginLeft: '10px' }} />
                                {strings.online}
                            </label>
                            <label>
                                <input class="form-check-input" type="radio" value="bank" onChange={(e) => this.setState({ method: e.target.value })} name="paymentmethod" style={{ marginLeft: '10px' }} />
                                {strings.bank}
                            </label>
                        </div>
                        {this.state.method=='bank' &&
                        <div className="col-md-12 order-md-1">
                            <span>{strings.payto}</span>
                            <ol>
                                <li>Bank: Al Inma bank</li>
                                <li>Account Number: 68208959595000</li>
                                <li>IBAN: SA4505000068208959595000</li>
                                <li>Account Holder: ARMS For Information Technologies - شركة ارمس لتقنية المعلومات</li>
                            </ol>
                            <span>{strings.pleaseMention}</span>
                            <br/>
                            <b>{strings.reachUsAt}</b>
                        </div>}
                        <div className="col-md-12 order-md-1">
                            {plan?.monthlyPrice > -1 && this.state.method == 'online' && <GoSellDemo update={this.update} disabled={!this.state.checked} validator={this.validator} {...this.props} charge={this.state.charge} user={user} plan={plan} freq={freq} />}
                            {(plan?.monthlyPrice == -1)&& <div className="App"> <button disabled={!this.state.checked} type="button" class="btn btn-info" style={{ backgroundColor: '#189d94', color: '#fff', margin: '30px' }} cla onClick={this.submitForm}>{strings.askForQuote}</button></div>}
                        </div>
                    </div>

                    </div>
                </div>
            </div>)
    }
}

export default Checkout;

