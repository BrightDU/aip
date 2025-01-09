import React, { Component } from 'react';
import axios from 'axios';
import strings from '../translations'
import CloseButton from 'react-bootstrap/CloseButton' 
const BASE_URL = "https://my-json-server.typicode.com/themeland/sapp/themeOneFeatureSection";

class GoPay extends Component {
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
            <section id="features">
                <br/>
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-12 col-lg-12">
                        {/* Section Heading */}
                        <div className="section-heading text-center">
                        
                        <h2>{strings.goPayDescription}</h2>
                        
                        {/* <p className="d-none d-sm-block mt-4">{this.state.data.headingText}</p>
                        
                    <p className="d-block d-sm-none mt-4">{this.state.data.headingTexttwo}</p> */}
                        
                        </div>
                    </div>
                    </div>
                    <div className="row align-items-center">
                    <div className="col-12 col-lg-12 d-none d-lg-block">
                        {/* Featutes Thumb */}
                        <div className="features-thumb text-center featuresImgs">

                        <img id='clickableImage' src='./img/gopay_full.png'/>
                        </div>
                        <br/>
                        <br/>
                    </div>

                    <div style={{textAlign: strings.direction}} className="col-12 col-md-12 col-lg-12">
                        {/* Features Item */}

                        <h2>{strings.goPayLine1Header}</h2>
                                <p>{strings.goPayLine1}</p>
                                <h2>{strings.goPayLine2Header}</h2>
                                <p>{strings.goPayLine2}</p>
                                <h2>{strings.goPayLine3Header}</h2>
                                <p>{strings.goPayLine3}</p>
                                <b><a href="https://www.e-faa.com.sa/registration.html" target="_blank">{strings.goPayButton}</a></b>
                    </div>
                    
                    </div>
                </div>
                <br/>

            </section>
        );
    }
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
}

export default GoPay;