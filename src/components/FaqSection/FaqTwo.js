import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server/themeOneFaqSection";

class FaqSection extends Component {
    state = {
        data: {},
        faqDataThree: []
    }

    componentDidMount() {
        // Dynamically add Font Awesome CDN
        const fontAwesomeLink = document.createElement('link');
        fontAwesomeLink.rel = 'stylesheet';
        fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
        document.head.appendChild(fontAwesomeLink);

        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    faqDataThree: res.data.faqDataThree
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <section className="section faq-area ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-7">
                            {/* Section Heading */}
                            <div className="section-heading text-center">
                                <h2 className="text-capitalize">{this.state.data.headingTwo}</h2>
                                <p className="d-none d-sm-block mt-4">{this.state.data.headingText}</p>
                                <p className="d-block d-sm-none mt-4">{this.state.data.headingTexttwo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            {/* FAQ Content */}
                            <div className="faq-content">
                                {/* Accordion */}
                                <div className="accordion" id="sApp-accordion">
                                    <div className="row justify-content-center">
                                        <div className="col-12 col-md-10 col-lg-8">
                                            {/* Single Accordion Item */}
                                            {this.state.faqDataThree.map((item, idx) => {
                                                return (
                                                    <div
                                                        key={`ft_${idx}`}
                                                        className="card border-top-0 border-left-0 border-right-0 border-bottom"
                                                        style={{ border: '1px solid #ddd', marginBottom: '10px' }}
                                                    >
                                                        {/* Card Header */}
                                                        <div
                                                            className="card-header bg-inherit border-0 p-0"
                                                            style={{
                                                                borderBottom: '1px solid #ddd',
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                alignItems: 'center',
                                                                padding: '10px 15px',
                                                                cursor: 'pointer'
                                                            }}
                                                        >
                                                            <h2 className="mb-0" style={{ marginRight: '20px' }}>
                                                                {item.title}
                                                            </h2>
                                                            <i
                                                                className="fas fa-chevron-down"
                                                                style={{
                                                                    fontSize: '18px',
                                                                    transition: 'transform 0.3s ease',
                                                                }}
                                                                data-toggle="collapse"
                                                                data-target={`#collapse_${item.id}`}
                                                                aria-expanded="false"
                                                                aria-controls={`collapse_${item.id}`}
                                                            />
                                                        </div>
                                                        {/* Card Body */}
                                                        <div
                                                            id={`collapse_${item.id}`}
                                                            className="collapse"
                                                            data-parent="#sApp-accordion"
                                                            style={{ padding: '10px 15px' }}
                                                        >
                                                            <div className="card-body px-0 py-3">
                                                                {item.content}
                                                            </div>
                                                        </div>
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
}

export default FaqSection;
