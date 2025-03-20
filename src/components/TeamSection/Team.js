import React, { Component } from 'react';
import axios from 'axios';
import strings from '../../translations';

const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server/themeOneTeamSection";
let API = process.env.REACT_APP_API;

const logos = [
    'https://cdn-icons-png.flaticon.com/512/882/882701.png',
    'https://res.cloudinary.com/apideck/image/upload/v1562804220/catalog/oracle-marketing-cloud/icon128x128.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwcBLvNzyg2izRjy1Yd8Y2fnZ1kT50sJ2W9m8o3i537SYB2qy8TqI4EQTrDFiQwXr0-Q&usqp=CAU',
    'http://www.staffingrus.net/images/oracle-dabase-img.jpg',
    'https://pbs.twimg.com/profile_images/1172400575725441025/JtZUwd4M_400x400.jpg',
    'https://miro.medium.com/max/474/1*WdPbozgRoImv9U5BV8Fl2Q.jpeg',
    'https://dropship-empire.com/wp-content/uploads/2021/02/shopify-1.jpg',
];

class Team extends Component {
    state = {
        data: {},
        teamData: [],
        teamIcons: [],
        companiesLogos: [],
    };

    componentDidMount() {
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    teamData: res.data.teamData,
                    teamIcons: res.data.teamIcons,
                });
            })
            .catch(err => console.log(err));

        axios.get(API + "/download/vendors/logos", {
            headers: { "Accept-Language": 'en' },
        }).then(({ data }) => {
            this.setState({ companiesLogos: data });
        }).catch(() => {
            this.setState({ companiesLogos: [] });
        });
    }

    render() {
        return (
            <section className="section team-area team-style-two overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-12">
                            <div className="section-heading text-center">
                                <h2 className="text-capitalize" style={{ fontSize: '40px', color: '#000000' }}>
                                    {strings.integrationSubheading}
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Desktop View (5 on top, 2 on bottom) */}
                    <div className="logo-wrapper desktop-view">
                        <div className="logo-row">
                            {logos.slice(0, 5).map((item, idx) => (
                                <div key={idx} className="logo-item">
                                    <img src={item} alt={`logo-${idx}`} />
                                </div>
                            ))}
                        </div>
                        <div className="logo-row">
                            {logos.slice(5).map((item, idx) => (
                                <div key={idx} className="logo-item">
                                    <img src={item} alt={`logo-${idx + 5}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile View (horizontal scroll) */}
                    <div className="mobile-slider">
                        {logos.map((item, idx) => (
                            <div key={idx} className="slider-item">
                                <img src={item} alt={`logo-mobile-${idx}`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Styling JSX Block */}
                <style jsx>{`
                    .logo-wrapper {
                        width: 100%;
                        max-width: 1000px;
                        margin: auto;
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
                        width: 100px;
                        height: 100px;
                        object-fit: contain;
                        border-radius: 50%;
                        opacity: 0.9;
                    }

                    .mobile-slider {
                        display: none;
                    }

                    @media screen and (max-width: 768px) {
                        .desktop-view {
                            display: none;
                        }

                        .mobile-slider {
                            display: flex;
                            overflow-x: auto;
                            scroll-snap-type: x mandatory;
                            -webkit-overflow-scrolling: touch;
                            gap: 15px;
                            padding: 10px 0;
                        }

                        .slider-item {
                            flex: 0 0 auto;
                            scroll-snap-align: center;
                            text-align: center;
                        }

                        .slider-item img {
                            width: 100px;
                            height: 100px;
                            object-fit: contain;
                            border-radius: 50%;
                            opacity: 0.9;
                        }
                    }
                `}</style>
            </section>
        );
    }
}

export default Team;
