import React, { useState, useEffect } from 'react';
import axios from 'axios';
import strings from '../../translations';

const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server/themeOneFaqSection";

let array = [['faqLineH1', 'faqLineC1'], ['faqLineH2', 'faqLineC2'], ['faqLineH3', 'faqLineC3'], ['faqLineH4', 'faqLineC4'], ['faqLineH5', 'faqLineC5'], ['faqLineH6', 'faqLineC6'], ['faqLineH7', 'faqLineC7']];
let array2 = [['faqLineH8', 'faqLineC8'], ['faqLineH9', 'faqLineC9'], ['faqLineH10', 'faqLineC10'], ['faqLineH11', 'faqLineC11'], ['faqLineH12', 'faqLineC12'], ['faqLineH13', 'faqLineC13'], ['faqLineH14', 'faqLineC14'], ['faqLineH15', 'faqLineC15']];

function FaqSection() {
    const [data, setData] = useState({});
    const [faqData, setFaqData] = useState([]);
    const [faqDataTwo, setFaqDataTwo] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null); // To track which item is open

    useEffect(() => {
        axios.get(`${BASE_URL}`)
            .then(res => {
                setData(res.data);
                setFaqData(res.data.faqData);
                setFaqDataTwo(res.data.faqDataTwo);
            })
            .catch(err => console.log(err));
    }, []);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle active index
    };

    return (
        <section className="section faq-area style-two ptb_100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-7">
                        {/* Section Heading */}
                       
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        {/* FAQ Content */}
                        <div className="faq-content">
                            <div className="accordion" id="sApp-accordion">
                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-6">
                                        {/* Single Card */}
                                        {array.map((item, idx) => {
                                            return (
                                                <div key={`fo_${idx}`} className="card border-0 mb-3">
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button
                                                                className="btn px-0 py-2 w-100 text-left"
                                                                type="button"
                                                                style={{
                                                                    textAlign: strings.direction,
                                                                    width: '100%',
                                                                    height: '90px',
                                                                    borderWidth: '1px',
                                                                    background: '#FFFFFF',
                                                                    border: '1px solid #000000',
                                                                    boxShadow: '0px 4px 4px 0px #00000040',
                                                                    borderRadius: '5px',
                                                                    padding: '15px 10px',
                                                                    cursor: 'pointer',
                                                                    display: 'flex',
                                                                    justifyContent: 'space-between',
                                                                    alignItems: 'center',
                                                                    marginLeft: '5px', // Reduced margin left for title
                                                                }}
                                                                onClick={() => toggleAccordion(idx)}
                                                            >
                                                                <span style={{ fontSize: '15px', marginLeft: '5px' }}>{strings[item[0]]}</span> {/* Title with left margin */}
                                                                <i
                                                                    className={`fas fa-chevron-${activeIndex === idx ? 'up' : 'down'}`}
                                                                    style={{ marginLeft: '10px', fontSize: '18px', marginRight: '10px' }} // Added margin-right to the icon
                                                                ></i>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body (collapsed content) */}
                                                    {activeIndex === idx && (
                                                        <div className="card-body px-0 py-3" style={{ textAlign: strings.direction }}>
                                                            {strings[item[1]]}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="col-12 col-md-6">
                                        {/* Single Card */}
                                        {array2.map((item, idx) => {
                                            return (
                                                <div key={`ft_${idx}`} className="card border-0 mb-3">
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button
                                                                className="btn px-0 py-2 w-100 text-left"
                                                                type="button"
                                                                style={{
                                                                    textAlign: strings.direction,
                                                                    width: '100%',
                                                                    height: '90px',
                                                                    borderWidth: '1px',
                                                                    background: '#FFFFFF',
                                                                    border: '1px solid #000000',
                                                                    boxShadow: '0px 4px 4px 0px #00000040',
                                                                    borderRadius: '5px',
                                                                    padding: '15px 10px',
                                                                    cursor: 'pointer',
                                                                    display: 'flex',
                                                                    justifyContent: 'space-between',
                                                                    alignItems: 'center',
                                                                    marginLeft: '5px', // Reduced margin left for title
                                                                }}
                                                                onClick={() => toggleAccordion(idx + array.length)}
                                                            >
                                                                <span style={{ fontSize: '15px', marginLeft: '5px' }}>{strings[item[0]]}</span> {/* Title with left margin */}
                                                                <i
                                                                    className={`fas fa-chevron-${activeIndex === idx + array.length ? 'up' : 'down'}`}
                                                                    style={{ marginLeft: '10px', fontSize: '18px', marginRight: '10px' }} // Added margin-right to the icon
                                                                ></i>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body (collapsed content) */}
                                                    {activeIndex === idx + array.length && (
                                                        <div className="card-body px-0 py-3" style={{ textAlign: strings.direction }}>
                                                            {strings[item[1]]}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FaqSection;
