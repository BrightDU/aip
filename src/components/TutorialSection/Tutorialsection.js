import React, { useState, useEffect } from 'react';
import axios from 'axios';
import strings from '../../translations'; // Assuming translations include tutorialText and tutorialParagraph

const Tutorialsection = () => {
  const [data, setData] = useState({ tutorialText: '', tutorialParagraph: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lang = localStorage.getItem('locale') || 'en';
        const response = await axios.get(`${process.env.REACT_APP_API}/content/tutorial`, {
          headers: { 'Accept-Language': lang },
        });
        setData({
          tutorialText: response.data.tutorialText || strings.tutorialText,
          tutorialParagraph: response.data.tutorialParagraph || strings.tutorialParagraph,
        });
      } catch (error) {
        console.error('Error fetching tutorial content:', error);
        setData({
          tutorialText: strings.tutorialText,
          tutorialParagraph: strings.tutorialParagraph,
        });
      }
    };
    fetchData();
  }, []);

  return (
    <section id="tutorial" className="section tutorial-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h1 className="tutorial-title">{data.tutorialText}</h1>
            <p className="tutorial-paragraph">{data.tutorialParagraph}</p>
          </div>
        </div>

        {/* Tutorial Video Cards */}
        <div className="grid-container" >
          {[
            { id: 'YOUR_VIDEO_ID_1', text: 'How to Create a Product' },
            { id: 'YOUR_VIDEO_ID_2', text: 'How to Create a Customer' },
            { id: 'YOUR_VIDEO_ID_3', text: 'How to Create a Currency Rate' },
          ].map((item, index) => (
            <div key={index} className="card">
              <iframe
                className="video"
                src={`https://www.youtube.com/embed/${item.id}`}
                title={item.text}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .tutorial-area {
          padding: 50px 10%;
          margin-top: 100px;
          margin-bottom: 100px; /* Added bottom margin to prevent footer overlap */
        }

        .tutorial-title {
          font-family: Roboto, sans-serif;
          font-weight: bold;
          color: #1d2130;
          font-size: 24px;
          line-height: 26px;
          margin-bottom: 20px;
        }

        .tutorial-paragraph {
          font-family: Roboto, sans-serif;
          color: #ffffff;
          font-size: 16px;
          line-height: 24px;
          max-width: 650px;
          margin: 0 auto 40px;
          text-align: center;
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          justify-items: center;
        }

        .card {
          background-color: #263543;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease-in-out;
          width: 100%;
          max-width: 350px;
          text-align: center;
        }

        .card:hover {
          transform: scale(1.05);
        }

        .video {
          width: 100%;
          height: 200px;
          border: none;
        }

        .card-text {
          font-family: Roboto, sans-serif;
          font-size: 16px;
          font-weight: bold;
          color: #ffffff;
          padding: 10px;
        }

        @media (max-width: 768px) {
          .grid-container {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 576px) {
          .grid-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Tutorialsection;




