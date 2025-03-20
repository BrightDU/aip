import React, { Component, createRef } from 'react';
import strings from '../../translations';

class FeatureSection extends Component {
  constructor(props) {
    super(props);
    this.sectionRef = createRef();
    this.state = {
      isVisible: false,
    };
  }

  componentDidMount() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.setState({ isVisible: true });
        }
      },
      {
        threshold: 0.3, // 30% visible
      }
    );

    if (this.sectionRef.current) {
      observer.observe(this.sectionRef.current);
    }
  }

  render() {
    const { isVisible } = this.state;

    const services = [
      { icon: '/img/Landing page assets/CloudCheck.png', title: strings.service1Title },
      { icon: '/img/Landing page assets/Devices.png', title: strings.service2Title },
      { icon: '/img/Landing page assets/Gauge.png', title: strings.service3Title },
      { icon: '/img/Landing page assets/Network.png', title: strings.service4Title },
      { icon: '/img/Landing page assets/Files.png', title: strings.service5Title },
    ];

    return (
      <section
        ref={this.sectionRef}
        id="features"
        className={`section features-area style-two overflow-hidden ptb_100 feature-fade-section ${
          isVisible ? 'fade-in-from-top' : ''
        }`}
        style={{ backgroundColor: 'white' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <div className="section-heading">
                <h2 className="head-text">{strings.ufs}</h2>
                <h3 className="head-main-text">{strings.services}</h3>
                <p className="headsubtext">{strings.servicesP}</p>
              </div>
            </div>
          </div>

          <div className="icon-wrapper">
            {services.map((service, index) => (
              <div key={index} className="icon-box">
                <img src={service.icon} alt="Service Icon" />
                <h4>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Animation CSS */}
        <style>{`
          .feature-fade-section {
            opacity: 0;
            transform: translateY(-50px);
            transition: all 1s ease-in-out;
          }

          .feature-fade-section.fade-in-from-top {
            opacity: 1;
            transform: translateY(0);
          }

          .head-text {
            font-weight: 700;
            font-size: 18px;
            text-align: center;
            margin-bottom: 10px;
          }

          .head-main-text {
            font-weight: 800;
            font-size: 32px;
            text-align: center;
            margin-bottom: 10px;
          }

          .headsubtext {
            font-weight: 300;
            font-size: 20px;
            text-align: center;
            margin-bottom: 10px;
            color: #333;
          }

          .icon-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: nowrap;
            gap: 30px;
            margin-top: 30px;
          }

          .icon-box {
            flex: 1;
            text-align: center;
            min-width: 0;
            margin-top: -20px;
          }

          .icon-box img {
            width: 52px;
            height: 38px;
            margin-bottom: 10px;
          }

          .icon-box h4 {
            font-size: 16px;
            font-weight: 600;
            word-wrap: break-word;
            color: #1D2130;
            margin-top: 5px;
          }

          @media (max-width: 768px) {
            .icon-wrapper {
              flex-wrap: wrap !important;
              justify-content: center !important;
              gap: 25px !important;
            }

            .icon-box {
              flex: 0 0 45% !important;
              max-width: 45%;
              margin-bottom: 20px !important;
            }

            .icon-box img {
              width: 40px !important;
              height: 48px !important;
            }

            .icon-box h4 {
              font-size: 14px !important;
            }

            .head-text {
              font-size: 14px !important;
            }

            .head-main-text {
              font-size: 24px !important;
            }

            .headsubtext {
              font-size: 16px !important;
            }
          }

          @media (max-width: 480px) {
            .icon-wrapper {
              flex-direction: column !important;
              align-items: center !important;
              gap: 20px !important;
            }

            .icon-box {
              flex: 0 0 100% !important;
              max-width: 100% !important;
            }

            .icon-box img {
              width: 50px !important;
              height: 50px !important;
            }

            .icon-box h4 {
              font-size: 15px !important;
            }

            .head-text {
              font-size: 13px !important;
            }

            .head-main-text {
              font-size: 20px !important;
            }

            .headsubtext {
              font-size: 15px !important;
            }
          }
        `}</style>
      </section>
    );
  }
}

export default FeatureSection;
