import React, { Component } from 'react';
import axios from 'axios';
import strings from '../../translations';
import PlanTerms from '../../PlanTerms';
import { Link } from 'react-router-dom'
const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server/themeOnePricingSection";

class PricingSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            pricingList: [],
            pricingData: [],
            freq: 2
        }
    }
    freqOnClick = (e) => {
        this.setState({ freq: Number(e.target.getAttribute('data-key')) })
    }
    componentDidMount() {
        axios.get(process.env.REACT_APP_API + "/subscriptionPlan/list?limit=10&offset=0&homepageEnabled=true", {
            headers: {
                "Accept-Language": this.props.locale
            }
        }).then(({ data }) => {
            console.log("🚀 ~ file: PricingOne.js ~ line 27 ~ PricingSection ~ componentDidMount ~ data", data)
            // setLoading(false)
            let plns = data.data.sort((a, b) => a.annualPrice > b.annualPrice ? 1 : -1);
            plns.push(plns.shift());
            this.setState({
                // data: res.data,
                // pricingList: res.data.pricingList,
                pricingData: plns
            })
            // setPlans(plns.reverse());
        }).catch(() => {
            // setPlans([]);
            // setLoading(false)
        });
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    pricingList: res.data.pricingList,
                    // pricingData: res.data.pricingData
                })
                // console.log(this.state.data)
            })
            .catch(err => console.log(err))
        this.setState({ locale: this.props.locale })
    }
    componentDidUpdate(prevProps, prevState, sS) {
        let newLocale = localStorage.getItem('locale')
        if (prevState.locale !== newLocale) {
            this.setState({ locale: newLocale })
        }
    }
    //  freqOnClick = (e)=>{
    //     this.setState({freq:e.target.getAttribute('data-key')})
    // }
    render() {
        let { freq, locale } = this.state
        return (
            <section id="pricing" className="section price-plan-area bg-gray overflow-hidden ptb_50">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-7">
                            {/* Section Heading */}
                            <div className="section-heading text-center" style={{marginTop:'50px'}}>
                                <h2>{strings.pricingPlans}</h2>
                                {/* <p className="d-none d-sm-block mt-4">{this.state.data.headingText}</p>
                                <p className="d-block d-sm-none mt-4">{this.state.data.headingTexttwo}</p> */}
                            </div>
                            <div className="row justify-content-center" style={{ marginBottom: "10px" }}>
                                
                                <div className="col-lg-12 col-md-10" >
                                    <div className="btn-group text-center" role="group" aria-label="Basic example" >
                                        {/* <button type="button" className={`btn freq-button${freq==1?"-active":''}`} data-key="1" onClick={freqOnClick}>{strings.month}</button> */}
                                        <button type="button" className={`btn freq-button${freq === 2 ? "-active" : ''}`} data-key="2" onClick={this.freqOnClick}>{strings.oneYear}</button>
                                        <button type="button" className={`btn freq-button${freq === 6 ? "-active" : ''}`} data-key="6" onClick={this.freqOnClick}>{strings.threeYears}</button>
                                    </div>
                                </div>
                                
                                <div className="col-lg-12 col-md-12" >
                                    <div style={{margin:'0px'}} className="text-center" role="group" aria-label="Basic example" >
                                        {/* <button type="button" className={`btn freq-button${freq==1?"-active":''}`} data-key="1" onClick={freqOnClick}>{strings.month}</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-12 col-lg-12">
                            <div className="row price-plan-wrapper justify-content-center">
                                {this.state.pricingData.map((item, idx) => {
                                    return (
                                        <div key={`p_${idx}`} className="col-12 col-md-4 mt-4">
                                            {/* Single Price Plan */}
                                            <div className="single-price-plan text-center p-5">

                                                {/* Plan Thumb */}
                                                {/* <div className="plan-thumb">
                                                    <img className="avatar-lg" src={item.planImage} alt="" />
                                                </div> */}
                                                {/* Plan Title */}
                                                <div className="plan-title my-2 my-sm-3">
                                                    <h3 className="text-uppercase">{locale === 'en' ? item.translations[0].title : item.translations[1].title}</h3>
                                                </div>
                                                {/* Plan Price */}
                                                <div className="plan-price pb-2 pb-sm-3">
                                                    {/* <h1 className="color-primary"><small className="fw-7">{item.priceSub}</small>{item.planPrice}</h1> */}
                                                    {item.itemsThreshold === -1 ? <p className="month"><span className="price">{strings.askForQuote}</span></p> : <>
                                                        {/* {freq == 1 && <p className="month"><span className="price">{plan.itemsThreshold} {strings.invoices} / {strings.perMonth}</span></p>} */}
                                                        {freq === 2 && <p className="month"><span className="price"> {item.itemsThreshold * 12} {strings.invoices} / {strings.perYear}</span> </p>}
                                                        {freq === 6 && <p className="month"><span className="price">{item.itemsThreshold * 12 * 3} {strings.invoices} / {strings.perThreeYears} </span> </p>}

                                                        {/* {freq == 1 && <p className="month"><span className="price">{strings[item.currency]} {(item.monthlyPrice)}</span></p>} */}
                                                        {freq === 2 && <p className="month"><span className="price"> {strings[item.currency]} {(item.annualPrice)}</span> </p>}
                                                        {freq === 6 && <p className="month"><span className="price">{strings[item.currency]} {(item.threeYearsPrice)} </span> </p>}
                                                    </>
                                                    }
                                                </div>
                                                {/* Plan Description */}
                                                <div className="plan-description">
                                                    {/* <ul className="plan-features">
                                                        <li className="border-top py-3">{item.li_1}</li>
                                                        <li className="border-top py-3">{item.li_2}</li>
                                                        <li className="border-top py-3">{item.li_3}</li>
                                                        <li className="border-top border-bottom py-3">{item.li_4}</li>
                                                    </ul> */}
                                                    <ul>
                                                        <li><i className="lni lni-check-mark-circle"></i>{strings.unlimitedUsers}</li>
                                                        <li><i className="lni lni-check-mark-circle"></i>{strings.dashboardAccess}</li>
                                                        {item.itemsThreshold !== -1 ? <li><small>{strings.taxExclusive}</small></li> : <li><small>&nbsp;</small></li>}

                                                    </ul>
                                                </div>
                                                {/* Plan Button */}
                                                <div className="plan-button">
                                                    <a href={`/checkout?planId=${item.uuid}&freq=${freq}`} className="btn mt-4">
                                                        {strings.select}
                                                    </a>

                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row justify-content-center pt-5">
                        {/* <p className="text-body pt-4 fw-5">{this.state.data.text} <a href="/#">{this.state.data.textLink}</a></p> */}
                        <PlanTerms />
                    </div>

                </div>
            </section>
        );
    }
}

export default PricingSection;