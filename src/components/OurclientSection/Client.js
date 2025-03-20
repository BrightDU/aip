import React, { Component } from 'react';
import axios from 'axios';
import strings from '../../translations';

let API = process.env.REACT_APP_API;

const dummyData = [
  { id: "1", image: "/img/Landing page assets/Ejada logo.png" },
  { id: "2", image: "/img/Landing page assets/Safran logo.png" },
  { id: "3", image: "/img/Landing page assets/Jomel logo.png" },
  { id: "4", image: "/img/Landing page assets/Bacs logo.png" },
  { id: "5", image: "/img/Landing page assets/Al rashed food.png" },
  { id: "6", image: "/img/Landing page assets/Creative feature logo.png" },
  { id: "7", image: "/img/Landing page assets/Engie logo.png" },
];

class OurclientSection extends Component {
  state = {
    companiesLogos: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get(`${API}/download/vendors/logos`, {
        headers: { "Accept-Language": 'en' }
      })
      .then(({ data }) => {
        if (Array.isArray(data) && data.length > 0) {
          this.setState({ companiesLogos: data, loading: false });
        } else {
          this.setState({ companiesLogos: dummyData, loading: false });
        }
      })
      .catch(() => {
        this.setState({ companiesLogos: dummyData, loading: false });
      });
  }

  render() {
    const { companiesLogos, loading } = this.state;

    return (
      <section className="branding-area ptb_100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="section-heading text-center">
                <h2>{strings.clients}</h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-4">
            {loading ? (
              <div className="text-center py-4">Loading client logos...</div>
            ) : (
              <div className="client-logo-wrapper">
                {/* Desktop View: Two Rows */}
                <div className="desktop-view">
                  {/* First Row (5 logos) */}
                  <div className="logo-row">
                    {companiesLogos.slice(0, 5).map((item, idx) => (
                      <div key={`client_first_${idx}`} className="logo-item">
                        <img src={item.image || item} alt={`client-logo-${idx}`} />
                      </div>
                    ))}
                  </div>
                  {/* Second Row (2 logos) */}
                  <div className="logo-row">
                    {companiesLogos.slice(5).map((item, idx) => (
                      <div key={`client_second_${idx}`} className="logo-item">
                        <img src={item.image || item} alt={`client-logo-${idx + 5}`} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile View: Horizontal Scroll */}
                <div className="mobile-slider">
                  {companiesLogos.map((item, idx) => (
                    <div key={`mobile_client_${idx}`} className="slider-item">
                      <img src={item.image || item} alt={`client-logo-mobile-${idx}`} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* JSX STYLES */}
        <style jsx>{`
          .client-logo-wrapper {
            width: 100%;
            max-width: 1000px;
            margin: auto;
          }

          .desktop-view {
            display: block;
          }

          .logo-row {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 20px;
          }

          .logo-item {
            width: 20%;
            text-align: center;
            padding: 10px;
          }

          .logo-item img {
            width: 170px;
            height: 126px;
            object-fit: contain;
            opacity: 0.9;
          }

          .mobile-slider {
            display: none;
          }

          /* MEDIA QUERY: Mobile View */
          @media screen and (max-width: 768px) {
            .desktop-view {
              display: none;
            }

            .mobile-slider {
              display: flex;
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              -webkit-overflow-scrolling: touch;
              gap: 10px;
              padding: 10px 0;
            }

            .slider-item {
              flex: 0 0 auto;
              scroll-snap-align: center;
              text-align: center;
            }

            .slider-item img {
              width: 170px;
              height: 126px;
              object-fit: contain;
              opacity: 0.9;
            }
          }
        `}</style>
      </section>
    );
  }
}

export default OurclientSection;
