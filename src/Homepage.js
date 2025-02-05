import logo from './logo.svg';
import React, { Component, useEffect } from 'react'
// import './App.css';
import './style.css';

import axios from 'axios';
import { Route, Switch } from "react-router";
import Checkout from './Checkout';
import { InvCountdown } from './Countdown';
import strings from './translations';
import ContactUsForm from './ContactUsForm';
import { Link } from 'react-router-dom';
import PlanTerms from './PlanTerms';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ReactCardFlip from 'react-card-flip';

let API = process.env.REACT_APP_API;
let VideoLink = process.env.REACT_APP_VIDEO_LINK;

export const Homepage = (props) => {


    const [loading, setLoading] = React.useState(true);
    const [freq, setFreq] = React.useState(2);
    const [plans, setPlans] = React.useState([]);
    const [companies, setCompanies] = React.useState([]);
    const [webStatic, setStatic] = React.useState({});
    const [slidesToShow, setSlidesToShow] = React.useState(0)
    const [flippedCard, setFlippedCard] = React.useState([])


    const convertToPersianDigits = (number) => number?.toLocaleString('fa-IR')

    useEffect(() => {
        axios.get(API + "/subscriptionPlan/list?homepageEnabled=true", {
            headers: {
                "Accept-Language": props.locale
            }
        }).then(({ data }) => {
            setLoading(false)
            let plns = data.data.sort((a, b) => a.annualPrice > b.annualPrice ? 1 : -1);
            plns.push(plns.shift());
            setPlans(plns.reverse());
        }).catch(() => {
            setPlans([]);
            setLoading(false)
        });
        // let { plans } = this.state;
        axios.get(API + '/metrics/homepage', {
            headers: {
                "Accept-Language": props.locale
            }
        })
            .then((response) => {
                setStatic(response.data)
            })
    }, [])

    useEffect(() => {
        axios.get(API + "/download/vendors/logos", {
            headers: {
                "Accept-Language": props.locale
            }
        }).then(({ data }) => {
            setLoading(false)
            setCompanies(data);
        }).catch(() => {
            setCompanies([]);
            setLoading(false)
        });


    }, [])

    useEffect(() => {
        if (window.innerWidth < 600) {
            setSlidesToShow(3)
        } else if (600 <= window.innerWidth && window.innerWidth <= 768) {
            setSlidesToShow(4)
        } else {
            setSlidesToShow(5)
        }

    }, [window.innerWidth])

    const freqOnClick = (e) => {
        setFreq(e.target.getAttribute('data-key'));
    }
    const handleClick = (e, i) => {
        e.preventDefault();
        setFlippedCard([...flippedCard, i]);
    }
    const handleClickback = (e, i) => {
        e.preventDefault();
        let x = flippedCard.filter(val => val !== i)
        setFlippedCard(x);
    }
    return (
        <div className="bootstrap-root">
            <div>
                <div className={`preloader ${loading ? '' : 'hide-loader'}`} >
                    <div className="loader">
                        <div className="ytp-spinner" >
                            <div className="ytp-spinner-container">
                                <div className="ytp-spinner-rotator">
                                    <div className="ytp-spinner-left">
                                        <div className="ytp-spinner-circle" style={{ backgroundColor: '#1397af !important' }}></div>
                                    </div>
                                    <div className="ytp-spinner-right">
                                        <div className="ytp-spinner-circle" style={{ backgroundColor: '#1397af !important' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="navbar-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg">

                                    <a className="navbar-brand" href="/">
                                        <img src="/assets/layout/images/logo-white.svg" style={{ height: "4.25rem" }} alt="Logo" />
                                    </a>

                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTwo" aria-controls="navbarTwo" aria-expanded="false" aria-label="Toggle navigation" style={{color:'white'}}>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>



                <section id="pricing" className="pricing-area ">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-10">
                                <div className="section-title text-center pb-25">
                                    <h3 className="title">{strings.pricingPlans}</h3>
                                    <p className="text"></p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center" style={{ marginBottom: "10px" }}>
                            <div className="col-lg-12 col-md-10" >
                                <div>{JSON.stringify(props.platformSettings)}</div>
                                <div className="btn-group text-center" role="group" aria-label="Basic example" >
                                    {/* <button type="button" className={`btn freq-button${freq==1?"-active":''}`} data-key="1" onClick={freqOnClick}>{strings.month}</button> */}
                                    <button type="button" className={`btn freq-button${freq === 2 ? "-active" : ''}`} data-key="2" onClick={freqOnClick}>{strings.oneYear}</button>
                                    <button type="button" className={`btn freq-button${freq === 6 ? "-active" : ''}`} data-key="6" onClick={freqOnClick}>{strings.threeYears}</button>
                                </div>

                            </div>
                        </div>
                        <hr />
                        {/* <div className="row justify-content-center">
                            {plans?.map((item,idx) => plans[plans.length-1-idx]).map(plan => {
                                return <div className="col-lg-4 col-md-4 col-sm-12" style={{padding:'12px'}}>
                                    <div className="pricing-style mt-30">
                                        <div className="pricing-icon text-center">
                                            <img src="assets/images/basic.svg" alt="" />
                                        </div>
                                        <div className="pricing-header text-center">
                                            <h1 style={{ color: 'white' }}>{plan.title}</h1>
                                            {plan.itemsThreshold == -1 ? <p className="month"><span className="price">{strings.askForQuote}</span></p> : <>
                                                {freq == 1 && <p className="month"><span className="price">{plan.itemsThreshold} {strings.invoices} / {strings.perMonth}</span></p>}
                                                {freq == 2 && <p className="month"><span className="price"> {plan.itemsThreshold * 12} {strings.invoices} / {strings.perYear}</span> </p>}
                                                {freq == 6 && <p className="month"><span className="price">{plan.itemsThreshold * 12 * 3} {strings.invoices} / {strings.perThreeYears} </span> </p>}

                                                {freq == 1 && <p className="month"><span className="price">{strings[plan.currency]} {(plan.monthlyPrice)}</span></p>}
                                                {freq == 2 && <p className="month"><span className="price"> {strings[plan.currency]} {(plan.annualPrice)}</span> </p>}
                                                {freq == 6 && <p className="month"><span className="price">{strings[plan.currency]} {(plan.threeYearsPrice)} </span> </p>}
                                            </>
                                            }
                                        </div>
                                        <div className="text-center" style={{marginBottom:'0 !important'}}>
                                            <hr/>
                                            <div className="pricing-list ">
                                                <ul>
                                                    <li><i className="lni lni-check-mark-circle"></i>{strings.unlimitedUsers}</li>
                                                    <li><i className="lni lni-check-mark-circle"></i>{strings.dashboardAccess}</li>
                                                    {plan.itemsThreshold != -1 ? <li><small>{strings.taxExclusive}</small></li> : <li><small>&nbsp;</small></li>}
                                                    
                                                </ul>
                                            </div>
                                            <div className="pricing-btn rounded-buttons text-center" style={{width:'100%', position:'relative'}}>
                                                <Link className="main-btn rounded-one" to={`/checkout?planId=${plan.uuid}&freq=${freq}`}>{strings.select}</Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            })}

                        </div> */}
                        <div className="row justify-content-center">
                            {plans?.map((item, idx) => plans[plans.length - 1 - idx]).map((plan, i) => {
                                return <div className="col-lg-4 col-md-4 col-sm-12" style={{ padding: '12px' }}>
                                    {/* <div className="pricing-style mt-30">
                                    </div> */}

                                    <div className="pricing-icon text-center">
                                        <img src="assets/images/basic.svg" alt="" />
                                    </div>
                                    <ReactCardFlip isFlipped={flippedCard.includes(i)} flipDirection="horizontal">
                                        <div className="pricing-style mt-30">
                                            <div className="pricing-header text-center">
                                                <h1 style={{ color: 'white' }}>{plan.title}</h1>
                                                {plan.itemsThreshold === -1 ? <p className="month"><span className="price">{strings.askForQuote}</span></p> : <>
                                                    {/* {freq == 1 && <p className="month"><span className="price">{plan.itemsThreshold} {strings.invoices} / {strings.perMonth}</span></p>} */}
                                                    {freq === 2 && <p className="month"><span className="price"> {plan.itemsThreshold * 12} {strings.invoices} / {strings.perYear}</span> </p>}
                                                    {freq === 6 && <p className="month"><span className="price">{plan.itemsThreshold * 12 * 3} {strings.invoices} / {strings.perThreeYears} </span> </p>}

                                                    {/* {freq == 1 && <p className="month"><span className="price">{strings[plan.currency]} {(plan.monthlyPrice)}</span></p>} */}
                                                    {freq === 2 && <p className="month"><span className="price"> {strings[plan.currency]} {(plan.annualPrice)}</span> </p>}
                                                    {freq === 6 && <p className="month"><span className="price">{strings[plan.currency]} {(plan.threeYearsPrice)} </span> </p>}
                                                </>
                                                }
                                                <button className="flipper" onClick={(e) => handleClick(e, i)}>{strings.flipperFront}</button>
                                            </div>
                                        </div>
                                        <div className="pricing-style mt-30">
                                            <div className="text-center" style={{ marginBottom: '0 !important' }}>
                                                {/* <hr /> */}
                                                <div className="pricing-list ">
                                                    <ul>
                                                        <li><i className="lni lni-check-mark-circle"></i>{strings.unlimitedUsers}</li>
                                                        <li><i className="lni lni-check-mark-circle"></i>{strings.dashboardAccess}</li>
                                                        {plan.itemsThreshold !== -1 ? <li><small>{strings.taxExclusive}</small></li> : <li><small>&nbsp;</small></li>}

                                                    </ul>
                                                </div>
                                                <div className="pricing-btn rounded-buttons text-center" style={{ width: '100%', position: 'relative' }}>
                                                    <Link className="main-btn rounded-one" to={`/checkout?planId=${plan.uuid}&freq=${freq}`}>{strings.select}</Link>
                                                </div>
                                                <button className="flipper" onClick={(e) => handleClickback(e, i)}>{strings.flipperBack}</button>
                                            </div>
                                        </div>
                                    </ReactCardFlip>


                                </div>
                            })}

                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-12 mb-12">
                                <PlanTerms />
                            </div>
                        </div>
                    </div>
                </section>
                <hr />
                <section id="home" className="slider_area">
                    <div id="carouselThree" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" >
                                <div className="container" style={{ width: '100%' }}>
                                    <div className="row" style={{ width: '100%' }}>
                                        <div className="static">
                                            <div className="company-static"><h1>{webStatic.totalCustomersCount}</h1><h3>{strings.static1}</h3></div>
                                            <div className="company-static"><h1>{webStatic.totalGeneratedInvoices}</h1><h3>{strings.static2}</h3></div>
                                            <div className="company-static"><h1>{webStatic.uniqueUsersCount}</h1><h3>{strings.static3}</h3></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <hr />
                <div className="iframe">
                    <h2>{strings.iframe}</h2>
                    <iframe src='https://webchat.botframework.com/embed/einvcb-bot?s=S2hhycYUpnM.OuH8j9TPWHvj_OrAI5G3uI1lrdnCPGQuAbywZB50Vs4' title='test'></iframe>

                </div>


                <hr />

                <section id="pricing" className="video-area" style={{ marginTop: '30px' }}>
                    <div className="container" style={{ height: '100%' }}>
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-10">
                                <div className="section-title text-center pb-25">
                                    <h3 className="title">{strings.video}</h3>
                                    <p className="text"></p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-12 col-md-12" >
                                <iframe width="100%" height="500" src={VideoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                                {/* <iframe width="100%" height="500" src="https://www.youtube.com/embed/_D6fhTbbUKo?mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe> */}
                            </div>
                        </div>
                    </div>
                </section>


                <a href="#" className="back-to-top"><i className="lni lni-chevron-up"></i></a>
                <hr />
                <section id="pricing" className="video-area" style={{ marginTop: '30px' }}>
                    <div className="container" style={{ height: '100%' }}>
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-10">
                                <div className="section-title text-center pb-25">
                                    <h3 className="title">{strings.clients}</h3>
                                    <p className="text"></p>
                                    <hr />

                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-12 col-md-12" >
                                <div className="slide-container">
                                    <Slide slidesToShow={slidesToShow} slidesToScroll={2} autoplay={true} infinite={true}>
                                        {companies.map((slideImage, index) => (
                                            <div className="each-fade" key={index} style={{ borderRaduis: '5px' }}>
                                                <img width="175" height="150" src={slideImage} alt={`slide-${index}`} />
                                            </div>
                                        ))}
                                    </Slide>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <hr />
                <ContactUsForm />
            </div>
        </div>
    );
}

export default Homepage;

