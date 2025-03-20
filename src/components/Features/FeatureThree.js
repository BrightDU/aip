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
            { title: strings.feature1Title, description: strings.feature1Description, imgSrc: '/img/Landing page assets/cash icon.png' }, // Top
            { title: strings.feature2Title, description: strings.feature2Description, imgSrc: '/img/Landing page assets/Coins icon.png' },      // Right-top
            { title: strings.feature3Title, description: strings.feature3Description, imgSrc: '/img/Landing page assets/Ai icon.png' },     // Right-bottom
            { title: strings.feature4Title, description: strings.feature4Description, imgSrc: '/img/Landing page assets/Mobile phone icon.png' },      // Bottom
            { title: strings.feature5Title, description: strings.feature5Description, imgSrc: '/img/Landing page assets/Comprehensive icon.png' },     // Left-bottom
            { title: strings.feature6Title, description: strings.feature6Description, imgSrc: '/img/Landing page assets/Access dashboard icon.png' }      // Left-top
        ];



        return (
            <section id="features" className="feature-section-wrapper" style={{ backgroundColor: '#F3F9F9', width: '100%' }}>
                {/* Section Heading */}
                <div className="section-heading">
                <h2 className='head-text'>{strings.featureHear}</h2>
<p className='headsubtext'>{strings.featureheadsub}</p>

                </div>

                <div className="circle-container">
                    {features.map((feature, index) => (
                        <div key={index} className={`circle-item position-${index}`}>

                            <img src={feature.imgSrc} alt={feature.title} />
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>

                <style jsx>{`

                .head-text {
  text-align: center;
  margin-top: 0px; /* You can adjust this as needed */
  margin-bottom: 20px;
  font-family: 'Acumin Variable Concept', sans-serif;
  font-weight: 700;
  padding-top:20px;
  font-size: 30px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #009889;
}

.headsubtext {
  text-align: center;
  margin-top: 10px; /* Reduced margin top */
  margin-bottom: 30px;
  font-size: 16px;
  color: #000000;
  font-weight:bold;
}

                    .circle-container {
                        position: relative;
                        width: 500px;
                        height: 500px;
                        margin: 0 auto;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                   
.circle-item {
  position: absolute;
  text-align: center;
  width: 450px; /* slightly increased */
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
}


.circle-item img {
  width: 54px;
  height: 64px;
  margin-bottom: 10px;
}

.circle-item h3 {
  font-size: 13px;
  font-weight: bold;
  margin: 8px 0 4px;
  color: #1D2130;
  white-space: nowrap; /* ✅ Prevents breaking */
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%; /* ensures ellipsis works within container width */
}

.circle-item p {
  font-size: 12px;
  color: #525560;
  line-height: 1.3;
  margin: 0;
}

@media (max-width: 768px) {
  .circle-container {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-items: center;
    align-items: start;
    border-radius: 0;
    padding: 20px;
    position: static; /* Remove relative positioning */
  }

  .circle-item {
    position: static !important; /* ⬅ override absolute positioning */
    width: 100px;
    text-align: center;
  }

  .circle-item img {
    width: 48px;
    height: 48px;
  }

  .circle-item h3 {
    font-size: 12px;
    white-space: normal; /* ⬅ allow wrapping on mobile now */
    overflow: visible;
    text-overflow: unset;
  }

  .circle-item p {
    font-size: 10px;
  }
}

/* Positioning for desktop only */
@media (min-width: 769px) {
  .position-0 { top: 2%; left: 50%; transform: translate(-50%, 0); position: absolute; }
  .position-1 { top: 35%; left: 98%; transform: translate(-50%, -50%); position: absolute; }
  .position-2 { top: 65%; left: 98%; transform: translate(-50%, -50%); position: absolute; }
  .position-3 { top: 95%; left: 50%; transform: translate(-50%, -100%); position: absolute; }
  .position-4 { top: 65%; left: 3%; transform: translate(-50%, -50%); position: absolute; }
  .position-5 { top: 35%; left: 3%; transform: translate(-50%, -50%); position: absolute; }
}



                `}</style>
            </section>
        );
    }
}

export default FeatureSection;




