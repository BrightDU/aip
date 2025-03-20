// src/PricingSection/PricingAPI.js
import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server/themeOnePricingSection";

class PricingAPI extends Component {
  state = {
    data: {},
    pricingData: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get(BASE_URL)
      .then((res) => {
        this.setState({
          data: res.data,
          pricingData: res.data.pricingData,
          loading: false
        });
      })
      .catch((err) => {
        console.error("Error fetching pricing data:", err);
        this.setState({ loading: false });
      });
  }

  render() {
    const { data, pricingData, loading } = this.state;

    return (
      <section id="pricing" className="section price-plan-area bg-gray overflow-hidden ptb_100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7">
              <div className="section-heading text-center">
                <h2>{data.heading}</h2>
                <p className="d-none d-sm-block mt-4">{data.headingText}</p>
                <p className="d-block d-sm-none mt-4">{data.headingTexttwo}</p>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center mt-4">
              <p>Loading pricing plans...</p>
            </div>
          ) : (
            <div className="row justify-content-center">
              <div className="col-12 col-sm-10 col-lg-8">
                <div className="row price-plan-wrapper">
                  {pricingData.map((item, idx) => (
                    <div key={`p_${idx}`} className="col-12 col-md-6 mt-4">
                      <div className="single-price-plan text-center p-5">
                        <div className="plan-thumb">
                          <img className="avatar-lg" src={item.planImage} alt={item.planTitle} />
                        </div>
                        <div className="plan-title my-2 my-sm-3">
                          <h3 className="text-uppercase">{item.planTitle}</h3>
                        </div>
                        <div className="plan-price pb-2 pb-sm-3">
                          <h1 className="color-primary">
                            <small className="fw-7">{item.priceSub}</small>{item.planPrice}
                          </h1>
                        </div>
                        <div className="plan-description">
                          <ul className="plan-features">
                            <li className="border-top py-3">{item.li_1}</li>
                            <li className="border-top py-3">{item.li_2}</li>
                            <li className="border-top py-3">{item.li_3}</li>
                            <li className="border-top border-bottom py-3">{item.li_4}</li>
                          </ul>
                        </div>
                        <div className="plan-button">
                          <a href="/#" className="btn mt-4">{item.planBtn}</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default PricingAPI;
