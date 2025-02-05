import React, { Component } from 'react';
import axios from 'axios';
import strings from '../../translations';

const BASE_URL = "https://my-json-server.typicode.com/themeland/sapp/themeOneFeatureSection";

class FeatureSection extends Component {
    state = {
        data: {},
        featureData: [],
        featureData_1: []
    };

    componentDidMount() {
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    featureData: res.data.featureData,
                    featureData_1: res.data.featureData_1
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        const features = [
            {
                title: strings.feature1Title,
                description: strings.feature1Description,
                imgSrc: './img/zatca-logo.png',
            },
            {
                title: strings.feature2Title,
                description: strings.feature2Description,
                imgSrc: './img/Dollar.png',
            },
            {
                title: strings.feature3Title,
                description: strings.feature3Description,
                imgSrc: './img/Secure.png',
            },
            {
                title: strings.feature5Title,
                description: strings.feature5Description,
                imgSrc: './img/Simple.png',
            },
            {
                title: strings.feature6Title,
                description: strings.feature6Description,
                imgSrc: './img/Layout.png',
            },
            {
                title: strings.feature4Title,
                description: strings.feature4Description,
                imgSrc: './img/Cloud.png',
            },
        ];

        return (
            <section id="features" className="feature-section-wrapper" style={{ backgroundColor: '#F2F9F9', width: '100%' }}>
                {/* Section Heading */}
                <div className="section-heading">
                    <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{strings.featureHear}</h2>
                </div>
                <div className="container">
                    {features.map((feature, index) => (
                        <div key={index} className="features-item">
                            <img src={feature.imgSrc} alt={feature.title} />
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
                <style jsx>{`
                    .feature-section-wrapper .container {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 35px; /* Adjusts space between grid items */
                    }
            
                    .feature-section-wrapper .features-item {
                        flex: 1 1 calc(33.333% - 30px); /* Desktop: Items in a grid */
                        max-width: calc(33.333% - 30px);
                        text-align: left; /* Default: Left-aligned content */
                        padding: 0;
                        box-sizing: border-box;
                    }
            
                    .feature-section-wrapper .features-item img {
                        width: 64px;
                        height: 64px;
                        margin-bottom: 10px;
                    }
            
                    .feature-section-wrapper .features-item h3 {
                        font-size: 23px;
                        font-weight: bold;
                        margin-bottom: 10px;
                        color: #1D2130;
                    }
            
                    .feature-section-wrapper .features-item p {
                        font-size: 15px;
                        color: #525560;
                        width: 100%; /* Let text expand naturally */
                        margin: 0;
                    }
            
                    /* Media Query for Mobile Devices */
                    @media (max-width: 768px) {
                        .feature-section-wrapper .features-item {
                            flex: 1 1 100%;
                            max-width: 100%;
                            display: flex;
                            flex-direction: column;
                            align-items: center; /* Center items horizontally */
                            text-align: center; /* Center-align text */
                        }
            
                        .feature-section-wrapper .features-item img {
                            margin-bottom: 10px;
                        }
            
                        .feature-section-wrapper .features-item h3 {
                            font-size: 16px;
                        }
            
                        .feature-section-wrapper .features-item p {
                            font-size: 12px;
                        }
                    }
                `}</style>
            </section>
        );
    }
}

export default FeatureSection;


