import React, { useState, useEffect } from 'react';
import axios from 'axios';
import strings from '../../translations'; // Assuming translations include aboutText and aboutParagraph

const AboutPage = () => {
  const [data, setData] = useState({ aboutText: '', aboutParagraph: '' });

  useEffect(() => {
    // Fetching data from the API or using fallback from strings
    const lang = localStorage.getItem('locale') || 'en';
    axios
      .get(process.env.REACT_APP_API + '/content/about', {
        headers: {
          'Accept-Language': lang,
        },
      })
      .then((response) => {
        setData({
          aboutText: response.data.aboutText || strings.aboutText,
          aboutParagraph: response.data.aboutParagraph || strings.aboutParagraph,
        });
      })
      .catch((err) => {
        console.error('Error fetching about page content:', err);
        setData({
          aboutText: strings.aboutText,
          aboutParagraph: strings.aboutParagraph,
        });
      });
  }, []);

  return (
    <section id="about" className="section about-area" style={{ padding: '50px 10%', marginBottom:'100px' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            {/* Title */}
            <h1 className="about-title">{data.aboutText}</h1>
            {/* Paragraph */}
            <p className="about-paragraph">{data.aboutParagraph}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        /* Default Styles for Large Screens */
        .about-title {
          font-family: Roboto, sans-serif;
          font-weight: bold;
          color: #1d2130;
          font-size: 24px;
          line-height: 26px;
          margin: 0 auto;
        }

        .about-paragraph {
          font-family: Roboto, sans-serif;
          color: #525560;
          font-size: 16px;
          line-height: 24px;
          margin: 20px auto;
          text-align: left;
          max-width: 650px;
        }

        /* Media Query for Tablets */
        @media (max-width: 768px) {
          .about-title {
            font-size: 20px;
            line-height: 22px;
          }

          .about-paragraph {
            font-size: 14px;
            line-height: 20px;
            width: 90%;
          }
        }

        /* Media Query for Mobile Devices */
        @media (max-width: 576px) {
          .about-title {
            font-size: 18px;
            line-height: 20px;
          }

          .about-paragraph {
            font-size: 12px;
            line-height: 18px;
            width: 95%;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutPage;

