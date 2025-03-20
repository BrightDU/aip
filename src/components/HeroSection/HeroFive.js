import React, { Component, createRef } from 'react';
import Modal from './Getstartedmodal';
import strings from '../../translations';

class HeroSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            isInView: false,
        };
        this.sectionRef = createRef();
    }

    openModal = () => {
        this.setState({ isModalOpen: true });
    };

    closeModal = () => {
        this.setState({ isModalOpen: false });
    };

    componentDidMount() {
        this.createObserver();
    }

    createObserver = () => {
        const options = {
            threshold: 0.3,
        };

        this.observer = new IntersectionObserver(this.handleIntersect, options);
        if (this.sectionRef.current) {
            this.observer.observe(this.sectionRef.current);
        }
    };

    handleIntersect = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                this.setState({ isInView: true });
            } else {
                this.setState({ isInView: false });
            }
        });
    };

    render() {
        const { isModalOpen, isInView } = this.state;

        return (
            <section
                id="home"
                className="section welcome-area bg-overlay d-flex align-items-center"
                style={{ padding: '0 10%', height: '600px' }}
                ref={this.sectionRef}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12 col-lg-7 mb-5 text-section">
                            <div className={`welcome-intro ${isInView ? 'animate-float' : ''}`}>
                                <h1 className="text-white heroHead">{strings.heroHead}</h1>
                                <p className="text-white my-4 heroDescription">{strings.heroDescription}</p>
                                <div className="button-container">
                                    <button className="btn-second">{strings.Starttrial}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal isOpen={isModalOpen} onClose={this.closeModal} />

                <style jsx>{`
                    .text-section {
                        margin-left: -550px;
                    }

                    @media (max-width: 768px) {
                        .text-section {
                            margin-left: -20px;
                        }
                    }

                    .heroHead {
                        font-size: clamp(28px, 5vw, 50px);
                        font-weight: bold;
                        white-space: nowrap;
                        text-align: left;
                    }

                    .heroDescription {
                        line-height: 1.6;
                        font-size: 18px;
                        font-weight: bold;
                        text-align: left;
                    }

                    .button-container {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                    }

                    .btn-second {
                        width: 154px;
                        height: 50px;
                        border: none;
                        color: white;
                        background: linear-gradient(to right, #71C6BE, #00998A);
                        padding: 10px 20px;
                        font-size: 15px;
                        font-weight: bold;
                        border-radius: 5px;
                        cursor: pointer;
                    }

                    @keyframes floatUp {
                        0% {
                            transform: translateY(50px);
                            opacity: 0;
                        }
                        100% {
                            transform: translateY(0);
                            opacity: 1;
                        }
                    }

                    .animate-float {
                        animation: floatUp 1.2s ease-out forwards;
                    }
                `}</style>
            </section>
        );
    }
}

export default HeroSection;
