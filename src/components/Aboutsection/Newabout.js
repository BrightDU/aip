import React, { useState, useEffect } from 'react';
import axios from 'axios';
import strings from '../../translations';

const AboutPage = () => {
  const [data, setData] = useState({ aboutText: '', aboutParagraph: '', aboutTextsub: '' });

  useEffect(() => {
    const lang = localStorage.getItem('locale') || 'en';
    axios
      .get(process.env.REACT_APP_API + '/content/about', {
        headers: { 'Accept-Language': lang },
      })
      .then((response) => {
        setData({
          aboutText: response.data.aboutText || strings.aboutText,
          aboutTextsub: response.data.aboutTextsub || strings.aboutTextsub,
          aboutParagraph: response.data.aboutParagraph || strings.aboutParagraph,
        });
      })
      .catch((err) => {
        console.error('Error fetching about page content:', err);
        setData({
          aboutText: strings.aboutText,
          aboutTextsub: strings.aboutTextsub,
          aboutParagraph: strings.aboutParagraph,
        });
      });
  }, []);

  const lang = localStorage.getItem('locale') || 'en';

  return (
    <section
      id="about"
      className="section about-area"
      style={{ padding: '50px 10%', marginBottom: '100px', direction: lang === 'ar' ? 'rtl' : 'ltr' }}
    >
      <div className="container">
        <div className="row" style={{ flexDirection: lang === 'ar' ? 'row-reverse' : 'row' }}>
          {/* Video Section */}
          <div className="col-md-6 d-flex justify-content-center align-items-center position-relative left-section">
            <div className="video-card">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/exampleVideoId"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <img
              src="/img/landing page assets/yellowandgreen.png"
              alt="Icon"
              className="video-icon"
              style={{ marginTop: '-80px', height: '120px', width: '80px' }}
            />
          </div>

          {/* Text Section */}
          <div className="col-md-6 text-section">
            <h1 className="about-title float-from-bottom">{data.aboutText}</h1>
            <h3 className="about-title2 float-from-bottom">{data.aboutTextsub}</h3>
            <p className="about-paragraph float-from-bottom">{data.aboutParagraph}</p>
            <button className="start-trial-button float-from-bottom">{strings.Starttrial}</button>
          </div>
        </div>

        <div className="center-image-container mt-5 d-flex justify-content-center">
          <img
            src="/img/landing page assets/coinimage.png"
            alt="Centered Coin"
            className="center-image"
          />
        </div>
      </div>

      <style jsx>{`
        .video-card {
          width: 578px;
          height: 374px;
          background-color: #4aa39c;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
          border-radius: 10px;
          overflow: hidden;
        }

        .left-section {
          margin-left: -5px;
        }

        .video-icon {
          position: absolute;
          top: 10px;
          right: -30px;
          width: 60px;
          height: 60px;
        }

        .about-area {
          margin-top: 100px;
        }

        .about-title {
          font-family: Roboto, sans-serif;
          font-weight: bold;
          color: #4aa39c;
          font-size: 34px;
          line-height: 26px;
          margin-bottom: 20px;
          margin-top: 20px;
        }

        .about-title2 {
          font-family: Roboto, sans-serif;
          font-weight: bold;
          color: #1d2130;
          font-size: 20px;
          line-height: 26px;
          margin-bottom: 20px;
        }

        .about-paragraph {
          font-family: Roboto, sans-serif;
          color: #525560;
          font-size: 16px;
          line-height: 24px;
        }

        .start-trial-button {
          width: 157px;
          height: 48px;
          background: linear-gradient(245.49deg, #00998a 15.66%, #71c6be 84.34%);
          color: #fbfdfd;
          font-family: 'Acumin Variable Concept', sans-serif;
          font-weight: 700;
          font-size: 15px;
          line-height: 100%;
          border: none;
          margin-top: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 20px;
          transition: transform 0.2s ease-in-out;
        }

        .start-trial-button:hover {
          transform: scale(1.05);
        }

        .center-image-container {
          width: 100%;
          margin-top: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .center-image {
          max-width: 300px;
          width: 100%;
          height: auto;
          margin-top: 80px;
        }

        @media (max-width: 768px) {
          .video-card {
            width: 100%;
            height: auto;
          }

          .about-title {
            text-align: center;
          }
        }

        /* ===== Float from Bottom Animation ===== */
        .float-from-bottom {
          animation: floatFromBottom 1s ease-out forwards;
          opacity: 0;
          transform: translateY(50px);
        }

        @keyframes floatFromBottom {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutPage;
