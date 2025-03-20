import React, { Component } from "react";
import axios from "axios";
import strings from "../../translations";

const BASE_URL = "https://my-json-server.typicode.com/themeland/sapp/themeOneFeatureSection";

class GoPay extends Component {
  state = {
    data: {},
    featureData: [],
    featureData_1: [],
  };

  componentDidMount() {
    // Fetch data
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        this.setState({
          data: res.data,
          featureData: res.data.featureData,
          featureData_1: res.data.featureData_1,
        });
      })
      .catch((err) => console.log(err));

    // Setup Intersection Observer for scroll-triggered animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("float-up-visible");
          } else {
            entry.target.classList.remove("float-up-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with class 'animated-float-up'
    const animatedElements = document.querySelectorAll(".animated-float-up");
    animatedElements.forEach((el) => observer.observe(el));
  }

  render() {
    return (
      <section className="features">
        <br />
        <div className="container">
          {/* Section Heading */}
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="section-heading-custom animated-float-up">
                <h2>{strings.goPayDescription}</h2>
              </div>
            </div>
          </div>

          {/* Two Cards */}
          <div className="row mt-4">
            <div className="col-md-6 mb-4 d-flex justify-content-center">
              <div className="custom-card animated-float-up">
                <h3 className="card-title-custom">{strings.goPayLine1Header}</h3>
                <p>{strings.goPayLine1}</p>
              </div>
            </div>
            <div className="col-md-6 mb-4 d-flex justify-content-center">
              <div className="custom-card animated-float-up">
                <h3 className="card-title-custom">{strings.goPayLine2Header}</h3>
                <p>{strings.goPayLine2}</p>
              </div>
            </div>
          </div>

          {/* Logo Image */}
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 text-center">
              <div className="features-thumb animated-float-up">
                <img
                  id="clickableImage"
                  src="./img/gopay_full.png"
                  alt="GoPay Logo"
                  className="logo-image"
                />
              </div>
              <br />
            </div>
          </div>

          {/* Bottom Text */}
          <div className="row mt-4 justify-content-center">
            <div className="col-12 col-md-10">
              <div className="additional-section text-center animated-float-up">
                <h3>{strings.goPayLine3Header}</h3>
                <p>{strings.goPayLine3}</p>
              </div>
            </div>
          </div>
        </div>

        <br />
        <style jsx>{`
          .features {
            margin-bottom: 180px;
          }

          .animated-float-up {
            opacity: 0;
            transform: translateY(50px);
            transition: all 1s ease-out;
          }

          .float-up-visible {
            opacity: 1;
            transform: translateY(0);
          }

          .section-heading-custom {
            text-align: center;
          }

          .section-heading-custom h2 {
            font-family: 'Acumin Variable Concept', sans-serif;
            font-weight: 700;
            font-size: 35px;
            line-height: 100%;
            color: #000000;
            margin: 0 auto 60px;
            padding: 10px 20px;
            white-space: nowrap;
          }

          .custom-card {
            width: 527px;
            height: 271px;
            background: #ffffff;
            border: 1px solid #71c6be;
            box-shadow: 0px 4px 4px 0px #00000040;
            padding: 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .card-title-custom {
            font-family: 'Acumin Variable Concept', sans-serif;
            font-weight: 700;
            font-size: 20px;
            color: #000000;
            margin-bottom: 10px;
            text-align: center;
          }

          .custom-card p {
            color: #000000;
            font-size: 16px;
            line-height: 24px;
            font-weight: 200;
            text-align: center;
          }

          .logo-image {
            width: 200px;
            height: auto;
            margin-top: 10px;
            object-fit: contain;
          }

          .additional-section h3 {
            color: #000000;
            font-weight: bold;
            font-size: 24px;
          }

          .additional-section p {
            color: #000000;
            margin-top: 10px;
          }

          @media (max-width: 992px) {
            .custom-card {
              width: 90%;
              height: auto;
              padding: 20px;
            }

            .section-heading-custom h2 {
              font-size: 28px;
              white-space: normal;
            }

            .card-title-custom {
              font-size: 18px;
            }

            .custom-card p {
              font-size: 14px;
              line-height: 22px;
            }

            .logo-image {
              width: 180px;
            }

            .additional-section h3 {
              font-size: 20px;
            }

            .additional-section p {
              font-size: 14px;
            }
          }

          @media (max-width: 576px) {
            .custom-card {
              width: 100%;
              padding: 15px;
            }

            .section-heading-custom h2 {
              font-size: 24px;
            }

            .card-title-custom {
              font-size: 16px;
            }

            .custom-card p {
              font-size: 13px;
            }

            .logo-image {
              width: 150px;
            }

            .additional-section h3 {
              font-size: 18px;
            }

            .additional-section p {
              font-size: 13px;
            }
          }
        `}</style>
      </section>
    );
  }
}

export default GoPay;
