import React, { Component } from 'react';
import axios from 'axios';
import strings from '../../translations'
import CloseButton from 'react-bootstrap/CloseButton' 
const BASE_URL = "https://my-json-server.typicode.com/themeland/sapp/themeOneFeatureSection";

class FeatureSection extends Component {
    state = {
        data: {},
        featureData: [],
        featureData_1: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    featureData: res.data.featureData,
                    featureData_1: res.data.featureData_1
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
        
    }

    clickHandler = e=>{
        const fullPage = document.querySelector('#fullpage');

        fullPage.style.backgroundImage = 'url(' + e.target.src + ')';
    fullPage.style.display = 'block';
    }
    close = ()=>{
        const fullPage = document.querySelector('#fullpage');

        
    fullPage.style.display = 'none';
    }
        
    render() {
        return (
            <section id="features" className="section features-area overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-6">
                        {/* Section Heading */}
                        <div className="section-heading text-center">
                        
                        <h2>{strings.featureHear}</h2>
                        {/* <p className="d-none d-sm-block mt-4">{this.state.data.headingText}</p>
                        
                    <p className="d-block d-sm-none mt-4">{this.state.data.headingTexttwo}</p> */}
                        
                        </div>
                    </div>
                    </div>
                    <div className="row align-items-center">
                    <div className="col-12 col-md-6 col-lg-4">
                        {/* Features Item */}
                        <ul className="features-item" style={{textAlign: strings.direction}}>
                        
                            {/* {this.state.featureData.map((item, idx) => {
                                return(
                                    );
                                })} */}
                                
                                    <li key={`fth_${1}`}>
                                        {/* Image Box */}
                                        <div className="image-box media px-1 py-3 py-md-4">
                                        
                                        
                                        {/* Featured Image */}
                                        <div className="featured-img mr-3">
                                        {/* <img src="https://img.icons8.com/external-becris-lineal-color-becris/64/000000/external-charity-football-becris-lineal-color-becris.png"/> */}
                                        <img className="avatar-sm" src="./img/zatca-logo.png"/>
                                            {/* <img className="avatar-sm" src={item.image} alt="" /> */}
                                        </div>
                                        {/* Icon Text */}
                                        <div className="icon-text media-body align-self-center align-self-md-start">
                                            <h3 className="mb-2">{strings.feature1Title}</h3>
                                            <p>{strings.feature1Description}</p>
                                        </div>
                                        </div>
                                    </li>
                                    <li key={`fth_${2}`}>
                                        {/* Image Box */}
                                        <div className="image-box media px-1 py-3 py-md-4">
                                        
                                        
                                        {/* Featured Image */}
                                        <div className="featured-img mr-3">
                                        {/* <img className="avatar-sm" src="https://img.icons8.com/ios/100/000000/features-list.png"/> */}
                                        <img  className="avatar-sm" src="https://img.icons8.com/external-sbts2018-lineal-color-sbts2018/64/000000/external-low-cost-lean-thinking-sbts2018-lineal-color-sbts2018.png"/>
                                            {/* <img className="avatar-sm" src={item.image} alt="" /> */}
                                        </div>
                                        {/* Icon Text */}
                                        <div className="icon-text media-body align-self-center align-self-md-start">
                                        
                                            <h3 className="mb-2">{strings.feature2Title}</h3>
                                            <p>{strings.feature2Description}</p>
                                        </div>
                                        </div>
                                    </li>
                                    <li key={`fth_${3}`}>
                                        {/* Image Box */}
                                        <div className="image-box media px-1 py-3 py-md-4">
                                        
                                        
                                        {/* Featured Image */}
                                        <div className="featured-img mr-3">
                                        {/* <img  className="avatar-sm" src="https://img.icons8.com/external-sbts2018-lineal-color-sbts2018/64/000000/external-low-cost-lean-thinking-sbts2018-lineal-color-sbts2018.png"/> */}
                                        <img className="avatar-sm" src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/64/000000/external-secure-social-media-prettycons-lineal-color-prettycons.png"/>
                                        
                                            {/* <img className="avatar-sm" src={item.image} alt="" /> */}
                                        </div>
                                        {/* Icon Text */}
                                        <div className="icon-text media-body align-self-center align-self-md-start">
                                        
                                            <h3 className="mb-2">{strings.feature3Title}</h3>
                                            <p>{strings.feature3Description}</p>
                                        </div>
                                        </div>
                                    </li>
                                    {/* <li key={`fth_${4}`}>
                                        Image Box
                                        <div className="image-box media px-1 py-3 py-md-4">
                                        
                                        
                                        Featured Image
                                        <div className="featured-img mr-3">
                                        <img className="avatar-sm" src="https://img.icons8.com/external-soft-fill-juicy-fish/64/000000/external-friendly-seo-soft-fill-soft-fill-juicy-fish-2.png"/>
                                        
                                        
                                            <img className="avatar-sm" src={item.image} alt="" />
                                        </div>
                                        Icon Text
                                        <div className="icon-text media-body align-self-center align-self-md-start">
                                        
                                            <h3 className="mb-2">{strings.feature7Title}</h3>
                                            <p>{strings.feature7Description}</p>
                                        </div>
                                        </div>
                                    </li> */}
                        </ul>
                    </div>
                    <div className="col-12 col-lg-4 d-none d-lg-block">
                        {/* Featutes Thumb */}
                        <div className="features-thumb text-center featuresImgs">
                        <div id="fullpage" onClick={this.close}><CloseButton variant="white" onClick={this.close} /></div>
                        {/* <img src={this.state.data.featureThumb} alt="" /> */}
                        <img id='clickableImage' onClick={this.clickHandler} src={`./img/products-${strings.getLanguage()}.png`}/>

                        <img id='clickableImage' src='./img/company_logo.svg'/>
                        <img id='clickableImage' onClick={this.clickHandler} src={`./img/invoices-${strings.getLanguage()}.png`}/>

                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        {/* Features Item */}
                        <ul className="features-item" style={{textAlign: strings.direction}}>
                        
                            {/* {this.state.featureData_1.map((item, idx) => {
                                return(
                                        );
                                    })} */}
                               
                                    <li key={`ftho_${5}`}>
                                        {/* Image Box */}
                                        <div className="image-box media px-1 py-3 py-md-4">
                                        
                                        
                                        {/* Featured Image */}
                                        <div className="featured-img mr-3">
                                        {/* <img className="avatar-sm" src="https://img.icons8.com/fluency/64/000000/cloud.png"/> */}
                                        <img className="avatar-sm"src="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-friendly-seo-soft-fill-soft-fill-juicy-fish-2.png"/>
                                            {/* <img className="avatar-sm" src={item.image} alt="" /> */}
                                        </div>
                                        {/* Icon Text */}
                                        <div className="icon-text media-body align-self-center align-self-md-start">
                                            <h3 className="mb-2">{strings.feature5Title}</h3>
                                            <p>{strings.feature5Description}</p>
                                        </div>
                                        </div>
                                    </li>
                                    <li key={`ftho_${6}`}>
                                        {/* Image Box */}
                                        <div className="image-box media px-1 py-3 py-md-4">
                                       
                                        {/* Featured Image */}
                                        <div className="featured-img mr-3">
                                        {/* <img className="avatar-sm" src="https://img.icons8.com/external-others-phat-plus/64/000000/external-rate-consumer-behaviour-color-line-others-phat-plus.png"/> */}
                                        <img className="avatar-sm" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAA60lEQVRoge3VMU4DMRBG4TcSPQdgoeM0OUQ6nymhyi24C21yAUCIeGMxqSLZEgEJWc4A/9fZ28xoV/tARET+M6sPG/eFOWvg5kLzfGeHkZZmj6eLq/rpobDCww4PMAFr4O500SzwPjONnugHbutDs8BbHjtJD80CL3t2EP4tbOtDs8DrTPIPHoi7xNaNdOkh5E9pQna/eV4YFjxknp6W15+HbM5lRdzhASb/KmQ5l6h/n9r5kOV8GDtKB+0nNJdfEDI7H7J9Lgn30CEzN4VMelLIBlPIwlHIBlPIpDeFbDCFLByFbDCFTESkryPHHHoMNHeOuQAAAABJRU5ErkJggg=="/>
                                       {/* <img className="avatar-sm" src={item.image} alt="" /> */}
                                        </div>
                                        {/* Icon Text */}
                                        <div className="icon-text media-body align-self-center align-self-md-start">
                                            <h3 className="mb-2">{strings.feature6Title}</h3>
                                            <p>{strings.feature6Description}</p>
                                        </div>
                                        </div>
                                    </li>
                                    <li key={`ftho_${7}`}>
                                        {/* Image Box */}
                                        <div className="image-box media px-1 py-3 py-md-4">
                                        {/* Featured Image */}
                                        <div className="featured-img mr-3">
                                        {/* <img className="avatar-sm" src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/64/000000/external-secure-social-media-prettycons-lineal-color-prettycons.png"/>  */}
                                        <img className="avatar-sm" src="https://img.icons8.com/fluency/64/000000/cloud.png"/>
                                            {/* <img className="avatar-sm" src={item.image} alt="" /> */}
                                        </div>
                                        {/* Icon Text */}
                                        <div className="icon-text media-body align-self-center align-self-md-start">
                                            <h3 className="mb-2">{strings.feature4Title}</h3>
                                            <p>{strings.feature4Description}</p>
                                        </div>
                                        </div>
                                    </li>
                                    {/* <li key={`ftho_${8}`}>
                                        Image Box
                                        <div className="image-box media px-1 py-3 py-md-4">
                                        Featured Image
                                        <div className="featured-img mr-3">
                                        <img className="avatar-sm" src="https://img.icons8.com/color/64/000000/modern-art.png"/>
                                            <img className="avatar-sm" src={item.image} alt="" />
                                        </div>
                                        Icon Text
                                        <div className="icon-text media-body align-self-center align-self-md-start">
                                            <h3 className="mb-2">{strings.feature8Title}</h3>
                                            <p>{strings.feature8Description}</p>
                                        </div>
                                        </div>
                                    </li> */}
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
}

export default FeatureSection;